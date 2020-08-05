import React from "react";
import myLogo from "../../images/logo.svg";
import "./style.scss";
const AppLogo = () => {
  return (
    <section className="AppLogo">
      <figure className="image is-quare">
        <img src={myLogo} alt="my logo" />
      </figure>
    </section>
  );
};
export default AppLogo;
