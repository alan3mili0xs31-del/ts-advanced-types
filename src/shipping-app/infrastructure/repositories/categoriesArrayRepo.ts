import { type Category } from './../../models/inventary/category.js';

let categories: Category[] = [];
let currentId: number = 0;

export const saveCategory = (category: Category): number | string => {
  category.id = ++currentId;
  categories.push(category);
  return category.id;
};

export const findCategory = (id: number | string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const removeCategory = (id: number | string) => {
  categories = categories.filter(category => category.id !== id);
};

export const getAllCategories = (): Category[] => {
  return categories;
};
