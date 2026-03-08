import { type Category } from './../../models/inventary/category.js';

let categories: Category[] = [];

export const saveCategory = (category: Category): string => {
  categories.push(category);
  return category.id;
};

export const findCategory = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const removeCategory = (id: string) => {
  categories = categories.filter(category => category.id !== id);
};

export const getAllCategories = (): Category[] => {
  return categories;
};
