import React, { useEffect, useState } from "react";
import Authuser from '../Authentication/Authuser';
import "./Register.css"


function Register() {
  const { http, token } = Authuser();
  const [btnDiseble, setDisebale] = useState(0);
  const [OtpDiseble, setOtp] = useState(0);


  let [formData, SetformData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    mobile_no: '',
    marital_status: '',
    date_of_birth: '',
    age: '',
    profile_created_by: '',
    mother_toungue: '',
    email: '',
    password: '',
  });


  const OninputChange = (e) => {
    SetformData({ ...formData, [e.target.name]: e.target.value });
  }
  const MobileDigit = (e) => {
    if (e.target.value.length != 10) {
      let errormsg = "mobile number contains atleast 10 digits";
      document.getElementById('error').innerText = errormsg;
      setDisebale(1);
    }
    else if (e.target.value.length == 10) {
      let errormsg = "";
      setDisebale(0);
      document.getElementById('error').innerText = errormsg;
    }
  }
  const SendMassage = (e) => {
    e.preventDefault();
    setDisebale(1)
    http.post("/front_user_register/send/massage", formData).then((res) => {
      setOtp(1);
      setDisebale(0)
    }).catch((e) => {

      setDisebale(0)
    });
    setDisebale(0)
  }

  const sessIon_start = () => {
    setDisebale(1)
    // Assuming formData.date contains the date of birth in "YYYY-MM-DD" format
    const dob = new Date(formData.date_of_birth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      age--;
    }

    // Add the age to the formData object
    formData.age = age;

    http.post("/front_user_register/now", formData).then((res) => {

      setDisebale(0);
    }).catch((e) => {
      setDisebale(0);
    });
    setDisebale(0);
  };
  const [Mother_Tounge, SetMother_Tounge] = useState([]);
  const Mother_Toungee = () => {
    http.get("/get/mother_tounge")
      .then((res) => {
        SetMother_Tounge(res.data.data);
      }).catch((e) => {
        console.log(e);
      })
  }
  const [Profiles, Set_profile] = useState([]);
  const Profile = () => {
    http.get("/get/profile_created_by").then((res) => {
      Set_profile(res.data.data);
    }).catch((e) => {
      console.log(e);
    });
  };


  useEffect(() => {
    Profile();
    Mother_Toungee();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const tabChange = (event) => {
    let combinedValue = '';
    const MAX_LENGTH = 1;
    const input = event.target;
    const value = input.value;

    if (value.length === MAX_LENGTH) {
      const form = input.form;
      const inputs = form.querySelectorAll('input[type="text"]');
      const values = [];
      inputs.forEach(input => {
        values.push(input.value);
      });
      combinedValue = values.join('');
      const updatedFormData = {
        ...formData,
        otp: combinedValue,
      };
      SetformData(updatedFormData);
      const currentIndex = Array.from(inputs).indexOf(input);
      const nextIndex = (currentIndex + 1) % inputs.length;
      inputs[nextIndex].focus();
    }
  };
  return (

    <div className="registration-page">
      <div className="registration-container form-section">
        <div className="column-sm-6 registration-input">
          <h1 className="text-center">Register Here</h1>

          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Last Name
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <input
                className="contact__form--input"
                placeholder="Your Last Name"
                name="last_name"
                onChange={(e) => OninputChange(e)}
                type="text"
              />
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Gender
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <select
                className="contact__form--input"
                name="gender"
                onChange={(e) => OninputChange(e)}
              >
                <option value=''>Choose...</option>
                <option value='2'>Male</option>
                <option value='1'>Female</option>
                <option value='3'>Other</option>
              </select>
            </div>
          </div>


          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Martial Status
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <select className="contact__form--input" name="marital_status" onChange={OninputChange}
              >
                <option value=''>Choose...</option>
                <option value='1' key={1}>UnMarried</option>
                <option value='2' key={2}>Divorced</option>
                <option value='3' key={3}>Widowed</option>
                <option value='4' key={4}>Separated</option>
              </select>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Date of Birth
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <input
                className="contact__form--input"
                placeholder=""
                name="date_of_birth"
                type="date"
                onChange={(e) => OninputChange(e)}
              />
            </div>
          </div>



          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Profile Created By
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <select className="contact__form--input" name="profile_created_by" onChange={OninputChange}>
                <option value=''>Choose...</option>
                {
                  Profiles.map((item, index) => (

                    <option value={item.profile_created_id} key={index}>{item.profilecreated}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Mobile Number
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <input
                className="contact__form--input"
                onInput={(e) => MobileDigit(e)}
                name="mobile_no"
                placeholder="Enter Mobile Number"
                type="number"
                onChange={(e) => OninputChange(e)}
              />
              <p id="error" style={{ color: "red", fontSize: "11px", marginLeft: "5px" }}></p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Mother Tounge
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <select className="contact__form--input" name="mother_toungue" onChange={OninputChange}>
                <option value="">Choose...</option>

                {
                  Mother_Tounge.map((item, index) => (
                    <option value={item.mother_tounges_id} key={index}>{item.mothertounge}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Email
                <span className="contact__form--label__star" >
                  *
                </span>
              </label>
              <input
                className="contact__form--input"
                placeholder="Enter Email Address"
                name="email"
                type="email"
                onChange={(e) => OninputChange(e)}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form--list mb-20">
              <label
                className="contact__form--label"
              >
                Password
                <span className="contact__form--label__star">
                  *
                </span>
              </label>
              <input
                className="contact__form--input"
                placeholder="Create New Password"
                name="password"
                type="password"
                onChange={(e) => OninputChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="row">
        </div>
        <div className="account__login--remember position__relative mb-3">
          <input
            className="checkout__checkbox--input"
            id="check2"
            type="checkbox"
          />
          <span className="checkout__checkbox--checkmark" />
          <label
            className="checkout__checkbox--label login__remember--label"
            htmlFor="check2"
          >
            I have read and agree to the terms &amp; conditions
          </label>
        </div>
        <label className="d-flex justify-content-center  text-center ">
          <button
            className="account__login--btn primary__btn mb-10"
            type="submit"
            disabled={btnDiseble}
            onClick={(e) => SendMassage(e)}
          >
            Submit &amp; Free Register
          </button>
        </label>

      </div>
    </div>
  
  );
}

export default Register;
