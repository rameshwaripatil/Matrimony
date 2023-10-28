import React, { useEffect, useState } from 'react'
import AuthUser from '../../auth/Authuser';
import { useParams } from 'react-router-dom';
import HeaderBg from './HeaderBg';
import GroomsBrides from './GroomsBrides';
const ViewBrideByCast = () => {
    const { http } = AuthUser();
    const { id } = useParams();
    const { type } = useParams();
    const { name } = useParams();
    const [ShowDataByCast, setShowDataByCast] = useState([]);
    const GetdataByCast = () => {
        if (type == 1) {
            http.get(`/get_member_detail_groom/${id}`).then((res) => {
                setShowDataByCast(res.data.data.data);
            }).catch((e) => {
                console.log(e);
            });
        } else if (type == 2) {
            http.get(`/get_member_detail_bride/${id}`).then((res) => {
                setShowDataByCast(res.data.data.data);
            }).catch((e) => {
                console.log(e);
            });
        } else {
        }
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
                                {name}  {
                                    type === 1 ? (<>Grooms</>)
                                        : (<>Bride</>)
                                } List
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

export default ViewBrideByCast
