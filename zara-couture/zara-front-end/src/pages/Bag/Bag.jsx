import "./Bag.css";
import React from "react";

import { useShoppingCart } from "../../Context/ShoopingCartContext";

function Bag() {
  const { cartItems, total } = useShoppingCart();

  return (
    <div className="body-bag">
      <div>HELLO BAG</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>{item.name}</div>
          <div>${item.price}</div>
        </div>
      ))}
      <div>Total: ${total}</div>
    </div>
  );
}
export default Bag;
