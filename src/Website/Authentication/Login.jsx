import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      .post("/front_user_login", login)
      .then((res) => {
        if (res.data.access_token) {
         
          navigate("/dashboard");
          window.location.reload();
          console.log("login successfull")
        } else {
          notify(res.data.message);
        }
        setDisebale(0);
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
