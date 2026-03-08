import { type User } from './../models/users/user.js';
import { type Product } from './../models/inventary/product.js';
import { type Order } from './../models/shipping/order.js';
import * as ordersRepo from './../infrastructure/repositories/ordersArrayRepo.js';
import * as usersRepo from './../infrastructure/repositories/usersArrayRepo.js';
import * as productsRepo from './../infrastructure/repositories/productsArrayRepo.js';

export const createOrder = (
  userId: string | number,
  productsId: (string | number)[]
): number | string => {
  const userFound = usersRepo.findUser(userId) as User;
  const productsFound = productsId.map(productId =>
    productsRepo.findProduct(productId) as Product);
  const newOrder: Order = {
    user: userFound,
    products: productsFound,
    createdAt: new Date().toString()
  };
  return ordersRepo.saveOrder(newOrder);
};

export const getOrdersByUserId = (id: number | string): Order[] => {
  return ordersRepo.getAllOrders()
    .filter(order => order.user.id === id);
};
