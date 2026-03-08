import { type Order } from './../../models/shipping/order.js';

let orders: Order[] = [];

export const saveOrder = (order: Order): string => {
  orders.push(order);
  return order.id;
};

export const findOrder = (id: string): Order | undefined => {
  return orders.find(order => order.id === id);
};

export const removeOrder = (id: string) => {
  orders = orders.filter(order => order.id !== id);
};

export const getAllOrders = (): Order[] => {
  return orders;
};
