import { type Product } from '../models/inventary/product.js';
import { type Category } from '../models/inventary/category.js';
import * as productsRepo from '../infrastructure/repositories/productsArrayRepo.js';
import * as categoriesRepo from './../infrastructure/repositories/categoriesArrayRepo.js';

export const createProduct = (
  title: string,
  description: string,
  imageURL: string,
  price: number,
  stock: number,
  categoryId: string | number,
  tags: string[]
): number | string => {
  let categoryFound = categoriesRepo.findCategory(categoryId) as Category;
  const newProduct: Product = {
    title,
    description,
    imageURL,
    price,
    stock,
    category: categoryFound,
    tags,
    createdAt: new Date().toString()
  };
  return productsRepo.saveProduct(newProduct);
};
