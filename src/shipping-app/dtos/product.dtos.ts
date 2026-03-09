import { type Product } from './../models/inventary/product.js';

// Omit is an utility type which allows us to skip certain fields form a structure.
/**
 * Omit type to transfer just product data required to create a product.
 */
export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'category'> {
    categoryId: string
  };

  // Partial is an utility type which allows us to make optional all fields in a structure.
/**
 * Partial type to transfer product data meant to be updated.
 */
export type UpdateProductDTO = Partial<CreateProductDTO>;
