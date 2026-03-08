import { type Order } from './../models/shipping/order.js';

export interface CreateOrderDTO {
  userId: string;
  productsId: string[]
};
export interface UpdateOrderDTO
extends Pick<Order, 'id'> {
  userId: string;
  productsId: string[]
};

