console.log("Importing Modules :");

import { addToCart, totalPrice as price, totalQuality } from "./addCart";
add("Breads", 10);
console.log(price, totalQuality);


import add, { cart } from './addCart';
add('Pizaa', 4);
add('Burger', 30);
add('Apple', 9);
add("Huny", 5);

console.log(cart);