import { type Product } from './../../models/inventary/product.js';

let products: Product[] = [];
let currentId: number = 0;

export const saveProduct = (product: Product): number | string => {
  product.id = ++currentId;
  products.push(product);
  return product.id;
};

export const findProduct = (id: number | string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const removeProduct = (id: number | string) => {
  products = products.filter(product => product.id !== id);
};

export const getAllProducts = (): Product[] => {
  return products;
};
