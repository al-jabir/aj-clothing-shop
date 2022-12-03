import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Ajshop } from "../../assets/aj.svg";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import CartIcon from "../../components/cart-icon/CartIcon";
import { CartContext } from "../../contexts/cartContext";

import { userContext } from "../../contexts/userContext";

import { signOutUser } from "../../utils/firebase/firebase";

import "./navigation.scss";
const Navigation = () => {
  const { currentUser } = useContext(userContext);
  // console.log(currentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-link" to="/">
          <Ajshop className="logo" />
        </Link>
        <div className="nav-container">
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-links" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-links" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
