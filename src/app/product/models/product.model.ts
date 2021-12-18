import { Price, ProductImage } from '.';

export interface Product {
  company: string;
  name: string;
  description: string;
  price: Price;
  images: ProductImage[];
}
