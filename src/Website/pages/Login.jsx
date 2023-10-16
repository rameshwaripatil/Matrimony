import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="all-title-bol">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12">
              <form>
              <h5 style={{ color: 'white', fontWeight: 'bold' }}>Login</h5>
              <ul className="row ">
                <li className="breadcrumb-item"><a style={{ color: 'white', fontWeight: 'bold' }} href="#">Home</a></li>
                <li className="breadcrumb-item active" style={{ color: 'white', fontWeight: 'bold' }}>Contact</li>
              </ul>
              </form>
              
            </div>
          </div> */}

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
                    <label>
                      <input
                        className="account__login--input"
                        placeholder="Enter Email Address"
                        type="email"
                        name="email"
                       
                      />
                    </label>
                    <label>
                      <input
                        className="account__login--input"
                        placeholder="Enter your Password"
                        type="password"
                        name="password"
                        
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
