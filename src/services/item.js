//create item with subtotal correct

async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
        msg: console.log('Item created')
    }
}

export default createItem;