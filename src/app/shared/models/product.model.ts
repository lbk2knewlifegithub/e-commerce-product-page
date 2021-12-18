import { Price, ProductImage } from '.';

export interface Product {
  id: number;
  company: string;
  name: string;
  description: string;
  price: Price;
  images: ProductImage[];
}
