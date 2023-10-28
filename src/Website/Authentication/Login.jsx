import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Authuser from "./Authuser";
import { toast } from "react-toastify";

const Login = () => {
  const notify = (message) => toast.error(message);

  const { http, setToken, token } = Authuser();
  const [btnDisable, setDisable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);

    http.post("front_user_login", loginData)
      .then((res) => {
        if (res.data.token) {
          setToken(res.data.user_data, res.data.token);
          console.log("Login successful");
          navigate("/");
        } else {
          notify(res.data.message);
        }
      })
      .catch((error) => {
        notify("An error occurred. Please try again.");
      })
      .finally(() => {
        setDisable(false);
      });
  };

  return (
    <div>
      <div className="all-title-bol">
        <div className="container">
          <form>
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your User Id | Mobile Number | Email Id"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="check"
              />
              <label className="form-check-label" htmlFor="check">
                Remember Me
              </label>
            </div>
            <div className="form-button">
              <button type="submit" onClick={handleSubmit} disabled={btnDisable}>
                Login
              </button>
              <p>Forgot your password? <a href="/forgot-password">Reset here</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
