import { type Base } from './../base.js';
import { type User } from './../users/user.js';
import { type Product } from './../inventary/product.js';

export interface Order extends Base {
  user: User;
  products: Product[];
};
