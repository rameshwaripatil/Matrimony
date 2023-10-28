import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import "./Grooms.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';






const Grooms = () => {


  const { http, token } = Authuser();
const [cast,setCast]=useState([])
  const [groom, setGroom] = useState([]);
  const [viewcast, setViewCast] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');





  const viewcasts = (e) => {
    if (e === 1) {
      setViewCast(1);
    } else if (e === 0) {
      setViewCast(0);
    }
  };

  const handleViewMore = () => {
    setDisplayCount(displayCount + 5);
  };

  const handleViewLess = () => {
    if (displayCount > 5) {
      setDisplayCount(displayCount - 5);
      setOffset(offset - 5);
    } 
  };

  const items = cast.map((cast, index) => (
    <div
      key={`item${index}`} // Add a unique key for each item using the index
      className="bg-danger text-center text-white"
      style={{
        height: '80px',
        width: '80px',
        borderRadius: '50%',
        paddingTop: '29px',
        fontSize: '12px',
      }}
    >
      {cast.caste}
    </div>
  ));
  const Grooms = () => {
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


  const getCasts = () => {
    http.get(`/member/imformation/for_fillter`)
      .then((res) => {
        setCast(res.data.cast);
      })
      .catch((e) => {
        console.log(e);
      });
  }





  useEffect(() => {
    Grooms();
    getCasts();

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
     






        <div className="row ">
              <div className="col-12 col-md-9 offset-md-2">
                <Carousel
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  stopOnHover={true}
                  showThumbs={false}
                  centerMode={true}
                  centerSlidePercentage={46}
                >
                  {cast.slice(0, 10).map((el) => (
                    <div key={el.caste}>
                      <a href="#" className="btn btn-danger circle-button rounded-circle" style={{ paddingTop: '8%',borderRadius:'50%' }} >{el.caste}</a>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>






      <section id="about_last">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about_last">
                <h1 className="text-danger" ><span>Our   Grooms..!</span> </h1>
                <p><b>25 दिन
          {viewcast !== 1 ? (
            <div className="text-center mt-4">
              <a className="btn btn-outline-danger" onClick={() => viewcasts(1)}>View all</a>
            </div>
          ) : (
            <div className="text-center mt-4">
              <a className="btn btn-outline-danger" onClick={() => viewcasts(0)}>Go Back</a>
            </div>
          )}

          {viewcast === 1 ? (
            <div className="container p-3">
              <div className="row ">
                <div className=" ">
                  <div className="text-center">
                    <input className="m-1 w-50  mt-3" placeholder='Enter your cast...'
                      onChange={(e) => { setSearchTerm(e.target.value) }} />
                  </div>
                </div>
                {cast.filter((el) => {
                  if (searchTerm === "") {
                    return true;
                  }
                  else if (el.caste.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                  }
                  return false;

                })
                  .slice(offset, offset + displayCount).map((el) => (
                    <a className="bg-danger text-white text-center align-items-center m-auto w-75 p-4 mt-3" href="/view_by_cast/1/1/Not Assign" key={el.caste}>{el.caste}</a>
                  ))}
                <div className="text-center mt-4">
                  <button className="btn btn-outline-danger" onClick={handleViewLess} >
                    View Less
                  </button>
                  <button className="btn btn-outline-danger mx-2" onClick={handleViewMore}>
                    View More
                  </button>
                </div>
              </div>
            </div>
          ) : ''} में पैसा डबल..!</b></p>
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
