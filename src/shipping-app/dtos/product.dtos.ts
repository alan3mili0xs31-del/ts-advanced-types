import { type Product } from './../models/inventary/product.js';

export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'category'> {
    categoryId: string
  };

export interface UpdateProductDTO
  extends Omit<Product, 'createdAt' | 'category'> {
    categoryId: string
  };
