import { type Order } from './../../models/shipping/order.js';

let orders: Order[] = [];
let currentId: number = 0;

export const saveOrder = (order: Order): number | string => {
  order.id = ++currentId;
  orders.push(order);
  return order.id;
};

export const findOrder = (id: number | string): Order | undefined => {
  return orders.find(order => order.id === id);
};

export const removeOrder = (id: number | string) => {
  orders = orders.filter(order => order.id !== id);
};

export const getAllOrders = (): Order[] => {
  return orders;
};
