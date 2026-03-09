import { type User } from './../models/users/user.js';
import { type Product } from './../models/inventary/product.js';
import { type Order } from './../models/shipping/order.js';
import * as ordersRepo from './../infrastructure/repositories/ordersArrayRepo.js';
import * as usersRepo from './../infrastructure/repositories/usersArrayRepo.js';
import * as productsRepo from './../infrastructure/repositories/productsArrayRepo.js';
import { type CreateOrderDTO } from './../dtos/order.dtos.js';
import { faker } from '@faker-js/faker';

export const createOrder = (data: CreateOrderDTO): string => {
  const userFound = usersRepo.findUser(data.userId) as User;
  const productsFound = data.productsId.map(productId =>
    productsRepo.findProduct(productId) as Product);
  const newOrder: Order = {
    id: faker.string.uuid(),
    user: userFound,
    products: productsFound,
    createdAt: new Date().toString()
  };
  return ordersRepo.saveOrder(newOrder);
};

export const cancelOrder = (id: string) => {
  ordersRepo.removeOrder(id);
};

export const getOrdersByUserId = (id: string): Order[] => {
  return ordersRepo.getAllOrders()
    .filter(order => order.user.id === id);
};
