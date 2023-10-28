import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function GroomsBrides({
  img,
  birth_date,
  height,
  member_highest_education,
  age,
  occupation,
  member_employed_in,
  income,
  Taluka,
  id
}) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="col-md-4 custom-col mb-30">
        <div className="container">
          <article className="team__card" >
            <div className="team__card--thumbnail" style={{ height: "300px" }}>
              {
                img === null ? (
                  <img
                    className="team__card--thumbnail__img display-block "
                    style={{ height: "300px" }}
                    src={require('../pages/staticimg/women.jpg')}
                    alt="team-thumb"
                  />
                ) : (<img
                  className="team__card--thumbnail__img display-block "
                  style={{ height: "300px" }}
                  src={`https://admin.royalmarriagebureau.com/uploads/userimg/${img}`}
                  alt="team-thumb"
                />)
              }

            </div>

            <div className="card-body " >
              <table align="center" style={{ marginTop: "10px" }} >

                <tr style={{ borderBottom: "1px solid #ccc" }} >

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Birth Date  </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{birth_date} </td>

                </tr>
                <tr><div className="mt-3"></div></tr>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Height  </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{height} meter.</td>
                </tr>
                <tr><div className="mt-3"></div></tr>
                <tr style={{ borderBottom: "1px solid #ccc" }} >
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Age </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{age} Years </td>
                </tr>
                <tr><div className="mt-3"></div></tr>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Occupation </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{occupation && occupation.substring(0, 15)}..</td>
                </tr>
                <tr><div className="mt-3"></div></tr>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Education  </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{member_highest_education && member_highest_education.substring(0, 8)}..</td>
                </tr>
                <tr ><div className="mt-3"></div></tr>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>employed_in  </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{member_employed_in && member_employed_in.substring(0, 15)}..</td>
                </tr>
                <tr><div className="mt-3"></div></tr>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>income  </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{income && income.substring(0, 15)}/-</td>
                </tr>
                <tr><div className="mt-3"></div></tr>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Taluka  </td>
                  <td>:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{Taluka && Taluka.substring(0, 15)}..</td>
                </tr>



              </table>

              <li className="header__account header__account--items text-center ">

              </li>
              <div className="text-center">
                <Link to={`/single_view/${id}`} className="btn btn-success mb-4 mt-4 ">
                  View Profile
                </Link>
              </div>
            </div>

          </article >
        </div >
      </div >
    </>
  );
}

export default GroomsBrides;
