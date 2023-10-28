import React, { useEffect, useState } from 'react'
import AuthUser from '../../auth/Authuser';
import { useParams } from 'react-router-dom';
import HeaderBg from './HeaderBg';
import GroomsBrides from './GroomsBrides';

const ViewByCast = () => {
    const { http } = AuthUser();
    const { id } = useParams();
    const [casts, setData] = useState({
        cast: id,
    });
    const [ShowDataByCast, setShowDataByCast] = useState([]);
    const GetdataByCast = () => {
        http.post("/get/fillter/data", casts).then((res) => {
            setShowDataByCast(res.data);
        }).catch((e) => {
            console.log(e);
        })
    }
    useEffect(() => {
        GetdataByCast();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div>
            <div>
                <>
                    <HeaderBg main="View By Cast" route="\" route_name="Home" page="View By Cast" />
                    <div className='container'>
                        <div className="section__heading text-center mb-50 mt-4">
                            <h2 className="section__heading--maintitle text__secondary mb-10">
                                View By Cast
                            </h2>
                        </div>
                        <div className='row '>
                            {
                                ShowDataByCast.map((item, Index) => (


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
        </div>
    )
}

export default ViewByCast
