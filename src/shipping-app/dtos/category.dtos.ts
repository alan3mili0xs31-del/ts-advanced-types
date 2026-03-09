import { type Category } from '../models/inventary/category.js';

export type CreateCategoryDTO = Pick<Category, 'name'>;

export type UpdateCategoryDTO = Partial<CreateCategoryDTO>;

export type FilterCategoryDTO = Readonly<UpdateCategoryDTO>;
