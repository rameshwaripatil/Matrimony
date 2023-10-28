import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import { Form } from 'react-router-dom';

const Search = () => {
  const {http,token}=Authuser();
  const [cast,setCast]=useState([]);
  const [weight,setWeight]=useState([]);
  const [height,setHeight]=useState([]);
  const [age,setAge]=useState([]);
  const[state,setState]=useState([]);
  const [employee,setEmployee]=useState([]);
  const [village,setVillage]=useState([]);
  const [district,setDistrict]=useState([]);
  const [taluka,setTaluka]=useState([]);
   const [Nakshatra, SetNakshatra] = useState([]);
  const [Raasi, SetRaasi] = useState([]);

  const Filter = ()=>{ 
    http.get(`member/imformation/for_fillter`)
  .then((response) => {
    setCast(response.data.cast);
    setAge(response.data.age);
    setHeight(response.data.height);
    setWeight(response.data.weight);
    setState(response.data.state);
    setEmployee(response.data.occupation);
       SetNakshatra(response.data.nakshtra);
        SetRaasi(response.data.rashi);
console.log(response.data.occupation)
    console.log(response.data.height);
    console.log(response.data.state);
    console.log(response.data.weight);
    console.log(response.data.cast);
    console.log(response.data.age);
     console.log(response.data.nakshtra);
      console.log(response.data.rashi);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error  data:', error);
  });
};

 const Village =(id)=>
 {
  http.get(`get/village/${id}`)
  .then((response) => {
    setVillage(response.data.village);
    console.log(response.data.village);

  }
  )
  .catch((error) => {
    // Handle errors
    console.error('Error  data:', error);
  });
 }
 const District =(id)=>
 {
  http.get(`get/distrct/${id}`)
  .then((response) => {
    setDistrict(response.data.district);
    console.log(response.data.district);

  }
  )
  .catch((error) => {
    // Handle errors
    console.error('Error  data:', error);
  });
 }
 const Taluka =(id)=>
 {
  http.get(`get/taluka/${id}`)
  .then((response) => {
    setTaluka(response.data.talukas);
    console.log(response.data.talukas);

  }
  )
  .catch((error) => {
    // Handle errors
    console.error('Error  data:', error);
  });
 }
 const [Data, SetFillter] = useState({
    gender: "0",
    cast: "0",
    marital_status: "0",
    max_age: "0",
    min_age: "0",
    emploay: "0",
    state: "0",
    height: "0",
    weight: "0",
    body_type: "0",
    body_color: "0",
  });
useEffect(() => {
  Filter();
  District();
  Taluka();
  Village();
}, [token])
  return (
    <div>

      <div class="container">
        <div class=" table_card row bg-black p-5 mt-5">
          <div class="text-center">
            <h2 class="text-danger"> <b>Basic Filters</b> </h2>
          </div>
          <div class="col-lg-4  col-md-4 px-1 my-3" >

            <label class="form-label">Gender</label>
            <select aria-label="Default select example" name="gender" class="form-select form-select-lg">
              <option value="0">Select Gender</option>
              <option value="2">Male</option>
              <option value="1">Female</option>
              <option value="3">Other</option>
            </select>
          </div>
          
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label className="form-label"> Caste</label>
            <select name="cast" aria-label="Default select example" className="form-select form-select-lg">
              <option value={0}>Select Caste</option>
              {cast.map((el)=>(
              <option value={el.caste_id}>{el.caste}</option>
              ))}
              </select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label className="form-label">Marital Status</label><select name="marital_status" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Marital Status</option><option value={1}>Unmarried</option><option value={2}>Divorced</option><option value={3}>Widowed</option><option value={4}>Separated</option></select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3" >
            <label className="form-label">Min Age</label>
            <select name="max_age" aria-label="Default select example" className="form-select form-select-lg">
              <option value={0}>Select Min Age</option>
              { age.map((el)=>(
              <option value={el.age_id}>{el.age_name}</option>
              ))}
              </select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label className="form-label">Max Age</label><select name="min_age" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Max Age</option>  { age.map((el)=>(
              <option value={el.age_id}>{el.age_name}</option>
              ))}
              </select></div>
              </div>
        
        <div class=" table_card row bg-black p-5 mt-5">
          <div class="text-center">
            <h2 class="text-danger"> <b>Regional Filters</b> </h2>
          </div>
          <div class="col-lg-4 col-sm-12  col-md-4 px-1 my-3" >

            <label class="form-label">Employed In (Working Sector)</label>
            <select name="emploay" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Employed In (Working Sector)</option>
            {employee.map((el)=>(
 <option value={el.occupation_id}>{el.occupation}</option>
            ))}</select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">State Living In</label>
            <select name="state" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select State Living In</option>
              {state.map((el)=>(
              <option value={el.state_id}>{el.state_name}</option>
              ))}</select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">District Living In</label>
            <select name="district" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select District Living</option></select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">Taluka Living In</label>
            <select name="taluka" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Taluka Living</option></select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">Village Living In</label>
            <select name="village" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Village Living</option>
            </select>
          </div>

        </div>
        <div class=" table_card row bg-black p-5 mt-5">
          <div class="text-center">
            <h2 class="text-danger"><b>Physical Appearance</b></h2>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">Height</label>
            <select name="height" aria-label="Default select example" class="form-select form-select-lg">
              <option value="0">Select Height</option>
              {height.map((el)=>(
              <option value={el.height_id}>{el.height}</option>
              ))}
              </select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">Weight</label>
            <select name="height" aria-label="Default select example" class="form-select form-select-lg">
              <option value="0">Select Weight</option>
              {weight.map((el)=>(
              <option value={el.weight_id}>{el.weight}</option>
              ))}
              </select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">Body Type</label>
            <select name="body_type" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Body Type</option><option value="Slim">Slim</option><option value="Average">Average</option><option value="Athletic">Athletic</option><option value="Heavy">Heavy</option></select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">Complextion (Body Color)</label>
            <select name="body_color" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Complextion (Body Color)</option><option value="Very Fair">Very Fair</option><option value="Fair">Fair</option><option value="Wheatish">Wheatish</option><option value="Wheatish Brown">Wheatish Brown</option><option value="Dark">Dark</option></select></div>
        </div>
        <div class=" table_card row bg-black p-5 mt-5">
          <div class="col-md-12 text-center"><button class="btn btn-success mb-2 btn-lg">Search</button></div>
        </div>
        </div>
        </div>
      
      

  )

}

export default Search