import {type Base } from './../base.js';

export enum Role {
  ADMIN = 'admin',
  CUSTOMER = 'customer'
};

export interface User extends Base {
  username: string;
  role: Role;
};
