import React, { useState } from 'react';
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mob_no: '',
    address: '',
    password: '',
    confirmpassword: ''
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('http://marriagebureau.ajspire.com/api/front_user_register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <main className="main__content_wrapper" >
        <div className="mt-5">
          <section className="breadcrumb__section breadcrumb__bg" style={{ height: 800 }}>
            <div className="container">
              <div className="login__section section--padding">
                <div className="container">
                  <div className="login__section--inner">
                    <div className="row row-cols-md-2 row-cols-1 d-flex justify-content-center">
                      <div className="col">
                        <div className="account__login register">
                          <div className="account__login--header mb-25">
                            <h2 className="account__login--header__title h3 mb-10">Create an Account</h2>
                            <p className="account__login--header__desc">Register Here If You Are a New Customer</p>
                          </div>
                          <div className="account__login--inner">
                            <form onSubmit={onSubmit}>
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="contact__form--list mb-20">
                                    <label className="contact__form--label">Full Name<span className="contact__form--label__star">*</span></label>
                                    <input className="contact__form--input" placeholder="Your Full Name" name="name" type="text" onChange={onInputChange} />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="contact__form--list mb-20">
                                    <label className="contact__form--label">Email<span className="contact__form--label__star">*</span></label>
                                    <input className="contact__form--input" placeholder="Enter Email Address" name="email" type="email" onChange={onInputChange} />
                                  </div>
                                </div>
                              </div>
                              {/* Add other form fields here */}
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="contact__form--list mb-20">
                                    <label className="contact__form--label">Password<span className="contact__form--label__star">*</span></label>
                                    <input className="contact__form--input" placeholder="Create New Password" name="password" type="password" onChange={onInputChange} />
                                  </div>
                                </div>
                                {/* Add more form fields as needed */}
                              </div>
                              <div className="account__login--remember position__relative mb-3">
                                <input className="checkout__checkbox--input" id="check2" type="checkbox" />
                                <span className="checkout__checkbox--checkmark" />
                                <label className="checkout__checkbox--label login__remember--label" htmlFor="check2">I have read and agree to the terms &amp; conditions</label>
                              </div>
                              <div className="d-flex justify-content-center text-center">
                                <button className="account__login--btn primary__btn mb-10" type="submit">Submit & Free Register</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Register;
