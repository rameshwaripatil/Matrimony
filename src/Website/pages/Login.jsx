import React, { useState } from 'react';

const Login = () => {
  // State to store input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., send credentials to a server)
    console.log('Logging in with:', { username, password });
  };

  return (
    <div>
      <section className="breadcrumb__section breadcrumb__bg"  style={{ height: 600 }}>
        <div className="container">
          <div className="login__section section--padding">
            <div className="container">
              <form onSubmit={handleLogin}>
                <div className="login__section--inner">
                  <div className="row row-cols-md-2 row-cols-1 d-flex justify-content-center">
                    <div className="col">
                      <div className="account__login">
                        <div className="account__login--header mb-25 text-center">
                          <h2 className="account__login--header__title h3 mb-10">Login</h2>
                          <a className="account__login--header__desc" href="/">
                            Login if you are a returning customer.
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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </label>
                            <label>
                              <input
                                className="account__login--input"
                                placeholder="Enter Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                            <a className="text-danger" href="/forgot_password">
                              &nbsp;&nbsp; Forgot Password
                            </a>
                          </div>
                          <button className="account__login--btn primary__btn" type="submit">
                            Login
                          </button>
                          <div className="account__login--divide">
                            <span className="account__login--divide__text">OR</span>
                          </div>
                          <p className="account__login--signup__text">
                            Don't Have an Account ?
                            <a className="account__login--forgot" href="/register">
                              &nbsp;&nbsp;Create New Account
                            </a>
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
  );
};

export default Login;
