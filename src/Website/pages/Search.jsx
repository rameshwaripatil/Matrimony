import React from 'react'

const Search = () => {
  return (
    <div>

      <div class="container">
        <div class=" table_card row bg-black p-5 mt-5">
          <div class="text-center">
            <h2 class="text-danger">Basic Filters</h2>
          </div>
          <div class="col-lg-4" style={{ width: "33.33333333%" }}>

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
              <option value={0}>Select Caste</option><option value={1}>Not Assign</option><option value={2}>Brahmin - Audichya</option><option value={3}>Brahmin - Anaviln Desai</option><option value={4}>Brahmin - Anavil</option><option value={5}>Brahmbatt</option><option value={6}>Boyar</option><option value={7}>Bondili</option><option value={8}>Bishnoi/Vishnoi</option><option value={9}>Billava</option><option value={10}>Bhoyar</option><option value={11}>Bhovi</option><option value={12}>Bhoi</option><option value={13}>Bhavasar Kshatriya</option><option value={14}>Bhatraju</option><option value={15}>Bhatia</option><option value={16}>Bhandari</option><option value={17}>Besta</option><option value={18}>Beri Chettiar</option><option value={19}>Barujibi</option><option value={20}>Barnwal</option><option value={21}>Baria</option><option value={22}>Bari</option><option value={23}>Barai</option><option value={24}>Banjara</option><option value={25}>Baniya - Kumuti</option><option value={26}>Baniya - Bania</option><option value={27}>Baniya</option><option value={28}>Banik</option><option value={29}>Banayat Oriya</option><option value={30}>Balija Reddy</option><option value={31}>Balija Naidu</option><option value={32}>Balija</option><option value={33}>Balai</option><option value={34}>Bajantri</option><option value={35}>Baishya</option><option value={36}>Baishnab</option><option value={37}>Bairwa</option><option value={38}>Baidya</option><option value={39}>Bagdi</option><option value={40}>Badaga</option><option value={41}>Ayyaraka</option><option value={42}>Ayodhyavasi</option><option value={43}>Ayira Vysya</option><option value={44}>Asathi</option><option value={45}>Arya Vysya</option><option value={46}>Arunthathiyar</option><option value={47}>Arora</option><option value={48}>Arekatica</option><option value={49}>Aramari / Gabit</option><option value={50}>Anjana (Chowdary) Patel</option><option value={51}>Ambalavasi</option><option value={52}>Ahom</option><option value={53}>Ahirwar</option><option value={54}>Ahir Shimpi</option><option value={55}>Agri</option><option value={56}>Agrahari</option><option value={57}>Agnikula Kshatriya</option></select>
          </div>
          <div class="col-lg-4 col-md-4">
            <label className="form-label">Marital Status</label><select name="marital_status" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Marital Status</option><option value={1}>Unmarried</option><option value={2}>Divorced</option><option value={3}>Widowed</option><option value={4}>Separated</option></select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3" style={{ width: "33.33333333%" }}>
            <label className="form-label">Min Age</label><select name="max_age" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Min Age</option><option value={18}>18</option><option value={19}>19</option><option value={20}>20</option><option value={21}>21</option><option value={22}>22</option><option value={23}>23</option><option value={24}>24</option><option value={25}>25</option><option value={26}>26</option><option value={27}>27</option><option value={28}>28</option><option value={29}>29</option><option value={30}>30</option><option value={31}>31</option><option value={32}>32</option><option value={33}>33</option><option value={34}>34</option><option value={35}>35</option><option value={36}>36</option><option value={37}>37</option><option value={38}>38</option><option value={39}>39</option><option value={40}>40</option><option value={41}>41</option><option value={42}>42</option><option value={43}>43</option><option value={44}>44</option><option value={45}>45</option><option value={46}>46</option><option value={47}>47</option><option value={48}>48</option><option value={49}>49</option><option value={50}>50</option><option value={51}>51</option><option value={52}>52</option><option value={53}>53</option><option value={54}>54</option><option value={55}>55</option><option value={56}>56</option><option value={57}>57</option><option value={58}>58</option><option value={59}>59</option><option value={60}>60</option></select></div>
          <div class="col-lg-4 col-md-4 px-1 my-3" style={{ width: "33.33333333%" }}>
            <label className="form-label">Max Age</label><select name="min_age" aria-label="Default select example" className="form-select form-select-lg"><option value={0}>Select Max Age</option><option value={18}>18</option><option value={19}>19</option><option value={20}>20</option><option value={21}>21</option><option value={22}>22</option><option value={23}>23</option><option value={24}>24</option><option value={25}>25</option><option value={26}>26</option><option value={27}>27</option><option value={28}>28</option><option value={29}>29</option><option value={30}>30</option><option value={31}>31</option><option value={32}>32</option><option value={33}>33</option><option value={34}>34</option><option value={35}>35</option><option value={36}>36</option><option value={37}>37</option><option value={38}>38</option><option value={39}>39</option><option value={40}>40</option><option value={41}>41</option><option value={42}>42</option><option value={43}>43</option><option value={44}>44</option><option value={45}>45</option><option value={46}>46</option><option value={47}>47</option><option value={48}>48</option><option value={49}>49</option><option value={50}>50</option><option value={51}>51</option><option value={52}>52</option><option value={53}>53</option><option value={54}>54</option><option value={55}>55</option><option value={56}>56</option><option value={57}>57</option><option value={58}>58</option><option value={59}>59</option><option value={60}>60</option></select></div>
        </div>
        <div class=" table_card row bg-black p-5 mt-5">
          <div class="text-center">
            <h2 class="text-danger">Regional Filters</h2>
          </div>

        </div>
      </div>

    </div>

  )

}

export default Search