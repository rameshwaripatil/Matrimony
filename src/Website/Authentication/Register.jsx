import React, { useEffect, useState } from 'react';
import Authuser from './Authuser';

const Register = () => {
  const [mothert,setmothert] = useState([]);
  const [profile,setprofile] = useState([]);
  const {http,token}=Authuser();
  const MotherTounge =() => {
    http.get(`get/mother_tounge`)
    .then((response) => {
      setmothert(response.data.data);
      console.log(response.data.data);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error adding bride data:', error);         
    });
};
const ProfileCreated =() => {
  http.get(`get/profile_created_by`)
  .then((response) => {
    setprofile(response.data.data);
    console.log(response.data.data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error adding bride data:', error);         
  });
};
  
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    mob_no: '',
    address: '',
    password: '',
    confirmpassword: '',
    mother_tounges:'',
    profile_created_id:'',
  });

  console.log(formData);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('  http://marriagebureau.ajspire.com/api/front_user_register/send/massage', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json(); // Attempt to parse JSON
      })
      .then((data) => {
        console.log(data);
        // Handle the JSON response data
      })
      .catch((error) => {
        console.log("Error", error);
        // Handle the error, e.g., display an error message to the user
      });
  };
  useEffect(() => {
    MotherTounge();
    ProfileCreated();
  }, [token]);   
  return (
    <div>
      
      <div className="clearfix clear_1">
        <div className="col-sm-6 register_right_inner_1 space_left">
          <input
            type="text"
            className="form-control"
            name="name" 
            onChange={(e) => onInputChange(e)}
            placeholder="First Name *"
          />
        </div>
        <div className="col-sm-6 register_right_inner_1 space_left">
          <input
            type="text"
            className="form-control"
            name="lastname" 
            onChange={(e) => onInputChange(e)}
            placeholder="Last Name *"
          />
        </div>
      </div>
      <div className="clearfix clear_1">
        <div className="col-sm-6 register_right_inner_1 space_left">
          <input
            type="text"
            className="form-control"
            name="email" 
            onChange={(e) => onInputChange(e)}
            placeholder="Email *"
          />
        </div>
        <div className="col-sm-6 register_right_inner_1 space_left">
          <input
            type="text"
            className="form-control"
            name="mob_no" 
            onChange={(e) => onInputChange(e)}
            placeholder="Mobile *"
          />
        </div>
      </div>
      <div className="clearfix clear_1">
        <div className="col-sm-6 register_right_inner_1 space_left">
          <input
            type="text"
            className="form-control"
            name="address" 
            onChange={(e) => onInputChange(e)}
            placeholder="address"
          />
        </div>
          <div className="col-sm-6 register_right_inner_1 space_left">
            <label class="contact__form--label">Mother Tounge</label>
            <select class="contact__form--input" name="mother_toungue"  onChange={(e) => onInputChange(e)}>
              <option value="">Choose...</option>
              {mothert.map((el)=>
              (
                <option value={el.mother_tounges_id}>{el.mothertounge}</option>
              ))

              }
              </select></div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="contact__form--list mb-20">
            <label class="contact__form--label">Date of Birth</label>
          <input class="contact__form--input" placeholder="" name="date_of_birth" type="date"/></div>
          <div class="contact__form--list mb-20">
            <label class="contact__form--label">Profile Created By</label>
            
            <select class="contact__form--input" name="profile_created_by" onChange={(e) => onInputChange(e)}>
              <option value="">Choose...</option>
              {
                profile.map((el)=>(
                  <option value={el.profile_created_id}>{el.profilecreated}</option>
                ))
              }
              </select></div></div>
        <div className="clearfix clear_1">
        <div className="col-sm-6 register_right_inner_1 space_left">
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => onInputChange(e)}
            placeholder="Password"
            required
          />
        </div>
        <div className="col-sm-6 register_right_inner_1 space_left">
        
          <input
            type="password"
            className="form-control"
            name="confirmpassword"
            onChange={(e) => onInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
        </div>
      
      <div className="clearfix col-sm-12 clear_2">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={(e) => onSubmit(e)}
        >
          Sign Up
        </button>
      </div>
     
    </div>
  );
};

export default Register;
