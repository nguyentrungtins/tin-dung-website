export interface productInterface {
  products: Product[];
}

export interface Product {
  typename: string;
  actualPrice: number;
  createdAt: Date;
  description: string;
  detail: any[];
  id: string;
  image: string[];
  name: string;
  originalPrice: number;
  publishedAt: Date;
  sale: number;
  slug: string;
  updatedAt: Date;
}
