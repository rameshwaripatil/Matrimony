import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [Loader, setLoader] = useState(true);
  const [MatchedLoader, setMatchedLoader] = useState(true);
  const [Recently_Loader, SetRecently_Loader] = useState(true);
  const { http, user } = Authuser();
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
    <div>  <div className="container mt-4 ">
    <div className="row">
      {/* profile photo */}
      <div className="col-md-4">
        <div className="card shadow " >
          <div className="card-body  text-center">
            {/* {
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
            } */}
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
                 {/* {
                  Loader === false ? (
                    <ProgressBar variant="warning" style={{ height: "30px", width: "280px", marginTop: "5px  ", marginBottom: "5px" }} animated now={percentage === 91 ? (
                      100
                    ) : (
                      percentage
                    )

                    } />
                  ) : ( )
                    // <Skeleton style={{ height: "30px", width: "280px" }} />
                  
                }  */}

                <span style={{ fontSize: "13px", marginTop: "5px" }} className="mb-3" >Tip : Insert all details which can help you to find perfect life partner</span>
                {percentage >= 90 ? (
                  <div className="text-center">
                    <Link to="/profile" className="text-success text-center mt-2 mb-4">Complete Your Profile</Link>
                  </div>
                ) : (
                  <div className="text-center">
                    <Link to="/profile" className="text-light text-center mt-2 mb-4 button wrapper"> Please Complete Your Profile </Link>
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
  </div ></div>
  )
}

export default Dashboard