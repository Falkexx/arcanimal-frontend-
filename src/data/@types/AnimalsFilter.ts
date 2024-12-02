export interface Abrigo {
  id: number;
  Nome: string | null;
}

export interface AnimalsFilterProps {
  animalTypes: string[];
  sexos: string[];
  portes: string[];
  idades: string[];
  abrigos: Abrigo[];
  cores: string[];
  cidades: string[]
  onFilterChange: (filters: Filters) => void;
}

export interface Filters {
  animalType: string;
  sexo: string;
  porte: string;
  idade: string;
  castrado: string;
  abrigo: string;
  cidade:string,
  cor:string
}

