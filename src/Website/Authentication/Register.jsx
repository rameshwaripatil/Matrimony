import React, { useEffect, useState } from 'react'

import './Register.css';
import Authuser from './Authuser';


function Register() {
  const [mother, setmother] = useState([]);
  const [profile, setprofile] = useState([]);
  const [otpshow, setOtp] = useState(0);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  // const [message, setMessage] = useState("");

  const { http, token } = Authuser();
  const [btnDiseble,setDisebale]=useState(0)
  const [FromData, setfromdata] = useState({
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

  // const MobileDigit = (e) => {
  //   if (e.target.value.length != 10) {
  //     let errormsg = "mobile number contains atleast 10 digits";
  //     document.getElementById('error').innerText = errormsg;
  //     setDisebale(1);
  //   }
  //   else if (e.target.value.length == 10) {
  //     let errormsg = "";
  //     setDisebale(0);
  //     document.getElementById('error').innerText = errormsg;
  //   }
  // }


  function calculateAge(date_of_birth) {
    const dob = new Date(date_of_birth);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }

  const oninputChange = (e) => {
    if (e.target.name === "date_of_birth") {
      // Calculate age when the date_of_birth field is updated
      const age = calculateAge(e.target.value);
      setfromdata({ ...FromData, [e.target.name]: e.target.value, age });
    } else {
      setfromdata({ ...FromData, [e.target.name]: e.target.value });
    }
  };


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(FromData);
    fetch('http://marriagebureau.ajspire.com/api/front_user_register/send/massage', {
      method: 'POST',
      body: JSON.stringify(FromData),
      headers: {
        'Content-Type': 'application/json',

      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOtp(1);
        console.log("register data", data);
        alert("send otp sucessfully");

      })
      .catch((error) => {
        console.log("Error", error);
      });
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
      ...FromData,
      otp: otp
    }
    console.log("hii iam updated", updatedFormData);


    fetch('http://marriagebureau.ajspire.com/api/front_user_register', {
      method: 'POST',
      body: JSON.stringify(updatedFormData),
      headers: {
        'Content-Type': 'application/json',

      },
    })
      .then((res) => {

      console.log("hii iam updated",updatedFormData);

        return res.json();
      })
      .then((otp) => {
        setOtp(1);
        console.log("register data", otp);
        alert("verify Sucessfully");
        // setMessage("OTP Verified Successfully!");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };




  const getmotherdata = () => (
    http.get(`http://marriagebureau.ajspire.com/api/get/mother_tounge`)
      .then((Response) => {
        setmother(Response.data.data);
      }).catch((error) => {
        console.log(error);
      })




  )
  const getprofiledata = () => (
    http.get(`http://marriagebureau.ajspire.com/api/get/profile_created_by`)
      .then((Response) => {
        setprofile(Response.data.data);
      }).catch((error) => {
        console.log(error);
      })




  )


  useEffect(() => {
    getmotherdata();
    getprofiledata();

  }, [token])




  return (
    <div className='con'>
      {
        otpshow ? (
          <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 text-center ">
              <div className="row">
                <div className="col-12 mt-5">
                  <h2 className="title">
                    Verify OTP
                  </h2>
                  <form className="m-5 ">
                    {otpValues.map((value, index) => (


                      <input className="contact__form--input"
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        maxLength="1"
                      />

                    ))}
                    <hr className="mt-4" />
                  </form>
                  <button className="banner__video--btn primary__btn m-2" style={{ backgroundColor: "green" }} onClick={verifyOtp}>Verify</button>


                </div>
              </div>
            </div>
          </div>
          </div>







        ) :

          <div className="container co">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-8 col-xs-12">
                <div className="register-main-box text-center">
                  <h2 style={{ color: 'rgb(192, 57, 57)', fontWeight: 'bold' }}>Register</h2>
                  <h5 style={{ fontWeight: 'bold' }}>Create an Account</h5>
                  <p style={{ fontWeight: 'bold' }}>Register Here If You Are a New Customer</p>
                </div>
              </div>
            </div>
            <div className="account__login--inner">
            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label className="contact__form--label" style={{ fontWeight: 'bold' }}>
                    First Name
                    <input
                      className="contact__form--input"
                      name='first_name'
                      onChange={(e) => oninputChange(e)}
                      placeholder="First Name"
                    />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label className="contact__form--label" style={{ fontWeight: 'bold' }}>
                    Last Name
                    <input
                      className="contact__form--input"
                      type="text"
                      name='last_name'
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
                  <label className="contact__form--label" style={{ fontWeight: 'bold' }}>Gender:</label>
                  <select class="contact__form--input" name="gender" onChange={(e) => oninputChange(e)} defaultValue='haa' >
                    <option value={''}>Choose...</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Other</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label  className="contact__form--label"style={{ fontWeight: 'bold' }}>Martial Status</label>
                  <select class="contact__form--input" name="marital_status" onChange={(e) => oninputChange(e)} defaultValue='haa' >
                    <option value={''}>Choose...</option>
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
                  <label class="contact__form--label" name="age" onChange={(e) => oninputChange(e)} style={{ fontWeight: 'bold' }}>Date of Birth<span class=""></span>
                  </label>
                  <input class="contact__form--input" onChange={(e) => oninputChange(e)} placeholder="" name="date_of_birth" type="date" />

                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label className="contact__form--label" style={{ fontWeight: 'bold' }}>Profile Created By: </label>
                  <select class="contact__form--input" name='profile_created_by' onChange={(e) => oninputChange(e)} defaultValue='haa' >
                    <option value={''}>Choose...</option>
                    {profile.map((Profile) => (
                      <>

                        <option value={Profile.profile_created_id
                        }>{Profile.profilecreated
                          } </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label className="contact__form--label" style={{ fontWeight: 'bold' }}>
                    Mobile Number:
                    <input
                      className="contact__form--input"
                      name='mobile_no'
                      onChange={(e) => oninputChange(e)}
                      placeholder="mobile number"
                    />
                  </label>

                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label  className="contact__form--label"style={{ fontWeight: 'bold' }}>Mother Tounge:</label>



                  <select class="contact__form--input" defaultValue='haa' onChange={(e) => oninputChange(e)} name="mother_toungue">

                    <option>choose..</option>
                    {mother.map((Mother) => (
                      <>
                        <option value={Mother.mother_tounges_id}>{Mother.mothertounge}</option>
                      </>
                    )
                    )}

                  </select>
                </div>
              </div>
            </div>

            <div className="row d-flex">
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label  className="contact__form--label"style={{ fontWeight: 'bold' }}>
                    Email:<br></br>
                    <input
                      className="contact__form--input"

                      name='email'
                      onChange={(e) => oninputChange(e)}
                      placeholder="email"
                    />
                  </label>

                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form--list mb-20">
                  <label className="contact__form--label" style={{ fontWeight: 'bold' }}>
                    Password:<br></br>
                    <input
                      className="contact__form--input"
                      type="password"
                      name='password'
                      onChange={(e) => oninputChange(e)}
                      placeholder="password"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="row d-flex">

              <div class="account__login--remember">
                <input class="checkout__checkbox--input" id="check2" type="checkbox" />
                <label class="checkout__checkbox--label login__remember--label" for="check2">I have read and agree to the terms &amp; conditions</label>
              </div>
              <div>

                <button class="contact__form--btn primary__btn" type="submit" onClick={(e) => onSubmit(e)}>Submit & Free Register</button>
              </div>
            </div>

          </div>
          </div>

      }
    </div >
    


  )
}

export default Register