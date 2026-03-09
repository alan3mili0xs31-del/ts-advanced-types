import { type User, Role } from './../models/users/user.js';
import * as userRepo from './../infrastructure/repositories/usersArrayRepo.js';
import type { CreateUserDTO, UpdateUserDTO } from './../dtos/user.dtos.js';
import { faker } from '@faker-js/faker';

export const createUser = (data: CreateUserDTO): string => {
  const newUser: User = {
    id: faker.string.uuid(),
    username: data.username,
    role: data.role ?? Role.CUSTOMER,
    createdAt: new Date().toString()
  };
  return userRepo.saveUser(newUser);
};

export const updateUser = (id: string, changes: UpdateUserDTO): User => {
  const userToUpdate = userRepo.findUser(id) as User;
  const updatedUser: User = {
    ...userToUpdate,
    ...changes
  };
  userRepo.updateUser(updatedUser);
  return updatedUser;
};
