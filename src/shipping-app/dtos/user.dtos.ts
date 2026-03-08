import { type User, Role } from '../models/users/user.js';

export interface CreateUserDTO
  extends Pick<User, 'username'> {
    role?: Role
  };
export type UpdateUserDTO = Omit<User, 'createdAt'>;
