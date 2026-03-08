import { type User, Role } from './../models/users/user.js';
import * as userRepo from './../infrastructure/repositories/usersArrayRepo.js';

export const createUser = (
  username: string,
  role: Role = Role.CUSTOMER
): number | string => {
  const newUser: User = {
    username,
    role,
    createdAt: new Date().toString()
  };
  return userRepo.saveUser(newUser);
};
