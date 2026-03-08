import * as userService from './services/user.js';
import * as productService from './services/product.js';
import * as categoryService from './services/category.js';
import * as shippingService from './services/shipping.js';

const user1Id = userService.createUser('Alan');
console.log("New user's id:", user1Id);

const category1Id = categoryService.createCategory('Bebida');
console.log("New category's id:", category1Id);

const product1Id = productService.createProduct('Coca Cola', 100, category1Id);
console.log("New product's id:", product1Id);
const product2Id = productService.createProduct('Fuze Tea', 80, category1Id);
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

const product3Id = productService.createProduct('Barra de chocolate', 135, category2Id);
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
