import React from "react";
import "./cart-dropdown.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Button from "../button/button";
import CartItem from "../cart-item/CartItems";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item, idx) => (
          <CartItem key={idx} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOOUT</Button>
    </div>
  );
};

export default CartDropDown;
