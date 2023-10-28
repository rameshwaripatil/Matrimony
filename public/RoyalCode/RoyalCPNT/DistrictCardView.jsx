import React from 'react'
import AuthUser from '../../auth/Authuser';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DistrictCardView = () => {
    const { http } = AuthUser();
    const [District, SetDistrict] = useState([]);
    useEffect(() => {
        http.get(`/get/state/district`).then((res) => {
            SetDistrict(res.data.district);
        }).catch((e) => {
            console.log(e);
        })
    }, []);

    const [SearchData, setSearchData] = useState('');
    const OnSearchChange = (event) => {
        setSearchData(event.target.value);
        if (event.target.value === "") {
            http.get(`/get/state/district`).then((res) => {
                SetDistrict(res.data.district);
            }).catch((e) => {
                console.log(e);
            })
        }
    }
    const handleSearch = () => {
        const filteredOptions = District.filter((item) => item.dist_name === SearchData);
        SetDistrict(filteredOptions);
    };
    return (
        <div>
            <div className='container p-3'>
                <div className='row'>
                    <div className=' '>
                        <div className='text-center' >
                            <input className="m-1 w-50  mt-3" onChange={(event) => OnSearchChange(event)} ></input>
                            <button onClick={handleSearch} className='btn btn-outline-primary btn-lg' >Search District </button>
                        </div>
                    </div>
                    {
                        District.map((item, Index) => (

                            <Link key={Index} to={`/view_by_district/${item.dist_id}`} className="bg-primary text-center  align-items-center  m-auto w-75 p-4 mt-3"  >{item.dist_name}</Link>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DistrictCardView
