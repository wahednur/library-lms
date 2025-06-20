export type IGenre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";
export interface IBook {
  title: string;
  author: string;
  genre: string;
  isbn: IGenre;
  description?: string;
  copies: number;
  available?: boolean;
  publishYear: number;
}
