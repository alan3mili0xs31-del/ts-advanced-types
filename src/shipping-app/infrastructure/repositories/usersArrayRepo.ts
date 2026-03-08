import { type User } from './../../models/users/user.js';

let users: User[] = [];

export const saveUser = (user: User): string => {
  users.push(user);
  return user.id;
};

export const findUser = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const removeUser = (id: string) => {
  users = users.filter(user => user.id !== id);
};

export const getAllUsers = (): User[] => {
  return users;
};
