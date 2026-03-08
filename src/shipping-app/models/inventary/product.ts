import { type Category } from './category.js';

export interface Product {
  id?: number | string;
  name: string;
  stock: number;
  category: Category;
};
