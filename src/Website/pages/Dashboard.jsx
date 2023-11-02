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
<<<<<<< HEAD
    <div className="dashboarddiv">
      <main className="main__content_wrapper">
        <div className="row">
          <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
              <div className="row row-cols-1">
                <div className="col">
                  <div className="breadcrumb__content">
                    <h1 className="breadcrumb__content--title mb-10 text-white">
                      Profile
                    </h1>
                    <ul className="breadcrumb__content--menu d-flex">
                      <li className="breadcrumb__content--menu__items">
                        <a className="text-white" href="/profile/\">
                          Profile
                        </a>
                      </li>
                      <li className="breadcrumb__content--menu__items">
                        <span className="text__secondary text-white">
                          Profile
                        </span>
                      </li>
                    </ul>
=======
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
>>>>>>> 634d74138f518f55b8a2760d38bdd5f925c9abd7
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
<<<<<<< HEAD
          </section>
          <div className="col-md-10 offset-md-1">
            <div className="section--padding">
              <div className="carddd m-2 mb-5">
                <ul className="mb-3 nav nav-tabs" role="tablist">
                  <li className="nav-itemrr" role="presentation">
                    <button
                      type="button"
                      id="uncontrolled-tab-example-tab-home"
                      role="tab"
                      data-rr-ui-event-key="home"
                      aria-controls="uncontrolled-tab-example-tabpane-home"
                      aria-selected="true"
                      className="nav-link active"
                    >
                      Home
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      type="button"
                      id="uncontrolled-tab-example-tab-Partner Preference"
                      role="tab"
                      data-rr-ui-event-key="Partner Preference"
                      aria-controls="uncontrolled-tab-example-tabpane-Partner Preference"
                      aria-selected="false"
                      className="nav-link"
                      tabIndex={-1}
                    >
                      Partner Preference
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    id="uncontrolled-tab-example-tabpane-home"
                    aria-labelledby="uncontrolled-tab-example-tab-home"
                    className="fade tab-pane active show"
                  >
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <form
                          className="form-horizontal"
                          encType="multipart/form-data"
                        >
                          <div className="card-header mt-3 bg-light">
                            <h4 className="card-title text-success">
                              <i
                                className="fa fa-file-text gtMarginRight10"
                                aria-hidden="true"
                              />
                              Basic Details (Registration From)
                            </h4>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="form-group col-md-3 mt-4 mb-4">
                                <label className="text-dark">Fisrt Name</label>
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  placeholder="Enter First Name"
                                  defaultValue="Sandip"
                                />
                              </div>
                              <div className="form-group col-md-3 mt-4 mb-4">
                                <label className="text-dark">Last Name</label>
                                <input
                                  type="text"
                                  name="last_name"
                                  className="form-control form-control-lg"
                                  placeholder="Enter Last Name"
                                  defaultValue="Gadekar"
                                />
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Gender</label>
                                <select
                                  className="form-control form-control-lg"
                                  name="gender"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={2}>Male</option>
                                  <option value={1}>Female</option>
                                  <option value={3}>Other</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Age</label>
                                <select
                                  className="form-control form-control-lg"
                                  name="age"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={18}>18</option>
                                  <option value={19}>19</option>
                                  <option value={20}>20</option>
                                  <option value={21}>21</option>
                                  <option value={22}>22</option>
                                  <option value={23}>23</option>
                                  <option value={24}>24</option>
                                  <option value={25}>25</option>
                                  <option value={26}>26</option>
                                  <option value={27}>27</option>
                                  <option value={28}>28</option>
                                  <option value={29}>29</option>
                                  <option value={30}>30</option>
                                  <option value={31}>31</option>
                                  <option value={32}>32</option>
                                  <option value={33}>33</option>
                                  <option value={34}>34</option>
                                  <option value={35}>35</option>
                                  <option value={36}>36</option>
                                  <option value={37}>37</option>
                                  <option value={38}>38</option>
                                  <option value={39}>39</option>
                                  <option value={40}>40</option>
                                  <option value={41}>41</option>
                                  <option value={42}>42</option>
                                  <option value={43}>43</option>
                                  <option value={44}>44</option>
                                  <option value={45}>45</option>
                                  <option value={46}>46</option>
                                  <option value={47}>47</option>
                                  <option value={48}>48</option>
                                  <option value={49}>49</option>
                                  <option value={50}>50</option>
                                  <option value={51}>51</option>
                                  <option value={52}>52</option>
                                  <option value={53}>53</option>
                                  <option value={54}>54</option>
                                  <option value={55}>55</option>
                                  <option value={56}>56</option>
                                  <option value={57}>57</option>
                                  <option value={58}>58</option>
                                  <option value={59}>59</option>
                                  <option value={60}>60</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Blood Group</label>
                                <input
                                  type="text"
                                  name="blood_group"
                                  className="form-control form-control-lg border-danger"
                                  placeholder="Enter blood_group"
                                  defaultValue
                                />
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Marital Status
                                </label>
                                <select
                                  name="marital_status"
                                  className="form-control form-control-lg"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>UnMarried </option>
                                  <option value={2}>Married </option>
                                  <option value={3}> Divorced </option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Date Of Birth
                                </label>
                                <input
                                  type="date"
                                  name="date_of_birth"
                                  id="date_of_birth"
                                  className="form-control form-control-lg"
                                  defaultValue="1996-09-21"
                                />
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Profile Created By
                                </label>
                                <select
                                  name="profile_created_by"
                                  className="form-control form-control-lg"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Self</option>
                                  <option value={2}>Parents</option>
                                  <option value={3}>Guardian</option>
                                  <option value={4}>Friends</option>
                                  <option value={5}>Sibling</option>
                                  <option value={6}>Relatives</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Mobile No</label>
                                <div className="card-container">
                                  <input
                                    name="mobile_no"
                                    type="number"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Mobile No"
                                    defaultValue={7057921848}
                                  />
                                </div>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Alternative Mobile No
                                </label>
                                <div className="card-container">
                                  <input
                                    name="mobile_no_alternative"
                                    type="number"
                                    className="form-control form-control-lg border-danger "
                                    placeholder="Enter Mobile No"
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Mother Tongue:
                                </label>
                                <select
                                  name="mother_tongue"
                                  className="form-control form-control-lg "
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Not Assign</option>
                                  <option value={2}>Telugu</option>
                                  <option value={3}>Tamil</option>
                                  <option value={4}>Sourashtra</option>
                                  <option value={5}>Sindhi</option>
                                  <option value={6}>Santhali</option>
                                  <option value={7}>Sanskrit</option>
                                  <option value={8}>Rajasthani</option>
                                  <option value={9}>Punjabi</option>
                                  <option value={10}>Oriya</option>
                                  <option value={11}>Nepali</option>
                                  <option value={12}>Nicobarese</option>
                                  <option value={13}>Monpa</option>
                                  <option value={14}>Mizo</option>
                                  <option value={15}>Miji</option>
                                  <option value={16}>Marwari</option>
                                  <option value={17}>Marathi</option>
                                  <option value={18}>Manipuri</option>
                                  <option value={19}>Malayalam</option>
                                  <option value={20}>Maithili</option>
                                  <option value={21}>Magahi</option>
                                  <option value={22}>Ladacki</option>
                                  <option value={23}>Lepcha</option>
                                  <option value={24}>Kutchi</option>
                                  <option value={25}>Kumaoni</option>
                                  <option value={26}>Koshali</option>
                                  <option value={27}>Konkani</option>
                                  <option value={28}>Khasi</option>
                                  <option value={29}>Khandesi</option>
                                  <option value={30}>Kashmiri</option>
                                  <option value={31}>Kannada</option>
                                  <option value={32}>Kanauji</option>
                                  <option value={33}>Hindi</option>
                                  <option value={34}>Himachali/Pahari</option>
                                  <option value={35}>Haryanvi</option>
                                  <option value={36}>Gujarati</option>
                                  <option value={37}>Garo</option>
                                  <option value={38}>Garhwali</option>
                                  <option value={39}>French</option>
                                  <option value={40}>English</option>
                                  <option value={41}>Dogri</option>
                                  <option value={42}>Chatisgarhi</option>
                                  <option value={43}>Badaga</option>
                                  <option value={44}>Bihari</option>
                                  <option value={45}>Brij</option>
                                  <option value={46}>Bhojpuri</option>
                                  <option value={47}>Bengali</option>
                                  <option value={48}>Awadhi</option>
                                  <option value={49}>Assamese</option>
                                  <option value={50}>Arunachali</option>
                                  <option value={51}>Angika</option>
                                  <option value={52}>Tulu</option>
                                  <option value={53}>Urdu</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Email</label>
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control form-control-lg "
                                  placeholder="Enter Email"
                                  defaultValue="sandipgadekar143@gmail.com"
                                />
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">password</label>
                                <input
                                  type="text"
                                  name="password"
                                  className="form-control form-control-lg "
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="card-body col-md-12 ">
                            <div className="container" />
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success">
                              {" "}
                              Religion Information
                            </h4>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Religion</label>
                                <select
                                  name="religion"
                                  className="form-control form-control-lg "
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Not Assign</option>
                                  <option value={2}>Muslim - Sunni</option>
                                  <option value={3}>Hindu</option>
                                  <option value={4}>Muslim - Shia</option>
                                  <option value={5}>Christian</option>
                                  <option value={6}>Jain - Digambar</option>
                                  <option value={7}>Jain - Shwetambar</option>
                                  <option value={8}>Parsi</option>
                                  <option value={9}>Jewish</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Caste </label>
                                <select
                                  name="caste"
                                  className="form-control form-control-lg"
                                  id="caste_id"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Not Assign</option>
                                  <option value={2}>Brahmin - Audichya</option>
                                  <option value={3}>
                                    Brahmin - Anaviln Desai
                                  </option>
                                  <option value={4}>Brahmin - Anavil</option>
                                  <option value={5}>Brahmbatt</option>
                                  <option value={6}>Boyar</option>
                                  <option value={7}>Bondili</option>
                                  <option value={8}>Bishnoi/Vishnoi</option>
                                  <option value={9}>Billava</option>
                                  <option value={10}>Bhoyar</option>
                                  <option value={11}>Bhovi</option>
                                  <option value={12}>Bhoi</option>
                                  <option value={13}>Bhavasar Kshatriya</option>
                                  <option value={14}>Bhatraju</option>
                                  <option value={15}>Bhatia</option>
                                  <option value={16}>Bhandari</option>
                                  <option value={17}>Besta</option>
                                  <option value={18}>Beri Chettiar</option>
                                  <option value={19}>Barujibi</option>
                                  <option value={20}>Barnwal</option>
                                  <option value={21}>Baria</option>
                                  <option value={22}>Bari</option>
                                  <option value={23}>Barai</option>
                                  <option value={24}>Banjara</option>
                                  <option value={25}>Baniya - Kumuti</option>
                                  <option value={26}>Baniya - Bania</option>
                                  <option value={27}>Baniya</option>
                                  <option value={28}>Banik</option>
                                  <option value={29}>Banayat Oriya</option>
                                  <option value={30}>Balija Reddy</option>
                                  <option value={31}>Balija Naidu</option>
                                  <option value={32}>Balija</option>
                                  <option value={33}>Balai</option>
                                  <option value={34}>Bajantri</option>
                                  <option value={35}>Baishya</option>
                                  <option value={36}>Baishnab</option>
                                  <option value={37}>Bairwa</option>
                                  <option value={38}>Baidya</option>
                                  <option value={39}>Bagdi</option>
                                  <option value={40}>Badaga</option>
                                  <option value={41}>Ayyaraka</option>
                                  <option value={42}>Ayodhyavasi</option>
                                  <option value={43}>Ayira Vysya</option>
                                  <option value={44}>Asathi</option>
                                  <option value={45}>Arya Vysya</option>
                                  <option value={46}>Arunthathiyar</option>
                                  <option value={47}>Arora</option>
                                  <option value={48}>Arekatica</option>
                                  <option value={49}>Aramari / Gabit</option>
                                  <option value={50}>
                                    Anjana (Chowdary) Patel
                                  </option>
                                  <option value={51}>Ambalavasi</option>
                                  <option value={52}>Ahom</option>
                                  <option value={53}>Ahirwar</option>
                                  <option value={54}>Ahir Shimpi</option>
                                  <option value={55}>Agri</option>
                                  <option value={56}>Agrahari</option>
                                  <option value={57}>Agnikula Kshatriya</option>
                                  <option value={58}>Agarwal</option>
                                  <option value={59}>
                                    Agaram Vellan Chettiar
                                  </option>
                                  <option value={60}>
                                    Agamudayar / Arcot / Thuluva Vellala
                                  </option>
                                  <option value={61}>Adi Karnataka</option>
                                  <option value={62}>Adi Dravidar</option>
                                  <option value={63}>Adi Andhra</option>
                                  <option value={64}>Ad Dharmi</option>
                                  <option value={65}>
                                    Achirapakkam Chettiar
                                  </option>
                                  <option value={66}>Aaru Nattu Vellala</option>
                                  <option value={67}>
                                    Brahmin - Narmadiya{" "}
                                  </option>
                                  <option value={68}>
                                    Brahmin - Namboodiri
                                  </option>
                                  <option value={69}>Brahmin - Nagar</option>
                                  <option value={70}>Brahmin - Mohyal</option>
                                  <option value={71}>Brahmin - Modh</option>
                                  <option value={72}>Brahmin - Mevada</option>
                                  <option value={73}>Brahmin - Maithil</option>
                                  <option value={74}>Brahmin - Madhwa</option>
                                  <option value={75}>Brahmin - Kumaoni</option>
                                  <option value={76}>Brahmin - Kulin</option>
                                  <option value={77}>
                                    Brahmin - Koteshwara / Kota (Madhwa )
                                  </option>
                                  <option value={78}>Brahmin - Kota</option>
                                  <option value={79}>
                                    Brahmin - Kokanastha
                                  </option>
                                  <option value={80}>Brahmin - Khedaval</option>
                                  <option value={81}>
                                    Brahmin - Khandelwal
                                  </option>
                                  <option value={82}>96 Kuli Maratha</option>
                                  <option value={83}>
                                    Brahmin - Khadayata
                                  </option>
                                  <option value={84}>Brahmin - Karhade</option>
                                  <option value={85}>
                                    Brahmin - Kanyakubj
                                  </option>
                                  <option value={86}>
                                    24 Manai Telugu Chettiar
                                  </option>
                                  <option value={87}>Brahmin - Jyotish</option>
                                  <option value={88}>Brahmin - Jhadua</option>
                                  <option value={89}>Brahmin - Jangid</option>
                                  <option value={90}>Brahmin - Iyer</option>
                                  <option value={91}>Brahmin - Iyengar</option>
                                  <option value={92}>Brahmin - Hoysala</option>
                                  <option value={93}>Brahmin - Havyaka</option>
                                  <option value={94}>Brahmin - Halua</option>
                                  <option value={95}>Brahmin - Gurukkal</option>
                                  <option value={96}>
                                    Brahmin - Gujar Gaur
                                  </option>
                                  <option value={97}>
                                    Brahmin - Goswami/Gosavi
                                  </option>
                                  <option value={98}>Brahmin - Gaur</option>
                                  <option value={99}>Brahmin - Garhwali</option>
                                  <option value={100}>
                                    Brahmin - Embrandiri
                                  </option>
                                  <option value={101}>Brahmin - Dravida</option>
                                  <option value={102}>Brahmin - Dhiman</option>
                                  <option value={103}>
                                    Brahmin - Deshastha
                                  </option>
                                  <option value={104}>Brahmin - Danua</option>
                                  <option value={105}>
                                    Brahmin - Daivadnya
                                  </option>
                                  <option value={106}>Brahmin - Dadhich</option>
                                  <option value={107}>
                                    Brahmin - Bhumihar
                                  </option>
                                  <option value={108}>Brahmin - Bhatt</option>
                                  <option value={109}>Brahmin - Bhargav</option>
                                  <option value={110}>
                                    Brahmin - Barendra
                                  </option>
                                  <option value={111}>Brahmin - Bardai</option>
                                  <option value={112}>
                                    Brahmin - Baidhiki/Vaidhiki
                                  </option>
                                  <option value={113}>Brahmin - Others</option>
                                  <option value={114}>Brahmin - Paliwal</option>
                                  <option value={115}>Brahmin - Panda</option>
                                  <option value={116}>Brahmin - Pandit</option>
                                  <option value={117}>
                                    Brahmin - Panicker
                                  </option>
                                  <option value={118}>Brahmin - Pareek</option>
                                  <option value={119}>
                                    Brahmin - Pushkarna
                                  </option>
                                  <option value={120}>Brahmin - Rajgor</option>
                                  <option value={121}>Brahmin - Rarhi</option>
                                  <option value={122}>
                                    Brahmin - Rarhi/Radhi
                                  </option>
                                  <option value={123}>Brahmin - Rigvedi</option>
                                  <option value={124}>Brahmin - Rudraj</option>
                                  <option value={125}>
                                    Brahmin - Sakaldwipi
                                  </option>
                                  <option value={126}>Brahmin - Sanadya</option>
                                  <option value={127}>Brahmin - Sanketi</option>
                                  <option value={128}>
                                    Brahmin - Saraswat
                                  </option>
                                  <option value={129}>Brahmin - Sarua</option>
                                  <option value={130}>
                                    Brahmin - Saryuparin
                                  </option>
                                  <option value={131}>
                                    Brahmin - Shivalli (Madhva)
                                  </option>
                                  <option value={132}>
                                    Brahmin - Shivhalli
                                  </option>
                                  <option value={133}>
                                    Brahmin - Shri Gaud
                                  </option>
                                  <option value={134}>
                                    Brahmin - Shri Mali
                                  </option>
                                  <option value={135}>
                                    Brahmin - Shrimali
                                  </option>
                                  <option value={136}>
                                    Brahmin - Shukla Yajurvedi
                                  </option>
                                  <option value={137}>Brahmin - Sikhwal</option>
                                  <option value={138}>Brahmin - Smartha</option>
                                  <option value={139}>
                                    Brahmin - Sri Vaishnava
                                  </option>
                                  <option value={140}>Brahmin - Stanika</option>
                                  <option value={141}>
                                    Brahmin - Tapodhan
                                  </option>
                                  <option value={142}>Brahmin - Tyagi</option>
                                  <option value={143}>Brahmin - Vaidiki</option>
                                  <option value={144}>
                                    Brahmin - Vaikhanasa
                                  </option>
                                  <option value={145}>Brahmin - Valam</option>
                                  <option value={146}>
                                    Brahmin - Velanadu
                                  </option>
                                  <option value={147}>Brahmin - Vyas</option>
                                  <option value={148}>Brahmin - Zalora</option>
                                  <option value={149}>Brajastha Maithil</option>
                                  <option value={150}>Bunt (Shetty)</option>
                                  <option value={151}>CKP</option>
                                  <option value={152}>
                                    Chalawadi and Holeya
                                  </option>
                                  <option value={153}>Chambhar</option>
                                  <option value={154}>
                                    Chandravanshi Kahar
                                  </option>
                                  <option value={155}>Chasa</option>
                                  <option value={156}>
                                    Chattada Sri Vaishnava{" "}
                                  </option>
                                  <option value={157}>Chaturth</option>
                                  <option value={158}>Chaudary</option>
                                  <option value={159}>Chaurasia</option>
                                  <option value={160}>Chennadasar</option>
                                  <option value={161}>
                                    Cherakula Vellalar
                                  </option>
                                  <option value={162}>Chettiar</option>
                                  <option value={163}>Chhetri</option>
                                  <option value={164}>Chippolu (Mera)</option>
                                  <option value={165}>Choudhary</option>
                                  <option value={166}>Choudhary</option>
                                  <option value={167}>Coorgi</option>
                                  <option value={168}>Deshmukh</option>
                                  <option value={169}>Desikar</option>
                                  <option value={170}>Desikar Thanjavur</option>
                                  <option value={171}>Devadiga</option>
                                  <option value={172}>
                                    Devandra Kula Vellalar
                                  </option>
                                  <option value={173}>Devang Koshthi</option>
                                  <option value={174}>Devanga</option>
                                  <option value={175}>Devanga Chettiar</option>
                                  <option value={176}>
                                    Devar/Thevar/Mukkulathor
                                  </option>
                                  <option value={177}>Devrukhe Brahmin</option>
                                  <option value={178}>Dhanak</option>
                                  <option value={179}>Dhangar</option>
                                  <option value={180}>Dheevara</option>
                                  <option value={181}>Dhiman</option>
                                  <option value={182}>Dhoba</option>
                                  <option value={183}>Dhobi</option>
                                  <option value={184}>Dhor / Kakkayya</option>
                                  <option value={185}>Dommala</option>
                                  <option value={186}>Dosar / Dusra</option>
                                  <option value={187}>Dumal</option>
                                  <option value={188}>Dusadh (Paswan)</option>
                                  <option value={189}>Ediga</option>
                                  <option value={190}>
                                    Ediga /Goud (Balija)
                                  </option>
                                  <option value={191}>Elur Chetty</option>
                                  <option value={192}>Ezhava</option>
                                  <option value={193}>Ezhava Panicker</option>
                                  <option value={194}>Ezhava Thandan</option>
                                  <option value={195}>Ezhuthachan</option>
                                  <option value={196}>Gabit</option>
                                  <option value={197}>Gahoi</option>
                                  <option value={198}>Gajula / Kavarai</option>
                                  <option value={199}>Ganda</option>
                                  <option value={200}>Gandha Vanika</option>
                                  <option value={201}>Gandla</option>
                                  <option value={202}>Gandla / Ganiga</option>
                                  <option value={203}>Ganiga</option>
                                  <option value={204}>Garhwali</option>
                                  <option value={205}>Gatti</option>
                                  <option value={206}>Gavara</option>
                                  <option value={207}>Gawali</option>
                                  <option value={208}>Ghisadi</option>
                                  <option value={209}>Ghumar</option>
                                  <option value={210}>Goala</option>
                                  <option value={211}>Goan</option>
                                  <option value={212}>Gomantak</option>
                                  <option value={213}>Gondhali</option>
                                  <option value={214}>Goud</option>
                                  <option value={215}>Gounder</option>
                                  <option value={216}>
                                    Gounder - Kongu Vellala Gounder
                                  </option>
                                  <option value={217}>
                                    Gounder - Nattu Gounder
                                  </option>
                                  <option value={218}>Gounder - Others</option>
                                  <option value={219}>
                                    Gounder - Urali Gounder
                                  </option>
                                  <option value={220}>
                                    Gounder - Vanniya Kula Kshatriyar
                                  </option>
                                  <option value={221}>
                                    Gounder - Vettuva Gounder
                                  </option>
                                  <option value={222}>Gowda</option>
                                  <option value={223}>
                                    Gowda - Kuruba Gowda
                                  </option>
                                  <option value={224}>Gramani</option>
                                  <option value={225}>Gudia</option>
                                  <option value={226}>Gujjar</option>
                                  <option value={227}>Gulahre</option>
                                  <option value={228}>Gupta</option>
                                  <option value={229}>Guptan</option>
                                  <option value={230}>Gurav</option>
                                  <option value={231}>Gurjar</option>
                                  <option value={232}>Haihaivanshi</option>
                                  <option value={233}>Halba Koshti</option>
                                  <option value={234}>Helava</option>
                                  <option value={235}>Hugar (Jeer)</option>
                                  <option value={236}>Illaththu Pillai</option>
                                  <option value={237}>Intercaste</option>
                                  <option value={238}>Irani</option>
                                  <option value={239}>Isai Vellalar</option>
                                  <option value={240}>Jaalari</option>
                                  <option value={241}>Jaiswal</option>
                                  <option value={242}>Jandra</option>
                                  <option value={243}>Jangam</option>
                                  <option value={244}>Jangra - Brahmin</option>
                                  <option value={245}>Jat</option>
                                  <option value={246}>Jatav</option>
                                  <option value={247}>Jetty/Malla</option>
                                  <option value={248}>Jhadav</option>
                                  <option value={249}>Jijhotia Brahmin</option>
                                  <option value={250}>Jogi (Nath)</option>
                                  <option value={251}>Julaha</option>
                                  <option value={252}>Kachara</option>
                                  <option value={253}>Kadava Patel</option>
                                  <option value={254}>Kahar</option>
                                  <option value={255}>Kaibarta</option>
                                  <option value={256}>Kaikaala</option>
                                  <option value={257}>Kalal</option>
                                  <option value={258}>Kalanji</option>
                                  <option value={259}>Kalar</option>
                                  <option value={260}>Kalinga Vysya</option>
                                  <option value={261}>Kalita</option>
                                  <option value={262}>Kalwar</option>
                                  <option value={263}>Kamboj</option>
                                  <option value={264}>Kamma</option>
                                  <option value={265}>Kamma Naidu</option>
                                  <option value={266}>Kanakkan Padanna</option>
                                  <option value={267}>Kandara</option>
                                  <option value={268}>Kansari</option>
                                  <option value={269}>Kanykubj Bania</option>
                                  <option value={270}>Kapu</option>
                                  <option value={271}>Kapu Naidu</option>
                                  <option value={272}>Kapu Reddy</option>
                                  <option value={273}>
                                    Karakala Bhakthula
                                  </option>
                                  <option value={274}>Karana</option>
                                  <option value={275}>Karkathar</option>
                                  <option value={276}>Karmakar</option>
                                  <option value={277}>Karni Bhakthula</option>
                                  <option value={278}>Karuneegar</option>
                                  <option value={279}>Kasar</option>
                                  <option value={280}>Kasaundhan</option>
                                  <option value={281}>Kashyap</option>
                                  <option value={282}>Kasukara</option>
                                  <option value={283}>Katiya</option>
                                  <option value={284}>Kavara</option>
                                  <option value={285}>
                                    Kavuthiyya/Ezhavathy
                                  </option>
                                  <option value={286}>Kayastha</option>
                                  <option value={287}>
                                    Kayastha (Bengali)
                                  </option>
                                  <option value={288}>Kerala Mudali</option>
                                  <option value={289}>
                                    Keshri (Kesarwani)
                                  </option>
                                  <option value={290}>Khandayat</option>
                                  <option value={291}>Khandelwal</option>
                                  <option value={292}>Kharwa</option>
                                  <option value={293}>Kharwar</option>
                                  <option value={294}>Khatik</option>
                                  <option value={295}>Khatri</option>
                                  <option value={296}>Kirar</option>
                                  <option value={297}>Kodikal Pillai</option>
                                  <option value={298}>
                                    Kokanastha Maratha
                                  </option>
                                  <option value={299}>Koli</option>
                                  <option value={300}>Koli Mahadev</option>
                                  <option value={301}>Koli Patel</option>
                                  <option value={302}>
                                    Komti /Arya Vaishya
                                  </option>
                                  <option value={303}>Kongu Chettiar</option>
                                  <option value={304}>Kongu Nadar</option>
                                  <option value={305}>
                                    Kongu Vellala Gounder
                                  </option>
                                  <option value={306}>Konkani</option>
                                  <option value={307}>Korama</option>
                                  <option value={308}>Kori</option>
                                  <option value={309}>Kori/Koli</option>
                                  <option value={310}>Kosthi</option>
                                  <option value={311}>Krishnavaka</option>
                                  <option value={312}>Kshatriya</option>
                                  <option value={313}>Kshatriya Kurmi</option>
                                  <option value={314}>Kshatriya Raju</option>
                                  <option value={315}>Kudumbi</option>
                                  <option value={316}>Kulal</option>
                                  <option value={317}>Kulalar</option>
                                  <option value={318}>Kulita</option>
                                  <option value={319}>Kumaoni Rajput</option>
                                  <option value={320}>Kumawat</option>
                                  <option value={321}>Kumbhakar</option>
                                  <option value={322}>Kumbhar</option>
                                  <option value={323}>Kumhar</option>
                                  <option value={324}>Kummari</option>
                                  <option value={325}>Kunbi</option>
                                  <option value={326}>Kunbi Lonari</option>
                                  <option value={327}>Kunbi Maratha</option>
                                  <option value={328}>Kunbi Tirale</option>
                                  <option value={329}>Kuravan</option>
                                  <option value={330}>Kurmi</option>
                                  <option value={331}>
                                    Kurmi/Kurmi Kshatriya
                                  </option>
                                  <option value={332}>Kurni</option>
                                  <option value={333}>Kuruba</option>
                                  <option value={334}>Kuruhina Shetty</option>
                                  <option value={335}>Kuruhini Chetty</option>
                                  <option value={336}>Kurumbar</option>
                                  <option value={337}>Kuruva</option>
                                  <option value={338}>Kushwaha (Koiri)</option>
                                  <option value={339}>Kutchi</option>
                                  <option value={340}>Lad</option>
                                  <option value={341}>Lambadi</option>
                                  <option value={342}>Leva patel</option>
                                  <option value={343}>Leva patil</option>
                                  <option value={344}>Linga Balija</option>
                                  <option value={345}>Lingayath</option>
                                  <option value={346}>Lodhi Rajput</option>
                                  <option value={347}>Lohana</option>
                                  <option value={348}>Lohar</option>
                                  <option value={349}>Loniya</option>
                                  <option value={350}>Lubana</option>
                                  <option value={351}>
                                    Madhesiya/Kanu/Halwai
                                  </option>
                                  <option value={352}>Madiga</option>
                                  <option value={353}>Mahajan</option>
                                  <option value={354}>Mahar</option>
                                  <option value={355}>Mahendra</option>
                                  <option value={356}>Maheshwari</option>
                                  <option value={357}>
                                    Maheshwari / Meshri
                                  </option>
                                  <option value={358}>Mahishya</option>
                                  <option value={359}>Mahor</option>
                                  <option value={360}>Mahuri</option>
                                  <option value={361}>
                                    Mair Rajput Swarnkar
                                  </option>
                                  <option value={362}>Majabi</option>
                                  <option value={363}>Mala</option>
                                  <option value={364}>Mali</option>
                                  <option value={365}>Mallah</option>
                                  <option value={366}>Malviya Brahmin</option>
                                  <option value={367}>Malwani</option>
                                  <option value={368}>Mangalorean</option>
                                  <option value={369}>Manipuri</option>
                                  <option value={370}>
                                    Manjapudur Chettiar
                                  </option>
                                  <option value={371}>
                                    Mannan / Velan / Vannan
                                  </option>
                                  <option value={372}>Mapila</option>
                                  <option value={373}>Maratha</option>
                                  <option value={374}>Maratha Kshatriya</option>
                                  <option value={375}>Maruthuvar</option>
                                  <option value={376}>Matang</option>
                                  <option value={377}>Mathur</option>
                                  <option value={378}>Mathur Vaishya</option>
                                  <option value={379}>Maurya / Shakya</option>
                                  <option value={380}>Meena</option>
                                  <option value={381}>Meenavar</option>
                                  <option value={382}>Meghwal</option>
                                  <option value={383}>Mehra</option>
                                  <option value={384}>Meru Darji</option>
                                  <option value={385}>Mochi</option>
                                  <option value={386}>Modak</option>
                                  <option value={387}>Modi</option>
                                  <option value={388}>Modikarlu</option>
                                  <option value={389}>Mogaveera</option>
                                  <option value={390}>Mudaliyar</option>
                                  <option value={391}>Mudiraj</option>
                                  <option value={392}>Munnuru Kapu</option>
                                  <option value={393}>Musukama</option>
                                  <option value={394}>Muthuraja</option>
                                  <option value={395}>Naagavamsam</option>
                                  <option value={396}>Nabit</option>
                                  <option value={397}>Nadar</option>
                                  <option value={398}>Nagaralu</option>
                                  <option value={399}>Nai</option>
                                  <option value={400}>Naicker</option>
                                  <option value={401}>Naicker - Others</option>
                                  <option value={402}>
                                    Naicker - Vanniya Kula Kshatriyar
                                  </option>
                                  <option value={403}>Naidu</option>
                                  <option value={404}>Naik</option>
                                  <option value={405}>Nair</option>
                                  <option value={406}>
                                    Namasudra / Namassej
                                  </option>
                                  <option value={407}>Nambiar</option>
                                  <option value={408}>Namdarlu</option>
                                  <option value={409}>Nanjil Mudali</option>
                                  <option value={410}>
                                    Nanjil Nattu Vellalar
                                  </option>
                                  <option value={411}>Nanjil Vellalar</option>
                                  <option value={412}>Nanjil pillai</option>
                                  <option value={413}>Nankudi Vellalar</option>
                                  <option value={414}>Napit</option>
                                  <option value={415}>Nattu Gounder</option>
                                  <option value={416}>
                                    Nattukottai Chettiar
                                  </option>
                                  <option value={417}>Nayaka</option>
                                  <option value={418}>Neeli</option>
                                  <option value={419}>Neeli Saali</option>
                                  <option value={420}>Nema</option>
                                  <option value={421}>Nepali</option>
                                  <option value={422}>Nessi</option>
                                  <option value={423}>Nhavi</option>
                                  <option value={424}>Ontari</option>
                                  <option value={425}>Oswal</option>
                                  <option value={426}>Otari</option>
                                  <option value={427}>Othuvaar</option>
                                  <option value={428}>Padmasali</option>
                                  <option value={429}>Padmashali</option>
                                  <option value={430}>Padmavati Porwal</option>
                                  <option value={431}>Pagadala</option>
                                  <option value={432}>Pal</option>
                                  <option value={433}>
                                    Pallan / Devandra Kula Vellalan
                                  </option>
                                  <option value={434}>Panan</option>
                                  <option value={435}>Panchal</option>
                                  <option value={436}>Pandaram</option>
                                  <option value={437}>Pandiya Vellalar</option>
                                  <option value={438}>Panicker</option>
                                  <option value={439}>
                                    Pannirandam Chettiar
                                  </option>
                                  <option value={440}>
                                    Paravan / Bharatar
                                  </option>
                                  <option value={441}>Parit</option>
                                  <option value={442}>Parkava Kulam</option>
                                  <option value={443}>Parsi</option>
                                  <option value={444}>Partraj</option>
                                  <option value={445}>
                                    Parvatha Rajakulam
                                  </option>
                                  <option value={446}>Pasi</option>
                                  <option value={447}>Paswan / Dusadh</option>
                                  <option value={448}>Patel</option>
                                  <option value={449}>Pathare Prabhu</option>
                                  <option value={450}>Patil</option>
                                  <option value={451}>
                                    Patnaick/Sistakaranam
                                  </option>
                                  <option value={452}>Patra</option>
                                  <option value={453}>Pattinavar</option>
                                  <option value={454}>Pattusali</option>
                                  <option value={455}>Patwa</option>
                                  <option value={456}>Perika</option>
                                  <option value={457}>
                                    Perika/Puragiri Kshatriya
                                  </option>
                                  <option value={458}>Pillai</option>
                                  <option value={459}>Poosala</option>
                                  <option value={460}>Porwal</option>
                                  <option value={461}>Porwal / Porwar</option>
                                  <option value={462}>Poundra</option>
                                  <option value={463}>Prajapati</option>
                                  <option value={464}>Pulaya / Cheruman</option>
                                  <option value={465}>Raigar</option>
                                  <option value={466}>Rajaka</option>
                                  <option value={467}>Rajastani</option>
                                  <option value={468}>Rajbhar</option>
                                  <option value={469}>Rajbonshi</option>
                                  <option value={470}>Rajpurohit</option>
                                  <option value={471}>Rajput</option>
                                  <option value={472}>Ramanandi</option>
                                  <option value={473}>Ramdasia</option>
                                  <option value={474}>Ramgariah</option>
                                  <option value={475}>Ramoshi</option>
                                  <option value={476}>Rastogi</option>
                                  <option value={477}>Rathi</option>
                                  <option value={478}>Rauniar</option>
                                  <option value={479}>Ravidasia</option>
                                  <option value={480}>Rawat</option>
                                  <option value={481}>Reddy</option>
                                  <option value={482}>Relli</option>
                                  <option value={483}>Rohit / Chamar</option>
                                  <option value={484}>Ror</option>
                                  <option value={485}>SC</option>
                                  <option value={486}>SKP</option>
                                  <option value={487}>ST</option>
                                  <option value={488}>Sadgope</option>
                                  <option value={489}>Sadhu Chetty</option>
                                  <option value={490}>Sagara (Uppara)</option>
                                  <option value={491}>Saha</option>
                                  <option value={492}>Sahu</option>
                                  <option value={493}>Saini</option>
                                  <option value={494}>
                                    Saiva Pillai Thanjavur
                                  </option>
                                  <option value={495}>
                                    Saiva Pillai Tirunelveli
                                  </option>
                                  <option value={496}>Saliya</option>
                                  <option value={497}>Samagar</option>
                                  <option value={498}>Sambava</option>
                                  <option value={499}>Sathwara</option>
                                  <option value={500}>Satnami</option>
                                  <option value={501}>Savji</option>
                                  <option value={502}>Senai Thalaivar</option>
                                  <option value={503}>
                                    Senguntha Mudaliyar
                                  </option>
                                  <option value={504}>
                                    Sengunthar/Kaikolar
                                  </option>
                                  <option value={505}>Settibalija</option>
                                  <option value={506}>Setty Balija</option>
                                  <option value={507}>Shaw / Sahu/Teli</option>
                                  <option value={508}>Shettigar</option>
                                  <option value={509}>Shilpkar</option>
                                  <option value={510}>Shimpi/Namdev</option>
                                  <option value={511}>Sindhi</option>
                                  <option value={512}>Sindhi-Amil</option>
                                  <option value={513}>Sindhi-Baibhand</option>
                                  <option value={514}>Sindhi-Bhanusali</option>
                                  <option value={515}>Sindhi-Bhatia</option>
                                  <option value={516}>Sindhi-Chhapru</option>
                                  <option value={517}>Sindhi-Dadu</option>
                                  <option value={518}>Sindhi-Hyderabadi</option>
                                  <option value={519}>Sindhi-Larai</option>
                                  <option value={520}>Sindhi-Larkana</option>
                                  <option value={521}>Sindhi-Lohana</option>
                                  <option value={522}>Sindhi-Rohiri</option>
                                  <option value={523}>Sindhi-Sahiti</option>
                                  <option value={524}>Sindhi-Sakkhar</option>
                                  <option value={525}>Sindhi-Sehwani</option>
                                  <option value={526}>Sindhi-Shikarpuri</option>
                                  <option value={527}>Sindhi-Thatai</option>
                                  <option value={528}>Sonar</option>
                                  <option value={529}>Soni</option>
                                  <option value={530}>Sonkar</option>
                                  <option value={531}>Sourashtra</option>
                                  <option value={532}>Sozhia Chetty</option>
                                  <option value={533}>Sozhiya Vellalar</option>
                                  <option value={534}>Srisayana</option>
                                  <option value={535}>Sugali (Naika)</option>
                                  <option value={536}>Sunari</option>
                                  <option value={537}>Sundhi</option>
                                  <option value={538}>Surya Balija</option>
                                  <option value={539}>Suthar</option>
                                  <option value={540}>Swakula Sali</option>
                                  <option value={541}>Tamboli</option>
                                  <option value={542}>Tanti</option>
                                  <option value={543}>Tantubai</option>
                                  <option value={544}>Telaga</option>
                                  <option value={545}>Teli</option>
                                  <option value={546}>Telugupatti</option>
                                  <option value={547}>Thakkar</option>
                                  <option value={548}>Thakore</option>
                                  <option value={549}>Thakur</option>
                                  <option value={550}>Thandan</option>
                                  <option value={551}>Thigala</option>
                                  <option value={552}>Thiyya</option>
                                  <option value={553}>Thiyya Thandan</option>
                                  <option value={554}>
                                    Thogata Veera Kshatriya
                                  </option>
                                  <option value={555}>
                                    Thogata Veerakshathriya
                                  </option>
                                  <option value={556}>
                                    Thondai Mandala Vellalar
                                  </option>
                                  <option value={557}>Thota</option>
                                  <option value={558}>Tili</option>
                                  <option value={559}>Togata</option>
                                  <option value={560}>Tonk Kshatriya</option>
                                  <option value={561}>Turupu Kapu</option>
                                  <option value={562}>
                                    Ummar / Umre / Bagaria
                                  </option>
                                  <option value={563}>Urali Gounder</option>
                                  <option value={564}>Urs</option>
                                  <option value={565}>Vada Balija</option>
                                  <option value={566}>Vadambar</option>
                                  <option value={567}>Vaddera</option>
                                  <option value={568}>Vadugan</option>
                                  <option value={569}>Vaish</option>
                                  <option value={570}>Vaishnav</option>
                                  <option value={571}>Vaishnav Dishaval</option>
                                  <option value={572}>Vaishnav Kapol</option>
                                  <option value={573}>Vaishnav Khadyata</option>
                                  <option value={574}>Vaishnav Lad</option>
                                  <option value={575}>Vaishnav Modh</option>
                                  <option value={576}>Vaishnav Porvad</option>
                                  <option value={577}>Vaishnav Shrimali</option>
                                  <option value={578}>
                                    Vaishnav Sorathaiya
                                  </option>
                                  <option value={579}>Vaishnav Vania</option>
                                  <option value={580}>Vaishnava</option>
                                  <option value={581}>Vaishya</option>
                                  <option value={582}>Vaishya Vani</option>
                                  <option value={583}>Valluvan</option>
                                  <option value={584}>Valmiki</option>
                                  <option value={585}>Vani</option>
                                  <option value={586}>Vani / Vaishya</option>
                                  <option value={587}>Vania</option>
                                  <option value={588}>Vanika Vyshya</option>
                                  <option value={589}>Vaniya</option>
                                  <option value={590}>Vaniya Chettiar</option>
                                  <option value={591}>Vanjara</option>
                                  <option value={592}>Vanjari</option>
                                  <option value={593}>Vankar</option>
                                  <option value={594}>Vannar</option>
                                  <option value={595}>
                                    Vannia Kula Kshatriyar
                                  </option>
                                  <option value={596}>Variar</option>
                                  <option value={597}>Varshney</option>
                                  <option value={598}>
                                    Varshney (Barahseni)
                                  </option>
                                  <option value={599}>Veera Saivam</option>
                                  <option value={600}>Veerakodi Vellala</option>
                                  <option value={601}>Velaan</option>
                                  <option value={602}>Velama</option>
                                  <option value={603}>Vellalar</option>
                                  <option value={604}>Vellan Chettiars</option>
                                  <option value={605}>Veluthedathu Nair</option>
                                  <option value={606}>Vettuva Gounder</option>
                                  <option value={607}>Vettuvan</option>
                                  <option value={608}>Vijayvargia</option>
                                  <option value={609}>Vilakithala Nair</option>
                                  <option value={610}>Vilakkithala Nair</option>
                                  <option value={611}>Vishwakarma</option>
                                  <option value={612}>Viswabrahmin</option>
                                  <option value={613}>Vokkaliga</option>
                                  <option value={614}>Vysya</option>
                                  <option value={615}>Yadav</option>
                                  <option value={616}>Yadava Naidu</option>
                                  <option value={617}>Yellapu</option>
                                  <option value={618}>Anavil Brahmin</option>
                                  <option value={619}>Audichya Brahmin</option>
                                  <option value={620}>Barendra Brahmin </option>
                                  <option value={621}>Bhatt Brahmin</option>
                                  <option value={622}>Bhumihar Brahmin</option>
                                  <option value={623}>Daivadnya Brahmin</option>
                                  <option value={624}>Danua Brahmin</option>
                                  <option value={625}>Deshastha Brahmin</option>
                                  <option value={626}>Dhiman Brahmin</option>
                                  <option value={627}>Dravida Brahmin</option>
                                  <option value={628}>
                                    Embrandiri Brahmin
                                  </option>
                                  <option value={629}>Garhwali Brahmin</option>
                                  <option value={630}>Gaur Brahmin</option>
                                  <option value={631}>
                                    Goswami/Gosavi Brahmin
                                  </option>
                                  <option value={632}>
                                    Gujar Gaur Brahmin
                                  </option>
                                  <option value={633}>Gurukkal Brahmin</option>
                                  <option value={634}>Halua Brahmin</option>
                                  <option value={635}>Havyaka Brahmin</option>
                                  <option value={636}>Hoysala Brahmin</option>
                                  <option value={637}>Iyengar Brahmin</option>
                                  <option value={638}>Iyer Brahmin</option>
                                  <option value={639}>Jangid Brahmin</option>
                                  <option value={640}>Jhadua Brahmin</option>
                                  <option value={641}>Kanyakubj Brahmin</option>
                                  <option value={642}>Karhade Brahmin</option>
                                  <option value={643}>
                                    Kokanastha Brahmin
                                  </option>
                                  <option value={644}>Kota Brahmin</option>
                                  <option value={645}>Kulin Brahmin</option>
                                  <option value={646}>Kumaoni Brahmin</option>
                                  <option value={647}>Madhwa Brahmin</option>
                                  <option value={648}>Maithil Brahmin</option>
                                  <option value={649}>Modh Brahmin</option>
                                  <option value={650}>Mohyal Brahmin</option>
                                  <option value={651}>Nagar Brahmin</option>
                                  <option value={652}>
                                    Namboodiri Brahmin
                                  </option>
                                  <option value={653}>Narmadiya Brahmin</option>
                                  <option value={654}>Niyogi Brahmin</option>
                                  <option value={655}>Panda Brahmin</option>
                                  <option value={656}>Pandit Brahmin</option>
                                  <option value={657}>Pushkarna Brahmin</option>
                                  <option value={658}>Rarhi Brahmin</option>
                                  <option value={659}>Rigvedi Brahmin</option>
                                  <option value={660}>Rudraj Brahmin</option>
                                  <option value={661}>
                                    Sakaldwipi Brahmin
                                  </option>
                                  <option value={662}>Sanadya Brahmin</option>
                                  <option value={663}>Sanketi Brahmin </option>
                                  <option value={664}>Saraswat Brahmin</option>
                                  <option value={665}>
                                    Saryuparin Brahmin
                                  </option>
                                  <option value={666}>Shivhalli Brahmin</option>
                                  <option value={667}>Shrimali Brahmin</option>
                                  <option value={668}>Sikhwal Brahmin</option>
                                  <option value={669}>Smartha Brahmin</option>
                                  <option value={670}>
                                    Sri Vaishnava Brahmin
                                  </option>
                                  <option value={671}>Stanika Brahmin</option>
                                  <option value={672}>Tyagi Brahmin</option>
                                  <option value={673}>Vaidiki Brahmin</option>
                                  <option value={674}>
                                    Vaikhanasa Brahmin
                                  </option>
                                  <option value={675}>Velanadu Brahmin</option>
                                  <option value={676}>Vyas Brahmin</option>
                                  <option value={677}>Shetty</option>
                                  <option value={678}>Mera</option>
                                  <option value={679}>Mukkulathor</option>
                                  <option value={680}>Paswan</option>
                                  <option value={681}>Jeer</option>
                                  <option value={682}>Brahmin Jijhotia</option>
                                  <option value={683}>Nath</option>
                                  <option value={684}>Koiri</option>
                                  <option value={685}>Brahmin Malviya</option>
                                  <option value={686}>Darji</option>
                                  <option value={687}>Amil Sindhi</option>
                                  <option value={688}>Baibhand Sindhi</option>
                                  <option value={689}>Bhanusali Sindhi</option>
                                  <option value={690}>Bhatia Sindhi</option>
                                  <option value={691}>Chhapru Sindhi</option>
                                  <option value={692}>Dadu Sindhi</option>
                                  <option value={693}>Hyderabadi Sindhi</option>
                                  <option value={694}>Larai Sindhi</option>
                                  <option value={695}>Larkana Sindhi</option>
                                  <option value={696}>Lohana Sindhi</option>
                                  <option value={697}>Rohiri Sindhi</option>
                                  <option value={698}>Sahiti Sindhi</option>
                                  <option value={699}>Sakkhar Sindhi</option>
                                  <option value={700}>Sehwani Sindhi</option>
                                  <option value={701}>Shikarpuri Sindhi</option>
                                  <option value={702}>Thatai Sindhi</option>
                                  <option value={703}>Naika</option>
                                  <option value={704}>Muslim - Ansari</option>
                                  <option value={705}>Muslim - Arain</option>
                                  <option value={706}>Muslim - Awan</option>
                                  <option value={707}>Muslim - Bohra</option>
                                  <option value={708}>Muslim - Dekkani</option>
                                  <option value={709}>Muslim - Dudekula</option>
                                  <option value={710}>Muslim - Hanafi</option>
                                  <option value={711}>Muslim - Jat</option>
                                  <option value={712}>Muslim - Khoja</option>
                                  <option value={713}>Muslim - Lebbai</option>
                                  <option value={714}>Muslim - Malik</option>
                                  <option value={715}>Muslim - Mapila</option>
                                  <option value={716}>Muslim - Maraicar</option>
                                  <option value={717}>Muslim - Memon</option>
                                  <option value={718}>Muslim - Mughal</option>
                                  <option value={719}>Muslim - Others</option>
                                  <option value={720}>Muslim - Pathan</option>
                                  <option value={721}>Muslim - Qureshi</option>
                                  <option value={722}>Muslim - Rajput</option>
                                  <option value={723}>Muslim - Rowther</option>
                                  <option value={724}>Muslim - Shafi</option>
                                  <option value={725}>Muslim - Sheikh</option>
                                  <option value={726}>Muslim - Siddiqui</option>
                                  <option value={727}>Muslim - Syed</option>
                                  <option value={728}>
                                    Muslim - UnSpecified
                                  </option>
                                  <option value={729}>Muslim - Ansari</option>
                                  <option value={730}>Muslim - Arain</option>
                                  <option value={731}>Muslim - Awan</option>
                                  <option value={732}>Muslim - Bohra</option>
                                  <option value={733}>Muslim - Dekkani</option>
                                  <option value={734}>Muslim - Dudekula</option>
                                  <option value={735}>Muslim - Hanafi</option>
                                  <option value={736}>Muslim - Jat</option>
                                  <option value={737}>Muslim - Khoja</option>
                                  <option value={738}>Muslim - Lebbai</option>
                                  <option value={739}>Muslim - Malik</option>
                                  <option value={740}>Muslim - Mapila</option>
                                  <option value={741}>Muslim - Maraicar</option>
                                  <option value={742}>Muslim - Memon</option>
                                  <option value={743}>Muslim - Mughal</option>
                                  <option value={744}>Muslim - Others</option>
                                  <option value={745}>Muslim - Pathan</option>
                                  <option value={746}>Muslim - Qureshi</option>
                                  <option value={747}>Muslim - Rajput</option>
                                  <option value={748}>Muslim - Rowther</option>
                                  <option value={749}>Muslim - Shafi</option>
                                  <option value={750}>Muslim - Sheikh</option>
                                  <option value={751}>Muslim - Siddiqui</option>
                                  <option value={752}>Muslim - Syed</option>
                                  <option value={753}>
                                    Muslim - UnSpecified
                                  </option>
                                  <option value={754}>Muslim - Ansari</option>
                                  <option value={755}>Muslim - Arain</option>
                                  <option value={756}>Muslim - Awan</option>
                                  <option value={757}>Muslim - Bohra</option>
                                  <option value={758}>Muslim - Dekkani</option>
                                  <option value={759}>Muslim - Dudekula</option>
                                  <option value={760}>Muslim - Hanafi</option>
                                  <option value={761}>Muslim - Jat</option>
                                  <option value={762}>Muslim - Khoja</option>
                                  <option value={763}>Muslim - Lebbai</option>
                                  <option value={764}>Muslim - Malik</option>
                                  <option value={765}>Muslim - Mapila</option>
                                  <option value={766}>Muslim - Maraicar</option>
                                  <option value={767}>Muslim - Maraicar</option>
                                  <option value={768}>Muslim - Memon</option>
                                  <option value={769}>Muslim - Mughal</option>
                                  <option value={770}>Muslim - Others</option>
                                  <option value={771}>Muslim - Pathan</option>
                                  <option value={772}>Muslim - Qureshi</option>
                                  <option value={773}>Muslim - Rajput</option>
                                  <option value={774}>Muslim - Rowther</option>
                                  <option value={775}>Muslim - Shafi</option>
                                  <option value={776}>Muslim - Sheikh</option>
                                  <option value={777}>Muslim - Siddiqui</option>
                                  <option value={778}>Muslim - Syed</option>
                                  <option value={779}>
                                    Muslim - UnSpecified
                                  </option>
                                  <option value={780}>Born Again</option>
                                  <option value={781}>Brethren</option>
                                  <option value={782}>
                                    Church of South India
                                  </option>
                                  <option value={783}>Evangelist</option>
                                  <option value={784}>Jacobite</option>
                                  <option value={785}>Knanaya</option>
                                  <option value={786}>Knanaya Catholic</option>
                                  <option value={787}>Knanaya Jacobite</option>
                                  <option value={788}>Latin Catholic</option>
                                  <option value={789}>
                                    Malankara Catholic
                                  </option>
                                  <option value={790}>Marthoma</option>
                                  <option value={791}>Pentecost</option>
                                  <option value={792}>Roman Catholic</option>
                                  <option value={793}>
                                    Seventh-day Adventist
                                  </option>
                                  <option value={794}>Syrian Catholic</option>
                                  <option value={795}>Syrian Jacobite</option>
                                  <option value={796}>Syrian Orthodox</option>
                                  <option value={797}>Syro Malabar</option>
                                  <option value={798}>
                                    Christian - Others
                                  </option>
                                  <option value={799}>Sikh - Ahluwalia</option>
                                  <option value={800}>Sikh - Arora</option>
                                  <option value={801}>Sikh - Bhatia</option>
                                  <option value={802}>Sikh - Bhatra</option>
                                  <option value={803}>Sikh - Ghumar</option>
                                  <option value={804}>Sikh - Intercaste</option>
                                  <option value={805}>Sikh - Jat</option>
                                  <option value={806}>Sikh - Kamboj</option>
                                  <option value={807}>Sikh - Khatri</option>
                                  <option value={808}>Sikh - Kshatriya</option>
                                  <option value={809}>Sikh - Lubana</option>
                                  <option value={810}>Sikh - Majabi</option>
                                  <option value={811}>Sikh - Nai</option>
                                  <option value={812}>Sikh - Others</option>
                                  <option value={813}>Sikh - Rajput</option>
                                  <option value={814}>Sikh - Ramdasia</option>
                                  <option value={815}>Sikh - Ramgharia</option>
                                  <option value={816}>Sikh - Ravidasia</option>
                                  <option value={817}>Sikh - Saini</option>
                                  <option value={818}>
                                    Sikh - Tonk Kshatriya
                                  </option>
                                  <option value={819}>
                                    Sikh - Unspecified
                                  </option>
                                  <option value={820}>Jain - Agarwal</option>
                                  <option value={821}>Jain - Bania</option>
                                  <option value={822}>Jain - Intercaste</option>
                                  <option value={823}>Jain - Jaiswal</option>
                                  <option value={824}>Jain - KVO</option>
                                  <option value={825}>Jain - Khandelwal</option>
                                  <option value={826}>Jain - Kutchi</option>
                                  <option value={827}>Jain - Oswal</option>
                                  <option value={828}>Jain - Others</option>
                                  <option value={829}>Jain - Porwal</option>
                                  <option value={830}>
                                    Jain - Unspecified
                                  </option>
                                  <option value={831}>Jain - Vaishya</option>
                                  <option value={832}>Jain - Agarwal</option>
                                  <option value={833}>Jain - Bania</option>
                                  <option value={834}>Jain - Intercaste</option>
                                  <option value={835}>Jain - Jaiswal</option>
                                  <option value={836}>Jain - KVO</option>
                                  <option value={837}>Jain - Khandelwal</option>
                                  <option value={838}>Jain - Kutchi</option>
                                  <option value={839}>Jain - Oswal</option>
                                  <option value={840}>Jain - Others</option>
                                  <option value={841}>Jain - Porwal</option>
                                  <option value={842}>
                                    Jain - Unspecified
                                  </option>
                                  <option value={843}>Jain - Vaishya</option>
                                  <option value={844}>Other Caste</option>
                                  <option value={845}>Intercaste</option>
                                  <option value={846}>Irani</option>
                                  <option value={847}>Parsi</option>
                                  <option value={848}>Other Caste</option>
                                  <option value={849}>Other Caste</option>
                                  <option value={850}>Other Caste</option>
                                  <option value={851}>Maratha</option>
                                  <option value={852}>Fhull Mali</option>
                                  <option value={853}>wadar</option>
                                  <option value={854}>Burud</option>
                                  <option value={855}>
                                    Nathpanti Devari Gosavi
                                  </option>
                                  <option value={856}>Dhangar</option>
                                  <option value={857}>Brahmin - Niyogi</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Sub Caste </label>
                                <select
                                  name="sub_caste"
                                  className="form-control form-control-lg"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Not Assign</option>
                                  <option value={2}>Gawali</option>
                                  <option value={3}>Hatkar</option>
                                  <option value={4}>Jhende</option>
                                  <option value={5}>Khatik</option>
                                  <option value={6}>Khutekar</option>
                                  <option value={7}>Sangar</option>
                                  <option value={8}>Shegar</option>
                                  <option value={9}>Zade</option>
                                  <option value={10}>Others</option>
                                  <option value={11}>Not</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Willing To Marry In Other Caste ?{" "}
                                </label>
                                <select
                                  name="marry_other_cast"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Yes</option>
                                  <option value={2}>No</option>
                                </select>
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success mt-4 mb-4">
                              {" "}
                              <i
                                className="fa fa-university gtMarginRight10"
                                aria-hidden="true"
                              />
                              Education &amp; Occupation Details
                            </h4>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className=" col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Highest Education
                                </label>
                                <input
                                  type="text"
                                  name="highest_education"
                                  className="form-control form-control-lg border-danger"
                                  placeholder="Enter Highest Education"
                                  defaultValue
                                />
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Additional Degree
                                </label>
                                <input
                                  type="text"
                                  name="additional_degree"
                                  className="form-control form-control-lg border-danger"
                                  placeholder="Enter Additional Degree"
                                  defaultValue
                                />
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Employed In (Working Sector)
                                </label>
                                <select
                                  name="employed"
                                  className="form-control form-control-lg"
                                >
                                  <option value>--- Select ---</option>
                                  <option value="Government">
                                    Government{" "}
                                  </option>
                                  <option value="Private">Private </option>
                                  <option value="Business">Business </option>
                                  <option value="Defence">Defence </option>
                                  <option value="Defence">
                                    Self Employed{" "}
                                  </option>
                                  <option value="Not Working">
                                    Not Working
                                  </option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Occupation</label>
                                <input
                                  name="occupation"
                                  className="form-control form-control-lg"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Annual Income
                                </label>
                                <input
                                  type="number"
                                  name="annual_income"
                                  className="form-control form-control-lg border-danger"
                                  placeholder="Enter Annual Income"
                                  defaultValue
                                />
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Property Details{" "}
                                </label>
                                <input
                                  type="text"
                                  name="member_property"
                                  className="form-control form-control-lg border-danger"
                                  placeholder
                                  defaultValue
                                />
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success mt-4 mb-4">
                              {" "}
                              <i
                                className="fa fa-user gtMarginRight10"
                                aria-hidden="true"
                              />
                              Family Details
                            </h4>
                          </div>
                          <div className="card-body col-md-12">
                            <div className="container">
                              <div className="row">
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Father Full Name
                                  </label>
                                  <input
                                    type="text"
                                    name="member_father_name"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter father name "
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>{" "}
                                <div className="form-group col-md-6  mt-4 mb-4">
                                  <label className="text-dark">
                                    Mother Name
                                  </label>
                                  <input
                                    type="text"
                                    name="member_mother_name"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter mother name "
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Family Type
                                  </label>
                                  <select
                                    name="family_type"
                                    id="fam_type"
                                    className="form-control form-control-lg border-danger"
                                  >
                                    <option value>--- Select ---</option>
                                    <option value={1}>Joint</option>
                                    <option value={2}>Nuclear</option>
                                  </select>
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Family Value
                                  </label>
                                  <select
                                    name="family_value"
                                    className="form-control form-control-lg border-danger"
                                  >
                                    <option value>--- Select ---</option>
                                    <option value="Orthodox">Orthodox</option>
                                    <option value="Traditional">
                                      Traditional
                                    </option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Liberal">Liberal</option>
                                  </select>
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Family Member
                                  </label>
                                  <input
                                    type="number"
                                    name="family_member"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter Family Member"
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Family Status
                                  </label>
                                  <select
                                    name="family_status"
                                    className="form-control form-control-lg border-danger"
                                  >
                                    <option value>--- Select ---</option>
                                    <option value="Middle Class">
                                      Middle Class
                                    </option>
                                    <option value="Upper Middle Class">
                                      Upper Middle Class
                                    </option>
                                    <option value="Rich">Rich</option>
                                    <option value="Affluent">Affluent</option>
                                  </select>
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Fathers Occupation
                                  </label>
                                  <input
                                    type="text"
                                    name="fathers_occupation"
                                    id="fathers_occupation"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Fathers Occupation"
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Relative Information
                                  </label>
                                  <input
                                    type="text"
                                    name="relative"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter Relative "
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    No of Brothers
                                  </label>
                                  <input
                                    type="number"
                                    name="brothers"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter Brothers "
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    No of Married Brothers
                                  </label>
                                  <input
                                    type="number"
                                    name="no_of_married_brothers"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter No of Married Brothers"
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    No of Sisters
                                  </label>
                                  <input
                                    type="number"
                                    name="sisters"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter Sisters "
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    No of Married Sisters
                                  </label>
                                  <input
                                    type="number"
                                    name="no_of_married_sisters"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Enter No of Married Sisters"
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success">
                              <i
                                className="fa fa-map-marker gtMarginRight10 mt-4 mb-4"
                                aria-hidden="true"
                              />
                              Location Details
                            </h4>
                          </div>
                          <div className="card-body col-md-12">
                            <div className="container">
                              <div className="row">
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    State Living In
                                  </label>
                                  <select
                                    name="state_living_in"
                                    className="form-control form-control-lg"
                                  >
                                    <option value={0}>Not Assign</option>
                                    <option value={1}>Maharashtra</option>
                                    <option value={2}>Goa</option>
                                    <option value={3}>Karnataka</option>
                                  </select>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    District Living In
                                  </label>
                                  <select
                                    name="district_id"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    TaluKa Living In
                                  </label>
                                  <select
                                    name="taluka_id"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Village Living In
                                  </label>
                                  <select
                                    name="village_id"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success mt-4 mb-4">
                              <i
                                className="fa fa-man gtMarginRight10"
                                aria-hidden="true"
                              />
                              Habits &amp; Hobbits{" "}
                            </h4>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Diet</label>
                                <select
                                  name="diet"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value="Vegetarian">Vegetarian</option>
                                  <option value="Non - Vegetarian">
                                    Non - Vegetarian
                                  </option>
                                  <option value="Eggetariand">
                                    {" "}
                                    Eggetarian
                                  </option>
                                </select>
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Smoking Habits
                                </label>
                                <select
                                  name="smoking_habits"
                                  id="smoking_habits"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                  <option value="Ocassionally">
                                    Ocassionally
                                  </option>
                                </select>
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Drinking Habits
                                </label>
                                <select
                                  name="drink_habit"
                                  id="drink_habit"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                  <option value="Ocassionally">
                                    Ocassionally
                                  </option>
                                </select>
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Hobbies</label>
                                <select
                                  name="smoking_habits"
                                  id="smoking_habits"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Not Assign</option>
                                  <option value="Reading & Writing">
                                    Reading &amp; Writing
                                  </option>
                                  <option value="Cooking & Baking">
                                    Cooking &amp; Baking
                                  </option>
                                  <option value="PhotoGraphy">
                                    PhotoGraphy
                                  </option>
                                  <option value="Sports & Physical Activities">
                                    Sports &amp; Physical Activities
                                  </option>
                                  <option value="Traveling">Traveling</option>
                                  <option value="Gaming">Gaming </option>
                                  <option value="Yoga & Meditation ">
                                    Yoga &amp; Meditation{" "}
                                  </option>
                                  <option value="Learning New Things">
                                    Learning New Things
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success mt-4 mb-4">
                              <i
                                className="fa fa-man gtMarginRight10"
                                aria-hidden="true"
                              />
                              Physical Attribute
                            </h4>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Height</label>
                                <select
                                  name="height"
                                  className="form-control form-control-lg"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Not Assign</option>
                                  <option value={2}>
                                    Below 4ft 6in - 137cm
                                  </option>
                                  <option value={3}>4ft 7in - 139cm</option>
                                  <option value={4}>4ft 8in - 142cm</option>
                                  <option value={5}>4ft 9in - 144cm</option>
                                  <option value={6}>4ft 10in - 147cm</option>
                                  <option value={7}>4ft 11in - 149cm</option>
                                  <option value={8}>5ft - 152cm</option>
                                  <option value={9}>5ft 1in - 154cm</option>
                                  <option value={10}>5ft 2in - 157cm</option>
                                  <option value={11}>5ft 3in - 160cm</option>
                                  <option value={12}>5ft 4in - 162cm</option>
                                  <option value={13}>5ft 5in - 165cm</option>
                                  <option value={14}>5ft 6in - 167cm</option>
                                  <option value={15}>5ft 7in - 170cm</option>
                                  <option value={16}>5ft 8in - 172cm</option>
                                  <option value={17}>5ft 9in - 175cm</option>
                                  <option value={18}>5ft 10in - 177cm</option>
                                  <option value={19}>5ft 11in - 180cm</option>
                                  <option value={20}>6ft - 182cm</option>
                                  <option value={21}>6ft 1in - 185cm</option>
                                  <option value={22}>6ft 2in - 187cm</option>
                                  <option value={23}>6ft 3in - 190cm</option>
                                  <option value={24}>6ft 4in - 193cm</option>
                                  <option value={25}>6ft 5in - 195cm</option>
                                  <option value={26}>6ft 6in - 198cm</option>
                                  <option value={27}>6ft 7in - 200cm</option>
                                  <option value={28}>6ft 8in - 203cm</option>
                                  <option value={29}>6ft 9in - 205cm</option>
                                  <option value={30}>6ft 10in - 208cm</option>
                                  <option value={31}>6ft 11in - 210cm</option>
                                  <option value={32}>7ft - 213cm</option>
                                  <option value={33}>Above 7ft - 213cm</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Weight</label>
                                <select
                                  name="weight"
                                  className="form-control form-control-lg"
                                >
                                  <option value>--- Select ---</option>
                                  <option value={1}>Not Assign</option>
                                  <option value={2}>41 kg</option>
                                  <option value={3}>42 kg</option>
                                  <option value={4}>43 kg</option>
                                  <option value={5}>44 kg</option>
                                  <option value={6}>45 kg</option>
                                  <option value={7}>46 kg</option>
                                  <option value={8}>47 kg</option>
                                  <option value={9}>48 kg</option>
                                  <option value={10}>49 kg</option>
                                  <option value={11}>50 kg</option>
                                  <option value={12}>51 kg</option>
                                  <option value={13}>52 kg</option>
                                  <option value={14}>53 kg</option>
                                  <option value={15}>54 kg</option>
                                  <option value={16}>55 kg</option>
                                  <option value={17}>56 kg</option>
                                  <option value={18}>57 kg</option>
                                  <option value={19}>58 kg</option>
                                  <option value={20}>59 kg</option>
                                  <option value={21}>60 kg</option>
                                  <option value={22}>61 kg</option>
                                  <option value={23}>62 kg</option>
                                  <option value={24}>63 kg</option>
                                  <option value={25}>64 kg</option>
                                  <option value={26}>65 kg</option>
                                  <option value={27}>66 kg</option>
                                  <option value={28}>67 kg</option>
                                  <option value={29}>68 kg</option>
                                  <option value={30}>69 kg</option>
                                  <option value={31}>70 kg</option>
                                  <option value={32}>71 kg</option>
                                  <option value={33}>72 kg</option>
                                  <option value={34}>73 kg</option>
                                  <option value={35}>74 kg</option>
                                  <option value={36}>75 kg</option>
                                  <option value={37}>76 kg</option>
                                  <option value={38}>77 kg</option>
                                  <option value={39}>78 kg</option>
                                  <option value={40}>79 kg</option>
                                  <option value={41}>80 kg</option>
                                  <option value={42}>81 kg</option>
                                  <option value={43}>82 kg</option>
                                  <option value={44}>83 kg</option>
                                  <option value={45}>84 kg</option>
                                  <option value={46}>85 kg</option>
                                  <option value={47}>86 kg</option>
                                  <option value={48}>87 kg</option>
                                  <option value={49}>88 kg</option>
                                  <option value={50}>89 kg</option>
                                  <option value={51}>90 kg</option>
                                  <option value={52}>91 kg</option>
                                  <option value={53}>92 kg</option>
                                  <option value={54}>93 kg</option>
                                  <option value={55}>94 kg</option>
                                  <option value={56}>95 kg</option>
                                  <option value={57}>96 kg</option>
                                  <option value={58}>97 kg</option>
                                  <option value={59}>98 kg</option>
                                  <option value={60}>99 kg</option>
                                  <option value={61}>100 kg</option>
                                  <option value={62}>101 kg</option>
                                  <option value={63}>102 kg</option>
                                  <option value={64}>103 kg</option>
                                  <option value={65}>104 kg</option>
                                  <option value={66}>105 kg</option>
                                  <option value={67}>106 kg</option>
                                  <option value={68}>107 kg</option>
                                  <option value={69}>108 kg</option>
                                  <option value={70}>109 kg</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">Body Type</label>
                                <select
                                  name="body_type"
                                  id="body_type"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value="Slim">Slim</option>
                                  <option value="Average">Average</option>
                                  <option value="Athletic">Athletic</option>
                                  <option value="Heavy">Heavy</option>
                                </select>
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Complextion (Body Color)
                                </label>
                                <select
                                  name="complexion"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value="Very Fair">Very Fair</option>
                                  <option value="Fair">Fair</option>
                                  <option value="Wheatish">Wheatish</option>
                                  <option value="Wheatish Brown">
                                    Wheatish Brown
                                  </option>
                                  <option value="Dark">Dark</option>
                                </select>
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6 mt-4 mb-4">
                                <label className="text-dark">
                                  Physical Status
                                </label>
                                <select
                                  name="physical_status"
                                  className="form-control form-control-lg border-danger"
                                >
                                  <option value>--- Select ---</option>
                                  <option value="Normal">Normal</option>
                                  <option value="Physical Challenged">
                                    Physical Challenged
                                  </option>
                                </select>
                                <small
                                  className="text-danger"
                                  style={{ marginLeft: 5 }}
                                >
                                  (please fill this field)
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success mt-4 mb-4">
                              <i
                                className="fa fa-man gtMarginRight10"
                                aria-hidden="true"
                              />
                              Horoscope Details
                            </h4>
                          </div>
                          <div className="card-body col-md-12">
                            <div className="container">
                              <div className="row">
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Star ( Nakshatra )
                                  </label>
                                  <select
                                    name="nakshra"
                                    className="form-control form-control-lg"
                                  >
                                    <option value>--- Select ---</option>
                                    <option value={1}>Not Assign</option>
                                    <option value={2}>Bharani</option>
                                    <option value={3}>Krittika</option>
                                    <option value={4}>Rohini</option>
                                    <option value={5}>Mrigashira</option>
                                    <option value={6}>Ardra</option>
                                    <option value={7}>Punarvasu</option>
                                    <option value={8}>Pushya</option>
                                    <option value={9}>Ashlesha</option>
                                    <option value={10}>Magha</option>
                                    <option value={11}>Purva Phalguni</option>
                                    <option value={12}>Uttara Phalguni</option>
                                    <option value={13}>Hasta</option>
                                    <option value={14}>Chitra</option>
                                    <option value={15}>Swati</option>
                                    <option value={16}>Anuradha</option>
                                    <option value={17}>Jyeshtha</option>
                                    <option value={18}>Mula</option>
                                    <option value={19}>Purva Ashadha</option>
                                    <option value={20}>Uttara Ashadha</option>
                                    <option value={21}>Abhijit</option>
                                    <option value={22}>Shravana</option>
                                    <option value={23}>Dhanishta</option>
                                    <option value={24}>Shatabhisha</option>
                                    <option value={25}>Purva Bhadrapada</option>
                                    <option value={26}>
                                      Uttara Bhadrapada
                                    </option>
                                    <option value={27}>Revati</option>
                                    <option value={28}>Vishakha</option>
                                    <option value={29}>Ashwini</option>
                                  </select>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Raasi/Moonsign
                                  </label>
                                  <select
                                    name="rashi"
                                    className="form-control form-control-lg"
                                  >
                                    <option value>--- Select ---</option>
                                    <option value={1}>Not Assign</option>
                                    <option value={2}>Taurus</option>
                                    <option value={3}>Gemini</option>
                                    <option value={4}>Cancer</option>
                                    <option value={5}>Leo</option>
                                    <option value={6}>Virgo</option>
                                    <option value={7}>Libra</option>
                                    <option value={8}>Scorpio</option>
                                    <option value={9}>Saggitarius</option>
                                    <option value={10}>Capricorn</option>
                                    <option value={11}>Aquarius</option>
                                    <option value={12}>Pisces</option>
                                  </select>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Birth Time
                                  </label>
                                  <input
                                    type="time"
                                    name="birth_time"
                                    id="birth_time"
                                    className="form-control form-control-lg border-danger"
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                                <div className="form-group col-md-6 mt-4 mb-4">
                                  <label className="text-dark">
                                    Birth Place
                                  </label>
                                  <input
                                    type="text"
                                    name="birth_place"
                                    id="birth_palce"
                                    className="form-control form-control-lg border-danger"
                                    placeholder="Birth Place"
                                    defaultValue
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success mt-4 mb-4">
                              <i
                                className="fa fa-man gtMarginRight10"
                                aria-hidden="true"
                              />
                              About Me
                            </h4>
                          </div>
                          <div className="card-body col-md-12 d-flex ">
                            <div className="container col-md-12">
                              <div className="container-2">
                                <div className="form-group col-md-12">
                                  <textarea
                                    name="about_me"
                                    id="about_me"
                                    cols={30}
                                    rows={5}
                                    className="form-control form-control-lg border-danger"
                                    defaultValue={""}
                                  />
                                  <small
                                    className="text-danger"
                                    style={{ marginLeft: 5 }}
                                  >
                                    (please fill this field)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light d-flex">
                            <h4 className="card-title text-success">
                              <i
                                className="fa fa-man gtMarginRight10 mt-4 mb-4"
                                aria-hidden="true"
                              />
                              Upload Images
                            </h4>
                            <h6
                              className="ml-3  text-warning "
                              style={{ marginTop: 9, marginLeft: 5 }}
                            >
                              (One Image)
                            </h6>
                          </div>
                          <div className="card-body col-md-12 container">
                            <div className="row">
                              <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    name="user_img1"
                                    className="text-danger"
                                  />
                                  <label className="custom-file-label" />
                                </div>
                              </div>
                              <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    name="user_img2"
                                    className="text-danger"
                                  />
                                  <label className="custom-file-label" />
                                </div>
                              </div>
                              <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    name="user_img3"
                                    className=" text-danger"
                                  />
                                  <label className="custom-file-label" />
                                </div>
                              </div>
                              <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    name="user_img4"
                                    className="text-danger"
                                  />
                                  <label className="custom-file-label" />
                                </div>
                              </div>
                              <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    name="user_img5"
                                    className="text-danger"
                                  />
                                  <label className="custom-file-label" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-header bg-light">
                            <h4 className="card-title text-success mt-4 mb-4">
                              {" "}
                              Identity Proof{" "}
                            </h4>
                            <div className="text-danger">
                              (Adhaar card , PanCard , Driving Licence ,
                              VoterId)
                            </div>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="input-group mb-4 col-md-8 mt-4 mb-4">
                                <input
                                  type="file"
                                  name="aadhar_img"
                                  className="text-success"
                                />
                                <label htmlFor="inputGroupFile02" />
                              </div>
                              <div className="input-group mb-4 col-md-4 mt-4 mb-4" />
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              className="btn btn-danger btn-lg mt-4 mb-4"
                              style={{ height: 40, width: 130 }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    id="uncontrolled-tab-example-tabpane-Partner Preference"
                    aria-labelledby="uncontrolled-tab-example-tab-Partner Preference"
                    className="fade tab-pane"
                  >
                    <div className="card-header mt-3 bg-light">
                      <h4 className="card-title text-success mt-4 mb-4">
                        <i
                          className="fa fa-file-text gtMarginRight10"
                          aria-hidden="true"
                        />
                        Basic Preference
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="container">
                        <div className="row">
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Age</label>
                            <div className="row">
                              <div className="col-md-5">
                                <select
                                  name="fromage"
                                  className="form-control form-control-lg"
                                >
                                  <option value>--- Select ----</option>
                                  <option value={18}>18</option>
                                  <option value={19}>19</option>
                                  <option value={20}>20</option>
                                  <option value={21}>21</option>
                                  <option value={22}>22</option>
                                  <option value={23}>23</option>
                                  <option value={24}>24</option>
                                  <option value={25}>25</option>
                                  <option value={26}>26</option>
                                  <option value={27}>27</option>
                                  <option value={28}>28</option>
                                  <option value={29}>29</option>
                                  <option value={30}>30</option>
                                  <option value={31}>31</option>
                                  <option value={32}>32</option>
                                  <option value={33}>33</option>
                                  <option value={34}>34</option>
                                  <option value={35}>35</option>
                                  <option value={36}>36</option>
                                  <option value={37}>37</option>
                                  <option value={38}>38</option>
                                  <option value={39}>39</option>
                                  <option value={40}>40</option>
                                  <option value={41}>41</option>
                                  <option value={42}>42</option>
                                  <option value={43}>43</option>
                                  <option value={44}>44</option>
                                  <option value={45}>45</option>
                                  <option value={46}>46</option>
                                  <option value={47}>47</option>
                                  <option value={48}>48</option>
                                  <option value={49}>49</option>
                                  <option value={50}>50</option>
                                  <option value={51}>51</option>
                                  <option value={52}>52</option>
                                  <option value={53}>53</option>
                                  <option value={54}>54</option>
                                  <option value={55}>55</option>
                                  <option value={56}>56</option>
                                  <option value={57}>57</option>
                                  <option value={58}>58</option>
                                  <option value={59}>59</option>
                                  <option value={60}>60</option>
                                </select>
                              </div>
                              <h4 className="col-md-2 text-center">To</h4>
                              <div className="col-md-5">
                                <select
                                  className="form-control form-control-lg"
                                  name="toage"
                                >
                                  <option value>--- Select ----</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Height</label>
                            <div className="row">
                              <div className="col-md-5">
                                <select className="form-control form-control-lg">
                                  <option value>--- Select ----</option>
                                  <option value={1}>Not Assign</option>
                                  <option value={2}>
                                    Below 4ft 6in - 137cm
                                  </option>
                                  <option value={3}>4ft 7in - 139cm</option>
                                  <option value={4}>4ft 8in - 142cm</option>
                                  <option value={5}>4ft 9in - 144cm</option>
                                  <option value={6}>4ft 10in - 147cm</option>
                                  <option value={7}>4ft 11in - 149cm</option>
                                  <option value={8}>5ft - 152cm</option>
                                  <option value={9}>5ft 1in - 154cm</option>
                                  <option value={10}>5ft 2in - 157cm</option>
                                  <option value={11}>5ft 3in - 160cm</option>
                                  <option value={12}>5ft 4in - 162cm</option>
                                  <option value={13}>5ft 5in - 165cm</option>
                                  <option value={14}>5ft 6in - 167cm</option>
                                  <option value={15}>5ft 7in - 170cm</option>
                                  <option value={16}>5ft 8in - 172cm</option>
                                  <option value={17}>5ft 9in - 175cm</option>
                                  <option value={18}>5ft 10in - 177cm</option>
                                  <option value={19}>5ft 11in - 180cm</option>
                                  <option value={20}>6ft - 182cm</option>
                                  <option value={21}>6ft 1in - 185cm</option>
                                  <option value={22}>6ft 2in - 187cm</option>
                                  <option value={23}>6ft 3in - 190cm</option>
                                  <option value={24}>6ft 4in - 193cm</option>
                                  <option value={25}>6ft 5in - 195cm</option>
                                  <option value={26}>6ft 6in - 198cm</option>
                                  <option value={27}>6ft 7in - 200cm</option>
                                  <option value={28}>6ft 8in - 203cm</option>
                                  <option value={29}>6ft 9in - 205cm</option>
                                  <option value={30}>6ft 10in - 208cm</option>
                                  <option value={31}>6ft 11in - 210cm</option>
                                  <option value={32}>7ft - 213cm</option>
                                  <option value={33}>Above 7ft - 213cm</option>
                                </select>
                              </div>
                              <h4 className="col-md-2 text-center">To</h4>
                              <div className="col-md-5">
                                <select
                                  className="form-control form-control-lg"
                                  name="toae"
                                >
                                  <option value>--- Select ---</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Looking For</label>
                            <select
                              name="lookingfor"
                              className="form-control form-control-lg"
                            >
                              <option value>--- Select ---</option>
                              <option>UnMarried</option>
                              <option>Divorced</option>
                              <option>Widowed</option>
                              <option>Separated</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Physical Status</label>
                            <select
                              name="physical_status"
                              id="physical_status"
                              className="form-control form-control-lg"
                            >
                              <option value>--- Select ---</option>
                              <option value="Normal">Normal</option>
                              <option value="Physical challenged">
                                Physical challenged
                              </option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Eating Habits</label>
                            <select
                              name="eating_habbit"
                              className="form-control form-control-lg"
                            >
                              <option value>--- Select ---</option>
                              <option>Vegetarian</option>
                              <option value="Non-Vegetarian">
                                Non-Vegetarian
                              </option>
                              <option>Eggetarian</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Smoking Habits</label>
                            <select
                              name="Smoking_habbit"
                              className="form-control form-control-lg"
                            >
                              <option value>--- Select ---</option>
                              <option>No</option>
                              <option>Yes</option>
                              <option>Occasionally</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Drinking Habits</label>
                            <select
                              name="drinking_habbit"
                              className="form-control form-control-lg"
                              style={{ width: "100%" }}
                            >
                              <option value>--- Select ---</option>
                              <option>No</option>
                              <option>Yes</option>
                              <option value="Drinks Socially">
                                Drinks Occasionally
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card-header bg-light">
                        <h4 className="card-title text-success mt-4 mb-4">
                          {" "}
                          <i
                            className="fa fa-university gtMarginRight10"
                            aria-hidden="true"
                          />
                          Religion Preference
                        </h4>
                      </div>
                    </div>
                    <div className="card-body ">
                      <div className="container">
                        <div className="row">
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Religion</label>
                            <select
                              name="religion"
                              className="form-control form-control-lg"
                              style={{ width: "100%" }}
                            >
                              <option value>--- Select ---</option>
                              <option value={1}>Not Assign</option>
                              <option value={2}>Muslim - Sunni</option>
                              <option value={3}>Hindu</option>
                              <option value={4}>Muslim - Shia</option>
                              <option value={5}>Christian</option>
                              <option value={6}>Jain - Digambar</option>
                              <option value={7}>Jain - Shwetambar</option>
                              <option value={8}>Parsi</option>
                              <option value={9}>Jewish</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Caste </label>
                            <select
                              name="caste"
                              className="form-control form-control-lg"
                              id="caste_ids "
                              style={{ width: "100%" }}
                            >
                              <option value>--- Select ---</option>
                              <option value={1}>Not Assign</option>
                              <option value={2}>Brahmin - Audichya</option>
                              <option value={3}>Brahmin - Anaviln Desai</option>
                              <option value={4}>Brahmin - Anavil</option>
                              <option value={5}>Brahmbatt</option>
                              <option value={6}>Boyar</option>
                              <option value={7}>Bondili</option>
                              <option value={8}>Bishnoi/Vishnoi</option>
                              <option value={9}>Billava</option>
                              <option value={10}>Bhoyar</option>
                              <option value={11}>Bhovi</option>
                              <option value={12}>Bhoi</option>
                              <option value={13}>Bhavasar Kshatriya</option>
                              <option value={14}>Bhatraju</option>
                              <option value={15}>Bhatia</option>
                              <option value={16}>Bhandari</option>
                              <option value={17}>Besta</option>
                              <option value={18}>Beri Chettiar</option>
                              <option value={19}>Barujibi</option>
                              <option value={20}>Barnwal</option>
                              <option value={21}>Baria</option>
                              <option value={22}>Bari</option>
                              <option value={23}>Barai</option>
                              <option value={24}>Banjara</option>
                              <option value={25}>Baniya - Kumuti</option>
                              <option value={26}>Baniya - Bania</option>
                              <option value={27}>Baniya</option>
                              <option value={28}>Banik</option>
                              <option value={29}>Banayat Oriya</option>
                              <option value={30}>Balija Reddy</option>
                              <option value={31}>Balija Naidu</option>
                              <option value={32}>Balija</option>
                              <option value={33}>Balai</option>
                              <option value={34}>Bajantri</option>
                              <option value={35}>Baishya</option>
                              <option value={36}>Baishnab</option>
                              <option value={37}>Bairwa</option>
                              <option value={38}>Baidya</option>
                              <option value={39}>Bagdi</option>
                              <option value={40}>Badaga</option>
                              <option value={41}>Ayyaraka</option>
                              <option value={42}>Ayodhyavasi</option>
                              <option value={43}>Ayira Vysya</option>
                              <option value={44}>Asathi</option>
                              <option value={45}>Arya Vysya</option>
                              <option value={46}>Arunthathiyar</option>
                              <option value={47}>Arora</option>
                              <option value={48}>Arekatica</option>
                              <option value={49}>Aramari / Gabit</option>
                              <option value={50}>
                                Anjana (Chowdary) Patel
                              </option>
                              <option value={51}>Ambalavasi</option>
                              <option value={52}>Ahom</option>
                              <option value={53}>Ahirwar</option>
                              <option value={54}>Ahir Shimpi</option>
                              <option value={55}>Agri</option>
                              <option value={56}>Agrahari</option>
                              <option value={57}>Agnikula Kshatriya</option>
                              <option value={58}>Agarwal</option>
                              <option value={59}>Agaram Vellan Chettiar</option>
                              <option value={60}>
                                Agamudayar / Arcot / Thuluva Vellala
                              </option>
                              <option value={61}>Adi Karnataka</option>
                              <option value={62}>Adi Dravidar</option>
                              <option value={63}>Adi Andhra</option>
                              <option value={64}>Ad Dharmi</option>
                              <option value={65}>Achirapakkam Chettiar</option>
                              <option value={66}>Aaru Nattu Vellala</option>
                              <option value={67}>Brahmin - Narmadiya </option>
                              <option value={68}>Brahmin - Namboodiri</option>
                              <option value={69}>Brahmin - Nagar</option>
                              <option value={70}>Brahmin - Mohyal</option>
                              <option value={71}>Brahmin - Modh</option>
                              <option value={72}>Brahmin - Mevada</option>
                              <option value={73}>Brahmin - Maithil</option>
                              <option value={74}>Brahmin - Madhwa</option>
                              <option value={75}>Brahmin - Kumaoni</option>
                              <option value={76}>Brahmin - Kulin</option>
                              <option value={77}>
                                Brahmin - Koteshwara / Kota (Madhwa )
                              </option>
                              <option value={78}>Brahmin - Kota</option>
                              <option value={79}>Brahmin - Kokanastha</option>
                              <option value={80}>Brahmin - Khedaval</option>
                              <option value={81}>Brahmin - Khandelwal</option>
                              <option value={82}>96 Kuli Maratha</option>
                              <option value={83}>Brahmin - Khadayata</option>
                              <option value={84}>Brahmin - Karhade</option>
                              <option value={85}>Brahmin - Kanyakubj</option>
                              <option value={86}>
                                24 Manai Telugu Chettiar
                              </option>
                              <option value={87}>Brahmin - Jyotish</option>
                              <option value={88}>Brahmin - Jhadua</option>
                              <option value={89}>Brahmin - Jangid</option>
                              <option value={90}>Brahmin - Iyer</option>
                              <option value={91}>Brahmin - Iyengar</option>
                              <option value={92}>Brahmin - Hoysala</option>
                              <option value={93}>Brahmin - Havyaka</option>
                              <option value={94}>Brahmin - Halua</option>
                              <option value={95}>Brahmin - Gurukkal</option>
                              <option value={96}>Brahmin - Gujar Gaur</option>
                              <option value={97}>
                                Brahmin - Goswami/Gosavi
                              </option>
                              <option value={98}>Brahmin - Gaur</option>
                              <option value={99}>Brahmin - Garhwali</option>
                              <option value={100}>Brahmin - Embrandiri</option>
                              <option value={101}>Brahmin - Dravida</option>
                              <option value={102}>Brahmin - Dhiman</option>
                              <option value={103}>Brahmin - Deshastha</option>
                              <option value={104}>Brahmin - Danua</option>
                              <option value={105}>Brahmin - Daivadnya</option>
                              <option value={106}>Brahmin - Dadhich</option>
                              <option value={107}>Brahmin - Bhumihar</option>
                              <option value={108}>Brahmin - Bhatt</option>
                              <option value={109}>Brahmin - Bhargav</option>
                              <option value={110}>Brahmin - Barendra</option>
                              <option value={111}>Brahmin - Bardai</option>
                              <option value={112}>
                                Brahmin - Baidhiki/Vaidhiki
                              </option>
                              <option value={113}>Brahmin - Others</option>
                              <option value={114}>Brahmin - Paliwal</option>
                              <option value={115}>Brahmin - Panda</option>
                              <option value={116}>Brahmin - Pandit</option>
                              <option value={117}>Brahmin - Panicker</option>
                              <option value={118}>Brahmin - Pareek</option>
                              <option value={119}>Brahmin - Pushkarna</option>
                              <option value={120}>Brahmin - Rajgor</option>
                              <option value={121}>Brahmin - Rarhi</option>
                              <option value={122}>Brahmin - Rarhi/Radhi</option>
                              <option value={123}>Brahmin - Rigvedi</option>
                              <option value={124}>Brahmin - Rudraj</option>
                              <option value={125}>Brahmin - Sakaldwipi</option>
                              <option value={126}>Brahmin - Sanadya</option>
                              <option value={127}>Brahmin - Sanketi</option>
                              <option value={128}>Brahmin - Saraswat</option>
                              <option value={129}>Brahmin - Sarua</option>
                              <option value={130}>Brahmin - Saryuparin</option>
                              <option value={131}>
                                Brahmin - Shivalli (Madhva)
                              </option>
                              <option value={132}>Brahmin - Shivhalli</option>
                              <option value={133}>Brahmin - Shri Gaud</option>
                              <option value={134}>Brahmin - Shri Mali</option>
                              <option value={135}>Brahmin - Shrimali</option>
                              <option value={136}>
                                Brahmin - Shukla Yajurvedi
                              </option>
                              <option value={137}>Brahmin - Sikhwal</option>
                              <option value={138}>Brahmin - Smartha</option>
                              <option value={139}>
                                Brahmin - Sri Vaishnava
                              </option>
                              <option value={140}>Brahmin - Stanika</option>
                              <option value={141}>Brahmin - Tapodhan</option>
                              <option value={142}>Brahmin - Tyagi</option>
                              <option value={143}>Brahmin - Vaidiki</option>
                              <option value={144}>Brahmin - Vaikhanasa</option>
                              <option value={145}>Brahmin - Valam</option>
                              <option value={146}>Brahmin - Velanadu</option>
                              <option value={147}>Brahmin - Vyas</option>
                              <option value={148}>Brahmin - Zalora</option>
                              <option value={149}>Brajastha Maithil</option>
                              <option value={150}>Bunt (Shetty)</option>
                              <option value={151}>CKP</option>
                              <option value={152}>Chalawadi and Holeya</option>
                              <option value={153}>Chambhar</option>
                              <option value={154}>Chandravanshi Kahar</option>
                              <option value={155}>Chasa</option>
                              <option value={156}>
                                Chattada Sri Vaishnava{" "}
                              </option>
                              <option value={157}>Chaturth</option>
                              <option value={158}>Chaudary</option>
                              <option value={159}>Chaurasia</option>
                              <option value={160}>Chennadasar</option>
                              <option value={161}>Cherakula Vellalar</option>
                              <option value={162}>Chettiar</option>
                              <option value={163}>Chhetri</option>
                              <option value={164}>Chippolu (Mera)</option>
                              <option value={165}>Choudhary</option>
                              <option value={166}>Choudhary</option>
                              <option value={167}>Coorgi</option>
                              <option value={168}>Deshmukh</option>
                              <option value={169}>Desikar</option>
                              <option value={170}>Desikar Thanjavur</option>
                              <option value={171}>Devadiga</option>
                              <option value={172}>
                                Devandra Kula Vellalar
                              </option>
                              <option value={173}>Devang Koshthi</option>
                              <option value={174}>Devanga</option>
                              <option value={175}>Devanga Chettiar</option>
                              <option value={176}>
                                Devar/Thevar/Mukkulathor
                              </option>
                              <option value={177}>Devrukhe Brahmin</option>
                              <option value={178}>Dhanak</option>
                              <option value={179}>Dhangar</option>
                              <option value={180}>Dheevara</option>
                              <option value={181}>Dhiman</option>
                              <option value={182}>Dhoba</option>
                              <option value={183}>Dhobi</option>
                              <option value={184}>Dhor / Kakkayya</option>
                              <option value={185}>Dommala</option>
                              <option value={186}>Dosar / Dusra</option>
                              <option value={187}>Dumal</option>
                              <option value={188}>Dusadh (Paswan)</option>
                              <option value={189}>Ediga</option>
                              <option value={190}>Ediga /Goud (Balija)</option>
                              <option value={191}>Elur Chetty</option>
                              <option value={192}>Ezhava</option>
                              <option value={193}>Ezhava Panicker</option>
                              <option value={194}>Ezhava Thandan</option>
                              <option value={195}>Ezhuthachan</option>
                              <option value={196}>Gabit</option>
                              <option value={197}>Gahoi</option>
                              <option value={198}>Gajula / Kavarai</option>
                              <option value={199}>Ganda</option>
                              <option value={200}>Gandha Vanika</option>
                              <option value={201}>Gandla</option>
                              <option value={202}>Gandla / Ganiga</option>
                              <option value={203}>Ganiga</option>
                              <option value={204}>Garhwali</option>
                              <option value={205}>Gatti</option>
                              <option value={206}>Gavara</option>
                              <option value={207}>Gawali</option>
                              <option value={208}>Ghisadi</option>
                              <option value={209}>Ghumar</option>
                              <option value={210}>Goala</option>
                              <option value={211}>Goan</option>
                              <option value={212}>Gomantak</option>
                              <option value={213}>Gondhali</option>
                              <option value={214}>Goud</option>
                              <option value={215}>Gounder</option>
                              <option value={216}>
                                Gounder - Kongu Vellala Gounder
                              </option>
                              <option value={217}>
                                Gounder - Nattu Gounder
                              </option>
                              <option value={218}>Gounder - Others</option>
                              <option value={219}>
                                Gounder - Urali Gounder
                              </option>
                              <option value={220}>
                                Gounder - Vanniya Kula Kshatriyar
                              </option>
                              <option value={221}>
                                Gounder - Vettuva Gounder
                              </option>
                              <option value={222}>Gowda</option>
                              <option value={223}>Gowda - Kuruba Gowda</option>
                              <option value={224}>Gramani</option>
                              <option value={225}>Gudia</option>
                              <option value={226}>Gujjar</option>
                              <option value={227}>Gulahre</option>
                              <option value={228}>Gupta</option>
                              <option value={229}>Guptan</option>
                              <option value={230}>Gurav</option>
                              <option value={231}>Gurjar</option>
                              <option value={232}>Haihaivanshi</option>
                              <option value={233}>Halba Koshti</option>
                              <option value={234}>Helava</option>
                              <option value={235}>Hugar (Jeer)</option>
                              <option value={236}>Illaththu Pillai</option>
                              <option value={237}>Intercaste</option>
                              <option value={238}>Irani</option>
                              <option value={239}>Isai Vellalar</option>
                              <option value={240}>Jaalari</option>
                              <option value={241}>Jaiswal</option>
                              <option value={242}>Jandra</option>
                              <option value={243}>Jangam</option>
                              <option value={244}>Jangra - Brahmin</option>
                              <option value={245}>Jat</option>
                              <option value={246}>Jatav</option>
                              <option value={247}>Jetty/Malla</option>
                              <option value={248}>Jhadav</option>
                              <option value={249}>Jijhotia Brahmin</option>
                              <option value={250}>Jogi (Nath)</option>
                              <option value={251}>Julaha</option>
                              <option value={252}>Kachara</option>
                              <option value={253}>Kadava Patel</option>
                              <option value={254}>Kahar</option>
                              <option value={255}>Kaibarta</option>
                              <option value={256}>Kaikaala</option>
                              <option value={257}>Kalal</option>
                              <option value={258}>Kalanji</option>
                              <option value={259}>Kalar</option>
                              <option value={260}>Kalinga Vysya</option>
                              <option value={261}>Kalita</option>
                              <option value={262}>Kalwar</option>
                              <option value={263}>Kamboj</option>
                              <option value={264}>Kamma</option>
                              <option value={265}>Kamma Naidu</option>
                              <option value={266}>Kanakkan Padanna</option>
                              <option value={267}>Kandara</option>
                              <option value={268}>Kansari</option>
                              <option value={269}>Kanykubj Bania</option>
                              <option value={270}>Kapu</option>
                              <option value={271}>Kapu Naidu</option>
                              <option value={272}>Kapu Reddy</option>
                              <option value={273}>Karakala Bhakthula</option>
                              <option value={274}>Karana</option>
                              <option value={275}>Karkathar</option>
                              <option value={276}>Karmakar</option>
                              <option value={277}>Karni Bhakthula</option>
                              <option value={278}>Karuneegar</option>
                              <option value={279}>Kasar</option>
                              <option value={280}>Kasaundhan</option>
                              <option value={281}>Kashyap</option>
                              <option value={282}>Kasukara</option>
                              <option value={283}>Katiya</option>
                              <option value={284}>Kavara</option>
                              <option value={285}>Kavuthiyya/Ezhavathy</option>
                              <option value={286}>Kayastha</option>
                              <option value={287}>Kayastha (Bengali)</option>
                              <option value={288}>Kerala Mudali</option>
                              <option value={289}>Keshri (Kesarwani)</option>
                              <option value={290}>Khandayat</option>
                              <option value={291}>Khandelwal</option>
                              <option value={292}>Kharwa</option>
                              <option value={293}>Kharwar</option>
                              <option value={294}>Khatik</option>
                              <option value={295}>Khatri</option>
                              <option value={296}>Kirar</option>
                              <option value={297}>Kodikal Pillai</option>
                              <option value={298}>Kokanastha Maratha</option>
                              <option value={299}>Koli</option>
                              <option value={300}>Koli Mahadev</option>
                              <option value={301}>Koli Patel</option>
                              <option value={302}>Komti /Arya Vaishya</option>
                              <option value={303}>Kongu Chettiar</option>
                              <option value={304}>Kongu Nadar</option>
                              <option value={305}>Kongu Vellala Gounder</option>
                              <option value={306}>Konkani</option>
                              <option value={307}>Korama</option>
                              <option value={308}>Kori</option>
                              <option value={309}>Kori/Koli</option>
                              <option value={310}>Kosthi</option>
                              <option value={311}>Krishnavaka</option>
                              <option value={312}>Kshatriya</option>
                              <option value={313}>Kshatriya Kurmi</option>
                              <option value={314}>Kshatriya Raju</option>
                              <option value={315}>Kudumbi</option>
                              <option value={316}>Kulal</option>
                              <option value={317}>Kulalar</option>
                              <option value={318}>Kulita</option>
                              <option value={319}>Kumaoni Rajput</option>
                              <option value={320}>Kumawat</option>
                              <option value={321}>Kumbhakar</option>
                              <option value={322}>Kumbhar</option>
                              <option value={323}>Kumhar</option>
                              <option value={324}>Kummari</option>
                              <option value={325}>Kunbi</option>
                              <option value={326}>Kunbi Lonari</option>
                              <option value={327}>Kunbi Maratha</option>
                              <option value={328}>Kunbi Tirale</option>
                              <option value={329}>Kuravan</option>
                              <option value={330}>Kurmi</option>
                              <option value={331}>Kurmi/Kurmi Kshatriya</option>
                              <option value={332}>Kurni</option>
                              <option value={333}>Kuruba</option>
                              <option value={334}>Kuruhina Shetty</option>
                              <option value={335}>Kuruhini Chetty</option>
                              <option value={336}>Kurumbar</option>
                              <option value={337}>Kuruva</option>
                              <option value={338}>Kushwaha (Koiri)</option>
                              <option value={339}>Kutchi</option>
                              <option value={340}>Lad</option>
                              <option value={341}>Lambadi</option>
                              <option value={342}>Leva patel</option>
                              <option value={343}>Leva patil</option>
                              <option value={344}>Linga Balija</option>
                              <option value={345}>Lingayath</option>
                              <option value={346}>Lodhi Rajput</option>
                              <option value={347}>Lohana</option>
                              <option value={348}>Lohar</option>
                              <option value={349}>Loniya</option>
                              <option value={350}>Lubana</option>
                              <option value={351}>Madhesiya/Kanu/Halwai</option>
                              <option value={352}>Madiga</option>
                              <option value={353}>Mahajan</option>
                              <option value={354}>Mahar</option>
                              <option value={355}>Mahendra</option>
                              <option value={356}>Maheshwari</option>
                              <option value={357}>Maheshwari / Meshri</option>
                              <option value={358}>Mahishya</option>
                              <option value={359}>Mahor</option>
                              <option value={360}>Mahuri</option>
                              <option value={361}>Mair Rajput Swarnkar</option>
                              <option value={362}>Majabi</option>
                              <option value={363}>Mala</option>
                              <option value={364}>Mali</option>
                              <option value={365}>Mallah</option>
                              <option value={366}>Malviya Brahmin</option>
                              <option value={367}>Malwani</option>
                              <option value={368}>Mangalorean</option>
                              <option value={369}>Manipuri</option>
                              <option value={370}>Manjapudur Chettiar</option>
                              <option value={371}>
                                Mannan / Velan / Vannan
                              </option>
                              <option value={372}>Mapila</option>
                              <option value={373}>Maratha</option>
                              <option value={374}>Maratha Kshatriya</option>
                              <option value={375}>Maruthuvar</option>
                              <option value={376}>Matang</option>
                              <option value={377}>Mathur</option>
                              <option value={378}>Mathur Vaishya</option>
                              <option value={379}>Maurya / Shakya</option>
                              <option value={380}>Meena</option>
                              <option value={381}>Meenavar</option>
                              <option value={382}>Meghwal</option>
                              <option value={383}>Mehra</option>
                              <option value={384}>Meru Darji</option>
                              <option value={385}>Mochi</option>
                              <option value={386}>Modak</option>
                              <option value={387}>Modi</option>
                              <option value={388}>Modikarlu</option>
                              <option value={389}>Mogaveera</option>
                              <option value={390}>Mudaliyar</option>
                              <option value={391}>Mudiraj</option>
                              <option value={392}>Munnuru Kapu</option>
                              <option value={393}>Musukama</option>
                              <option value={394}>Muthuraja</option>
                              <option value={395}>Naagavamsam</option>
                              <option value={396}>Nabit</option>
                              <option value={397}>Nadar</option>
                              <option value={398}>Nagaralu</option>
                              <option value={399}>Nai</option>
                              <option value={400}>Naicker</option>
                              <option value={401}>Naicker - Others</option>
                              <option value={402}>
                                Naicker - Vanniya Kula Kshatriyar
                              </option>
                              <option value={403}>Naidu</option>
                              <option value={404}>Naik</option>
                              <option value={405}>Nair</option>
                              <option value={406}>Namasudra / Namassej</option>
                              <option value={407}>Nambiar</option>
                              <option value={408}>Namdarlu</option>
                              <option value={409}>Nanjil Mudali</option>
                              <option value={410}>Nanjil Nattu Vellalar</option>
                              <option value={411}>Nanjil Vellalar</option>
                              <option value={412}>Nanjil pillai</option>
                              <option value={413}>Nankudi Vellalar</option>
                              <option value={414}>Napit</option>
                              <option value={415}>Nattu Gounder</option>
                              <option value={416}>Nattukottai Chettiar</option>
                              <option value={417}>Nayaka</option>
                              <option value={418}>Neeli</option>
                              <option value={419}>Neeli Saali</option>
                              <option value={420}>Nema</option>
                              <option value={421}>Nepali</option>
                              <option value={422}>Nessi</option>
                              <option value={423}>Nhavi</option>
                              <option value={424}>Ontari</option>
                              <option value={425}>Oswal</option>
                              <option value={426}>Otari</option>
                              <option value={427}>Othuvaar</option>
                              <option value={428}>Padmasali</option>
                              <option value={429}>Padmashali</option>
                              <option value={430}>Padmavati Porwal</option>
                              <option value={431}>Pagadala</option>
                              <option value={432}>Pal</option>
                              <option value={433}>
                                Pallan / Devandra Kula Vellalan
                              </option>
                              <option value={434}>Panan</option>
                              <option value={435}>Panchal</option>
                              <option value={436}>Pandaram</option>
                              <option value={437}>Pandiya Vellalar</option>
                              <option value={438}>Panicker</option>
                              <option value={439}>Pannirandam Chettiar</option>
                              <option value={440}>Paravan / Bharatar</option>
                              <option value={441}>Parit</option>
                              <option value={442}>Parkava Kulam</option>
                              <option value={443}>Parsi</option>
                              <option value={444}>Partraj</option>
                              <option value={445}>Parvatha Rajakulam</option>
                              <option value={446}>Pasi</option>
                              <option value={447}>Paswan / Dusadh</option>
                              <option value={448}>Patel</option>
                              <option value={449}>Pathare Prabhu</option>
                              <option value={450}>Patil</option>
                              <option value={451}>Patnaick/Sistakaranam</option>
                              <option value={452}>Patra</option>
                              <option value={453}>Pattinavar</option>
                              <option value={454}>Pattusali</option>
                              <option value={455}>Patwa</option>
                              <option value={456}>Perika</option>
                              <option value={457}>
                                Perika/Puragiri Kshatriya
                              </option>
                              <option value={458}>Pillai</option>
                              <option value={459}>Poosala</option>
                              <option value={460}>Porwal</option>
                              <option value={461}>Porwal / Porwar</option>
                              <option value={462}>Poundra</option>
                              <option value={463}>Prajapati</option>
                              <option value={464}>Pulaya / Cheruman</option>
                              <option value={465}>Raigar</option>
                              <option value={466}>Rajaka</option>
                              <option value={467}>Rajastani</option>
                              <option value={468}>Rajbhar</option>
                              <option value={469}>Rajbonshi</option>
                              <option value={470}>Rajpurohit</option>
                              <option value={471}>Rajput</option>
                              <option value={472}>Ramanandi</option>
                              <option value={473}>Ramdasia</option>
                              <option value={474}>Ramgariah</option>
                              <option value={475}>Ramoshi</option>
                              <option value={476}>Rastogi</option>
                              <option value={477}>Rathi</option>
                              <option value={478}>Rauniar</option>
                              <option value={479}>Ravidasia</option>
                              <option value={480}>Rawat</option>
                              <option value={481}>Reddy</option>
                              <option value={482}>Relli</option>
                              <option value={483}>Rohit / Chamar</option>
                              <option value={484}>Ror</option>
                              <option value={485}>SC</option>
                              <option value={486}>SKP</option>
                              <option value={487}>ST</option>
                              <option value={488}>Sadgope</option>
                              <option value={489}>Sadhu Chetty</option>
                              <option value={490}>Sagara (Uppara)</option>
                              <option value={491}>Saha</option>
                              <option value={492}>Sahu</option>
                              <option value={493}>Saini</option>
                              <option value={494}>
                                Saiva Pillai Thanjavur
                              </option>
                              <option value={495}>
                                Saiva Pillai Tirunelveli
                              </option>
                              <option value={496}>Saliya</option>
                              <option value={497}>Samagar</option>
                              <option value={498}>Sambava</option>
                              <option value={499}>Sathwara</option>
                              <option value={500}>Satnami</option>
                              <option value={501}>Savji</option>
                              <option value={502}>Senai Thalaivar</option>
                              <option value={503}>Senguntha Mudaliyar</option>
                              <option value={504}>Sengunthar/Kaikolar</option>
                              <option value={505}>Settibalija</option>
                              <option value={506}>Setty Balija</option>
                              <option value={507}>Shaw / Sahu/Teli</option>
                              <option value={508}>Shettigar</option>
                              <option value={509}>Shilpkar</option>
                              <option value={510}>Shimpi/Namdev</option>
                              <option value={511}>Sindhi</option>
                              <option value={512}>Sindhi-Amil</option>
                              <option value={513}>Sindhi-Baibhand</option>
                              <option value={514}>Sindhi-Bhanusali</option>
                              <option value={515}>Sindhi-Bhatia</option>
                              <option value={516}>Sindhi-Chhapru</option>
                              <option value={517}>Sindhi-Dadu</option>
                              <option value={518}>Sindhi-Hyderabadi</option>
                              <option value={519}>Sindhi-Larai</option>
                              <option value={520}>Sindhi-Larkana</option>
                              <option value={521}>Sindhi-Lohana</option>
                              <option value={522}>Sindhi-Rohiri</option>
                              <option value={523}>Sindhi-Sahiti</option>
                              <option value={524}>Sindhi-Sakkhar</option>
                              <option value={525}>Sindhi-Sehwani</option>
                              <option value={526}>Sindhi-Shikarpuri</option>
                              <option value={527}>Sindhi-Thatai</option>
                              <option value={528}>Sonar</option>
                              <option value={529}>Soni</option>
                              <option value={530}>Sonkar</option>
                              <option value={531}>Sourashtra</option>
                              <option value={532}>Sozhia Chetty</option>
                              <option value={533}>Sozhiya Vellalar</option>
                              <option value={534}>Srisayana</option>
                              <option value={535}>Sugali (Naika)</option>
                              <option value={536}>Sunari</option>
                              <option value={537}>Sundhi</option>
                              <option value={538}>Surya Balija</option>
                              <option value={539}>Suthar</option>
                              <option value={540}>Swakula Sali</option>
                              <option value={541}>Tamboli</option>
                              <option value={542}>Tanti</option>
                              <option value={543}>Tantubai</option>
                              <option value={544}>Telaga</option>
                              <option value={545}>Teli</option>
                              <option value={546}>Telugupatti</option>
                              <option value={547}>Thakkar</option>
                              <option value={548}>Thakore</option>
                              <option value={549}>Thakur</option>
                              <option value={550}>Thandan</option>
                              <option value={551}>Thigala</option>
                              <option value={552}>Thiyya</option>
                              <option value={553}>Thiyya Thandan</option>
                              <option value={554}>
                                Thogata Veera Kshatriya
                              </option>
                              <option value={555}>
                                Thogata Veerakshathriya
                              </option>
                              <option value={556}>
                                Thondai Mandala Vellalar
                              </option>
                              <option value={557}>Thota</option>
                              <option value={558}>Tili</option>
                              <option value={559}>Togata</option>
                              <option value={560}>Tonk Kshatriya</option>
                              <option value={561}>Turupu Kapu</option>
                              <option value={562}>
                                Ummar / Umre / Bagaria
                              </option>
                              <option value={563}>Urali Gounder</option>
                              <option value={564}>Urs</option>
                              <option value={565}>Vada Balija</option>
                              <option value={566}>Vadambar</option>
                              <option value={567}>Vaddera</option>
                              <option value={568}>Vadugan</option>
                              <option value={569}>Vaish</option>
                              <option value={570}>Vaishnav</option>
                              <option value={571}>Vaishnav Dishaval</option>
                              <option value={572}>Vaishnav Kapol</option>
                              <option value={573}>Vaishnav Khadyata</option>
                              <option value={574}>Vaishnav Lad</option>
                              <option value={575}>Vaishnav Modh</option>
                              <option value={576}>Vaishnav Porvad</option>
                              <option value={577}>Vaishnav Shrimali</option>
                              <option value={578}>Vaishnav Sorathaiya</option>
                              <option value={579}>Vaishnav Vania</option>
                              <option value={580}>Vaishnava</option>
                              <option value={581}>Vaishya</option>
                              <option value={582}>Vaishya Vani</option>
                              <option value={583}>Valluvan</option>
                              <option value={584}>Valmiki</option>
                              <option value={585}>Vani</option>
                              <option value={586}>Vani / Vaishya</option>
                              <option value={587}>Vania</option>
                              <option value={588}>Vanika Vyshya</option>
                              <option value={589}>Vaniya</option>
                              <option value={590}>Vaniya Chettiar</option>
                              <option value={591}>Vanjara</option>
                              <option value={592}>Vanjari</option>
                              <option value={593}>Vankar</option>
                              <option value={594}>Vannar</option>
                              <option value={595}>
                                Vannia Kula Kshatriyar
                              </option>
                              <option value={596}>Variar</option>
                              <option value={597}>Varshney</option>
                              <option value={598}>Varshney (Barahseni)</option>
                              <option value={599}>Veera Saivam</option>
                              <option value={600}>Veerakodi Vellala</option>
                              <option value={601}>Velaan</option>
                              <option value={602}>Velama</option>
                              <option value={603}>Vellalar</option>
                              <option value={604}>Vellan Chettiars</option>
                              <option value={605}>Veluthedathu Nair</option>
                              <option value={606}>Vettuva Gounder</option>
                              <option value={607}>Vettuvan</option>
                              <option value={608}>Vijayvargia</option>
                              <option value={609}>Vilakithala Nair</option>
                              <option value={610}>Vilakkithala Nair</option>
                              <option value={611}>Vishwakarma</option>
                              <option value={612}>Viswabrahmin</option>
                              <option value={613}>Vokkaliga</option>
                              <option value={614}>Vysya</option>
                              <option value={615}>Yadav</option>
                              <option value={616}>Yadava Naidu</option>
                              <option value={617}>Yellapu</option>
                              <option value={618}>Anavil Brahmin</option>
                              <option value={619}>Audichya Brahmin</option>
                              <option value={620}>Barendra Brahmin </option>
                              <option value={621}>Bhatt Brahmin</option>
                              <option value={622}>Bhumihar Brahmin</option>
                              <option value={623}>Daivadnya Brahmin</option>
                              <option value={624}>Danua Brahmin</option>
                              <option value={625}>Deshastha Brahmin</option>
                              <option value={626}>Dhiman Brahmin</option>
                              <option value={627}>Dravida Brahmin</option>
                              <option value={628}>Embrandiri Brahmin</option>
                              <option value={629}>Garhwali Brahmin</option>
                              <option value={630}>Gaur Brahmin</option>
                              <option value={631}>
                                Goswami/Gosavi Brahmin
                              </option>
                              <option value={632}>Gujar Gaur Brahmin</option>
                              <option value={633}>Gurukkal Brahmin</option>
                              <option value={634}>Halua Brahmin</option>
                              <option value={635}>Havyaka Brahmin</option>
                              <option value={636}>Hoysala Brahmin</option>
                              <option value={637}>Iyengar Brahmin</option>
                              <option value={638}>Iyer Brahmin</option>
                              <option value={639}>Jangid Brahmin</option>
                              <option value={640}>Jhadua Brahmin</option>
                              <option value={641}>Kanyakubj Brahmin</option>
                              <option value={642}>Karhade Brahmin</option>
                              <option value={643}>Kokanastha Brahmin</option>
                              <option value={644}>Kota Brahmin</option>
                              <option value={645}>Kulin Brahmin</option>
                              <option value={646}>Kumaoni Brahmin</option>
                              <option value={647}>Madhwa Brahmin</option>
                              <option value={648}>Maithil Brahmin</option>
                              <option value={649}>Modh Brahmin</option>
                              <option value={650}>Mohyal Brahmin</option>
                              <option value={651}>Nagar Brahmin</option>
                              <option value={652}>Namboodiri Brahmin</option>
                              <option value={653}>Narmadiya Brahmin</option>
                              <option value={654}>Niyogi Brahmin</option>
                              <option value={655}>Panda Brahmin</option>
                              <option value={656}>Pandit Brahmin</option>
                              <option value={657}>Pushkarna Brahmin</option>
                              <option value={658}>Rarhi Brahmin</option>
                              <option value={659}>Rigvedi Brahmin</option>
                              <option value={660}>Rudraj Brahmin</option>
                              <option value={661}>Sakaldwipi Brahmin</option>
                              <option value={662}>Sanadya Brahmin</option>
                              <option value={663}>Sanketi Brahmin </option>
                              <option value={664}>Saraswat Brahmin</option>
                              <option value={665}>Saryuparin Brahmin</option>
                              <option value={666}>Shivhalli Brahmin</option>
                              <option value={667}>Shrimali Brahmin</option>
                              <option value={668}>Sikhwal Brahmin</option>
                              <option value={669}>Smartha Brahmin</option>
                              <option value={670}>Sri Vaishnava Brahmin</option>
                              <option value={671}>Stanika Brahmin</option>
                              <option value={672}>Tyagi Brahmin</option>
                              <option value={673}>Vaidiki Brahmin</option>
                              <option value={674}>Vaikhanasa Brahmin</option>
                              <option value={675}>Velanadu Brahmin</option>
                              <option value={676}>Vyas Brahmin</option>
                              <option value={677}>Shetty</option>
                              <option value={678}>Mera</option>
                              <option value={679}>Mukkulathor</option>
                              <option value={680}>Paswan</option>
                              <option value={681}>Jeer</option>
                              <option value={682}>Brahmin Jijhotia</option>
                              <option value={683}>Nath</option>
                              <option value={684}>Koiri</option>
                              <option value={685}>Brahmin Malviya</option>
                              <option value={686}>Darji</option>
                              <option value={687}>Amil Sindhi</option>
                              <option value={688}>Baibhand Sindhi</option>
                              <option value={689}>Bhanusali Sindhi</option>
                              <option value={690}>Bhatia Sindhi</option>
                              <option value={691}>Chhapru Sindhi</option>
                              <option value={692}>Dadu Sindhi</option>
                              <option value={693}>Hyderabadi Sindhi</option>
                              <option value={694}>Larai Sindhi</option>
                              <option value={695}>Larkana Sindhi</option>
                              <option value={696}>Lohana Sindhi</option>
                              <option value={697}>Rohiri Sindhi</option>
                              <option value={698}>Sahiti Sindhi</option>
                              <option value={699}>Sakkhar Sindhi</option>
                              <option value={700}>Sehwani Sindhi</option>
                              <option value={701}>Shikarpuri Sindhi</option>
                              <option value={702}>Thatai Sindhi</option>
                              <option value={703}>Naika</option>
                              <option value={704}>Muslim - Ansari</option>
                              <option value={705}>Muslim - Arain</option>
                              <option value={706}>Muslim - Awan</option>
                              <option value={707}>Muslim - Bohra</option>
                              <option value={708}>Muslim - Dekkani</option>
                              <option value={709}>Muslim - Dudekula</option>
                              <option value={710}>Muslim - Hanafi</option>
                              <option value={711}>Muslim - Jat</option>
                              <option value={712}>Muslim - Khoja</option>
                              <option value={713}>Muslim - Lebbai</option>
                              <option value={714}>Muslim - Malik</option>
                              <option value={715}>Muslim - Mapila</option>
                              <option value={716}>Muslim - Maraicar</option>
                              <option value={717}>Muslim - Memon</option>
                              <option value={718}>Muslim - Mughal</option>
                              <option value={719}>Muslim - Others</option>
                              <option value={720}>Muslim - Pathan</option>
                              <option value={721}>Muslim - Qureshi</option>
                              <option value={722}>Muslim - Rajput</option>
                              <option value={723}>Muslim - Rowther</option>
                              <option value={724}>Muslim - Shafi</option>
                              <option value={725}>Muslim - Sheikh</option>
                              <option value={726}>Muslim - Siddiqui</option>
                              <option value={727}>Muslim - Syed</option>
                              <option value={728}>Muslim - UnSpecified</option>
                              <option value={729}>Muslim - Ansari</option>
                              <option value={730}>Muslim - Arain</option>
                              <option value={731}>Muslim - Awan</option>
                              <option value={732}>Muslim - Bohra</option>
                              <option value={733}>Muslim - Dekkani</option>
                              <option value={734}>Muslim - Dudekula</option>
                              <option value={735}>Muslim - Hanafi</option>
                              <option value={736}>Muslim - Jat</option>
                              <option value={737}>Muslim - Khoja</option>
                              <option value={738}>Muslim - Lebbai</option>
                              <option value={739}>Muslim - Malik</option>
                              <option value={740}>Muslim - Mapila</option>
                              <option value={741}>Muslim - Maraicar</option>
                              <option value={742}>Muslim - Memon</option>
                              <option value={743}>Muslim - Mughal</option>
                              <option value={744}>Muslim - Others</option>
                              <option value={745}>Muslim - Pathan</option>
                              <option value={746}>Muslim - Qureshi</option>
                              <option value={747}>Muslim - Rajput</option>
                              <option value={748}>Muslim - Rowther</option>
                              <option value={749}>Muslim - Shafi</option>
                              <option value={750}>Muslim - Sheikh</option>
                              <option value={751}>Muslim - Siddiqui</option>
                              <option value={752}>Muslim - Syed</option>
                              <option value={753}>Muslim - UnSpecified</option>
                              <option value={754}>Muslim - Ansari</option>
                              <option value={755}>Muslim - Arain</option>
                              <option value={756}>Muslim - Awan</option>
                              <option value={757}>Muslim - Bohra</option>
                              <option value={758}>Muslim - Dekkani</option>
                              <option value={759}>Muslim - Dudekula</option>
                              <option value={760}>Muslim - Hanafi</option>
                              <option value={761}>Muslim - Jat</option>
                              <option value={762}>Muslim - Khoja</option>
                              <option value={763}>Muslim - Lebbai</option>
                              <option value={764}>Muslim - Malik</option>
                              <option value={765}>Muslim - Mapila</option>
                              <option value={766}>Muslim - Maraicar</option>
                              <option value={767}>Muslim - Maraicar</option>
                              <option value={768}>Muslim - Memon</option>
                              <option value={769}>Muslim - Mughal</option>
                              <option value={770}>Muslim - Others</option>
                              <option value={771}>Muslim - Pathan</option>
                              <option value={772}>Muslim - Qureshi</option>
                              <option value={773}>Muslim - Rajput</option>
                              <option value={774}>Muslim - Rowther</option>
                              <option value={775}>Muslim - Shafi</option>
                              <option value={776}>Muslim - Sheikh</option>
                              <option value={777}>Muslim - Siddiqui</option>
                              <option value={778}>Muslim - Syed</option>
                              <option value={779}>Muslim - UnSpecified</option>
                              <option value={780}>Born Again</option>
                              <option value={781}>Brethren</option>
                              <option value={782}>Church of South India</option>
                              <option value={783}>Evangelist</option>
                              <option value={784}>Jacobite</option>
                              <option value={785}>Knanaya</option>
                              <option value={786}>Knanaya Catholic</option>
                              <option value={787}>Knanaya Jacobite</option>
                              <option value={788}>Latin Catholic</option>
                              <option value={789}>Malankara Catholic</option>
                              <option value={790}>Marthoma</option>
                              <option value={791}>Pentecost</option>
                              <option value={792}>Roman Catholic</option>
                              <option value={793}>Seventh-day Adventist</option>
                              <option value={794}>Syrian Catholic</option>
                              <option value={795}>Syrian Jacobite</option>
                              <option value={796}>Syrian Orthodox</option>
                              <option value={797}>Syro Malabar</option>
                              <option value={798}>Christian - Others</option>
                              <option value={799}>Sikh - Ahluwalia</option>
                              <option value={800}>Sikh - Arora</option>
                              <option value={801}>Sikh - Bhatia</option>
                              <option value={802}>Sikh - Bhatra</option>
                              <option value={803}>Sikh - Ghumar</option>
                              <option value={804}>Sikh - Intercaste</option>
                              <option value={805}>Sikh - Jat</option>
                              <option value={806}>Sikh - Kamboj</option>
                              <option value={807}>Sikh - Khatri</option>
                              <option value={808}>Sikh - Kshatriya</option>
                              <option value={809}>Sikh - Lubana</option>
                              <option value={810}>Sikh - Majabi</option>
                              <option value={811}>Sikh - Nai</option>
                              <option value={812}>Sikh - Others</option>
                              <option value={813}>Sikh - Rajput</option>
                              <option value={814}>Sikh - Ramdasia</option>
                              <option value={815}>Sikh - Ramgharia</option>
                              <option value={816}>Sikh - Ravidasia</option>
                              <option value={817}>Sikh - Saini</option>
                              <option value={818}>Sikh - Tonk Kshatriya</option>
                              <option value={819}>Sikh - Unspecified</option>
                              <option value={820}>Jain - Agarwal</option>
                              <option value={821}>Jain - Bania</option>
                              <option value={822}>Jain - Intercaste</option>
                              <option value={823}>Jain - Jaiswal</option>
                              <option value={824}>Jain - KVO</option>
                              <option value={825}>Jain - Khandelwal</option>
                              <option value={826}>Jain - Kutchi</option>
                              <option value={827}>Jain - Oswal</option>
                              <option value={828}>Jain - Others</option>
                              <option value={829}>Jain - Porwal</option>
                              <option value={830}>Jain - Unspecified</option>
                              <option value={831}>Jain - Vaishya</option>
                              <option value={832}>Jain - Agarwal</option>
                              <option value={833}>Jain - Bania</option>
                              <option value={834}>Jain - Intercaste</option>
                              <option value={835}>Jain - Jaiswal</option>
                              <option value={836}>Jain - KVO</option>
                              <option value={837}>Jain - Khandelwal</option>
                              <option value={838}>Jain - Kutchi</option>
                              <option value={839}>Jain - Oswal</option>
                              <option value={840}>Jain - Others</option>
                              <option value={841}>Jain - Porwal</option>
                              <option value={842}>Jain - Unspecified</option>
                              <option value={843}>Jain - Vaishya</option>
                              <option value={844}>Other Caste</option>
                              <option value={845}>Intercaste</option>
                              <option value={846}>Irani</option>
                              <option value={847}>Parsi</option>
                              <option value={848}>Other Caste</option>
                              <option value={849}>Other Caste</option>
                              <option value={850}>Other Caste</option>
                              <option value={851}>Maratha</option>
                              <option value={852}>Fhull Mali</option>
                              <option value={853}>wadar</option>
                              <option value={854}>Burud</option>
                              <option value={855}>
                                Nathpanti Devari Gosavi
                              </option>
                              <option value={856}>Dhangar</option>
                              <option value={857}>Brahmin - Niyogi</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Mother Tongue:</label>
                            <select
                              name="mother_tongue"
                              className="form-control form-control-lg"
                            >
                              <option value>--- Select ---</option>
                              <option value={1}>Not Assign</option>
                              <option value={2}>Telugu</option>
                              <option value={3}>Tamil</option>
                              <option value={4}>Sourashtra</option>
                              <option value={5}>Sindhi</option>
                              <option value={6}>Santhali</option>
                              <option value={7}>Sanskrit</option>
                              <option value={8}>Rajasthani</option>
                              <option value={9}>Punjabi</option>
                              <option value={10}>Oriya</option>
                              <option value={11}>Nepali</option>
                              <option value={12}>Nicobarese</option>
                              <option value={13}>Monpa</option>
                              <option value={14}>Mizo</option>
                              <option value={15}>Miji</option>
                              <option value={16}>Marwari</option>
                              <option value={17}>Marathi</option>
                              <option value={18}>Manipuri</option>
                              <option value={19}>Malayalam</option>
                              <option value={20}>Maithili</option>
                              <option value={21}>Magahi</option>
                              <option value={22}>Ladacki</option>
                              <option value={23}>Lepcha</option>
                              <option value={24}>Kutchi</option>
                              <option value={25}>Kumaoni</option>
                              <option value={26}>Koshali</option>
                              <option value={27}>Konkani</option>
                              <option value={28}>Khasi</option>
                              <option value={29}>Khandesi</option>
                              <option value={30}>Kashmiri</option>
                              <option value={31}>Kannada</option>
                              <option value={32}>Kanauji</option>
                              <option value={33}>Hindi</option>
                              <option value={34}>Himachali/Pahari</option>
                              <option value={35}>Haryanvi</option>
                              <option value={36}>Gujarati</option>
                              <option value={37}>Garo</option>
                              <option value={38}>Garhwali</option>
                              <option value={39}>French</option>
                              <option value={40}>English</option>
                              <option value={41}>Dogri</option>
                              <option value={42}>Chatisgarhi</option>
                              <option value={43}>Badaga</option>
                              <option value={44}>Bihari</option>
                              <option value={45}>Brij</option>
                              <option value={46}>Bhojpuri</option>
                              <option value={47}>Bengali</option>
                              <option value={48}>Awadhi</option>
                              <option value={49}>Assamese</option>
                              <option value={50}>Arunachali</option>
                              <option value={51}>Angika</option>
                              <option value={52}>Tulu</option>
                              <option value={53}>Urdu</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">Star</label>
                            <select
                              name="star"
                              className="form-control form-control-lg"
                              style={{ width: "100%" }}
                            >
                              <option value>--- Select ---</option>
                              <option value={1}>Not Assign</option>
                              <option value={2}>Bharani</option>
                              <option value={3}>Krittika</option>
                              <option value={4}>Rohini</option>
                              <option value={5}>Mrigashira</option>
                              <option value={6}>Ardra</option>
                              <option value={7}>Punarvasu</option>
                              <option value={8}>Pushya</option>
                              <option value={9}>Ashlesha</option>
                              <option value={10}>Magha</option>
                              <option value={11}>Purva Phalguni</option>
                              <option value={12}>Uttara Phalguni</option>
                              <option value={13}>Hasta</option>
                              <option value={14}>Chitra</option>
                              <option value={15}>Swati</option>
                              <option value={16}>Anuradha</option>
                              <option value={17}>Jyeshtha</option>
                              <option value={18}>Mula</option>
                              <option value={19}>Purva Ashadha</option>
                              <option value={20}>Uttara Ashadha</option>
                              <option value={21}>Abhijit</option>
                              <option value={22}>Shravana</option>
                              <option value={23}>Dhanishta</option>
                              <option value={24}>Shatabhisha</option>
                              <option value={25}>Purva Bhadrapada</option>
                              <option value={26}>Uttara Bhadrapada</option>
                              <option value={27}>Revati</option>
                              <option value={28}>Vishakha</option>
                              <option value={29}>Ashwini</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-header bg-light">
                      <h4 className="card-title text-success mt-4 mb-4">
                        <i
                          className="fa fa-map-marker gtMarginRight10"
                          aria-hidden="true"
                        />
                        Location Details
                      </h4>
                    </div>
                    <div className="card-body col-md-12">
                      <div className="container">
                        <div className="row">
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">State Living In</label>
                            <select
                              name="state_living_in"
                              className="form-control form-control-lg"
                            >
                              <option value={0}>Not Assign</option>
                              <option value={1}>Maharashtra</option>
                              <option value={2}>Goa</option>
                              <option value={3}>Karnataka</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">
                              District Living In
                            </label>
                            <select
                              name="district_id"
                              className="form-control form-control-lg"
                            >
                              <option value>--- Select ---</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">
                              Taluka Living In
                            </label>
                            <select
                              name="taluka_id"
                              className="form-control form-control-lg"
                            >
                              <option> --- Select ---</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-4 mb-4">
                            <label className="text-dark">
                              Village Living In
                            </label>
                            <select
                              name="village_id"
                              className="form-control form-control-lg"
                            >
                              <option value>--- Select ---</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-header bg-light">
                      <h4 className="card-title text-success mt-4 mb-4">
                        {" "}
                        <i
                          className="fa fa-university gtMarginRight10"
                          aria-hidden="true"
                        />
                        Education &amp; Occupation Details
                      </h4>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className=" col-md-6 mt-4 mb-4">
                          <label className="text-dark">Highest Education</label>
                          <input
                            type="text"
                            name="highest_education"
                            className="form-control form-control-lg"
                            placeholder="Enter Highest Education"
                            defaultValue
                          />
                        </div>
                        <div className=" col-md-6 mt-4 mb-4">
                          <label className="text-dark">Additional Degree</label>
                          <input
                            type="text"
                            name="additional_degree"
                            className="form-control form-control-lg"
                            placeholder="Enter Additional Degree"
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mt-4 mb-4">
                          <label className="text-dark">
                            Employed In (Working Sector)
                          </label>
                          <select
                            name="employed_in"
                            className="form-control form-control-lg"
                            style={{ width: "100%" }}
                          >
                            <option value>--- Select ---</option>
                            <option value="Government">Government </option>
                            <option value="Private">Private </option>
                            <option value="Business">Business </option>
                            <option value="Defence">Defence </option>
                            <option value="Defence">Self Employed </option>
                            <option value="Not Working">Not Working</option>
                          </select>
                        </div>
                        <div className=" col-md-6 mt-4 mb-4">
                          <label className="text-dark">Occupation</label>
                          <input
                            name="occupation"
                            className="form-control form-control-lg"
                            defaultValue
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-6 mt-4 mb-4">
                        <label className="text-dark">Annual Income</label>
                        <input
                          type="number"
                          name="annual_income"
                          className="form-control form-control-lg"
                          placeholder="Enter Annual Income"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="card-header bg-light">
                      <h4 className="card-title text-success mt-4 mb-4">
                        <i
                          className="fa fa-man gtMarginRight10"
                          aria-hidden="true"
                        />
                        Partner Expectation
                      </h4>
                    </div>
                    <div className="card-body  ">
                      <div className="container ">
                        <div className="container-2">
                          <div className="form-group col-md-12">
                            <label className="text-dark">
                              Partner Expectation
                            </label>
                            <textarea
                              name="partner_expectation"
                              id="Expectation"
                              cols={30}
                              rows={5}
                              className="form-control form-control-lg"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-danger btn-lg mt-4 mb-4"
                        style={{ height: 40, width: 130 }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
=======
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
>>>>>>> 634d74138f518f55b8a2760d38bdd5f925c9abd7
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