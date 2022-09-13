import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Ajshop } from "../../assets/aj.svg";
import { UserContext } from "../../contexts/userContext";
import "./navigation.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
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
          <Link className="nav-links" to="/auth">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
