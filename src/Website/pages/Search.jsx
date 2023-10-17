import React from 'react'

const Search = () => {
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
              <option value={1}>Not Assign</option>
              <option value={2}>Brahmin - Audichya</option>
              <option value={3}>Brahmin - Anaviln Desai</option>
              <option value={4}>Brahmin - Anavil</option>
              <option value={5}>Brahmbatt</option>
              <option value={6}>Boyar</option>
              <option value={7}>Bondili</option>
              <option value={8}>Bishnoi/Vishnoi</option>
              <option value={9}>Billava</option>
              <option value={10}>Bhoyar</option>
              <option value={11}>Bhovi</option>
              <option value={12}>Bhoi</option><
                option value={13}>Bhavasar Kshatriya</option>
              <option value={14}>Bhatraju</option>
              <option value={15}>Bhatia</option></select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label className="form-label">Marital Status</label><select name="marital_status" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Marital Status</option><option value={1}>Unmarried</option><option value={2}>Divorced</option><option value={3}>Widowed</option><option value={4}>Separated</option></select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3" >
            <label className="form-label">Min Age</label><select name="max_age" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Min Age</option><option value={18}>18</option><option value={19}>19</option><option value={20}>20</option><option value={21}>21</option><option value={22}>22</option><option value={23}>23</option><option value={24}>24</option><option value={25}>25</option><option value={26}>26</option><option value={27}>27</option><option value={28}>28</option><option value={29}>29</option><option value={30}>30</option><option value={31}>31</option><option value={32}>32</option><option value={33}>33</option><option value={34}>34</option><option value={35}>35</option><option value={36}>36</option><option value={37}>37</option><option value={38}>38</option><option value={39}>39</option><option value={40}>40</option><option value={41}>41</option><option value={42}>42</option><option value={43}>43</option><option value={44}>44</option><option value={45}>45</option><option value={46}>46</option><option value={47}>47</option><option value={48}>48</option><option value={49}>49</option><option value={50}>50</option><option value={51}>51</option><option value={52}>52</option><option value={53}>53</option><option value={54}>54</option><option value={55}>55</option><option value={56}>56</option><option value={57}>57</option><option value={58}>58</option><option value={59}>59</option><option value={60}>60</option></select></div>
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
            <select name="height" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Height</option><option value="1">Not Assign</option><option value="2">Below 4ft 6in - 137cm</option><option value="3">4ft 7in - 139cm</option><option value="4">4ft 8in - 142cm</option><option value="5">4ft 9in - 144cm</option><option value="6">4ft 10in - 147cm</option><option value="7">4ft 11in - 149cm</option><option value="8">5ft - 152cm</option><option value="9">5ft 1in - 154cm</option><option value="10">5ft 2in - 157cm</option><option value="11">5ft 3in - 160cm</option><option value="12">5ft 4in - 162cm</option><option value="13">5ft 5in - 165cm</option><option value="14">5ft 6in - 167cm</option><option value="15">5ft 7in - 170cm</option><option value="16">5ft 8in - 172cm</option><option value="17">5ft 9in - 175cm</option><option value="18">5ft 10in - 177cm</option><option value="19">5ft 11in - 180cm</option><option value="20">6ft - 182cm</option><option value="21">6ft 1in - 185cm</option><option value="22">6ft 2in - 187cm</option><option value="23">6ft 3in - 190cm</option><option value="24">6ft 4in - 193cm</option><option value="25">6ft 5in - 195cm</option><option value="26">6ft 6in - 198cm</option><option value="27">6ft 7in - 200cm</option><option value="28">6ft 8in - 203cm</option><option value="29">6ft 9in - 205cm</option><option value="30">6ft 10in - 208cm</option><option value="31">6ft 11in - 210cm</option><option value="32">7ft - 213cm</option><option value="33">Above 7ft - 213cm</option></select>
          </div>
          <div class="col-lg-4 col-md-4 px-1 my-3">
            <label class="form-label">Weight</label>
            <select name="weight" aria-label="Default select example" class="form-select form-select-lg"><option value="0">Select Weight</option><option value="1">Not Assign</option><option value="2">41 kg</option><option value="3">42 kg</option><option value="4">43 kg</option><option value="5">44 kg</option><option value="6">45 kg</option><option value="7">46 kg</option><option value="8">47 kg</option><option value="9">48 kg</option><option value="10">49 kg</option><option value="11">50 kg</option><option value="12">51 kg</option><option value="13">52 kg</option><option value="14">53 kg</option><option value="15">54 kg</option><option value="16">55 kg</option><option value="17">56 kg</option><option value="18">57 kg</option><option value="19">58 kg</option><option value="20">59 kg</option><option value="21">60 kg</option><option value="22">61 kg</option><option value="23">62 kg</option><option value="24">63 kg</option><option value="25">64 kg</option><option value="26">65 kg</option><option value="27">66 kg</option><option value="28">67 kg</option><option value="29">68 kg</option><option value="30">69 kg</option><option value="31">70 kg</option><option value="32">71 kg</option><option value="33">72 kg</option><option value="34">73 kg</option><option value="35">74 kg</option><option value="36">75 kg</option><option value="37">76 kg</option><option value="38">77 kg</option><option value="39">78 kg</option><option value="40">79 kg</option><option value="41">80 kg</option><option value="42">81 kg</option><option value="43">82 kg</option><option value="44">83 kg</option><option value="45">84 kg</option><option value="46">85 kg</option><option value="47">86 kg</option><option value="48">87 kg</option><option value="49">88 kg</option><option value="50">89 kg</option><option value="51">90 kg</option><option value="52">91 kg</option><option value="53">92 kg</option><option value="54">93 kg</option><option value="55">94 kg</option><option value="56">95 kg</option><option value="57">96 kg</option><option value="58">97 kg</option><option value="59">98 kg</option><option value="60">99 kg</option><option value="61">100 kg</option><option value="62">101 kg</option><option value="63">102 kg</option><option value="64">103 kg</option><option value="65">104 kg</option><option value="66">105 kg</option><option value="67">106 kg</option><option value="68">107 kg</option><option value="69">108 kg</option><option value="70">109 kg</option></select>
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