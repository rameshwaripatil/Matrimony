import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import "./Brides.css"; 
import CastSlider from './CastSlider';

const Brides = () => {
  const { http, token } = Authuser();

  const [bri, setBrides] = useState([]);   

  const Brides = () => {
    http.get(`get_member_detail_bride`)
      .then((response) => {
        setBrides(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error adding bride data:', error);         
      });
  };
  useEffect(() => {
    Brides();
  }, [token])    


  return (
    <div>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ color: 'white', fontWeight: 'bold' }}>Brides</h1>
              <ul className="row ">
                <li className="breadcrumb-item active" style={{ color: 'white', fontWeight: 'bold', marginRight: 950 }}>Home - Brides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
   <CastSlider/>

      <section id="about_last">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about_last">
                <h1 className="text-center" ><span>Our Brides..!</span> </h1>
                <p><b>देखा जो तुझे यार ..दिल में बजी गिटार...!</b></p>
              </div>
            </div>
            <div className="team col-sm-12  clearfix">
              {bri.map((el) => (

                <div className="col-sm-4  col-lg-4">

                  <div className="team_1 clearfix" key={el.member_id}>
                    <div className="team__card--thumbnail" style={{ height: "300px" }}>
                      <img className="team__card--thumbnail__img display-block " src={"https://mumbaimirror.indiatimes.com/photo/15649845.cms"

                      } alt="team-thumb" style={{ height: 300 }} />
                    </div>
                    <table align="center" style={{ marginTop: 10 }}>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>

                          <td>Birth Date</td>
                          <td>➡️</td>
                          <td>{el.date_of_birth} </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
                          <td>Height</td>
                          <td>➡️</td>
                          <td>{el.height}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
                          <td>Age </td>
                          <td>➡️</td>
                          <td>{el.age}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
                          <td>Frist Name </td>
                          <td>➡️</td>
                          <td>{el.first_name}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
                          <td>Education</td>
                          <td>➡️</td>
                          <td>{el.member_highest_education} </td></tr><tr />
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
                          <td>employed_in</td>
                          <td>➡️</td>
                          <td>{el.member_employed_in}</td></tr>
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
                          <td>income</td>
                          <td>➡️</td>
                          <td>/-</td>
                        </tr><tr />
                        <tr style={{ borderBottom: '1px solid rgb(204, 204, 204)' }}>
                          <td>Taluka</td>
                          <td>➡️</td>
                          <td>{el.taluka_name}</td></tr>
                      </tbody>
                    </table>
                  </div>

                </div>

              ))}

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Brides