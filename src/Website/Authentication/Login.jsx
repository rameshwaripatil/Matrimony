import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Authuser from "./Authuser";
import { toast } from "react-toastify";
const Login = () => {
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
  
  const [Login, SetLogin] = useState({email: '',password: '' });

  const OninputChange = (e) => {
    SetLogin({ ...Login, [e.target.name]: e.target.value });
  }


  const onSubmit=(e) => {
  e.preventDefault();
 

    http.post("/user/login", Login)
      .then((res) => {
        console.log(res.data.user_data);
        if (res.data.token) {
          setToken(res.data.user_data, res.data.token);
          console.log("login sucessfully logged in")
          navigate("/");
        } else {
          notify(res.data.message);
        }
        setDisebale(0);

      })
      .catch((error) => {
        // notify("The provided credentials are invalid");
        setDisebale(0);
      });
};
  return (
    <div>
      <div className="all-title-bol">
        <div className="container">
         

          <div className="row row-cols-md-2 row-cols-1 d-flex justify-content-center">
            <div className="col">
              <div className="account__login">
                <div className="account__login--header mb-25 text-center">
                  <h2 className="account__login--header__title h3 mb-10">
                    Login
                  </h2>
                  <a className="account__login--header__desc" >
                    <b>Login if you area a returning customer.</b>
                  </a>
                </div>
                <div className="account__login--inner">
                  <div className="row">
                  <div className="form-group"><input name='email' type='text' onChange={(e) => OninputChange(e)}className="form-control" placeholder="Enter your User Id | Mobile Numbar | Email Id " />
              </div>
              <div className="form-group"><input name='password' type='password' onChange={(e) => OninputChange(e)} className="form-control" placeholder="Enter your password" />
              </div>
              <div className="form-check mb-3"><input className="form-check-input" type="checkbox" defaultValue id="check" /><label className="form-check-label" htmlFor="check">Remember Me</label></div>
              <div className="form-button"><button type="submit" onClick={(e) => onSubmit(e)} >login</button>
                <p >Forgot your password?<a href="/forgot-password">reset here</a></p>
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
                  <button
                    className="account__login--btn primary__btn"
                    type="submit"
                  >
                    Login
                  </button>
                  <div class="account__login--divide">
                    <hr class="account__login--middle-line" />
                    <span class="account__login--divide__text">OR</span>
                    <hr class="account__login--middle-line" />
                  </div>

                  <p className="account__login--signup__text">
                    <b> Don,t Have an Account ?</b> &nbsp;&nbsp;
                    <b style={{ color: "red" }}>Create New Account</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
