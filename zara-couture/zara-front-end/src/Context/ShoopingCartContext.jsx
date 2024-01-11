import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotal(updatedItems.reduce((total, item) => total + item.price, 0));
    return updatedItems;
  };
  const count = cartItems.length;

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, total, addToCart, count }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
