import { type Category} from './../models/inventary/category.js';
import * as categoriesRepo from './../infrastructure/repositories/categoriesArrayRepo.js';

export const createCategory = (
  categoryName: string
): number | string => {
  const newCategory: Category = {
    name: categoryName,
    createdAt: new Date().toString()
  };
  return categoriesRepo.saveCategory(newCategory);
};

export const getAllCategories = () => {
  return categoriesRepo.getAllCategories();
};
