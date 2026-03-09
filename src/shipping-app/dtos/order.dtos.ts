import { type Order } from './../models/shipping/order.js';

export interface CreateOrderDTO {
  userId: string;
  productsId: string[]
};

export type UpdateOrderDTO = Partial<CreateOrderDTO>;

