import "./Bag.css";
import React from "react";
import { useShoppingCart } from "../../Context/ShoopingCartContext";
import { useNavigate } from "react-router-dom";

function Bag() {
  const navigate = useNavigate();
  const { cartItems, total } = useShoppingCart();

  const handleContinueShopping = () => {
    navigate("/couture");
  };

  return (
    <div className="body-bag">
      {cartItems.map((item) => (
        <div key={item.id}>
          <img className="item-cart" src={item.image} alt={item.name} />
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>
        </div>
      ))}

      <div className="payment-item">
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="item-name-box">
              {item.name}-{item.price}
            </div>
          </div>
        ))}

        <div className="total-items">Total: ${total}</div>

        <button
          className="button-shopping-bag"
          onClick={handleContinueShopping}
        >
          CONTINUE SHOPPING
        </button>
        <button className="button-pay">PAY</button>
      </div>
    </div>
  );
}
export default Bag;
