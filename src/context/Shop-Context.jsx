
import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for(let i =1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

export default function ShopContextProvider(props) {
    const [cartItems, setCartItem] = useState(getDefaultCart())

const getTotalCartAmount = () =>{
    let totalCash = 0;
    for (const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = PRODUCTS.find((product)=> product.id === Number(item))
            totalCash += cartItems[item] * itemInfo.price
        }
     }
     return totalCash;
}
console.log(getTotalCartAmount())

const addToCart = (itemId) => {
setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
}
const removeFromCart = (itemId) => {
setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
}

const upDateItemCount = (newAmount, itemId) =>{
    setCartItem((prev) => ({...prev, [itemId]: newAmount}))
}


const contextValue =
 {cartItems, 
    addToCart,
     removeFromCart, 
     upDateItemCount,
     getTotalCartAmount,
    }

    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
