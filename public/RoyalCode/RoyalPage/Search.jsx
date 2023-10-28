import React from "react";
import { useEffect } from "react";
import AuthUser from "../../auth/Authuser";
import { useState } from "react";
import { Form } from "react-bootstrap";
import GroomsBrides from "../cmp/GroomsBrides";

function Search() {
  const { http } = AuthUser();
  const [Member, SetMember] = useState([]);
  const [Cast, SetCast] = useState([]);
  const [Age, SetAge] = useState([]);
  const [State, SetState] = useState([]);
  const [District, SetDistrict] = useState([]);
  const [Talukas, SetTalukas] = useState([]);
  const [Village, SetVillage] = useState([]);
  const [Height, SetHeight] = useState([]);
  const [Weight, SetWeight] = useState([]);
  const [Nakshatra, SetNakshatra] = useState([]);
  const [Raasi, SetRaasi] = useState([]);
  const [Dis, SetDis] = useState("");
  const [Tal, SetTal] = useState("");
  const [vil, Setvil] = useState("");
  const [Show, SetShow] = useState(0);

  useEffect(() => {
    http
      .get(`/get_curd_all_imformation/for_fillter`)
      .then((res) => {
        SetCast(res.data.cast);
        SetAge(res.data.age);
        SetState(res.data.state);
        SetHeight(res.data.height);
        SetWeight(res.data.weight);
        SetNakshatra(res.data.nakshtra);
        SetRaasi(res.data.rashi);
      })
      .catch((e) => {
        console.log(e);
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }, []);

  // fillteer data
  const pp = {
    district: Dis,
    taluka: Tal,
    village: vil,
  };
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

  const OnInputs = (e) => {
    SetFillter({ ...Data, [e.target.name]: e.target.value });
  };
  // fillter Result
  const Submit_Search = () => {
    const mergedData = {
      ...Data,
      ...pp,
    };
    http
      .post(`/get/fillter/data`, mergedData)
      .then((res) => {
        SetMember(res.data);
        SetShow(1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // State_lieving funtion
  const State_lieving = (e) => {
    SetDis(e);
    http
      .get(`/get/state/liveing/${e}`)
      .then((res) => {
        SetDistrict(res.data.district);
        Taluka(res.data.district[0].dist_id)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const Taluka = (e) => {
    SetTal(e);
    http
      .get(`/get/taluka/liveing/${e}`)
      .then((res) => {
        SetTalukas(res.data.talukas);
        Villages(res.data.talukas[0].taluka_id)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const Villages = (e) => {
    Setvil(e);
    http
      .get(`/get/village/liveing/${e}`)
      .then((res) => {
        SetVillage(res.data.village);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  if (Show === 1) {
    return (
      <>
        <section className="team__section my-5">
          <div className="container">
            <div className="section__heading text-center mb-50 d-flex justify-content-between">
              <h2 className="section__heading--maintitle text__secondary mb-10">
                Search Result
              </h2>
              <button
                className="banner__video--btn primary__btn"
                onClick={() => SetShow(0)}
              >
                Back To Search
              </button>
            </div>
            <div className="team__container">
              <div className="row row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30">
                {Member.map((item, index) => (
                  <GroomsBrides
                    key={index}
                    img={item.member_user_img1}
                    name={item.name}
                    dist_name={item.dist_name}
                    member_highest_education={item.member_highest_education}
                    state_name={item.state_name}
                    age={item.age}
                    member_employed_in={item.member_employed_in}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="my-5">
          <div className="container card">
            <div className="team__card row p-5 mt-4">
              <div className="text-center mt-3">
                <h2 className="text-danger">Basic Filters</h2>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  size="lg"
                  name="gender"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Gender</option>
                  <option value="2">Male</option>
                  <option value="1">Female</option>
                  <option value="3">Other</option>
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label> Caste</Form.Label>
                <Form.Select
                  name="cast"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Caste</option>
                  {Cast.map((item, index) => (
                    <option value={item.caste_id} key={index}>
                      {item.caste}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Marital Status</Form.Label>
                <Form.Select
                  name="marital_status"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Marital Status</option>
                  <option value="1">Unmarried</option>
                  <option value="2">Divorced</option>
                  <option value="3">Widowed</option>
                  <option value="4">Separated</option>
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Min Age</Form.Label>
                <Form.Select
                  name="max_age"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Min Age</option>
                  {Age.map((item, index) => (
                    <option value={item.age_name} key={index}>
                      {item.age_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Max Age</Form.Label>
                <Form.Select
                  name="min_age"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Max Age</option>
                  {Age.map((item, index) => (
                    <option value={item.age_name} key={index}>
                      {item.age_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>
            <div className="team__card row p-5 mt-4">
              <div className="text-center mt-3">
                <h2 className="text-danger">Regional Filters</h2>
              </div>

              <div className="col-md-4 px-1 my-3">
                <Form.Label>Employed In (Working Sector)</Form.Label>
                <Form.Select
                  name="emploay"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Employed In (Working Sector)</option>
                  <option value="Government">Government</option>
                  <option value="Private">Private</option>
                  <option value="Business">Business</option>
                  <option value="Defence">Defence</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Not Working">Not Working</option>
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>State Living In</Form.Label>
                <Form.Select
                  name="state"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => State_lieving(e.target.value)}
                >
                  <option value={0}>Select State Living In</option>
                  {State.map((item, index) => (
                    <option value={item.state_id} key={index}>
                      {item.state_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>District Living In</Form.Label>
                <Form.Select
                  name="district"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => Taluka(e.target.value)}
                >
                  <option value={0}>Select District Living</option>
                  {District.map((item, index) => (
                    <option value={item.dist_id} key={index}>
                      {item.dist_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Taluka Living In</Form.Label>
                <Form.Select
                  name="taluka"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => Villages(e.target.value)}
                >
                  <option value={0}>Select Taluka Living</option>
                  {Talukas.map((item, index) => (
                    <option value={item.taluka_id} key={index}>
                      {item.taluka_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Village Living In</Form.Label>
                <Form.Select
                  name="village"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Village Living</option>
                  {Village.map((item, index) => (
                    <option value={item.village_id} key={index}>
                      {item.village_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div className="row team__card p-5 mt-4">
              <div className="text-center mt-3">
                <h2 className="text-danger">Physical Appearance</h2>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Height</Form.Label>
                <Form.Select
                  name="height"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Height</option>
                  {Height.map((item, index) => (
                    <option value={item.height_id} key={index}>
                      {item.height}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Weight</Form.Label>
                <Form.Select
                  name="weight"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Weight</option>
                  {Weight.map((item, index) => (
                    <option value={item.weight_id} key={index}>
                      {item.weight}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Body Type</Form.Label>
                <Form.Select
                  name="body_type"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Body Type</option>
                  <option value="Slim">Slim</option>
                  <option value="Average">Average</option>
                  <option value="Athletic">Athletic</option>
                  <option value="Heavy">Heavy</option>
                </Form.Select>
              </div>
              <div className="col-md-4 px-1 my-3">
                <Form.Label>Complextion (Body Color)</Form.Label>
                <Form.Select
                  name="body_color"
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) => OnInputs(e)}
                >
                  <option value={0}>Select Complextion (Body Color)</option>
                  <option value="Very Fair">Very Fair</option>
                  <option value="Fair">Fair</option>
                  <option value="Wheatish">Wheatish</option>
                  <option value="Wheatish Brown">Wheatish Brown</option>
                  <option value="Dark">Dark</option>
                </Form.Select>
              </div>
             
            </div>

         
            <div className="team__card row p-5 mt-4">
              <div className="col-md-12 text-center">
                <button
                  className="btn btn-success mb-2 btn-lg"
                  onClick={() => Submit_Search()}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;
