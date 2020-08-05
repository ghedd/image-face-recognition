import React from "react";
import "./style.scss";
const Register = ({ onRouteChange, onSuccessRegistration }) => {
  return (
    <section className="Register card">
      <p className="title is-4 has-text-centered">REGISTER</p>
      <div className="card-content">
        <div className="field">
          <label className="Register__Label is-uppercase label ">Email</label>
          <div className="control">
            <input
              className="Register__Input input is-primary is-size-6-mobile"
              type="email"
            />
          </div>
        </div>
        <div className="field">
          <label className="Register__Label is-uppercase label ">
            Password
          </label>
          <div className="control">
            <input
              className="Register__Input input is-primary is-size-6-mobile"
              type="password"
            />
          </div>
        </div>
        <div className="field">
          <p className="control has-text-centered">
            <button
              onClick={() => onSuccessRegistration("signIn")}
              className="RegisterBtn button is-primary has-text-weight-semibold"
            >
              REGISTER
            </button>
          </p>
          <p className="Register__Switch content has-text-centered pad2y">
            Already got an account?{" "}
            <a href="#sign-in" onClick={() => onRouteChange("signIn")}>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
