import React from 'react'
import AuthUser from '../../auth/Authuser';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CastView = () => {
    const { http } = AuthUser();
    const [cast, Setcast] = useState([]);
    useEffect(() => {
        http.get(`/get_curd_all_imformation/for_fillter`).then((res) => {
            Setcast(res.data.cast);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    const [SearchData, setSearchData] = useState('');
    const OnSearchChange = (event) => {
        setSearchData(event.target.value);
        if (event.target.value === "") {
            http.get(`/get_curd_all_imformation/for_fillter`).then((res) => {
                Setcast(res.data.cast);
            }).catch((e) => {
                console.log(e);
            })
        }
    }
    const handleSearch = () => {
        console.log(SearchData);
        const filteredOptions = cast.filter((item) => item.caste === SearchData);
        Setcast(filteredOptions);



    };
    return (
        <div className='container p-3'>
            <div className='row '>
                <div className=' '>
                    <div className='text-center'>
                        <input className="m-1 w-50  mt-3" onChange={(event) => OnSearchChange(event)} ></input>
                        <button onClick={handleSearch} className='btn btn-outline-danger btn-lg' >Search Cast</button>
                    </div>
                </div>
                {
                    cast.map((item, Index) => (

                        <Link key={Index} to={`/view_by_cast/${item.caste_id}`} className="bg-danger text-white text-center align-items-center m-auto w-75 p-4 mt-3"  >{item.caste}</Link>

                    ))

                }
            </div>
        </div >

    )
}

export default CastView
