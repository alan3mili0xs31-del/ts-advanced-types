import { type Product } from './../../models/inventary/product.js';

let products: Product[] = [];

export const saveProduct = (product: Product): string => {
  products.push(product);
  return product.id;
};

export const findProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const removeProduct = (id: string) => {
  products = products.filter(product => product.id !== id);
};

export const getAllProducts = (): Product[] => {
  return products;
};
