import React, { useEffect, useState } from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../all_style/css/glowingButton.css'
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { AiFillLock } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Dashboard_Header_bg from "../cmp/Dashboard_Header_bg";
import AuthUser from "../../auth/Authuser";
import CastCard from "../cmp/CastCard";
import OccupationCard from "../cmp/OccupationCard";
import CastView from "../cmp/CastView";
import OccupationCardView from "../cmp/OccupationCardView";
import SquareSkeleton from "../cmp/SquareSkeleton";
import Skeleton from "react-loading-skeleton";
import DistrictCard from "../cmp/DistrictCard";
import DistrictCardView from "../cmp/DistrictCardView";
import WatermarkedImage from "../cmp/WatermarkedImage";
import Star from "../cmp/Star";
import { toast } from "react-toastify";
import Matched from "../cmp/Matched";

const Dashboard = () => {
  const [Loader, setLoader] = useState(true);
  const [MatchedLoader, setMatchedLoader] = useState(true);
  const [Recently_Loader, SetRecently_Loader] = useState(true);
  const { http, user } = AuthUser();
  const [MatriId, SetMatriId] = useState('');
  const id = user.id;
  const redirect = useNavigate();
  if (sessionStorage.getItem("token") == null) {
    redirect("/register");
  }
  const [toggleEducation, settoggleEducation] = useState(0);
  const HandleToggleEducation = () => {
    settoggleEducation(1);
  }
  const GobackToggleEducation = () => {
    settoggleEducation(0);
  }
  const [toggleCast, settoggleCast] = useState(0);
  const HandleToggle = () => {
    settoggleCast(1);
  }
  const GobackToggle = () => {
    settoggleCast(0);
  }
  const [toggleoccupation, settoggleoccupation] = useState(0);
  const HandleOccupationtoggle = () => {
    settoggleoccupation(1);
  }
  const GobackOccupationtoggle = () => {
    settoggleoccupation(0);
  }
  const [toggleDistrict, SettoggleDistrict] = useState(0);
  const HandleDistricttoggle = () => {
    SettoggleDistrict(1);
  }
  const GobackDistrictToggle = () => {
    SettoggleDistrict(0);
  }
  const [User_data, SEtUserData] = useState([]);
  const [Matched_DATA, Set_Matched_Data] = useState([]);
  const [Recenty_Data, SetRecently_Data] = useState([]);
  const [MatchedConditions, SetMatched_Conditions] = useState([]);
  const [Matched_percentage,SetMatched_percentage]= useState([]);
  useEffect(() => {
    http.get(`/profile/${id}`).then((res) => {
      SEtUserData(res.data.user);
      setLoader(false);
    }).catch((e) => {
      console.log(e);
    });
    ;
    http.get(`/show_profile_match_record/${id}`).then((res) => {
      Set_Matched_Data(res.data.all_data);
      SetMatched_percentage(res.data.condition_percentages
        );
        SetMatched_Conditions( res.data.condition_counts);
      setMatchedLoader(false);
    }).catch((e) => {
      console.log(e);
    });
    http.get(`/recently_join/${user.id}`).then((res) => {
      SetRecently_Data(res.data.data);
      SetRecently_Loader(true);

    }).catch((e) => {
      console.log(e);
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const total_fields = Object.keys(User_data).length;
  const nonNullFields = Object.values(User_data).filter(value => value !== null).length;
  const percentage = Math.floor((nonNullFields / total_fields) * 100);
  const [filled, setFilled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  const handleClick = () => {
    setFilled(!filled);
  };
  const profileLock = ()=> {
    http.get(`/profile/status/lock/${user.id}`).then((res)=>{
toast.success("Status Update Successfully !!")
// window.location.reload()
window.scrollTo({
  top: 0,
  behavior: "smooth",
});
    }).catch((e)=> console.log(e))
  }

  return (
    <>
      <Dashboard_Header_bg
        main="Dashboard"
        route="\"
        route_name="Dashboard"
        page="Dashboard"
      />
      {
        toggleCast === 0 ? (
          <>
            <CastCard />
            <div className="text-center mt-4 ml-2">
              <Link onClick={HandleToggle} className="btn btn-outline-danger btn-lg">View all</Link>
            </div>
          </>
        ) : (<>
          <div className="text-center mt-4 ml-2">
            <Link onClick={GobackToggle} className="btn btn-outline-danger btn-lg">Go Back</Link>
          </div>
          <CastView />
        </>
        )
      }
      {/* {
        toggleoccupation === 0 ? (
          <>
            <OccupationCard />
            <div className="text-center mt-4 ml-2">
              <Link onClick={HandleOccupationtoggle} className="btn btn-outline-danger btn-lg">View all</Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mt-4 ml-2">
              <Link onClick={GobackOccupationtoggle} className="btn btn-outline-danger btn-lg">Go Back</Link>
            </div>
            <OccupationCardView />
          </>
        )
      } */}
      {
        toggleDistrict === 0 ? (
          <>
            <DistrictCard />
            <div className="text-center mt-4 ml-2">
              <Link onClick={HandleDistricttoggle} className="btn btn-outline-danger btn-lg">View all</Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mt-4 ml-2">
              <Link onClick={GobackDistrictToggle} className="btn btn-outline-danger btn-lg">Go Back</Link>
            </div>
            <DistrictCardView />
          </>
        )
      }
      {
        // toggleEducation === 0 ? (
        //   <>
        //     <EducationCmp />
        //     <div className="text-center mt-4 ml-2">
        //       <Link onClick={HandleToggleEducation} className="btn btn-outline-danger btn-lg">View all</Link>
        //     </div>
        //   </>
        // ) : (
        //   <>
        //     <div className="text-center mt-4 ml-2">
        //       <Link onClick={GobackToggleEducation} className="btn btn-outline-danger btn-lg">Go Back</Link>
        //     </div>
        //     <EducationCardView />
        //   </>
        // )
      }
      <hr></hr>
      <div className="container mt-4 ">
        <div className="row">
          {/* profile photo */}
          <div className="col-md-4">
            <div className="card shadow " >
              <div className="card-body  text-center">
                {
                  User_data.member_user_img1
                    === null ? (
                    <img src={require('../pages/staticimg/profie_photo.jpg')} alt=""></img>
                  ) : (
                    Loader === false ? (
                      <WatermarkedImage  imageUrl={`https://admin.royalmarriagebureau.com/uploads/userimg/${User_data.member_user_img1}`} />
                    ) : (
                      <>
                        <SquareSkeleton /></>
                    )
                  )
                }
                <div className="card-footer bg-warning text-center">
                  <Link to={'/profile'}>Change Profile Picture</Link>
                </div>
              </div>
            </div>
          </div>
          {/* profile photo  end */}
          <div className="col-md-8 mt-3">
            <div className="card shadow">
              <div className="card-body  ">
                <hr></hr>
                {/* progress bar start */}
                <div className="row">
                  <div className="col-md-6">
                    <p className="">Hello, {user.first_name} </p>
                    <p></p>
                    <span >Your Profile is {percentage >= 90 ? (
                      <>100</>
                    ) : (
                      percentage
                    )

                    }% Completed</span>
                    {
                      Loader === false ? (
                        <ProgressBar variant="warning" style={{ height: "30px", width: "280px", marginTop: "5px  ", marginBottom: "5px" }} animated now={percentage === 91 ? (
                          100
                        ) : (
                          percentage
                        )

                        } />
                      ) : (
                        <Skeleton style={{ height: "30px", width: "280px" }} />
                      )
                    }

                    <span style={{ fontSize: "13px", marginTop: "5px" }} className="mb-3" >Tip : Insert all details which can help you to find perfect life partner</span>
                    {percentage >= 90 ? (
                      <div className="text-center">
                        <Link to="/profile" className="text-success text-center mt-2 mb-4">Complete Your Profile <AiFillCaretRight /></Link>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Link to="/profile" className="text-light text-center mt-2 mb-4 button wrapper"> Please Complete Your Profile <AiFillCaretRight /></Link>
                      </div>
                    )

                    }

                  </div>
                  <div className="col-md-4 text-center">
                    <p style={{ alignItems: "end" }} className="bg-warning">Matri Id : {user.user_matri_id && user.user_matri_id}</p>
                  </div>
                </div>
                {/* progress bar end */}
              </div>
            </div>
            <div className="card mt-4 shadow">
              <div className="card-body ">
                <div className="row ">
                  <div className="col-md-1"></div>
                  <div className="col-md-3  mt-4 mb-3">
                    <h3   >Search By Id </h3>
                  </div>
                  <div className="col-md-4 mt-2 mb-4    ">
                    <input className="contact__form--input" onChange={(e) => { SetMatriId(e.target.value) }} placeholder="Enter Matri Id to Search" ></input>
                  </div>
                  <div className="col-md-2 mt-2 ">
                    <Link className="contact__form--input bg-warning text-center" to={`/view_by_matri_id/${MatriId}`} >Search</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card shadow">
              <div className="card-header bg-warning text-center">
                <b> My Profile </b>
              </div>
              <div className="card-body">
                <p>
                  <Link to='/profile'>Edit profile</Link>
                </p>
                <p>
                  <Link to='/profile'>Manage Photos</Link>
                </p>
              
                <p>
                  <Link to={`/shortlist/${user.id}`}>Shortlist Profile</Link>
                </p>
                <p>
                  <Link to={`/i_visited/${user.id}`} >I Visited  Profile</Link>
                </p>
                <p>
                  <Link to={`/who/view/${user.id}`} >Who Viewd Your Profile</Link>
                </p>
                <p>
                  <Link onClick={profileLock} > Lock My Profile 
                {User_data.profile_lock  === 0 ?(
                  <></>
                ):(
                  <AiFillLock style={{marginLeft:"10px",marginTop:"-5px"}} />
                )}
                   
                    
                    </Link>
                </p>
              </div>
            </div>
            {/* <div className="card shadow mt-4">
              <div className="card-header bg-warning text-center">
                <b className="p-2">Profile Details</b>
              </div>
              <div className="card-body">
                <div className="row mt-2">
                  <div className="col-md-8">
                    <p className="mt-2">Express  Interest Received</p>
                  </div>
                  <div className="col-md-2 offset-md-2">0</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-8">
                    <p className="mt-2">My Shortlist Profile </p>
                  </div>
                  <div className="col-md-2 offset-md-2">0</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-8">
                    <p className="mt-2">My Blocklist Profile</p>
                  </div>
                  <div className="col-md-2 offset-md-2">0</div>
                </div>
                <div className="row mt-3">

                  <div className="col-md-8">
                    <p className="mt-3">My Profile Viewed By</p>
                  </div>
                  <div className="col-md-2 offset-md-2">
                    0
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-8">
                    <p className="mt-2">I visited Profile</p>
                  </div>
                  <div className="col-md-2 offset-md-2 ">
                    0
                  </div>
                </div>

                <div className="row mt-3" >
                  <div className="col-md-8">
                    <p className="mt-2">Photo Password Request Received</p>
                  </div>
                  <div className="col-md-2 offset-md-2">0</div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-md-8">
            <div className="card shadow  " >
              <div className="card-header bg-warning"></div>
              <div className="card-body">
                <p>MY PROFILE MATCHES</p>
                <hr></hr>
                <div className="text-center" style={{ overflowY: "scroll" }} >
                  {
                    MatchedLoader === false ? (
                      <Skeleton />
                    ) : (
                      <></>
                    )
                  }
          
                  <div className="row" >
                    <table className="table">
                      <tbody>
                        {
                          Matched_DATA.map((item, Index) => (

                            <tr key={Index}>
                              <th scope="row">
                                {
                                  MatchedLoader === false ? (
                                    <>
                                    {item.member_user_img1 === null ? (<><img src={require('../pages/staticimg/profie_photo.jpg')} style={{ height: "70px", width: "70px" }}></img></>):(<>
                                    
                                    
                                    
                                      <img src={`https://admin.royalmarriagebureau.com/uploads/userimg/${item.member_user_img1}`} alt="My Image" style={{ height: "70px", width: "70px" }} ></img>
                                    
                                    
                                    </>)}

                                    </> ) : (
                                    <Skeleton style={{ height: "50px", width: "50px" }} />
                                  )
                                }
                              </th>
                              <td>{item.first_name}</td>
                              <td>
{item.age}yrs                            </td>
                              <td className="text-success"> 
                              {
                                Matched_percentage === undefined || null ?(
                                  <></>
                                ):(<> <Matched id={item.id} data={Math.floor(Matched_percentage[Index].percentage)}
                              
                                first={ MatchedConditions[Index].true_conditions[0]}
                                second={ MatchedConditions[Index].true_conditions[1]}
                                third={MatchedConditions[Index].true_conditions[2]}
                                fourth={MatchedConditions[Index].true_conditions[3]}
                                fifth={MatchedConditions[Index].true_conditions[4]}
                                /></>)
                              }
                             
                              </td>
                              <td>   <Star id={item.id}  /></td>
                          
                              <td><Link className="btn btn-outline-danger" to={`/single_view/${item.id}`}> View Profile</Link></td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow mt-4">
              <div className="card-header bg-warning"></div>
              <div className="card-body">
                <p>RECENTLY JOINED</p>
                <hr></hr>
                <div className="text-center" style={{ maxHeight: "300px", overflowY: "scroll" }}>
                  <div className="row">
                    <table className="table">
                      <tbody>
                        {Recenty_Data.map((item, Index) => (
                          <tr key={Index}>
                            <th scope="row">
                              {Recently_Loader === true ? (
                                <>
                                {item.member_user_img1 === null ? (<> <img src={require('../pages/staticimg/profie_photo.jpg')} style={{ height: "50px", width: "50px" }}></img></>):(<>
                                
                                  <img src={`https://admin.royalmarriagebureau.com/uploads/userimg/${item.member_user_img1}`} alt="My Image" style={{ height: "50px", width: "50px" }} ></img>
                                
                                
                                </>)}
                                </>
                              ) : (
                                <Skeleton style={{ height: "50px", width: "50px" }} />
                              )}
                            </th>
                            <td>{item.first_name}</td>
                            <td>{item.age}yrs</td>
                            <td><Star id={item.id} /></td>
                            <td><Link className="btn btn-outline-danger" to={`/single_view/${item.id}`}>View Profile</Link></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow mt-4">
              <div className="card-header bg-warning"></div>
              <div className="card-body">
                <p>OTHER SERVICES</p>
                <hr></hr>
                <div className="text-center" style={{ maxHeight: "300px", overflowY: "scroll" }}>
                  <div className="row">
                 <div className="col-md-4 offset-md-4">
                 <a
                            className="btn btn-outline-danger btn-lg m-2"
                            href="https://marathimarriagebiodata.in/#features"
                              target="_blank"


                          >
                            BioData
                          </a>
                          <a
                            className="btn btn-outline-danger btn-lg m-2"
                            href="https://www.astrosage.com/marathi/janamkundali.asp"
                              target="_blank"


                          >
                            Kundali
                          </a>
                 </div>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Dashboard;
