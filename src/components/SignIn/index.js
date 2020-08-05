import React from "react";
import "./style.scss";
const SignIn = ({ onRouteChange }) => {
  return (
    <section className="SignIn card">
      <p className="title is-4 has-text-centered">SIGN IN</p>
      <div className="card-content">
        <div className="field">
          <label className="SignIn__Label is-uppercase label ">Email</label>
          <div className="control">
            <input
              className="SignIn__Input input is-primary is-size-6-mobile"
              type="email"
            />
          </div>
        </div>
        <div className="field">
          <label className="SignIn__Label is-uppercase label ">Password</label>
          <div className="control">
            <input
              className="SignIn__Input input is-primary is-size-6-mobile"
              type="password"
            />
          </div>
        </div>
        <div className="field">
          <p className="control has-text-centered">
            <button
              onClick={() => onRouteChange("home")}
              className="SignInBtn button is-primary has-text-weight-semibold"
            >
              SIGN IN
            </button>
          </p>
          <p className="SignIn__Switch content has-text-centered pad2y">
            New here?{" "}
            <a href="#register" onClick={() => onRouteChange("register")}>
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
