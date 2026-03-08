export enum Role {
  ADMIN = 'admin',
  CUSTOMER = 'customer'
};

export interface User {
  id?: number | string;
  username: string;
  role: Role;
};
