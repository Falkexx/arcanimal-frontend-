import axios from "axios";

export interface AnimalDto {
  id: number;
  tipo: string;
  nome: string | null;
  situacao: string;
  origem: string;
  sexo: string;
  numeroAbrigo: string | null;
  nomeAbrigo: string | null;
  idAbrigo: string | null;
  porte: string;
  microchip: string;
  castrado: string;
  faixaEtaria: string;
  descricao: string;
  coresPelo: string[];
  fotoUrl: string;
  cidade: string;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface AnimalResponse {
  animals: AnimalDto[];
  pagination: PaginationMeta;
}

const apiUrl = "https://api.arcanimal.com.br/pets/shelter/find";

export const AnimalService = {
  async getAnimals(page: number = 1, pageSize: number = 21, filters: any = {}): Promise<AnimalResponse> {
    console.log("Estou em getAnimals e peguei os filtros", filters);

    // Monta os parâmetros de query
    const params = new URLSearchParams({
      "pagination[page]": page.toString(),
      "pagination[pageSize]": pageSize.toString(),
      "filters[statusAdocao]": "Disponível",
      "filters[situacao]": "Em busca",
      "filters[$not][abrigo][id]": "231", // exclui abrigo com id 231
      populate: "foto,cidade,cor_predominante,abrigo",
    });

    // Adiciona os filtros personalizados
    if (filters.animalType) {
      params.append("filters[tipo][$eq]", filters.animalType === "Cachorro" ? "Cão" : filters.animalType);
    }

    if (filters.sexo) {
      params.append("filters[sexo][$eq]", filters.sexo);
    }

    if (filters.porte) {
      params.append("filters[porte][$eq]", filters.porte);
    }

    if (filters.idade) {
      params.append("filters[faixaEtaria][$eq]", filters.idade);
    }

    if (filters.castrado) {
      params.append("filters[castrado][$eq]", filters.castrado);
    }

    if (filters.abrigo) {
      params.append("filters[abrigo][id]", filters.abrigo);
    }

    try {
      console.log('parametros', params.toString());
      const response = await fetch(`${apiUrl}?${params.toString()}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      const data = await response.json();

      const animals = data.data.map((item: any) => mapAnimalResponse(item));
      const pagination = data.meta.pagination;

      console.log(animals, pagination);
      return { animals, pagination };
    } catch (error) {
      console.error("Error fetching animals:", error);
      throw error;
    }
  },
};


// Função para mapear a resposta para o formato esperado
function mapAnimalResponse(response: any): AnimalDto {
  const attributes = response.attributes;

  const fotoUrl =
    attributes.foto?.data[0]?.attributes?.formats?.small?.url ||
    attributes.foto?.data[0]?.attributes?.formats?.medium?.url ||
    attributes.foto?.data[0]?.attributes?.url ||
    "";
  const cidade = attributes.cidade?.data?.attributes?.nome || "";
  const numeroAbrigo = attributes.abrigo?.data?.attributes?.Telefone || "";
  const nomeAbrigo = attributes.abrigo?.data?.attributes?.Nome || "";
  const idAbrigo = attributes.abrigo?.data?.id;

  return {
    id: response.id,
    tipo: attributes.tipo,
    nome: attributes.nome,
    situacao: attributes.situacao,
    origem: attributes.origem,
    sexo: attributes.sexo,
    numeroAbrigo: numeroAbrigo,
    nomeAbrigo: nomeAbrigo,
    idAbrigo: idAbrigo,
    porte: attributes.porte,
    microchip: attributes.microchip,
    castrado: attributes.castrado,
    faixaEtaria: attributes.faixaEtaria,
    descricao: attributes.iaDescricao,
    coresPelo: attributes.coresPelo || [],
    fotoUrl: fotoUrl,
    cidade: cidade,
  };
}

