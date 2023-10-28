import React from 'react'
import GroomsBrides from '../cmp/GroomsBrides';
import HeaderBg from '../cmp/HeaderBg';
import { useEffect } from 'react';
import { useState } from 'react';
import AuthUser from '../../auth/Authuser';
import { useParams } from 'react-router-dom';

const View_By_Education = () => {
    const { http } = AuthUser();
    const { education } = useParams();
    const [Education, SetEducation] = useState({
        member_highest_education: education,
    });
    const [ShowDataByEducation, setShowDataByEducation] = useState([]);
    const GetdataByEducation = () => {
        http.post("/get/fillter/data", Education).then((res) => {
            setShowDataByEducation(res.data);
        }).catch((e) => {
            console.log(e);
        })
    }
    useEffect(() => {
        GetdataByEducation();
    }, [])
    return (
        <div>
            <>
                <HeaderBg main="View By occupation" route="\" route_name="Home" page="View By Cast" />
                <div className='container'>
                    <div className="section__heading text-center mb-50 mt-4">
                        <h2 className="section__heading--maintitle text__secondary mb-10">
                            View By Education
                        </h2>
                    </div>
                    <div className='row '>
                        {
                            ShowDataByEducation.map((item, Index) => (
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

export default View_By_Education
