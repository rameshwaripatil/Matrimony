import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import "./Grooms.css";
import AliceCarousel from 'react-alice-carousel';



const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

const Grooms = () => {
  const { http, token } = Authuser();

  const [groom, setGroom] = useState([]);

  const Brides = () => {
    http.get(`get_member_detail_groom`)
      .then((response) => {
        setGroom(response.data.data.data);
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
              <h1 style={{ color: 'white', fontWeight: 'bold' }}>Grooms</h1>
              <ul className="row ">
                <li className="breadcrumb-item active" style={{ color: 'white', fontWeight: 'bold', marginRight: 950 }}>Home - Grooms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     

<div className="container-fluid " style={{marginTop: 10, marginBottom: 10,background:"red"}}><div className="row"><div className="col-md-9 offset-md-2  "><div className="alice-carousel"><div><div className="alice-carousel__wrapper" style={{paddingLeft: 0, paddingRight: 0}}><ul className="alice-carousel__stage" style={{transition: 'transform 1000ms ease 0ms', transform: 'translate3d(-1904.95px, 0px, 0px)'}}><li className="alice-carousel__stage-item __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white" href="/view_by_cast/1/1/Not Assign" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Not Assi..</a></li><li className="alice-carousel__stage-item __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/2/Brahmin - Audichya" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/3/Brahmin - Anaviln Desai" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/4/Brahmin - Anavil" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/5/Brahmbatt" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmbat..</a></li><li className="alice-carousel__stage-item" style={{width: '238.119px'}}><a className="bg-danger text-center text-white" href="/view_by_cast/1/1/Not Assign" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Not Assi..</a></li><li className="alice-carousel__stage-item" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/2/Brahmin - Audichya" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/3/Brahmin - Anaviln Desai" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __active __target" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/4/Brahmin - Anavil" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __active" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/5/Brahmbatt" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmbat..</a></li><li className="alice-carousel__stage-item __active __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white" href="/view_by_cast/1/1/Not Assign" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Not Assi..</a></li><li className="alice-carousel__stage-item __active __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/2/Brahmin - Audichya" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __active __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/3/Brahmin - Anaviln Desai" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/4/Brahmin - Anavil" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmin ..</a></li><li className="alice-carousel__stage-item __cloned" style={{width: '238.119px'}}><a className="bg-danger text-center text-white  " href="/view_by_cast/1/5/Brahmbatt" style={{height: 90, width: 90, borderRadius: '50%', paddingTop: 38, fontSize: 14}}> Brahmbat..</a></li></ul></div></div></div></div></div></div>

<AliceCarousel mouseTracking items={items} />









      <section id="about_last">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about_last">
                <h1 className="text-danger" ><span>Our   Grooms..!</span> </h1>
                <p><b>25 दिन में पैसा डबल..!</b></p>
              </div>
            </div>
            <div className="team col-sm-12  clearfix">
              {groom.map((el) => (

                <div className="col-sm-4  col-lg-4">

                  <div className="team_1 clearfix" key={el.member_id}>
                    <div className="team__card--thumbnail" style={{ height: "300px" }}>
                      <img className="team__card--thumbnail__img display-block " src={"https://i.pinimg.com/736x/33/23/94/33239488ede380d4f02386460ed3adf3.jpg"

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

export default Grooms
