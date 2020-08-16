import Database from './data.json';

export type Language = 'EN' | 'ES' | 'DE';

export interface Translation {
  tag: string;
  translations: {
    [key in Language]: string;
  };
}

export interface Photo {
  title: string;
  description: string;
  url: string;
}

export interface Data {
  translations: Translation[];
  slug: string;
  country: string;
  featured: boolean;
  photosCollection: {
    items: Photo[];
  };
  image: Photo;
}

export default Database as Data[];
