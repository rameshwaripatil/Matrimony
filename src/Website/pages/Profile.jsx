import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Authuser from '../Authentication/Authuser';
const Profile = () => {
    const redirect = useNavigate();
    const notify = (M) => toast.success(M);
    const { user, http } = Authuser();
    const [District, SetDistrict] = useState([]);
    const [Talukas, SetTalukas] = useState([]);
    const [Village, SetVillage] = useState([]);
    const [User, Set_User] = useState([]);
    const [activeTab, setActiveTab] = useState('home');
    const [Data, SetData] = useState("");
    const [Address, SetAddress] = useState("");
    const [Counts, SetuserEffectCol] = useState(1);
    const id = user.id;
    useEffect(() => {
        http.get(`/get/state/district`).then((res) => {
            // console.log(res.data);
        }).catch((e) => {
            console.log(e);
        });
        http.get(`/profile/${id}`).then((res) => {
            Set_User(res.data.user);
        }).catch((e) => {
            console.log(e);
        });
        http.get(`/get_curd_all_imformation/for_fillter`).then((res) => {
            SetData(res.data);
        }).catch((e) => {
            console.log(e);
        });
        http.get(`/pratner/stor/now`).then((res) => {
            SetPartner(res.data);
        }).catch((e) => {
            console.log(e);
        });
        http.get(`/get/user/address`).then((res) => {
            SetAddress(res.data);
        }).catch((e) => {
            console.log(e);
        });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, [Counts]);
    const handleFieldChange = (e, fieldName) => {
        const updatedUser = {
            ...User,
            [fieldName]: e
        };
        Set_User(updatedUser);
        if (fieldName === "member_state_living_in") {
            State_lieving(e);
        } else if (fieldName === "member_district_living_in") {
            Taluka(e);
        } else if (fieldName === "member_taluka_living_in") {
            Villages(e);
        } else { }
    };
    const handleFieldImg = (e, fieldName) => {
        const updatedUser = {
            ...User,
            [fieldName]: e
        };
        Set_User(updatedUser);
    };
    const FormSubmit = (e) => {
        e.preventDefault();
        http.post('/profile/update', User).then((res) => {
            SetuserEffectCol(Counts + 1)
            notify(res.data.msg);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            const currentIndex = tabKeys.indexOf(activeTab);
            setActiveTab(tabKeys[currentIndex + 1]);
        }).catch((e) => {
            console.log(e);
        });
    }
    // -----------------------------*****-----------------//
    // State_lieving funtion
    const State_lieving = (e) => {
        http
            .get(`/get/state/liveing/${e}`)
            .then((res) => {
                SetDistrict(res.data.district);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const Taluka = (e) => {
        http
            .get(`/get/taluka/liveing/${e}`)
            .then((res) => {
                SetTalukas(res.data.talukas);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const Villages = (e) => {
        http
            .get(`/get/village/liveing/${e}`)
            .then((res) => {
                SetVillage(res.data.village);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    if (sessionStorage.getItem("token") == null) {
        redirect("/register");
    }
    const [toAgeOptions, setToAgeOptions] = useState([]);
    const handleFromAgeChange = (e) => {
        handlePartnerFieldChange(e.target.value, "basic_fromage")
        const selectedFromAgeName = e.target.options[e.target.selectedIndex].text;
        // Filter options based on selected fromAge
        const filteredOptions = Data.age.filter((item) => item.age_name >= selectedFromAgeName);
        setToAgeOptions(filteredOptions);
    };
    const [toHeightOptions, setToHeightOptions] = useState([]);

    const handleFromheiggtChange = (e) => {
        handlePartnerFieldChange(e.target.value, "basic_fromheight");
        const selectedFromWeight = e.target.value;
        const filteredOptions = Data.height.filter((item) =>
            item.height_id >= selectedFromWeight
        );
        setToHeightOptions(filteredOptions);
    };

    const [Partner, SetPartner] = useState([]);
    const handlePartnerFieldChange = (e, fieldName) => {
        const StorePartnerPreference = {
            ...Partner,
            [fieldName]: e
        };
        SetPartner(StorePartnerPreference);
        if (fieldName === "basic_state") {
            State_lieving(e);
        } else if (fieldName === "basic_district") {
            Taluka(e);
        } else if (fieldName === "basic_taluka") {
            Villages(e);
        } else { }
    };
    const SubmitPartnerPreferences = (e) => {
        e.preventDefault();
        http
            .post("/pratner/stor/now", Partner)
            .then((res) => {
                notify(res.data.msg);
                SetuserEffectCol(Counts + 1)
                redirect("/dashboard")
            })
            .catch((e) => {
                console.log(e);
            });
    }
    const tabKeys = ['home', 'Partner Preference'];


    return (
        <div className='row'>
            {/* <HeaderBg
                main="Profile"
                route="\"
                route_name="Profile"
                page="Profile"
            /> */}
            <div className='col-md-10 offset-md-1'>
                <div className='section--padding'>
                    <div className="card m-2 mb-5">
                        <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">

                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <form className="form-horizontal" onSubmit={(e) => FormSubmit(e)} encType="multipart/form-data">
                                            <div className="card-header mt-3 bg-light">
                                                <h4 className="card-title text-success"><i className="fa fa-file-text gtMarginRight10" aria-hidden="true" />
                                                    Basic
                                                    Details (Registration From)
                                                </h4>
                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="form-group col-md-3 mt-4 mb-4">
                                                        <label className="text-dark">Fisrt Name</label>

                                                        <input type="text" value={User.first_name}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'first_name')} className={User.first_name === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter First Name" />
                                                        {
                                                            User.first_name === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }

                                                    </div>
                                                    <div className="form-group col-md-3 mt-4 mb-4">
                                                        <label className="text-dark">Last Name</label>
                                                        <input type="text" name="last_name"
                                                            value={User.last_name}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'last_name')}
                                                            className={User.last_name === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Last Name" />
                                                        {
                                                            User.last_name === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Gender</label>
                                                        <select className={User.gender === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} name="gender" value={User.gender}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'gender')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="2">Male</option>
                                                            <option value="1">Female</option>
                                                            <option value="3">Other</option>
                                                        </select>
                                                        {
                                                            User.gender === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Age</label>
                                                        <select className={User.age === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} name="age" value={User.age}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'age')}>
                                                            <option value="">--- Select ---</option>
                                                            {
                                                                Data.age
                                                                    ? Data.age.map((item, Index) => {
                                                                        return <option value={item.age_name} key={Index}>{item.age_name}</option>;
                                                                    }) : ""
                                                            }

                                                        </select>
                                                        {
                                                            User.age === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Blood Group</label>
                                                        <input type="text" name="blood_group" className={User.blood_group === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter blood_group" value={User.blood_group}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'blood_group')} />
                                                        {
                                                            User.blood_group === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Marital Status</label>
                                                        <select name="marital_status" className={User.marital_status === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.marital_status}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'marital_status')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="1">UnMarried </option>
                                                            <option value="2">Married </option>
                                                            <option value="3"> Divorced </option>
                                                        </select>
                                                        {
                                                            User.marital_status === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Date Of Birth</label>
                                                        <input type="date" name="date_of_birth" id="date_of_birth" className={User.date_of_birth === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.date_of_birth}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'date_of_birth')} />
                                                        {
                                                            User.date_of_birth === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Profile Created By</label>
                                                        <select name="profile_created_by" className={User.profile_created_by === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.profile_created_by}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'profile_created_by')}>
                                                            <option value="">--- Select ---</option>
                                                            {
                                                                Data.profile_created_by
                                                                    ?
                                                                    Data.profile_created_by.map((item, Index) => {
                                                                        return <option value={item.profile_created_id} key={Index}>{item.profilecreated}</option>;
                                                                    }) : ""
                                                            }

                                                        </select>
                                                        {
                                                            User.profile_created_by === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Mobile No</label>
                                                        <div className="card-container">
                                                            <input name="mobile_no" type="number" className={User.mobile_no === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Mobile No" value={User.number}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'number')} />
                                                            {
                                                                User.mobile_no === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Alternative Mobile No</label>
                                                        <div className="card-container">
                                                            <input name="mobile_no_alternative" type="number" className={User.mobile_no_alternative === null ? ('form-control form-control-lg border-danger ') : ('form-control form-control-lg ')} placeholder="Enter Mobile No" value={User.mobile_no_alternative}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'mobile_no_alternative')} />
                                                            {
                                                                User.mobile_no_alternative === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Mother Tongue:</label>
                                                        <select name="mother_tongue" className={User.mother_tongue === null ? ('form-control form-control-lg border-danger ') : ('form-control form-control-lg ')} value={User.mother_tongue}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'mother_tongue')}>
                                                            <option value="">--- Select ---</option>
                                                            {Data.mother_toungue
                                                                ?
                                                                Data.mother_toungue.map((item, Index) => {
                                                                    return <option value={item.mother_tounges_id} key={Index} >{item.mothertounge}</option>;
                                                                }) : ""
                                                            }
                                                        </select>
                                                        {
                                                            User.mother_tongue === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Email</label>
                                                        <input type="email" name="email" className={User.email === null ? ('form-control form-control-lg border-danger ') : ('form-control form-control-lg ')} placeholder="Enter Email" value={User.email}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'email')} />
                                                        {
                                                            User.email === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">password</label>
                                                        <input type="text" name="password" className={User.password === null ? ('form-control form-control-lg border-danger ') : ('form-control form-control-lg ')} placeholder="Enter Email" 
                                                            onChange={(e) => handleFieldChange(e.target.value, 'password')} />
                                                   
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body col-md-12 ">
                                                <div className="container">
                                                </div>
                                            </div>
                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success"> Religion Information</h4>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Religion</label>
                                                        <select name="religion" className={User.member_religin === null ? ('form-control form-control-lg border-danger ') : ('form-control form-control-lg ')} value={User.member_religin}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_religin')}>
                                                            <option value="">--- Select ---</option>
                                                            {Data.religion ?
                                                                Data.religion.map((item, Index) => (
                                                                    <option value={item.religion_id} key={Index}>{item.religion}</option>
                                                                )) : ""
                                                            }
                                                        </select>
                                                        {
                                                            User.member_religin === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Caste </label>
                                                        <select name="caste" className={User.member_caste === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} id="caste_id" value={User.member_caste}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_caste')}>
                                                            <option value="">--- Select ---</option>
                                                            {Data.cast ?
                                                                Data.cast.map((item, Index) => (
                                                                    <option value={item.caste_id} key={Index}>{item.caste}</option>
                                                                )) : ""
                                                            }
                                                        </select>
                                                        {
                                                            User.member_caste === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Sub Caste </label>
                                                        <select name="sub_caste" className={User.member_sub_caste === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_sub_caste}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_sub_caste')}>
                                                            <option value="">--- Select ---</option>
                                                            {Data.sub_caste ?
                                                                Data.sub_caste.map((item, Index) => (
                                                                    <option value={item.subcaste_id} key={Index}>{item.sub_caste}</option>
                                                                )) : ""
                                                            }
                                                        </select>
                                                        {
                                                            User.member_sub_caste === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Willing To Marry In Other Caste ? </label>
                                                        <select name="marry_other_cast" className={User.marry_other_cast === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.marry_other_cast}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'marry_other_cast')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="1">Yes</option>
                                                            <option value="2">No</option>
                                                        </select>
                                                        {
                                                            User.marry_other_cast === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success mt-4 mb-4"> <i className="fa fa-university gtMarginRight10" aria-hidden="true" />
                                                    Education &amp; Occupation Details</h4>
                                            </div>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className=" col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Highest Education</label>
                                                        <input type="text" name="highest_education" className={User.member_highest_education === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Highest Education" value={User.member_highest_education}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_highest_education')} />
                                                        {
                                                            User.member_highest_education === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Additional Degree</label>
                                                        <input type="text" name="additional_degree" className={User.member_additional_degree === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Additional Degree" value={User.member_additional_degree}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_additional_degree')} />
                                                        {
                                                            User.member_additional_degree === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Employed In (Working Sector)</label>
                                                        <select name="employed" className={User.member_employed_in === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_employed_in}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_employed_in')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="Government">Government </option>
                                                            <option value="Private">Private </option>
                                                            <option value="Business">Business </option>
                                                            <option value="Defence">Defence </option>
                                                            <option value="Defence">Self Employed </option>
                                                            <option value="Not Working">Not Working  </option>
                                                        </select>
                                                        {
                                                            User.member_employed_in === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Occupation</label>
                                                        <input name="occupation" className={User.member_occupation === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_occupation}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_occupation')}/>
                                                         

                                                        
                                                        {
                                                            User.member_occupation === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div><div className='row'>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Annual Income</label>
                                                        <input type="number" name="annual_income" className={User.member_annual_income === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Annual Income" value={User.member_annual_income}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_annual_income')} />
                                                        {
                                                            User.member_annual_income === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Property Details </label>
                                                        <input type="text" name="member_property" className={User.member_property === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="" value={User.member_property}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_property')} />
                                                        {
                                                            User.member_property === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success mt-4 mb-4"> <i className="fa fa-user gtMarginRight10" aria-hidden="true" />
                                                    Family Details</h4>
                                            </div>
                                            <div className="card-body col-md-12">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Father Full Name</label>
                                                            <input type="text" name="member_father_name" className={User.member_father_name === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter father name " value={User.member_father_name}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_father_name')} />
                                                            {
                                                                User.member_father_name === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div> <div className="form-group col-md-6  mt-4 mb-4">
                                                            <label className="text-dark">Mother  Name</label>
                                                            <input type="text" name="member_mother_name" className={User.member_mother_name === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter mother name " value={User.member_mother_name}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_mother_name')} />
                                                            {
                                                                User.member_mother_name === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Family Type</label>
                                                            <select name="family_type" id="fam_type" className={User.member_family_type === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_family_type}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_family_type')}>
                                                                <option value="">--- Select ---</option>
                                                                <option value="1">Joint</option>
                                                                <option value="2">Nuclear</option>
                                                            </select>
                                                            {
                                                                User.member_family_type === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Family Value</label>
                                                            <select name="family_value" className={User.member_family_value === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_family_value}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_family_value')}>
                                                                <option value="">--- Select ---</option>
                                                                <option value="Orthodox" >Orthodox</option>
                                                                <option value="Traditional" >Traditional</option>
                                                                <option value="Moderate" >Moderate</option>
                                                                <option value="Liberal" >Liberal</option>


                                                            </select>
                                                            {
                                                                User.member_family_value === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Family Member</label>
                                                            <input type="number" name="family_member" className={User.member_family_member === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Family Member" value={User.member_family_member}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_family_member')} />
                                                            {
                                                                User.member_family_member === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Family Status</label>
                                                            <select name="family_status" className={User.member_familystatus === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_familystatus}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_familystatus')}>
                                                                <option value="">--- Select ---</option>
                                                                <option value="Middle Class">Middle Class</option>
                                                                <option value="Upper Middle Class">Upper Middle Class</option>
                                                                <option value="Rich">Rich</option>
                                                                <option value="Affluent">Affluent</option>
                                                            </select>
                                                            {
                                                                User.member_familystatus === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Fathers Occupation</label>
                                                            <input type="text" name="fathers_occupation" id="fathers_occupation" className={User.member_fathers_occupation === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Fathers Occupation" value={User.member_fathers_occupation}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_fathers_occupation')} />
                                                            {
                                                                User.member_fathers_occupation === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Relative Information</label>
                                                            <input type="text" name="relative"
                                                             className={User.member_relative === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} 
                                                             placeholder="Enter Relative " value={User.member_relative}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_relative')} />
                                                            {
                                                                User.member_relative === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">No of Brothers</label>
                                                            <input type="number" name="brothers" className={User.member_brothers === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Brothers " value={User.member_brothers}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_brothers')} />
                                                            {
                                                                User.member_brothers === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">No of Married Brothers</label>
                                                            <input type="number" name="no_of_married_brothers" className={User.member_no_of_married_bro === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter No of Married Brothers" value={User.member_no_of_married_bro}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_no_of_married_bro')} />
                                                            {
                                                                User.member_no_of_married_bro === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">No of Sisters</label>
                                                            <input type="number" name="sisters" className={User.member_sisters === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Sisters " value={User.member_sisters}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_sisters')} />
                                                            {
                                                                User.member_sisters === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">No of Married Sisters</label>
                                                            <input type="number" name="no_of_married_sisters" className={User.member_no_of_married_sis === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter No of Married Sisters" value={User.member_no_of_married_sis}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_no_of_married_sis')} />
                                                            {
                                                                User.member_no_of_married_sis === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success"><i className="fa fa-map-marker gtMarginRight10 mt-4 mb-4" aria-hidden="true" />
                                                    Location Details</h4>
                                            </div>
                                            <div className="card-body col-md-12">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">State Living In</label>
                                                            <select name="state_living_in"
                                                                onChange={(e) => handleFieldChange(e.target.value, "member_state_living_in")}
                                                             className={Address.state_name === "Not Assign" ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} 

                                                            >
                                                                {/* <option value="" selected>{Address.state_name}</option> */}
                                                                {Data.state ? Data.state.map((item, index) => (
                                                                    <option value={item.state_id} key={index}>
                                                                        {item.state_name}
                                                                    </option>
                                                                )) : ""}
                                                            </select>

                                                        </div>

                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">District Living In</label>
                                                            <select name="district_id" className='form-control form-control-lg' onChange={(e) => handleFieldChange(e.target.value, 'member_district_living_in')}>
                                                                {/* <option value="" selected>{Address.dist_name}  Old Address</option> */}
                                                                {District.map((item, index) => (
                                                                    <option value={item.dist_id} key={index}>
                                                                        {item.dist_name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className='row'>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">TaluKa Living In</label>
                                                            <select name="taluka_id" className='form-control form-control-lg' onChange={(e) => handleFieldChange(e.target.value, "member_taluka_living_in")}>
                                                                {/* <option value="" selected>{Address.taluka_name} Old Address</option> */}
                                                                {Talukas.map((item, index) => (
                                                                    <option value={item.taluka_id} key={index}>
                                                                        {item.taluka_name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Village Living In</label>
                                                            <select name="village_id" className='form-control form-control-lg' onChange={(e) => handleFieldChange(e.target.value, 'member_village_living_in')}>
                                                                {/* <option value="" selected>{Address.village_name} Old Address</option> */}
                                                                {Village.map((item, index) => (
                                                                    <option value={item.village_id} key={index}>
                                                                        {item.village_name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success mt-4 mb-4"><i className="fa fa-man gtMarginRight10" aria-hidden="true" />
                                                    Habits & Hobbits </h4>
                                            </div>
                                            <div className='container'>
                                                <div className="row">
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Diet</label>
                                                        <select name="diet" className={User.member_diet === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_diet}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_diet')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="Vegetarian">Vegetarian</option>
                                                            <option value="Non - Vegetarian">Non - Vegetarian</option>
                                                            <option value="Eggetariand"> Eggetarian</option>
                                                        </select>
                                                        {
                                                            User.member_diet === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Smoking Habits</label>
                                                        <select name="smoking_habits" id="smoking_habits" className={User.member_smoking_habits === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_smoking_habits}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_smoking_habits')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="No">No</option>
                                                            <option value="Ocassionally">Ocassionally</option>
                                                        </select>
                                                        {
                                                            User.member_smoking_habits === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Drinking Habits</label>
                                                        <select name="drink_habit" id="drink_habit" className={User.member_drink_habit === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_drink_habit}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_drink_habit')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="No">No</option>
                                                            <option value="Ocassionally">Ocassionally</option>
                                                        </select>
                                                        {
                                                            User.member_drink_habit === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Hobbies</label>
                                                        <select name="smoking_habits" id="smoking_habits"
                                                            className={User.member_hobbies === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_hobbies}

                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_hobbies')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="1">Not Assign</option>
                                                            <option value="Reading & Writing">Reading & Writing</option>
                                                            <option value="Cooking & Baking">Cooking & Baking</option>
                                                            <option value="PhotoGraphy">PhotoGraphy</option>
                                                            <option value="Sports & Physical Activities">Sports & Physical Activities</option>
                                                            <option value="Traveling">Traveling</option>
                                                            <option value="Gaming">Gaming </option>
                                                            <option value="Yoga & Meditation ">Yoga & Meditation </option>
                                                            <option value="Learning New Things">Learning New Things</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success mt-4 mb-4"><i className="fa fa-man gtMarginRight10" aria-hidden="true" />
                                                    Physical
                                                    Attribute</h4>
                                            </div>
                                            <div className='container'>
                                                <div className="row">
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Height</label>
                                                        <select name="height" className={User.member_height === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_height}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_height')}>
                                                            <option value="">--- Select ---</option>
                                                            {
                                                                Data.height ? Data.height.map((item, index) => (
                                                                    <option value={item.height_id} key={index}>{item.height}</option>
                                                                )) : ""
                                                            }
                                                        </select>
                                                        {
                                                            User.member_height === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Weight</label>
                                                        <select name="weight" className={User.member_weight === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_weight}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_weight')}>
                                                            <option value="">--- Select ---</option>
                                                            {
                                                                Data.weight ? Data.weight.map((item, index) => (
                                                                    <option value={item.weight_id} key={index}>{item.weight}</option>
                                                                )) : ""
                                                            }
                                                        </select>
                                                        {
                                                            User.member_weight === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Body Type</label>
                                                        <select name="body_type" id="body_type" className={User.member_body_type === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_body_type}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_body_type')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="Slim">Slim</option>
                                                            <option value="Average">Average</option>
                                                            <option value="Athletic">Athletic</option>
                                                            <option value="Heavy">Heavy</option>
                                                        </select>
                                                        {
                                                            User.member_body_type === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Complextion (Body Color)</label>
                                                        <select name="complexion" className={User.member_complexion === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_complexion}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_complexion')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="Very Fair">Very Fair</option>
                                                            <option value="Fair">Fair</option>
                                                            <option value="Wheatish">Wheatish</option>
                                                            <option value="Wheatish Brown">Wheatish Brown</option>
                                                            <option value="Dark">Dark</option>

                                                        </select>
                                                        {
                                                            User.member_complexion === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="form-group col-md-6 mt-4 mb-4">
                                                        <label className="text-dark">Physical Status</label>
                                                        <select name="physical_status" className={User.member_physical_status === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_physical_status}
                                                            onChange={(e) => handleFieldChange(e.target.value, 'member_physical_status')}>
                                                            <option value="">--- Select ---</option>
                                                            <option value="Normal">Normal</option>
                                                            <option value="Physical Challenged">Physical Challenged</option>
                                                        </select>
                                                        {
                                                            User.member_physical_status === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success mt-4 mb-4"><i className="fa fa-man gtMarginRight10" aria-hidden="true" />
                                                    Horoscope Details</h4>
                                            </div>
                                            <div className="card-body col-md-12">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Star ( Nakshatra )</label>
                                                            <select name="nakshra" className={User.member_nakshra === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_nakshra}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_nakshra')}>
                                                                <option value="">--- Select ---</option>
                                                                {Data.nakshtra ?
                                                                    Data.nakshtra.map((item, index) => (
                                                                        <option value={item.nakshtra_id} key={index}>{item.nakshra}</option>
                                                                    )) : ""
                                                                }
                                                            </select>
                                                            {
                                                                User.member_nakshra === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Raasi/Moonsign</label>
                                                            <select name="rashi" className={User.member_rashi === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_rashi}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_rashi')}>
                                                                <option value="">--- Select ---</option>
                                                                {
                                                                    Data.rashi ? Data.rashi.map((item, index) => (
                                                                        <option value={item.rashi_id} key={index}>{item.rashi}</option>
                                                                    )) : ""
                                                                }
                                                            </select>
                                                            {
                                                                User.member_rashi === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Birth Time</label>
                                                            <input type="time" name="birth_time" id="birth_time" className={User.member_birth_time === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={User.member_birth_time}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_birth_time')} />
                                                            {
                                                                User.member_birth_time === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                        <div className="form-group col-md-6 mt-4 mb-4">
                                                            <label className="text-dark">Birth Place</label>
                                                            <input type="text" name="birth_place" id="birth_palce" className={User.member_birth_palce === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Birth Place" value={User.member_birth_palce}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_birth_palce')} />
                                                            {
                                                                User.member_birth_palce === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success mt-4 mb-4"><i className="fa fa-man gtMarginRight10" aria-hidden="true" />
                                                    About Me
                                                </h4>
                                            </div>
                                            <div className="card-body col-md-12 d-flex ">
                                                <div className="container col-md-12">
                                                    <div className="container-2">
                                                        <div className="form-group col-md-12">
                                                            <textarea name="about_me" id="about_me" cols={30} rows={5} className={User.member_about_me === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')}
                                                                onChange={(e) => handleFieldChange(e.target.value, 'member_about_me')} value={User.member_about_me} ></textarea>
                                                            {
                                                                User.member_about_me === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-header bg-light d-flex">
                                                <h4 className="card-title text-success"><i className="fa fa-man gtMarginRight10 mt-4 mb-4" aria-hidden="true" />
                                                    Upload
                                                    Images
                                                </h4>
                                                <h6 className="ml-3  text-warning " style={{ marginTop: "9px", marginLeft: "5px" }}>(One Image)</h6>
                                            </div>
                                            <div className="card-body col-md-12 container">

                                                <div className="row">
                                                    <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                                        <div className="custom-file">
                                                            {User.member_user_img1 && (<a href={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img1}`} target='_prashant'>
                                                                <img src={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img1}`} alt="" height={"50px"} width={"50px"} />
                                                            </a>
                                                            )}
                                                            <input type="file" name="user_img1"

                                                                onChange={(e) => handleFieldImg(e.target.files[0], 'member_user_img1')} className={User.member_user_img1 === null ? ('text-danger') : ('text-success')} />
                                                            <label className="custom-file-label"></label>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                                        <div className="custom-file">
                                                            {User.member_user_img2 && (<a href={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img2}`} target='_prashant'>
                                                                <img src={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img2}`} alt="" height={"50px"} width={"50px"} />
                                                            </a>
                                                            )}
                                                            <input type="file" name="user_img2" onChange={(e) => handleFieldImg(e.target.files[0], 'member_user_img2')} className={User.member_user_img2 === null ? ('text-danger') : ('text-success')} />
                                                            <label className="custom-file-label"></label>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                                        <div className="custom-file">
                                                            {User.member_user_img3 && (
                                                                <a href={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img3}`} target='_prashant'>
                                                                    <img src={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img3}`} alt="" height={"50px"} width={"50px"} />
                                                                </a>
                                                            )}
                                                            <input type="file" name="user_img3" onChange={(e) => handleFieldImg(e.target.files[0], 'member_user_img3')} className={User.member_user_img3 === null ? (' text-danger') : (' text-success')} />
                                                            <label className="custom-file-label"></label>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                                        <div className="custom-file">
                                                            {User.member_user_img4 && (
                                                                <a href={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img4}`} target='_prashant'>
                                                                    <img src={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img4}`} alt="" height={"50px"} width={"50px"} />
                                                                </a>
                                                            )}
                                                            <input type="file" name="user_img4" onChange={(e) => handleFieldImg(e.target.files[0], 'member_user_img4')} className={User.member_user_img4 === null ? ('text-danger') : (' text-success')} />
                                                            <label className="custom-file-label"></label>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3 col-md-6 mt-4 mb-4">
                                                        <div className="custom-file">
                                                            {User.member_user_img5 && (
                                                                <a href={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img5}`} target='_prashant'>
                                                                    <img src={`https://admin.royalmarriagebureau.com/uploads/userimg/${User.member_user_img5}`} alt="" height={"50px"} width={"50px"} />
                                                                </a>
                                                            )}
                                                            <input type="file" name="user_img5" onChange={(e) => handleFieldImg(e.target.files[0], 'member_user_img5')} className={User.member_user_img5 === null ? ('text-danger') : ('text-success ')} />
                                                            <label className="custom-file-label"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-header bg-light">
                                                <h4 className="card-title text-success mt-4 mb-4"> Identity Proof </h4>
                                                <div className='text-danger'>
                                                    (Adhaar card , PanCard , Driving Licence , VoterId)

                                                </div>
                                            </div>
                                            <div className='container'>
                                                <div className="row">
                                                    <div className="input-group mb-4 col-md-8 mt-4 mb-4">
                                                        <input type="file" name="aadhar_img" className="text-success"
                                                            onChange={(e) => handleFieldImg(e.target.files[0], 'aadhar_img')}
                                                        />
                                                        <label htmlFor="inputGroupFile02"></label>
                                                    </div>
                                                    <div className="input-group mb-4 col-md-4 mt-4 mb-4">
                                                        {User.aadhar_img && (
                                                            <a href={`https://admin.royalmarriagebureau.com/uploads/aadhar/${User.aadhar_img}`} target='_prashant'>
                                                                <img src={`https://admin.royalmarriagebureau.com/uploads/aadhar/${User.aadhar_img}`} alt="" height="50px" width="50px" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <button className='btn btn-danger btn-lg mt-4 mb-4' style={{ height: "40px", width: "130px" }}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Tab>
                            {/* partner preferences Starts  */}
                            <Tab eventKey="Partner Preference" title="Partner Preference">
                                <div className="card-header mt-3 bg-light">
                                    <h4 className="card-title text-success mt-4 mb-4"><i className="fa fa-file-text gtMarginRight10" aria-hidden="true" />
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
                                                        <select onChange={(e) => handleFromAgeChange(e)} name="fromage" className="form-control form-control-lg" value={Partner.basic_fromage}>
                                                            <option value="">--- Select ----</option>
                                                            {Data.age
                                                                ? Data.age.map((item, index) => (
                                                                    <option value={item.age_name} key={index}>
                                                                        {item.age_name}
                                                                    </option>
                                                                ))
                                                                : ''}
                                                            {/* <option ></option> */}
                                                        </select>
                                                    </div>
                                                    <h4 className="col-md-2 text-center">To</h4>
                                                    <div className="col-md-5">
                                                        <select className={Partner.basic_toage === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} name="toage" onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_toage')} value={Partner.basic_toage}>
                                                            <option value="">--- Select ----</option>
                                                            {toAgeOptions.map((item, index) => (
                                                                <option value={item.age_id} key={index}>
                                                                    {item.age_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {
                                                            Partner.basic_toage === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Height</label>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <select className={Partner.basic_fromheight === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handleFromheiggtChange(e)} value={Partner.basic_fromheight}>
                                                            <option value="">--- Select ----</option>
                                                            {
                                                                Data.height ? Data.height.map((item, index) => (
                                                                    <option value={item.height_id} key={index}>{item.height}</option>
                                                                )) : ""
                                                            }
                                                        </select>
                                                        {
                                                            Partner.basic_fromheight === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                    <h4 className="col-md-2 text-center">To</h4>
                                                    <div className="col-md-5">
                                                        <select className={Partner.basic_toheight === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} name="toae" onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_toheight')} value={Partner.basic_toheight}>
                                                            <option value="">--- Select ---</option>
                                                            {toHeightOptions.map((item, index) => (
                                                                <option value={item.height_id} key={index}>
                                                                    {item.height}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {
                                                            Partner.basic_toheight === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Looking For</label>
                                                <select name="lookingfor" className={Partner.basic_lookingfor === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_lookingfor')} value={Partner.basic_lookingfor}>
                                                    <option value="">--- Select ---</option>
                                                    <option>UnMarried</option>
                                                    <option>Divorced</option>
                                                    <option>Widowed</option>
                                                    <option>Separated</option>
                                                </select>
                                                {
                                                    Partner.basic_lookingfor === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Physical Status</label>
                                                <select name="physical_status" id="physical_status" className={Partner.basic_physical_status === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_physical_status')} value={Partner.basic_physical_status}>
                                                    <option value="">--- Select ---</option>
                                                    <option value="Normal">
                                                        Normal
                                                    </option>
                                                    <option value="Physical challenged">
                                                        Physical challenged
                                                    </option>
                                                </select>
                                                {
                                                    Partner.basic_physical_status === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Eating Habits</label>
                                                <select name="eating_habbit" className={Partner.basic_eating_habbit === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_eating_habbit')} value={Partner.basic_eating_habbit}>
                                                    <option value="">--- Select ---</option>
                                                    <option>
                                                        Vegetarian
                                                    </option>
                                                    <option value="Non-Vegetarian">
                                                        Non-Vegetarian
                                                    </option>
                                                    <option>
                                                        Eggetarian
                                                    </option>
                                                </select>
                                                {
                                                    Partner.basic_eating_habbit === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Smoking Habits</label>
                                                <select name="Smoking_habbit" className={Partner.basic_smoking_habbit === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_smoking_habbit')} value={Partner.basic_smoking_habbit}>
                                                    <option value="">--- Select ---</option>
                                                    <option>No
                                                    </option>
                                                    <option>Yes
                                                    </option>
                                                    <option>
                                                        Occasionally
                                                    </option>
                                                </select>
                                                {
                                                    Partner.basic_smoking_habbit === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Drinking Habits</label>
                                                <select style={{ width: '100%' }} name="drinking_habbit" className={Partner.basic_drinking_habbit === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_drinking_habbit')} value={Partner.basic_drinking_habbit}>
                                                    <option value="">--- Select ---</option>
                                                    <option>No
                                                    </option>
                                                    <option>Yes
                                                    </option>
                                                    <option value="Drinks Socially">Drinks
                                                        Occasionally
                                                    </option>
                                                </select>
                                                {
                                                    Partner.basic_drinking_habbit === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card-header bg-light">
                                        <h4 className="card-title text-success mt-4 mb-4"> <i className="fa fa-university gtMarginRight10" aria-hidden="true" />
                                            Religion Preference</h4>
                                    </div>
                                </div>

                                <div className="card-body ">
                                    <div className="container">
                                        <div className="row">
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Religion</label>
                                                <select name="religion" className={Partner.basic_religion === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} style={{ width: '100%' }} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_religion')} value={Partner.basic_religion}>
                                                    <option value="">--- Select ---</option>
                                                    {Data.religion ?
                                                        Data.religion.map((item, Index) => (
                                                            <option value={item.religion_id} key={Index}>{item.religion}</option>
                                                        )) : ""
                                                    }
                                                </select>
                                                {
                                                    Partner.basic_religion === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Caste </label>
                                                <select name="caste" className={Partner.basic_caste === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} style={{ width: '100%' }} id="caste_ids " onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_caste')} value={Partner.basic_caste}>
                                                    <option value="">--- Select ---</option>
                                                    {Data.cast ?
                                                        Data.cast.map((item, Index) => (
                                                            <option value={item.caste_id} key={Index}>{item.caste}</option>
                                                        )) : ""
                                                    }
                                                </select>
                                                {
                                                    Partner.basic_caste === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Mother Tongue:</label>
                                                <select name="mother_tongue" className={Partner.basic_mother_tongue === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_mother_tongue')} value={Partner.basic_mother_tongue}>
                                                    <option value="">--- Select ---</option>
                                                    {Data.mother_toungue
                                                        ?
                                                        Data.mother_toungue.map((item, Index) => {
                                                            return <option value={item.mother_tounges_id} key={Index} >{item.mothertounge}</option>;
                                                        }) : ""
                                                    }
                                                </select>
                                                {
                                                    Partner.basic_mother_tongue === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Star</label>
                                                <select name="star" className={Partner.basic_star === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} style={{ width: '100%' }} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_star')} value={Partner.basic_star}>
                                                    <option value="">--- Select ---</option>
                                                    {Data.nakshtra ?
                                                        Data.nakshtra.map((item, index) => (
                                                            <option value={item.nakshtra_id} key={index}>{item.nakshra}</option>
                                                        )) : ""
                                                    }
                                                </select>
                                                {
                                                    Partner.basic_star === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header bg-light">
                                    <h4 className="card-title text-success mt-4 mb-4"><i className="fa fa-map-marker gtMarginRight10" aria-hidden="true" />
                                        Location Details</h4>
                                </div>
                                <div className="card-body col-md-12">
                                    <div className="container">
                                        <div className="row">
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">State Living In</label>
                                                <select name="state_living_in"
                                                    onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_state')}
                                                    value={Partner.basic_state}
                                                    className={Partner.basic_state === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')}
                                                >
                                                    {Partner.basic_state === null  ? (<> <option >--- Select ---</option></>):(
                                                        <></>
                                                    )}
                                                   
                                                    {Data.state ? Data.state.map((item, index) => (
                                                        <option value={item.state_id} key={index}>
                                                            {item.state_name}
                                                        </option>
                                                    )) : ""}
                                                </select>
                                                {
                                                    Partner.basic_state === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">District Living In</label>
                                                <select name="district_id" className={Partner.basic_district === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_district')} value={Partner.basic_district}>
                                                    <option value="">--- Select ---</option>
                                                    {District.map((item, index) => (
                                                        <option value={item.dist_id} key={index}>
                                                            {item.dist_name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {
                                                    Partner.basic_district === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Taluka Living In</label>
                                                <select name="taluka_id" className={Partner.basic_taluka === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_taluka')} value={Partner.basic_taluka}>
                                                    <option > --- Select ---</option>
                                                    {Talukas.map((item, index) => (
                                                        <option value={item.taluka_id} key={index}>
                                                            {item.taluka_name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {
                                                    Partner.basic_taluka === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                            <div className="form-group col-md-6 mt-4 mb-4">
                                                <label className="text-dark">Village Living In</label>
                                                <select name="village_id" className={Partner.basic_village === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_village')} value={Partner.basic_village}>
                                                    <option value="">--- Select ---</option>
                                                    {Village.map((item, index) => (
                                                        <option value={item.village_id} key={index}>
                                                            {item.village_name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {
                                                    Partner.basic_village === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header bg-light">
                                    <h4 className="card-title text-success mt-4 mb-4"> <i className="fa fa-university gtMarginRight10" aria-hidden="true" />
                                        Education &amp; Occupation Details</h4>
                                </div>
                                <div className='container'>
                                    <div className="row">
                                        <div className=" col-md-6 mt-4 mb-4">
                                            <label className="text-dark">Highest Education</label>
                                            <input type="text" name="highest_education" onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_highest_education')} value={Partner.basic_highest_education} className={Partner.basic_highest_education === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Highest Education" />
                                            {
                                                Partner.basic_highest_education === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                            }
                                        </div>
                                        <div className=" col-md-6 mt-4 mb-4">
                                            <label className="text-dark">Additional Degree</label>
                                            <input type="text" name="additional_degree" onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_additional_degree')} value={Partner.basic_additional_degree} className={Partner.basic_additional_degree === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Additional Degree" />
                                            {
                                                Partner.basic_additional_degree === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mt-4 mb-4">
                                            <label className="text-dark">Employed In (Working Sector)</label>
                                            <select name="employed_in" className={Partner.basic_employed_in === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} style={{ width: '100%' }} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_employed_in')} value={Partner.basic_employed_in}>
                                                <option value="">--- Select ---</option>
                                                <option value="Government">Government </option>
                                                <option value="Private">Private </option>
                                                <option value="Business">Business </option>
                                                <option value="Defence">Defence </option>
                                                <option value="Defence">Self Employed </option>
                                                <option value="Not Working">Not Working  </option>
                                            </select>
                                            {
                                                Partner.basic_employed_in === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                            }
                                        </div>
                                        <div className=" col-md-6 mt-4 mb-4">
                                            <label className="text-dark">Occupation</label>
                                            <input name="occupation" className={Partner.basic_occupation === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} style={{ width: '100%' }} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_occupation')} value={Partner.basic_occupation}/>
                                            
                                       
                                            {
                                                Partner.basic_occupation === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                            }
                                        </div>
                                    </div>

                                    <div className="form-group col-md-6 mt-4 mb-4">
                                        <label className="text-dark">Annual Income</label>
                                        <input type="number" value={Partner.basic_annual_income} name="annual_income" className={Partner.basic_annual_income === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} placeholder="Enter Annual Income" onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_annual_income')} />
                                        {
                                            Partner.basic_annual_income === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                        }
                                    </div>
                                </div>
                                <div className="card-header bg-light">
                                    <h4 className="card-title text-success mt-4 mb-4"><i className="fa fa-man gtMarginRight10" aria-hidden="true" />
                                        Partner Expectation
                                    </h4>
                                </div>
                                <div className="card-body  ">

                                    <div className="container ">
                                        <div className="container-2">
                                            <div className="form-group col-md-12">
                                                <label className="text-dark">Partner Expectation</label>
                                                <textarea name="partner_expectation" id="Expectation" cols={30} rows={5} className={Partner.basic_partner_expectation === null ? ('form-control form-control-lg border-danger') : ('form-control form-control-lg')} value={Partner.basic_partner_expectation} onChange={(e) => handlePartnerFieldChange(e.target.value, 'basic_partner_expectation')} />
                                                {
                                                    Partner.basic_partner_expectation === null ? (<><small className='text-danger' style={{ marginLeft: "5px" }}>(please fill this field)</small></>) : (<></>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='btn btn-danger btn-lg mt-4 mb-4' onClick={(e) => SubmitPartnerPreferences(e)} style={{ height: "40px", width: "130px" }}>Submit</button>
                                </div>

                            </Tab>
                        </Tabs>
                    </div>
                </div >
            </div ></div >
    )
}

export default Profile


