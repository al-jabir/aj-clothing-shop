import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Ajshop } from "../../assets/aj.svg";
import "./navigation.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-link" to="/">
          <Ajshop className="logo" />
        </Link>
        <div className="nav-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          <Link className="nav-links" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
