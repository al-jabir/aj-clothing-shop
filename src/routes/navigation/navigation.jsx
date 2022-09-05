import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <h1>I am the Navigation bar</h1>
        <p>When will be navbar updated</p>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
