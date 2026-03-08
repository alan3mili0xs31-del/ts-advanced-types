import { type Category } from '../models/inventary/category.js';

export type CreateCategoryDTO = Pick<Category, 'name'>;
export type UpdateCategoryDTO = Omit<Category, 'createdAt'>;
