import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-link" to="/">
          <p>AJ SHOP</p>
        </Link>
        <div className="nav-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
