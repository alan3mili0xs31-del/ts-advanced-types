import { type User, Role } from './../models/users/user.js';
import * as userRepo from './../infrastructure/repositories/usersArrayRepo.js';
import type { CreateUserDTO, UpdateUserDTO, FilterUserDTO } from './../dtos/user.dtos.js';
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

export const findUsers = (filter: FilterUserDTO): ReadonlyArray<User> => {
  let usersFiltered: ReadonlyArray<User> =
    Object.keys(filter).length > 0 ? userRepo.getAllUsers() : [];
  const {username, role} = filter;
  if (username)
    usersFiltered = usersFiltered.filter(u => u.username.toLowerCase().includes(username.toLowerCase()));
  if (role)
    usersFiltered = usersFiltered.filter(u => u.role === role);
  return usersFiltered;
};
