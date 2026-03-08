import { type Base } from './../base.js';
import { type Category } from './category.js';

export interface Product extends Base {
  title: string;
  description: string;
  imageURL: string;
  price: number;
  stock: number;
  category: Category;
  tags: string[]
};
