import React from 'react'
import HeaderBg from '../cmp/HeaderBg'
import Skeletons from '../cmp/Skeletons'
import { Link, useParams } from 'react-router-dom';
import AuthUser from '../../auth/Authuser';
import { useState } from 'react';
import { useEffect } from 'react';
import GroomsBrides from '../cmp/GroomsBrides';

const View_By_District = () => {
    const { http } = AuthUser();
    const [Loader, setLoader] = useState(true);
    const { id } = useParams();
    const [District, SetDistrict] = useState({
        dist_id: id,
    });
    const [ShowDataByDistrict, setShowDataByDistrict] = useState([]);
    const GetdataByDistrict = () => {
        http.post("/get/fillter/data", District).then((res) => {
            setShowDataByDistrict(res.data);
            setLoader(false);
        }).catch((e) => {
            console.log(e);
        })
    }
    useEffect(() => {
        GetdataByDistrict();
    }, [])
    return (
        <div>
            <>
                <HeaderBg main="View By Cast" route="\" route_name="Home" page="View By Cast" />
                <div className='container'>
                    <div className="section__heading text-center mb-50 mt-4">
                        <h2 className="section__heading--maintitle text__secondary mb-10">
                            View By District
                        </h2>
                    </div>
                    <div className='row '>
                        {
                            ShowDataByDistrict.map((item, Index) => (


                                <GroomsBrides
                                    key={Index}
                                    img={item.member_user_img1}
                                    birth_date={item.date_of_birth}
                                    height={item.height}
                                    occupation={item.occupation}
                                    dist_name={item.dist_name}
                                    member_highest_education={item.member_highest_education}
                                    state_name={item.state_name}
                                    age={item.age}
                                    income={item.member_annual_income
                                    }
                                    Taluka={item.taluka_name}
                                    id={item.tbl_user_id}
                                    member_employed_in={item.member_employed_in}
                                />
                            ))
                        }
                    </div>
                </div>
            </>
        </div>
    )
}

export default View_By_District
