import React, { useEffect, useState } from "react";
import HeaderBg from "../cmp/HeaderBg";
import { useNavigate, useParams } from "react-router-dom";
import AuthUser from "../../auth/Authuser";
import ImgCmp from "../cmp/ImgCmp";
import AliceCarousel from "react-alice-carousel";


const View_Groom_Bride = () => {
  const redirect = useNavigate();

  if (sessionStorage.getItem("token") === null) {
    redirect("/register");
  }
  
  const { id } = useParams();
  
  const { http,user } = AuthUser();
  const [Matched_Profile, setMatched_Profile] = useState([]);
  const [Basic_Preference, setBasic_Preference] = useState([]);
  useEffect(() => {


    http.get(`/show_single_profile_match_record/${id}`
    ).then((res) => {
      setMatched_Profile(res.data.data);
      
      setBasic_Preference(res.data.tbl_basic_preferences);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  useEffect(() => {
    if (  user.id) {
      http.get(`/i_visited/${id}/${user.id}`)
        .then(response => {
          // Handle the response here (e.g., update the UI with the data)
          console.log(response.data);
        })
        .catch(error => {
          // Handle errors
          console.error(error);
        });
    }
  }, [id, user]);
  

  const items = [
    <div className=" col-12">
                { Matched_Profile && 
                  Matched_Profile.member_user_img1 === null  ? (
                  <img style={{ height: "180px",width:"200px" }} className="mt-2" src={require('../pages/staticimg/profie_photo.jpg')} alt='' ></img>
                ) : (<ImgCmp
                  imageUrl={`https://admin.royalmarriagebureau.com/uploads/userimg/${Matched_Profile.member_user_img1 
                    }`}
                />)
              }
              </div>
              ,
  <div className="">
                {  Matched_Profile &&
                  Matched_Profile.member_user_img2 === null  ? (
                  <img style={{ height: "180px",width:"200px" }} className="mt-2" src={require('../pages/staticimg/profie_photo.jpg')} alt='' ></img>
                ) : (<ImgCmp
                  imageUrl={`https://admin.royalmarriagebureau.com/uploads/userimg/${Matched_Profile.member_user_img2
                    }`}
                />)
              }
              </div>
,
  <div className="">
                {  Matched_Profile &&
                  Matched_Profile.member_user_img3 === null  ? (
                  <img style={{ height: "180px",width:"200px" }} className="mt-2" src={require('../pages/staticimg/profie_photo.jpg')} alt='' ></img>
                ) : (<ImgCmp
                  imageUrl={`https://admin.royalmarriagebureau.com/uploads/userimg/${Matched_Profile.member_user_img3
                    }`}
                />)
              }
              </div>
 ,
 <div className="">
                {  Matched_Profile &&
                  Matched_Profile.member_user_img4 === null  ? (
                  <img style={{ height: "180px",width:"200px" }} className="" src={require('../pages/staticimg/profie_photo.jpg')} alt='' ></img>
                ) : (<ImgCmp
                  imageUrl={`https://admin.royalmarriagebureau.com/uploads/userimg/${Matched_Profile.member_user_img4
                    }`}
                />)
              }
              </div>
,
                <div className=" col-12">
                {
                  Matched_Profile.member_user_img5 === null  ? (
                  <img style={{ height: "180px",width:"200px" }} className="" src={require('../pages/staticimg/profie_photo.jpg')} alt='' ></img>
                ) : (<ImgCmp
  
                  imageUrl={`https://admin.royalmarriagebureau.com/uploads/userimg/${Matched_Profile.member_user_img5
                    }`}
  
                />)
              }
              </div>
              ,
]
  return (
    <div>
      {/* Start breadcrumb section */}
      <HeaderBg
        main="View Profile"
        route="\"
        route_name="Home"
        page="View Profile"
      />
      <div className="container">
        <h4 className="mt-2 mb-2">Images : </h4>
        <div className=" ">
       <div >
       <AliceCarousel
                                    items={items}
                                    responsive={{
                                        0: { items: 1 },
                                        0: { items: 2 },
                                        0: { items: 4 },
                                        992: { items: 4 },
                                        1200: { items: 5 },
                                    }}
                                    autoPlay
                                    autoPlayInterval={3000}
                                    animationDuration={1000}
                                    disableButtonsControls={true}

                                    disableDotsControls={true}
                                    infinite
                                />
       </div>
        </div>
      </div>
      {/* <ImgCmp img1={Matched_Profile.member_img}  /> */}
      <div className="container mt-4 mb-4">
      <h4 className="mt-2">Contact </h4>
<div className="row">
  <div onClick={()=>{
     window.open("http://google.com") ;
  }} className="col-md-3  col-3 text-center">
<img style={{height:"80px"}} src={require("../pages/staticimg/call.png")}></img>
<h4>Call</h4>
  </div>
  <div onClick={()=>{
     window.open("http://google.com") ;
  }} className="col-md-3  col-3 text-center">
  <img style={{height:"80px"}} src={require("../pages/staticimg/vedio.png")}></img>
<h4>Vedio Call</h4>
  </div>
  <div onClick={()=>{
     window.open("http://google.com") ;
  }} className="col-md-3  col-3 text-center ">
  <img style={{height:"80px"}} src={require("../pages/staticimg/message.png")}></img>
<h4>Message</h4>
  </div>
  <div onClick={()=>{
     window.open("http://google.com") ;
  }} className="col-md-3  col-3 text-center">
  <img style={{height:"80px"}} src={require("../pages/staticimg/whatsapp.png")}></img>
<h4>Whatsapp</h4>
  </div>
</div>

      </div>
      <div className="container mt-2 mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-body shadow-md">
                <h4>Basic Details</h4>
               
                <hr></hr>
              <h4 className="text-center mb-30">Matri Id : {Matched_Profile.user_matri_id && Matched_Profile.user_matri_id}</h4>

                <div className="row mb-3 ml-3">
                  <div className="col-md-6 "> <b className="h4-2">Name:</b> {Matched_Profile && Matched_Profile.first_name } &nbsp; {Matched_Profile.last_name && Matched_Profile.last_name}</div>
                  <div className="col-md-6 "><b className="h4-2">Email :</b> {Matched_Profile && Matched_Profile.email} </div>
                </div>
                <div className="row mb-3 ml-3">
                  <div className="col-md-6 "><b className="h4-2">Mobile No :</b> {Matched_Profile && Matched_Profile.number} </div>
                  <div className="col-md-6 "><b className="h4-2">Gender : </b> {Matched_Profile && Matched_Profile.gender === 2 ? (
                    <> Male</>
                  ) : Matched_Profile.gender === 1 ? (
                    <> Female</>
                  ) : (
                    <> Others</>
                  )
                  } </div>
                </div>
                <div className="row mb-3 ml-3">
                  <div className="col-md-6 "><b className="h4-2">Date Of Birth</b>   {Matched_Profile && new Date(Matched_Profile.date_of_birth).toLocaleDateString('en-GB')} </div>
                  <div className="col-md-6 "><b className="h4-2">Age:</b> {Matched_Profile.age && Matched_Profile.age} </div>
                </div>
                <div className="row mb-3 ml-3">
                  <div className="col-md-6 "><b className="h4-2">Mother toungue :</b>{Matched_Profile && Matched_Profile.mothertounge} </div>
                  <div className="col-md-6 "><b className="h4-2">Marital Status:</b> {Matched_Profile && Matched_Profile.marital_status === 1 ? (
                    <>UnaMarried</>
                  ) : Matched_Profile.marital_status === 2 ? (
                    <>Divorced</>
                  ) : Matched_Profile.marital_status === 3 ? (
                    <>Widowed</>
                  ) :
                    (
                      <>Separated</>
                    )} </div>
                </div>
                <div className="row mb-3 ml-3">
                <div className="col-md-6 "><b className="h4-2">Height:</b> {Matched_Profile.height && Matched_Profile.height} </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row mt-2">

          <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Religion Information : </h4>
                <hr></hr>
                <div className="row mb-3 ml-3">
                  <div className="col-md-6 "><b className="h4-2">Religion:</b> {Matched_Profile && Matched_Profile.caste} </div>
                  <div className="col-md-6 "><b className="h4-2">Caste:</b> {Matched_Profile && Matched_Profile.caste} </div>
                </div>
                <div className="row mb-3 ml-3">
                  <div className="col-md-6 "><b className="h4-2"> Sub Caste:</b> {Matched_Profile && Matched_Profile.sub_caste
                  } </div>
                  <div className="col-md-6 "><b className="h4-2">Willing To Marry Other Cast ? :</b>{Matched_Profile && Matched_Profile.marry_other_cast === 0 ? (
                    <>No</>
                  ) : (
                    <>Yes</>
                  )
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Education & Preferences </h4>
                <hr></hr>
                <div className="row  ml-3 mt-2">
                  <div className="col-md-6 "><b className="h4-2"> Highest Education:</b> {Matched_Profile && Matched_Profile.member_highest_education
                  }</div>
                  <div className="col-md-6 "><b className="h4-2"> Additional Degree:</b> {Matched_Profile && Matched_Profile.member_additional_degree
                  }</div>
                </div>
                <div className="row mb-3 ml-3 mt-2">
                  <div className="col-md-6 "><b className="h4-2"> Employed In :</b> {Matched_Profile && Matched_Profile.member_employed_in
                  } </div>
                  <div className="col-md-6 "><b className="h4-2"> Occupation:</b> {Matched_Profile && Matched_Profile.member_fathers_occupation
                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Annual Income:</b> {Matched_Profile && Matched_Profile.member_annual_income
                  } /-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Family Details  </h4>
                <hr></hr>
                <div className="row  ml-3 mt-3">
                  <div className="col-md-6 mt-3 "><b className="h4-2">Family Type :</b> {Matched_Profile && Matched_Profile.member_family_type === 1 ? (
                    <>Joint</>
                  ) : (
                    <>Nuclear</>
                  )
                  }</div>
                  <div className="col-md-6 mt-3"><b className="h4-2"> Family Status :</b> {Matched_Profile && Matched_Profile.member_familystatus
                  }</div>
                </div>
                <div className="row mb-3 ml-3 mt-3">
                  <div className="col-md-6 "><b className="h4-2"> Family Value:</b> {Matched_Profile && Matched_Profile.member_family_value
                  } </div>
                  <div className="col-md-6 "><b className="h4-2"> Father Occupation:</b> {Matched_Profile && Matched_Profile.member_fathers_occupation
                  } </div>
                  <div className="col-md-6 mt-3 "><b className="h4-2">No of Brothers :</b> {Matched_Profile && Matched_Profile.member_brothers
                  } </div>
                  <div className="col-md-6 mt-3 "><b className="h4-2">Married Brothers :</b> {Matched_Profile && Matched_Profile.member_no_of_married_bro
                  } </div>
                  <div className="col-md-6 mt-3 "><b className="h4-2">No of Sisters:</b> {Matched_Profile && Matched_Profile.member_sisters
                  } </div>
                  <div className="col-md-6 mt-3 "><b className="h4-2">Married Sisters:</b> {Matched_Profile && Matched_Profile.member_no_of_married_sis
                  } </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Location & Information </h4>
                <hr></hr>
                <div className="row  ml-3 mt-2">
                  <div className="col-md-6 "><b className="h4-2"> State Living In :</b> {Matched_Profile && Matched_Profile.state_name
                  }</div>
                  <div className="col-md-6 "><b className="h4-2"> District Living In:</b> {Matched_Profile.dist_name
                  }</div>
                </div>
                <div className="row mb-3 ml-3 mt-2">
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Village Living In:</b> {Matched_Profile.village_name
                  } </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Habbits & Hobbies </h4>
                <hr></hr>
                <div className="row  ml-3 mt-2">
                  <div className="col-md-6 "><b className="h4-2"> Eating Habbits :</b> {Matched_Profile.member_diet
                  }</div>
                  <div className="col-md-6 "><b className="h4-2"> Smoking Habbits :</b> {Matched_Profile.member_smoking_habits
                  }</div>
                </div>
                <div className="row mb-3 ml-3 mt-2">
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Drinking Habbits:</b> {Matched_Profile.member_drink_habit
                  } </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Physical Attributes </h4>
                <hr></hr>
                <div className="row  ml-3 mt-2">
                  <div className="col-md-6 "><b className="h4-2"> Height :</b> {Matched_Profile.height
                  }</div>
                  <div className="col-md-6 "><b className="h4-2"> Weight  :</b> {Matched_Profile.weight
                  }</div>
                </div>
                <div className="row mb-3 ml-3 mt-2">
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Body Type :</b> {Matched_Profile.member_body_type
                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Complexion:</b> {Matched_Profile.member_complexion
                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Physical Status:</b> {Matched_Profile.member_complexion
                  } </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Horoscope Information </h4>
                <hr></hr>
                <div className="row  ml-3 mt-2">
                  <div className="col-md-6 "><b className="h4-2"> Rasi  :</b> {Matched_Profile.height
                  }</div>
                  <div className="col-md-6 "><b className="h4-2"> Star  :</b> {Matched_Profile.weight
                  }</div>
                </div>
                <div className="row mb-3 ml-3 ">
                  <div className="col-md-6 mt-1 "><b className="h4-2"> Birth Time :</b> {Matched_Profile.member_birth_time

                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Birth Place :</b> {Matched_Profile.member_birth_palce
                  } </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">

<div className="col-md-12">
  <div className="card">
    <div className="card-body shadow-md">
      <h4>About Me : </h4>
      <hr></hr>
      <div className="row">
        <div className="col-md-12">
          <textarea className="contact__form--input" readOnly value={
            Matched_Profile && Matched_Profile.member_about_me
          }> </textarea>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
      {/* partner expectaions */}
      <div className="container mt-2 mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mt-2 mb-3">
              <h3>Partner Expectations</h3>
            </div>
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Basic Details </h4>
                <hr></hr>
                <div className="row mb-3 ml-3 mt-2">
                  <div className="col-md-6 mt-2 "><b className="h4-2">Looking For :</b> {Basic_Preference === null ?(<></>) : Basic_Preference.basic_lookingfor === "1" ? (<>Unmarried</>) : Basic_Preference.basic_lookingfor === "2" ? (<>Divorced</>): Basic_Preference.basic_lookingfor === "3" ?(<>Widowed</>): Basic_Preference.basic_lookingfor === "4"
                   ?(<>Separated</>):(<></>)
                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Age :</b> {Basic_Preference && Basic_Preference.basic_fromage
                  } to {Basic_Preference && Basic_Preference.basic_toage
                    } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Height:</b> {Basic_Preference && Basic_Preference.basic_fromheight
                  } to {Basic_Preference && Basic_Preference.basic_toheight
                    } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Eating Habbits :</b> {Basic_Preference && Basic_Preference.basic_eating_habbit
                  }
                  </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Drinking Habbits :</b> {Basic_Preference && Basic_Preference.basic_drinking_habbit
                  }
                  </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Physical Status :</b> {Basic_Preference && Basic_Preference.basic_physical_status

                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mt-2 mb-3">
            </div>
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Education & Professional Preferences </h4>
                <hr></hr>
                <div className="row mb-3 ml-3 mt-2">
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Education :</b> {Basic_Preference && Basic_Preference.basic_highest_education
                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Additional Degree :</b> {Basic_Preference && Basic_Preference.basic_additional_degree
                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Occupation :</b> {Basic_Preference && Basic_Preference.occupation
                  }
                  </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Annual Income:</b> {Basic_Preference && Basic_Preference.basic_annual_income
                  } /-
                  </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Employed In :</b> {Basic_Preference && Basic_Preference.basic_employed_in
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mt-2 mb-3">
            </div>
            <div className="card">
              <div className="card-body shadow-md">
                <h4>Religion & Preferences</h4>
                <hr></hr>
                <div className="row mb-3 ml-3 mt-2">
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Religion :</b> {Basic_Preference && Basic_Preference.religion

                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Caste :</b> {Basic_Preference && Basic_Preference.caste

                  } </div>
                  <div className="col-md-6 mt-2 "><b className="h4-2"> Mother Toungue :</b> {Basic_Preference && Basic_Preference.mothertounge
                  }
                  </div>
                  <div className="col-md-6 mt-2"><b className="h4-2"> Nakshtras:</b> {Basic_Preference && Basic_Preference.nakshra
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default View_Groom_Bride;
