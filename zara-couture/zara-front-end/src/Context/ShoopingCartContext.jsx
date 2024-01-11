import React, { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => total + item.price, 0);
    setTotal(newTotal);
  }, [cartItems]);
  const count = cartItems.length;

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, total, addToCart, count }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
