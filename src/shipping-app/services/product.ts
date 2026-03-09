import { type Product } from '../models/inventary/product.js';
import { type Category } from '../models/inventary/category.js';
import * as productsRepo from '../infrastructure/repositories/productsArrayRepo.js';
import * as categoriesRepo from './../infrastructure/repositories/categoriesArrayRepo.js';
import type { CreateProductDTO, UpdateProductDTO, FilterProductDTO } from './../dtos/product.dtos.js';
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

export const findProducts = (filter: FilterProductDTO): ReadonlyArray<Product> => {
  let productsFiltered: ReadonlyArray<Product> =
    Object.keys(filter).length > 0 ? productsRepo.getAllProducts() : [];
  const {title, description, price, stock, tags, categoryId} = filter;
  if (title)
    productsFiltered = productsFiltered.filter(p => p.title === title);
  if (description)
    productsFiltered = productsFiltered.filter(p => p.description === description);
  if (price)
    productsFiltered = productsFiltered.filter(p => p.price === price);
  if (stock)
    productsFiltered = productsFiltered.filter(p => p.stock === stock);
  if (tags)
    productsFiltered = productsFiltered.filter(p => {
      let flag: boolean = false;
      tags.forEach(tag => {
        if (p.tags.includes(tag)) return flag = true;
      });
      return flag;
    });
  if (categoryId)
    productsFiltered = productsFiltered.filter(p => p.category.id === categoryId);
  return productsFiltered;
};
