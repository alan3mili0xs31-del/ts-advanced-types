import * as userService from './services/user.js';
import * as productService from './services/product.js';
import * as categoryService from './services/category.js';
import * as shippingService from './services/shipping.js';
import { faker } from '@faker-js/faker';


const user1Id = userService.createUser('Alan');
console.log("New user's id:", user1Id);

const category1Id = categoryService.createCategory('Bebida');
console.log("New category's id:", category1Id);

const product1Id = productService.createProduct(
  faker.commerce.productName(),
  faker.commerce.productDescription(),
  faker.image.url(),
  faker.number.int({min: 1, max: 10}),
  faker.number.int({min: 10, max: 100}),
  category1Id,
  faker.helpers.arrayElements([])
);
console.log("New product's id:", product1Id);
const product2Id = productService.createProduct(
  faker.commerce.productName(),
  faker.commerce.productDescription(),
  faker.image.url(),
  faker.number.int({min: 1, max: 10}),
  faker.number.int({min: 10, max: 100}),
  category1Id,
  faker.helpers.arrayElements([])
);
console.log("New product's id:", product2Id);

const order1Id = shippingService.createOrder(user1Id, [product1Id, product2Id]);
console.log("New order's id:", order1Id);

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

console.log('------------------------------');

const user2Id = userService.createUser('Hu Tao');
console.log("New user's id:", user2Id);

const category2Id = categoryService.createCategory('Dulces');
console.log("New category's id:", category2Id);

const product3Id = productService.createProduct(
  faker.commerce.productName(),
  faker.commerce.productDescription(),
  faker.image.url(),
  faker.number.int({min: 1, max: 10}),
  faker.number.int({min: 10, max: 100}),
  category2Id,
  faker.helpers.arrayElements([])
);
console.log("New product's id:", product3Id);

const order2Id = shippingService.createOrder(user2Id, [product2Id, product3Id]);
console.log("New order's id:", order2Id);

const user2Orders = shippingService.getOrdersByUserId(user2Id);
user2Orders.forEach(order => {
  console.log("Order's id:", order.id);
  console.log("User's info:", order.user);
  console.log("Products purchased:");
  order.products.forEach(product => {
    console.log(product);
  });
  console.log("Order created at:", order.createdAt);
});

