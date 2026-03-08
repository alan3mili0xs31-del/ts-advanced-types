import { type Category} from './../models/inventary/category.js';
import * as categoriesRepo from './../infrastructure/repositories/categoriesArrayRepo.js';
import { type CreateCategoryDTO } from './../dtos/category.dtos.js';
import { faker } from '@faker-js/faker';

export const createCategory = (data: CreateCategoryDTO): string => {
  const newCategory: Category = {
    ...data,
    id: faker.string.uuid(),
    createdAt: new Date().toString()
  };
  return categoriesRepo.saveCategory(newCategory);
};

export const getAllCategories = () => {
  return categoriesRepo.getAllCategories();
};
