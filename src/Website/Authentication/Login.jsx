import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Authuser from "./Authuser";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 634d74138f518f55b8a2760d38bdd5f925c9abd7
import { toast } from "react-toastify";
import Authuser from "./Authuser";

function Login() {
  const notify = (M) => toast.error(M);
  const { http, setToken, token } = Authuser();
  const [btnDiseble, setDisebale] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (token != null) {
      navigate("/");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate, token]);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const SetLoguser = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const sessIon_start = (e) => {
    e.preventDefault();
    setDisebale(1);
    http
<<<<<<< HEAD
      .post("/front_user_login", Login)
      .then((res) => {
        console.log(res.data);
        if (res.data.access_token) {
          setToken(res.data.user_data, res.data.access_token);
          console.log("login sucessfully logged in");
          navigate('/dashboard');
=======
      .post("/front_user_login", login)
      .then((res) => {
        if (res.data.access_token) {
         
          navigate("/dashboard");
          window.location.reload();
          console.log("login successfull")
>>>>>>> 634d74138f518f55b8a2760d38bdd5f925c9abd7
        } else {
          notify(res.data.message);
          console.log("something is missing");
          navigate('/dashboard');
        }
        setDisebale();
      })
      .catch((error) => {
        setDisebale(0);
      });
  };
  return (
    <>
      <div>
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg" style={{height:"600px"}}>
        <div className="container">
<<<<<<< HEAD
          <div className="row row-cols-md-2 row-cols-1 d-flex justify-content-center">
            <div className="col">
              <div className="account__login">
                <div className="account__login--header mb-25 text-center">
                  <h2 className="account__login--header__title h3 mb-10">
                    Login
                  </h2>
                  <a className="account__login--header__desc">
                    <b>Login if you area a returning customer.</b>
                  </a>
                </div>
                <div className="account__login--inner">
                  <div className="row">
                    <div className="form-group">
                      <input
                        name="email"
                        type="text"
                        onChange={(e) => OninputChange(e)}
                        className="form-control"
                        placeholder="Enter your User Id | Mobile Numbar | Email Id "
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        type="password"
                        onChange={(e) => OninputChange(e)}
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="check"
                      />
                      <label className="form-check-label" htmlFor="check">
                        Remember Me
                      </label>
                    </div>
                    <div className="form-button">
                      <button type="submit" path="/dashboard" onClick={(e) => onSubmit(e)}>
                        login
                      </button>
                      <p>
                        Forgot your password?
                        <a href="/forgot-password">reset here</a>
                      </p>
                    </div>
                  </div>
                  <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                    <div className="account__login--remember position__relative">
                      <input
                        className="checkout__checkbox--input"
                        id="check1"
                        type="checkbox"
                      />
                      <span className="checkout__checkbox--checkmark" />
                      <label
                        className="checkout__checkbox--label login__remember--label"
                        htmlFor="check1"
                      >
                        {" "}
                        &nbsp;&nbsp;
                        <b>Remember me</b>
                      </label>
                    </div>
                    <a className="text-danger">&nbsp;&nbsp; Forgot Password</a>
                  </div>
                 <Link  path="/dashboard"> 
                 <a
                    className="account__login--btn primary__btn"
                    type="submit"
                    path="/dashboard"
                  >
                    Login
                  </a>
                 </Link>
                  <div class="account__login--divide">
                    <hr class="account__login--middle-line" />
                    <span class="account__login--divide__text">OR</span>
                    <hr class="account__login--middle-line" />
                  </div>
=======
       
        {/* Start login section  */}
        <div className="login__section section--padding">
          <div className="container">
            <form onSubmit={(e) => sessIon_start(e)}>
              <div className="login__section--inner">
                <div className="row row-cols-md-2 row-cols-1 d-flex justify-content-center">
              
                  <div className="col">
                    <div className="account__login">
                      <div className="account__login--header mb-25 text-center">
                        <h2 className="account__login--header__title h3 mb-10">
                          Login
                        </h2>
                        <Link to="/" className="account__login--header__desc">
                          Login if you area a returning customer.
                        </Link>
                      </div>
                      <div className="account__login--inner">
                        <div className="row">
                          <label>
                            <input
                              className="account__login--input"
                              placeholder="Enter Email Address"
                              type="email"
                              name="email"
                              value={setLogin.email}
                              onChange={(e) => SetLoguser(e)}
                            />
                          </label>
                          <label>
                            <input
                              className="account__login--input"
                              placeholder="Enter Password"
                              type="password"
                              name="password"
                              value={setLogin.password}
                              onChange={(e) => SetLoguser(e)}
                            />
                          </label>
                        </div>
                        <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                          <div className="account__login--remember position__relative">
                            <input
                              className="checkout__checkbox--input"
                              id="check1"
                              type="checkbox"
                            />
                            <span className="checkout__checkbox--checkmark" />
                            <label
                              className="checkout__checkbox--label login__remember--label"
                              htmlFor="check1"
                            >
                              Remember me
                            </label>
                          </div>
                          <Link to="/forgot_password" className="text-danger">
                            &nbsp;&nbsp; Forgot Password
                          </Link>
                        </div>
                        <button
                          className="account__login--btn primary__btn"
                          type="submit"
                          disabled={btnDiseble}
                        >
                          Login
                        </button>
                        <div className="account__login--divide">
                          <span className="account__login--divide__text">
                            OR
                          </span>
                        </div>
>>>>>>> 634d74138f518f55b8a2760d38bdd5f925c9abd7

                        <p className="account__login--signup__text">
                          Don,t Have an Account ?
                          <Link
                            className="account__login--forgot"
                            to="/register"
                          >
                            &nbsp;&nbsp;Create New Account
                          </Link>
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default Login;
