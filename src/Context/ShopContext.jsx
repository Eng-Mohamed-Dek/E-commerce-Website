import React, { createContext, useState } from "react";
import all_products from "../assets/all_product";

// create shopContext
export const ShopContext = createContext(null);

// intial products data in the cart
const getDefaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }

  return cart;
};

// intial products data in the cart you this easy way
// cart = []

// create shopContextProvider Function
const shopContextProvider = (props) => {
  // state to manage cart items
  // const [cartItem, setCartitems] = useState(cart)
  const [cartItem, setCartitems] = useState(getDefaultcart());
  console.log("Carts: ", cartItem);

  // ADD TO CART LOGIC 
  let addtoCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  //REMOVE CART LOGIC
  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //TOTAL MONEY
  const totalAmount = () => {
    let totalMoney = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const product = all_product.find(product => product.id ===Number (item));
        totalMoney += product.new_price * cartItem[item];
      }      
    }
    return totalMoney;
  }

  //CART COUNTS
  const totalCarts = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        total += cartItem[item];
      }      
    }
    return total;
  }
  // store all the products.
  const all_product = all_products;
  const addtoCarts = addtoCart;
  const removeFromCarts = removeFromCart;
  const cartItems = cartItem;

  return (
    // paste all the products as props into ShopContext
    <ShopContext.Provider
      value={{ all_product, addtoCarts, removeFromCarts, cartItems , totalCarts, totalAmount}}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default shopContextProvider;
