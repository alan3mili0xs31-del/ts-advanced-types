import { type Product } from '../models/inventary/product.js';
import { type Category } from '../models/inventary/category.js';
import * as productsRepo from '../infrastructure/repositories/productsArrayRepo.js';
import * as categoriesRepo from './../infrastructure/repositories/categoriesArrayRepo.js';
import type { CreateProductDTO, UpdateProductDTO } from './../dtos/product.dtos.js';
import { faker } from '@faker-js/faker';

export const createProduct = (data: CreateProductDTO): string => {
  const categoryFound = categoriesRepo.findCategory(data.categoryId) as Category;
  const {title, description, imageURL, price, stock, tags} = data;
  const newProduct: Product = {
    id: faker.string.uuid(),
    title,
    description,
    imageURL,
    price,
    stock,
    tags,
    category: categoryFound,
    createdAt: new Date().toString()
  };
  return productsRepo.saveProduct(newProduct);
};

export const updateProduct = (id: string, changes: UpdateProductDTO): Product => {
  const productToUpdate = productsRepo.findProduct(id) as Product;
  if (changes.categoryId !== undefined && productToUpdate.category.id !== changes.categoryId) {
    const updatedCategory = categoriesRepo.findCategory(changes.categoryId) as Category;
    productToUpdate.category = updatedCategory;
  }
  const updatedProduct: Product = {
    ...productToUpdate,
    ...changes
  };
  productsRepo.updateProduct(updatedProduct);
  return updatedProduct;
};
