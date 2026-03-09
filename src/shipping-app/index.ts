import * as userService from './services/user.js';
import * as productService from './services/product.js';
import * as categoryService from './services/category.js';
import * as shippingService from './services/shipping.js';
import {Role} from './models/users/user.js';
import {type CreateUserDTO} from './dtos/user.dtos.js';
import {type CreateCategoryDTO} from './dtos/category.dtos.js';
import type {CreateProductDTO, UpdateProductDTO} from './dtos/product.dtos.js';
import {type CreateOrderDTO} from './dtos/order.dtos.js';
import { faker } from '@faker-js/faker';

const productGenerator = (categoriaId: string): CreateProductDTO => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    imageURL: faker.image.url(),
    price: faker.number.int({min: 1, max: 10}),
    stock: faker.number.int({min: 10, max: 100}),
    categoryId: categoriaId,
    tags: faker.helpers.arrayElements([])
  }
};

const user1Id = userService.createUser({username: 'Alan Kamisato'});
const user2Id = userService.createUser({username: 'Steban Humbaldo'});
const user3Id = userService.createUser({username: 'Alan Humbaldo', role: Role.ADMIN});
// console.log("New user's id:", user1Id);

const category1Id = categoryService.createCategory({name: 'Bebidas'});
const category2Id = categoryService.createCategory({name: 'Dulces'});

const catUp = categoryService.updateCategory(category1Id, {
  name: 'Golosinas'
});
// console.log("New category's id:", category1Id);

const product1Id = productService.createProduct(
  productGenerator(category1Id)
);
// console.log("New product's id:", product1Id);

const product2Id = productService.createProduct(
  productGenerator(category2Id)
);
// console.log("New product's id:", product2Id);

productService.updateProduct(product1Id,
  {
    title: 'Titulo normal',
    description: 'Normal desc',
    tags: ['Akai', 'Natsu'],
    categoryId: category1Id
  }
);

productService.updateProduct(product2Id, {
  tags: ['Akai', 'Vanilla']
});

userService.updateUser(user1Id, {
  role: Role.ADMIN,
  username: 'Ayaka Kamizato'
});

const order1Id = shippingService.createOrder(
  {
    userId: user1Id,
    productsId: [product1Id, product2Id]
  }
);
// console.log("New order's id:", order1Id);

const user1Orders = shippingService.getOrdersByUserId(user1Id);
user1Orders.forEach(order => {
  console.log("Order's id:", order.id);
  console.log("User's info:", order.user);
  console.log("Products purchased:");
  order.products.forEach(product => {
    console.log(product);
  });
  console.log("Order created at:", order.createdAt);
});

const productsFiltered = productService.findProducts({tags: ['Akai'], categoryId: category2Id});
console.log(productsFiltered);

console.clear();

const usersFiltered = userService.findUsers({/*username: 'Humbaldo', */role: Role.ADMIN});
console.log(usersFiltered);

const categoriesFiltered = categoryService.findCategory({name: 'd'});
console.log(categoriesFiltered);
