export interface PartnersDetails {
  instituition: string;
  description: string;
  imgUrl: string;
  width: string | null;
  height: string | null;
  tag: string[];
  linkUrl: string;
}

export interface PartnersProps {
  tipos: PartnersDetails[];
}
