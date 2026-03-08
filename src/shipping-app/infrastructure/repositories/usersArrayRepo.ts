import { type User } from './../../models/users/user.js';

let users: User[] = [];
let currentId: number = 0;

export const saveUser = (user: User): number | string => {
  user.id = ++currentId;
  users.push(user);
  return user.id;
};

export const findUser = (id: number | string): User | undefined => {
  return users.find(user => user.id === id);
};

export const removeUser = (id: number | string) => {
  users = users.filter(user => user.id !== id);
};

export const getAllUsers = (): User[] => {
  return users;
};
