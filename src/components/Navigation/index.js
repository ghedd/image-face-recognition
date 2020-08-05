import React, { useState } from "react";
import "./style.scss";

const Navigation = ({ isLoggedIn, onRouteChange, currentRoute }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav
        id="navbar"
        className="Nav navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <a
          href="#"
          onClick={toggle}
          role="button"
          className={
            isActive ? "navbar-burger burger is-active" : "navbar-burger burger"
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>

        <div
          id="navbar-menu"
          className={isActive ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons level-right">
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => onRouteChange("signIn")}
                      className="button is-light"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      disabled={currentRoute === "register" ? true : false}
                      onClick={() => onRouteChange("register")}
                      className="button is-primary"
                    >
                      <strong>Register</strong>
                    </button>

                    <button
                      onClick={() => onRouteChange("signIn")}
                      className="button is-light"
                      disabled={currentRoute === "signIn" ? true : false}
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
