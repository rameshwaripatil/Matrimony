import React, { useEffect, useState } from 'react';
import './Register.css';
import { Navigate } from 'react-router-dom';

function Register() {
  const [mother, setMother] = useState([]);
  const [profile, setProfile] = useState([]);
  const [otpshow, setOtp] = useState(0);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    mobile_no: '',
    marital_status: '',
    date_of_birth: '',
    age: '',
    profile_created_by: '',
    mother_tongue: '',
    email: '',
    password: '',
  });
  const [btnDisable, setBtnDisable] = useState(false); // Assuming 'btnDisable' is used for button disabling

  const MobileDigit = (e) => {
    if (e.target.value.length !== 10) {
      const errorMsg = "Mobile number should contain 10 digits";
      document.getElementById('error').innerText = errorMsg;
      setBtnDisable(true);
    } else {
      document.getElementById('error').innerText = "";
      setBtnDisable(false);
    }
  };

  function calculateAge(date_of_birth) {
    const dob = new Date(date_of_birth);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age;
  }

  const OnSubmit = (e) => {
    e.preventDefault();
    setBtnDisable(true);
    fetch("http://marriagebureau.ajspire.com/api/front_user_register/send/massage", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOtp(1);
        Navigate("/profile")
        setBtnDisable(false);
        console.log("register data", data);
        alert("OTP sent successfully");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const oninputChange = (e) => {
    if (e.target.name === "date_of_birth") {
      const age = calculateAge(e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value, age });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleOtpChange = (index, value) => {
    let tempOtpValues = [...otpValues];
    tempOtpValues[index] = value;
    setOtpValues(tempOtpValues);
  };

  const verifyOtp = () => {
    const otp = otpValues.join('');
    console.log(otp);

    const updatedFormData = {
      ...formData,
      otp: otp,
    };
    console.log("Updated Data", updatedFormData);

    fetch('http://marriagebureau.ajspire.com/api/front_user_register', {
      method: 'POST',
      body: JSON.stringify(updatedFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((otp) => {
        setOtp(1);

        console.log("register data", otp);
        alert("Verification Successful");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const getMotherData = () => {
    fetch("http://marriagebureau.ajspire.com/api/get/mother_tounge")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data.data);
        setMother(data.data);
      });
  };

  const getProfileData = () => {
    fetch("http://marriagebureau.ajspire.com/api/get/profile_created_by")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setProfile(data.data);
      });
  };

  useEffect(() => {
    getMotherData();
    getProfileData();
  }, []);
  return (
    <div className="con">
      {otpshow ? (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 text-center ">
              <div className="row">
                <div className="col-12 mt-5">
                  <h2 className="title">Verify OTP</h2>
                  <form className="m-5 ">
                    {otpValues.map((value, index) => (
                      <input
                        className="contact__form--input"
                        key={index}
                        type="text"
                        onChange={(e)=>handleOtpChange(index,e.target.value)}
                      />
                    ))}
                    <hr className="mt-4" />
                  </form>
                  <button
                    className="banner__video--btn primary__btn m-2"
                    style={{ backgroundColor: "green" }}
                    onClick={verifyOtp}
                  >
                    Verify
                  </button>
                </div>
               

              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container co">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8 col-xs-12">
              <div className="register-main-box text-center">
                <h2 style={{ color: "rgb(192, 57, 57)", fontWeight: "bold" }}>
                  Register
                </h2>
                <h5 style={{ fontWeight: "bold" }}>Create an Account</h5>
                <p style={{ fontWeight: "bold" }}>
                  Register Here If You Are a New Customer
                </p>
              </div>
            </div>
          </div>
          <div className="account__login--inner">
            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    First Name
                    <input
                      className="contact__form--input"
                      name="first_name"
                      onChange={(e) => oninputChange(e)}
                      placeholder="First Name"
                    />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Last Name
                    <input
                      className="contact__form--input"
                      type="text"
                      name="last_name"
                      onChange={(e) => oninputChange(e)}
                      placeholder="Last Name"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Gender:
                  </label>
                  <select
                    class="contact__form--input"
                    name="gender"
                    onChange={(e) => oninputChange(e)}
                    defaultValue="haa"
                  >
                    <option value={""}>Choose...</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Other</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Martial Status
                  </label>
                  <select
                    class="contact__form--input"
                    name="marital_status"
                    onChange={(e) => oninputChange(e)}
                    defaultValue="haa"
                  >
                    <option value={""}>Choose...</option>
                    <option value={1}>Unmarried </option>
                    <option value={2}>Divorced</option>
                    <option value={3}> Widowed</option>
                    <option value={4}>Separated</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    class="contact__form--label"
                    name="age"
                    onChange={(e) => oninputChange(e)}
                    style={{ fontWeight: "bold" }}
                  >
                    Date of Birth<span class=""></span>
                  </label>
                  <input
                    class="contact__form--input"
                    onChange={(e) => oninputChange(e)}
                    placeholder=""
                    name="date_of_birth"
                    type="date"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Profile Created By:{" "}
                  </label>
                  <select
                    class="contact__form--input"
                    name="profile_created_by"
                    onChange={(e) => oninputChange(e)}
                    defaultValue="haa"
                  >
                    <option value={""}>Choose...</option>
                    {profile.map((Profile) => (
                      <>
                        <option value={Profile.profile_created_id}>
                          {Profile.profilecreated}{" "}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Mobile Number:
                    <input
                      className="contact__form--input"
                      name="mobile_no"
             
                      onChange={(e) => oninputChange(e)}
                      placeholder="mobile number"
                    />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Mother Tounge:
                  </label>

                  <select
                    class="contact__form--input"
                    defaultValue="haa"
                    onChange={(e) => oninputChange(e)}
                    name="mother_toungue"
                  >
                    <option>choose..</option>
                    {mother.map((Mother) => (
                      <>
                        <option value={Mother.mother_tounges_id}>
                          {Mother.mothertounge}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Email:<br></br>
                    <input
                      className="contact__form--input"
                      name="email"
                      onChange={(e) => oninputChange(e)}
                      placeholder="email"
                    />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label
                    className="contact__form--label"
                    style={{ fontWeight: "bold" }}
                  >
                    Password:<br></br>
                    <input
                      className="contact__form--input"
                      type="password"
                      name="password"
                      onChange={(e) => oninputChange(e)}
                      placeholder="password"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <div class="account__login--remember">
                <input
                  class="checkout__checkbox--input"
                  id="check2"
                  type="checkbox"
                />
                <label
                  class="checkout__checkbox--label login__remember--label"
                  for="check2"
                >
                  I have read and agree to the terms &amp; conditions
                </label>
              </div>
              <div>
              {/* <form className="m-5">
                {otpValues.map((value, index) => (
                  <input
                    className="contact__form--input"
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    maxLength="1"
                  />
                ))}
                <hr className="mt-4" />
              </form> */}
              <button
                className="banner__video--btn primary__btn m-2"
                style={{ backgroundColor: "green" }}
                onClick={(e)=>OnSubmit(e)}
              >
                Register
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

            }
export default Register;
