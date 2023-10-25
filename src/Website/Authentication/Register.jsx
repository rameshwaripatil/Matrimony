import React, { useEffect, useState } from 'react';
import Authuser from './Authuser';
import "./Register.css"

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
  
    <div  className="registration-page">
    <div className="registration-container form-section">
      <div className="column-sm-6 registration-input">
      <h1 className="text-center">Register Here</h1>

        <input
          type="text"
          className="form-control"
          name="first_name"
          onChange={(e) => onInputChange(e)}
          placeholder="First Name *"
        />
      </div>
      <div className="column-sm-6 registration-input">
        <input
          type="text"
          className="form-control"
          name="last_name"
          onChange={(e) => onInputChange(e)}
          placeholder="Last Name *"
        />
      </div>
    
    <div className="form-section clear-fix">
      <div className="column-sm-6 registration-input">
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={(e) => onInputChange(e)}
          placeholder="Email *"
        />
      </div>
      <div className="column-sm-6 registration-input">
        <input
          type="text"
          className="form-control"
          name="mobile_number"
          onChange={(e) => onInputChange(e)}
          placeholder="Mobile *"
        />
      </div>
    </div>
    <div className="form-section clear-fix">
      <div className="column-sm-6 registration-input">
        <input
          type="text"
          className="form-control"
          name="address"
          onChange={(e) => onInputChange(e)}
          placeholder="Address"
        />
      </div>
      <div className="column-sm-6 registration-input">
        <label className="form-label">Mother Tongue</label>
        <select
          className="form-input"
          name="mother_tongue"
          onChange={(e) => onInputChange(e)}
        >
          <option value="">Choose...</option>
          {mothert.map((el) => (
            <option value={el.mother_tongues_id}>{el.mother_tongue}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="column-lg-6 column-md-6">
      <div className="form-list mb-20">
        <label className="form-label">Date of Birth</label>
        <input className="form-input" placeholder="" name="date_of_birth" type="date" />
      </div>
      <div className="form-list mb-20">
        <label className="form-label">Profile Created By</label>
        <select
          className="form-input"
          name="profile_created_by"
          onChange={(e) => onInputChange(e)}
        >
          <option value="">Choose...</option>
          {profile.map((el) => (
            <option value={el.profile_created_id}>{el.profile_created}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="form-section clear-fix">
      <div className="column-sm-6 registration-input">
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={(e) => onInputChange(e)}
          placeholder="Password"
          required
        />
      </div>
      <div className="column-sm-6 registration-input">
        <input
          type="password"
          className="form-control"
          name="confirm_password"
          onChange={(e) => onInputChange(e)}
          placeholder="Confirm Password"
        />
      </div>
    </div>
    <div className="clear-fix column-sm-12 form-section">
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={(e) => onSubmit(e)}
      >
        Sign Up
      </button>
    </div>
  </div>
  </div>
  
  );
};

export default Register;
