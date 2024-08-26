import createItem from "./services/item.js";
import { addItem, calculeTotalPrice, removeItem, removeItemWithId, displayCart, removeOneItem } from "./services/cart.js";

const cart = [];

console.log("Welcome to the your shopee cart!");

const item1 = await createItem("book", 10.50, 2);
const item2 = await createItem("hat", 300, 2);

console.log("Adding items to cart...");
await addItem(cart, item1);
await addItem(cart, item2);

const total = await calculeTotalPrice(cart);
console.log("Total price: ", total);

await displayCart(cart);

// console.log("Removing item from cart...");
// const newTotal = await calculeTotalPrice(cart);

// console.log("Your new total price is: ", newTotal);

// console.log("Removing one item from cart...");
// await removeItemWithId(cart, 1);

// await displayCart(cart);

// await removeOneItem(cart, item1);
// await displayCart(cart);


