import { Product } from './models';

export const imagesProduct = [];

export const product: Product = {
  company: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: {
    value: 250.0,
    sale: 0.5,
  },
  images: [
    {
      src: 'assets/images/image-product-1.jpg',
      thumbnail: 'assets/images/image-product-1-thumbnail.jpg',
    },
    {
      src: 'assets/images/image-product-2.jpg',
      thumbnail: 'assets/images/image-product-2-thumbnail.jpg',
    },
    {
      src: 'assets/images/image-product-3.jpg',
      thumbnail: 'assets/images/image-product-3-thumbnail.jpg',
    },
    {
      src: 'assets/images/image-product-4.jpg',
      thumbnail: 'assets/images/image-product-4-thumbnail.jpg',
    },
  ],
};
