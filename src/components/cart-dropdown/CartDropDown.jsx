import React from "react";
import "./cart-dropdown.scss";

import Button from "../button/button";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>GO TO CHECKOOUT</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
