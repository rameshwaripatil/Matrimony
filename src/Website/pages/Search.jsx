import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';

const Search = () => {
  const {http,token}=Authuser();
  const [cast,setCast]=useState([]);
  const [weight,setWeight]=useState([]);
  const [height,setHeight]=useState([]);
  const [age,setAge]=useState([]);
  const[state,setState]=useState([]);

  const Filter = ()=>{ 
    http.get(`member/imformation/for_fillter`)
  .then((response) => {
    setCast(response.data.cast);
    setAge(response.data.age);
    setHeight(response.data.height);
    setWeight(response.data.weight);
    setState(response.data.state);
    console.log(response.data.height);
    console.log(response.data.state);
    console.log(response.data.weight);
    console.log(response.data.cast);
    console.log(response.data.age);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error  data:', error);
  });
};
useEffect(() => {
  Filter();
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
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option><option value={23}>23</option>
              <option value={24}>24</option><option value={25}>25</option>
              <option value={26}>26</option><option value={27}>27</option>
              <option value={28}>28</option><option value={29}>29</option>
              <option value={30}>30</option><option value={31}>31</option>
              <option value={32}>32</option><option value={33}>33</option>
              <option value={34}>34</option><option value={35}>35</option>
              <option value={36}>36</option><option value={37}>37</option>
              <option value={38}>38</option><option value={39}>39</option>
              <option value={40}>40</option><option value={41}>41</option>
              <option value={42}>42</option><option value={43}>43</option>
              <option value={44}>44</option><option value={45}>45</option>
              <option value={46}>46</option><option value={47}>47</option>
              <option value={48}>48</option><option value={49}>49</option>
              <option value={50}>50</option><option value={51}>51</option>
              <option value={52}>52</option><option value={53}>53</option>
              <option value={54}>54</option><option value={55}>55</option>
              <option value={56}>56</option><option value={57}>57</option>
              <option value={58}>58</option><option value={59}>59</option>
              <option value={60}>60</option>
              </select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label className="form-label">Max Age</label><select name="min_age" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Max Age</option><option value={18}>18</option><option value={19}>19</option><option value={20}>20</option><option value={21}>21</option><option value={22}>22</option><option value={23}>23</option><option value={24}>24</option><option value={25}>25</option><option value={26}>26</option><option value={27}>27</option><option value={28}>28</option><option value={29}>29</option><option value={30}>30</option><option value={31}>31</option><option value={32}>32</option><option value={33}>33</option><option value={34}>34</option><option value={35}>35</option><option value={36}>36</option><option value={37}>37</option><option value={38}>38</option><option value={39}>39</option><option value={40}>40</option><option value={41}>41</option><option value={42}>42</option><option value={43}>43</option><option value={44}>44</option><option value={45}>45</option><option value={46}>46</option><option value={47}>47</option><option value={48}>48</option><option value={49}>49</option><option value={50}>50</option><option value={51}>51</option><option value={52}>52</option><option value={53}>53</option><option value={54}>54</option><option value={55}>55</option><option value={56}>56</option><option value={57}>57</option><option value={58}>58</option><option value={59}>59</option><option value={60}>60</option></select></div>
        </div>
        
        <div class=" table_card row bg-black p-5 mt-5">
          <div class="text-center">
            <h2 class="text-danger"> <b>Regional Filters</b> </h2>
          </div>
          <div class="col-lg-4 col-sm-12  col-md-4 px-1 my-3" >

            <label class="form-label">Employed In (Working Sector)</label>
            <select name="emploay" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Employed In (Working Sector)</option><option value="Government">Government</option><option value="Private">Private</option><option value="Business">Business</option><option value="Defence">Defence</option><option value="Self Employed">Self Employed</option><option value="Not Working">Not Working</option></select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">State Living In</label>
            <select name="state" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select State Living In</option><option value="0">Not Assign</option><option value="1">Maharashtra</option><option value="2">Goa</option><option value="3">Karnataka</option></select>
          </div>
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
            <select name="village" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Village Living</option></select>
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
            <select name="weight" aria-label="Default select example" class="form-select form-select-lg">
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