import React, { useEffect, useState } from "react";
import "./Search.css";
const Search = () => {
  const [Cast, SetCast] = useState([]);
  const [State, SetState] = useState([]);
  const [Height, SetHeight] = useState([]);
  const [Weight, SetWeight] = useState([]);
  const [Age, SetAge] = useState([]);
  const [WSector, SetWSector] = useState([]);
  const [MT, SetMT] = useState([]);
  const [viewSearch, SetviewSearch] = useState([]);

  const GetFilter = () => {
    fetch(
      "http://marriagebureau.ajspire.com/api/member/imformation/for_fillter"
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data.cast);
        console.log(data.state);
        console.log(data.height);
        console.log(data.weight);
        console.log(data.age);
        console.log(data.occupation);

        SetCast(data.cast);
        SetState(data.state);
        SetHeight(data.height);
        SetWeight(data.weight);
        SetAge(data.age);
        SetWSector(data.occupation);
      });
  };
  useEffect(() => {
    GetFilter();
  }, []);

  const GetMT = () => {
    fetch("http://marriagebureau.ajspire.com/api/get/mother_tounge")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data.data);

        SetMT(data.data);
      });
  };
  useEffect(() => {
    GetMT();
  }, []);

  const viewSearchs = (e) => {
    if (e === 1) {
      SetviewSearch(1);
    } else if (e === 0) {
      SetviewSearch(0);
    }
  };

  return (
    <div>
      <div className="container-search ">
        <div className="team-1 row p-5 mt-2 Basic-Filters ">
          <div className="text-center ">
            <h2 className="text-danger">
              <b style={{ color: "red" }}>Basic Filters</b>
            </h2>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Gender</label>
            <select
              aria-label="Default select example"
              name="gender"
              className="form-select form-select"
            >
              <option>Select Gender</option>
              <option>Male</option>
            </select>
          </div>
          <div className=" col-12 col-md-4 col-sm-6 px-1 my-3">
            <label className="form-label"> Caste</label>
            <select
              name="cast"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Caste</option>
              {Cast.map((scast) => (
                <option value={scast.caste_id}>{scast.caste}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Marital Status</label>
            <select
              name="marital_status"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Marital Status</option>
              <option>married</option>
              <option>Unmarried</option>
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Min Age</label>
            <select
              name="max_age"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Min Age</option>
              {Age.map((sage) => (
                <option value={sage.age_id}>{sage.age_name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Max Age</label>
            <select
              name="min_age"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Max Age</option>
              {Age.map((sage) => (
                <option value={sage.age_id}>{sage.age_name}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Mother Tounge</label>
            <select
              name="min_age"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Mother Tounge</option>
              {MT.map((SMT) => (
                <option value={SMT.mother_tounges_id}>
                  {SMT.mothertounge}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="team-2 row p-5 mt-4 Regional-Filters ">
          <div className="text-center ">
            <h2 className="text-danger">
              <b style={{ color: "red" }}>Regional Filters</b>
            </h2>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Employed In (Working Sector)</label>
            <select
              name="emploay"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Employed In (Working Sector)</option>
              {WSector.map((sws) => (
                <option value={sws.occupation_id}>{sws.occupation}</option>
              ))}

              <option value="Private">Private</option>
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">State Living In</label>
            <select
              name="state"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select State Living In</option>
              {State.map((el) => (
                <option value={el.state_id}>{el.state_name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">District Living In</label>
            <select
              name="district"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select District Living</option>

              <option>Select District Living</option>
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Taluka Living In</label>
            <select
              name="taluka"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Taluka Living</option>
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Village Living In</label>
            <select
              name="village"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Village Living</option>
              <option>Mhasobanagar</option>
            </select>
          </div>
        </div>
        <div className=" team-3 row p-5 mt-4 Physical-Appearance">
          <div className="text-center ">
            <h2 className="text-danger">
              <b style={{ color: "red" }}>Physical Appearance</b>
            </h2>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Height</label>
            <select
              name="height"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Height</option>
              {Height.map((sheight) => (
                <option>{sheight.height}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Weight</label>
            <select
              name="weight"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option value={0}>Select Weight</option>
              {Weight.map((sweight) => (
                <option value={sweight.weight_id}>{sweight.weight}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Body Type</label>
            <select
              name="body_type"
              aria-label="Default select example"
              className="form-select form-select"
            >
              <option>Select Body Type</option>
              <option value="Slim">Slim</option>
            </select>
          </div>
          <div className="col-md-4 px-1 my-3">
            <label className="form-label">Complextion (Body Color)</label>
            <select className="form-select form-select">
              <option>Select Complextion (Body Color)</option>
              <option>Very Fair</option>
            </select>
          </div>
        </div>
        <div className="team-4 p-5 mt-4 ">
          {viewSearch != 1 ? (
            <div className="col-md-12 text-center">
              <button
                className="btn btn-success mb-2 btn-lg "
                onClick={(e) => viewSearchs(1)}
              >
                Search
              </button>
            </div>
          ) : (
            <div className="col-md-12 text-center">
              <button
                className="btn btn-success mb-2 btn-lg"
                onClick={(e) => viewSearchs(0)}
              >
                Go Back{" "}
              </button>
            </div>
          )}
        </div>
      </div>
      {viewSearch === 1 ? (
        <div className="container mt-5">
          <div className="section__heading text-center mb-4" />
          <div className="team__container">
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 mb--n30">
              <div className="col-md-4 custom-col mb-4">
                <div className="container">
                  <div className="card shadow">
                    <div className="card-body">
                      <article className="team__card">
                        <div
                          className="team__card--thumbnail mx-auto"
                          style={{ height: "300px", width: "220px" }}
                        >
                          <img
                            className="team__card--thumbnail__img display-block"
                            src="https://admin.royalmarriagebureau.com/uploads/userimg/1695217396.jpg"
                            alt="team-thumb"
                            style={{ height: "300px" }}
                          />
                        </div>
                        <table className="mt-4 mx-auto">
                          <tbody>
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Birth Date</td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>1995-09-20 </td>
                            </tr>
                            <tr />
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Height</td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Not Assign meter.</td>
                            </tr>
                            <tr />
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Age </td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>28 Years </td>
                            </tr>
                            <tr />
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Occupation </td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Not Assign..</td>
                            </tr>
                            <tr />
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Education</td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>..</td>
                            </tr>
                            <tr />
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>employed_in</td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>..</td>
                            </tr>
                            <tr />
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>income</td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>/-</td>
                            </tr>
                            <tr />
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(204, 204, 204)",
                              }}
                            >
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Taluka</td>
                              <td>:</td>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td>Baramati..</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="text-center mt-4">
                          <a
                            className="btn btn-success mb-4"
                            href="/single_view/2"
                          >
                            View Profile
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Search;
