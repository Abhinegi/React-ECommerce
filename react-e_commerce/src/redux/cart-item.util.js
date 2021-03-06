export const addItemToCart = (cartItems,  cartItemToAdd)=>{
    console.log(cartItems,cartItemToAdd)
    const itemExist  = cartItems.find(item => item.id === cartItemToAdd.id)
    if(itemExist)
    return cartItems.map(item=>{
       return item.id===cartItemToAdd.id ? {
            ...item,
            quantity: item['quantity']+1
        }:item
    })
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart = (cartItems,  cartItemToRemove)=>{
    const itemRemaining  = cartItems.filter(item => item.id != cartItemToRemove.id)
    return itemRemaining;
}
