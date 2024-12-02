import axios from "axios";

export interface AbrigoDto {
  id: number;
  Nome: string | null;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface AbrigosResponse {
  data: AbrigoDto[];
  pagination: PaginationMeta;
}

export class AbrigoService {
  private apiUrl = "https://cms.petsrs.com.br/api/arcanimal/abrigos";

  async getAbrigos(page: number = 0, pageSize: number = 25): Promise<AbrigoDto[]> {
    try {
      const response = await axios.get<AbrigosResponse>(this.apiUrl, {
        headers: { 'Content-Type': 'application/json' },
      });

      // Mapeando a resposta da API
      const abrigos = response.data.data.map((abrigo:AbrigoDto) => ({
        id: abrigo.id,
        Nome: abrigo.Nome,
      }));

      return abrigos;
    } catch (error) {
      console.error('Erro ao buscar abrigos:', error);
      return [];
    }
  }
}
