export interface PartnersDetails{
  Instituicao: string;
  Description: string;
  ImgUrl: string;
  width: string | null;
  height: string | null;
  Funcao: string[];
  LinkUrl: string | null;
}

export interface PartnersProps {

  tipos: PartnersDetails[];
}

