export interface PartnersDetails {
  Instituicao: string;
  Description: string;
  ImgUrl: string;
  width: string | null;
  height: string | null;
  tag: string[];
  LinkUrl: string;
}

export interface PartnersProps {
  tipos: PartnersDetails[];
}
