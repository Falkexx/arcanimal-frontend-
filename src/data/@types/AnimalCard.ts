// Interface do tipo Animal
export interface Animal {
  id: number;
  fotoUrl: string | null;
  cidade: string;
  nomeAbrigo: string | null;
  faixaEtaria: string;
  porte: string;
  sexo: string;
  coresPelo: string[];
  idAbrigo: string | null; // Alterado para permitir null
  numeroAbrigo?: string | null;
  tipo: string;
}


// Propriedades aceitas pelo componente
export interface AnimalCardProps {
  animal: Animal;
}
