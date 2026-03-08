import { type User } from './../users/user.js';
import { type Product } from './../inventary/product.js';

export interface Order {
  id?: number | string;
  user: User;
  products: Product[];
  createdAt: string
};
