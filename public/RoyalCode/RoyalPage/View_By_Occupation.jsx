import React, { useEffect, useState } from 'react'
import AuthUser from '../../auth/Authuser';
import { Link, useParams } from 'react-router-dom';
import HeaderBg from '../cmp/HeaderBg';
import GroomsBrides from '../cmp/GroomsBrides';
import Skeletons from '../cmp/Skeletons';

const View_By_Occupation = () => {
    const { http } = AuthUser();
    const [Loader, setLoader] = useState(true);
    const { id } = useParams();
    const [Occupation, setoccupation] = useState({
        occupation: id,
    });
    const [ShowDataByOccupation, setShowDataByOccupation] = useState([]);
    const GetdataByOccupation = () => {
        http.post("/get/fillter/data", Occupation).then((res) => {
            setShowDataByOccupation(res.data);
            setLoader(false);
        }).catch((e) => {
            console.log(e);
        })
    }
    useEffect(() => {
        GetdataByOccupation();
    }, [])
    return (
        <>
            <HeaderBg main="View By occupation" route="\" route_name="Home" page="View By Cast" />
            <div className='container'>
                <div className="section__heading text-center mb-50 mt-4">
                    <h2 className="section__heading--maintitle text__secondary mb-10">
                        View By Occupation
                    </h2>
                </div>
                <div className='row '>
                    {
                        ShowDataByOccupation.map((item, Index) => (
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
    )
}

export default View_By_Occupation
