import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Authuser from "./Authuser";
import { toast } from "react-toastify";

const Login = () => {
  const notify = (message) => toast.error(message);

  const { http, setToken, token } = Authuser();
  const [btnDiseble, setDisebale] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (token != null) {
      navigate("/");
    }
  }, [navigate, token]);

  const [Login, SetLogin] = useState({ email: "", password: "" });

  const OninputChange = (e) => {
    SetLogin({ ...Login, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    http
      .post("/front_user_login", Login)
      .then((res) => {
        console.log(res.data);
        if (res.data.access_token) {
          setToken(res.data.user_data, res.data.access_token);
          console.log("login sucessfully logged in");
          navigate('/dashboard');
        } else {
          notify(res.data.message);
          console.log("something is missing");
          navigate('/dashboard');
        }
        setDisebale();
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

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Authuser from "../Authentication/Authuser";
// import { toast } from "react-toastify";

// function Login() {
//   const notify = (M) => toast.error(M);
//   const { http, setToken, token } = Authuser();

//   const [btnDiseble, setDisebale] = useState(0);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (token != null) {
//       navigate("/");
//     }
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [navigate, token]);
//   const [login, setLogin] = useState({
//     email: "",
//     password: "",
//   });
//   const SetLoguser = (e) => {
//     setLogin({ ...login, [e.target.name]: e.target.value });
//   };

//   const sessIon_start = (e) => {
//     e.preventDefault();
//     setDisebale(1);
//     http
//       .post("/front_user_login", login)
//       .then((res) => {
//         if (res.data.access_token) {
//           setToken(res.data.user_data, res.data.access_token);
//           // const total_fields = Object.keys(res.data.userrr).length;
//           // const nonNullFields = Object.values(res.data.userrr).filter(value => value !== null).length;
//           // const percentage = Math.floor((nonNullFields / total_fields) * 100);
//           // if (percentage >= 90) {
//           //   navigate("/dashboard");
//           //   window.location.reload();
//           // } else {
//           //   navigate("/profile");
//           //   window.location.reload();
//           // }
//           navigate("/dashboard");
//           window.location.reload();
//         } else {
//           notify(res.data.message);
//         }
//         setDisebale(0);
//       })
//       .catch((error) => {
//         notify("The provided credentials are invalid");
//         setDisebale(0);
//       });
//   };
//   return (
//     <>
//       <div>
//         {/* Start breadcrumb section */}
//         <section className="breadcrumb__section breadcrumb__bg" style={{height:"600px"}}>
//         <div className="container">

//         {/* Start login section  */}
//         <div className="login__section section--padding">
//           <div className="container">
//             <form onSubmit={(e) => sessIon_start(e)}>
//               <div className="login__section--inner">
//                 <div className="row row-cols-md-2 row-cols-1 d-flex justify-content-center">

//                   <div className="col">
//                     <div className="account__login">
//                       <div className="account__login--header mb-25 text-center">
//                         <h2 className="account__login--header__title h3 mb-10">
//                           Login
//                         </h2>
//                         <Link to="/" className="account__login--header__desc">
//                           Login if you area a returning customer.
//                         </Link>
//                       </div>
//                       <div className="account__login--inner">
//                         <div className="row">
//                           <label>
//                             <input
//                               className="account__login--input"
//                               placeholder="Enter Email Address"
//                               type="email"
//                               name="email"
//                               value={setLogin.email}
//                               onChange={(e) => SetLoguser(e)}
//                             />
//                           </label>
//                           <label>
//                             <input
//                               className="account__login--input"
//                               placeholder="Enter Password"
//                               type="password"
//                               name="password"
//                               value={setLogin.password}
//                               onChange={(e) => SetLoguser(e)}
//                             />
//                           </label>
//                         </div>
//                         <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
//                           <div className="account__login--remember position__relative">
//                             <input
//                               className="checkout__checkbox--input"
//                               id="check1"
//                               type="checkbox"
//                             />
//                             <span className="checkout__checkbox--checkmark" />
//                             <label
//                               className="checkout__checkbox--label login__remember--label"
//                               htmlFor="check1"
//                             >
//                               Remember me
//                             </label>
//                           </div>
//                           <Link to="/forgot_password" className="text-danger">
//                             &nbsp;&nbsp; Forgot Password
//                           </Link>
//                         </div>
//                         <button
//                           className="account__login--btn primary__btn"
//                           type="submit"
//                           disabled={btnDiseble}
//                         >
//                           Login
//                         </button>
//                         <div className="account__login--divide">
//                           <span className="account__login--divide__text">
//                             OR
//                           </span>
//                         </div>

//                         <p className="account__login--signup__text">
//                           Don,t Have an Account ?
//                           <Link
//                             className="account__login--forgot"
//                             to="/register"
//                           >
//                             &nbsp;&nbsp;Create New Account
//                           </Link>

//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         {/* End login section  */}
//         </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default Login;
