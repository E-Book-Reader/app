export enum Privacy {
  PRIVATE = "private",
  PUBLIC = "public",
}

export default interface Book {
  id: string;
  name: string;
  pages: number;
  ownerId: string;
  privacy: Privacy;
  description: string;
}
