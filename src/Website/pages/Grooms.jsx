

import React, { useState, useEffect } from 'react';
import './Grooms.css';
// import TableRow from './TableRow';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Authuser from '../Authentication/Authuser';

const Groom = () => {
  const [cast, setCast] = useState([]);
  const [cards, setCards] = useState([]);
  const [viewcast, setViewCast] = useState(0);
  const [displayCount, setDisplayCount] = useState(5);
  const [offset, setOffset] = useState(0);
  const { http } = Authuser();
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
        setCards(response.data.data.data);
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

  const getCards = () => {
    http.get(`/get_member_detail_groom`)
      .then((res) => {
        setCards(res.data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    Grooms();
    getCasts();
    getCards();
  }, []);

  return (
    <>
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ color: 'white', fontWeight: 'bold' }}>Grooms</h1>
              <ul className="row ">
                <li className="breadcrumb-item"><a style={{ color: 'white', fontWeight: 'bold' }} href="#">Home </a></li>
                <li className="breadcrumb-item active" style={{ color: 'white', fontWeight: 'bold' }}> Grooms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-center text-danger mt-4'>Our Grooms</h2>
        <section className="team__section my-4">
          <div className="container p-3 font-weight-bold">
            <h3>Cast:</h3>
          </div>
          <div className="container mt-3 mb-3">
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
                      <a href="#" className="btn btn-danger circle-button rounded-circle" style={{ paddingTop: '8%' }} >{el.caste}</a>
                    </div>
                  ))}
                </Carousel>                                                                   
              </div>
            </div>
          </div>

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
          ) : ''}
          <div className="containergroom mt-5">
            <div className="section__heading text-center mb-4" />
            <div className="teamcontainer">
              <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 mb--n30">
                {cards.map((el, index) => (
                  <div className="col-md-6 col-lg-4 custom-col mb-4">
                    <div className="container">
                      <div className="card shadow">
                        <div className="card-body">
                          <article className="teamcard">
                            <div key={index}>
                              <div className="teamcard--thumbnail mx-auto" style={{ height: '300px', width: '220px' }}>
                                {el.member_user_img1 != null ? (
                                  <img className="teamcard--thumbnail__img display-block" src={`https://admin.royalmarriagebureau.com/uploads/userimg/${el.member_user_img1}`} alt="team-thumb" style={{ height: '300px' }} />
                                ) : (
                                  <img className="teamcard--thumbnail__img display-block" src='https://royalmarriagebureau.com/static/media/profie_photo.2d5685846284c2a66537.jpg' alt="team-thumb" style={{ height: '300px' }} />
                                )}
                              </div>
                              {/* <table className="mt-4 mx-auto">
                                <tbody>
                                  <TableRow label="Birth Date" value={el.date_of_birth} />
                                  <TableRow label="Height" value={el.height} />
                                  <TableRow label="Age" value={el.age} />
                                  <TableRow label="Occupation" value={el.occupation} />
                                  <TableRow label="Education" value={el.member_highest_education} />
                                  <TableRow label="Employed In" value={el.member_employed_in} />
                                  <TableRow label="Income" value={el.member_annual_income} />
                                  <TableRow label="Village" value={el.village_name} />
                                </tbody>
                              </table> */}
                              <div className="text-center mt-4">
                                <a className="btn btn-success mb-4" href={`/single_view/${el.id}`}>View Profile</a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Groom;

