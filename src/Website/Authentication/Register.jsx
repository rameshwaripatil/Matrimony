import React, { useState } from 'react'

const Register = () => {
  const[formData,setformData]=useState({
    name:'',
    email:'',
    mob_no:'',
    address:'',
    password:'',
    confirmpassword:''

  });  

  console.log(formData);
  const onInputChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('http://marriagebureau.ajspire.com/api/front_user_register', {
      method: 'POST',
      body: JSON.stringify(formData),  // Convert formData to JSON string
      headers: {
        'Content-Type': 'application/json',  // Specify content type as JSON
        // Include other headers if needed
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
<div>
  <section id="about_heading" className="about_register">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="about_heading">
            <h5><a href="#">Home</a> <span>//</span>Register</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="register" className="clearfix">
    <div className="register clearfix">
      <div className="col-sm-5 space_left">
        <div className="register_left">
          <div className="card-image"><img src="https://images.unsplash.com/photo-1654156577076-e0350ba86cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww&w=1000&q=80" style={{height:"700px"}} width="100%" /></div>
        </div>
      </div>
      <div className="col-sm-7">
        <div className="register_right">
          <h3>Sign Up</h3>
          <hr />
          <div className="register_right_inner clearfix">
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" onChange={(e)=>onInputChange(e)} placeholder="First Name *" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control"  onChange={(e)=>onInputChange(e)}placeholder="Last Name *" />
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" onChange={(e)=>onInputChange(e)} placeholder="Email *" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" onChange={(e)=>onInputChange(e)} placeholder="Mobile *" />
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" onChange={(e)=>onInputChange(e)} placeholder="Location *" />
              </div>
              {/* <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" onChange={(e)=>onInputChange(e)} id="cal_1" placeholder="Date of Birth" />
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option>Search For</option>
                  <option>Lorem</option>
                  <option>Ipsum </option>
                  <option>Dolor</option>
                  <option>Amet</option>
                  <option>Consectetur </option>
                  <option>Elit</option>
                </select>
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Religion">Religion</option>
                  <option>Hindu</option>
                  <option>Muslim </option>
                  <option>Christan</option>
                  <option>Sikh</option>
                  <option>Buddha </option>
                </select>
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Caste" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Marital Status">Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                </select>
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Gender">Upload Photo</option>
                  <option value="Male">Lorem</option>
                  <option value="Female">Ipsum</option>
                </select>
              </div>
            </div> */}
            {/* <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Captcha Code" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <h4>FBGRE</h4>
              </div>
            </div> */}
            <div className="clearfix col-sm-12 clear_2">
            <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>onSubmit(e)}>Sign Up</button>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section></div>

    </div>
  )
}

export default Register