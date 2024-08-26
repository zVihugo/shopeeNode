//add item in the cart

async function addItem(userCart, item){
    userCart.push(item);
}

//Calculate total price

async function calculeTotalPrice(userCart){
    return userCart.reduce((acc, item) => acc + item.subtotal(), 0);
}

//remove all itens from the cart

async function removeItem(userCart, name){
    const index = userCart.findIndex(item => item.name === name);

    if(index === -1){
        return;
    }else{
        userCart.splice(index, 1);
    }
}

//Show all itens in the cart

async function displayCart(userCart){
    console.log("Your cart: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name} - ${item.price} - ${item.quantity} - ${item.subtotal()}`);
    })
}

//remove item from the cart with using id

async function removeItemWithId(userCart, itemId){
    const deleteItem = itemId - 1;
    //If itemId is better than 0 and less than the length of the cart
    if(itemId > 0 && itemId < userCart.length){
        userCart.splice(deleteItem, 1);
    }
}

//decreses quantity of the item in the cart
async function removeOneItem(userCart, item){

    //1. find the index of the item in the cart
    const indexFound = userCart.findIndex((cartItem) => cartItem.name === item.name);

    //2. if index item isn't found
    if(indexFound === -1){
        console.log("Item not found in the cart");
        return;
    }

    //3. if item better than 1 subtract 1 item, or item is equal to 1 remove item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }else{
        userCart.splice(indexFound, 1);
    }

}

export {
    addItem,
    calculeTotalPrice,
    removeItem,
    removeItemWithId,
    displayCart,
    removeOneItem
}