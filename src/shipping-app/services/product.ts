import { type Product } from '../models/inventary/product.js';
import { type Category } from '../models/inventary/category.js';
import * as productsRepo from '../infrastructure/repositories/productsArrayRepo.js';
import * as categoriesRepo from './../infrastructure/repositories/categoriesArrayRepo.js';

export const createProduct = (
  productName: string,
  stock: number,
  categoryId: string | number
): number | string => {
  let categoryFound = categoriesRepo.findCategory(categoryId) as Category;
  const newProduct: Product = {
    name: productName,
    stock,
    category: categoryFound
  };
  return productsRepo.saveProduct(newProduct);
};
