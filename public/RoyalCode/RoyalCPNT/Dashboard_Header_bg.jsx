import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard_Header_bg = ({ main, route, route_name, page }) => {
    return (
        <div>
            <section className="breadcrumb__section breadcrumb__bg">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4">
                            <div className="breadcrumb__content">
                                <h1 className="breadcrumb__content--title mb-10 text-white">{main}</h1>
                                <ul className="breadcrumb__content--menu d-flex">
                                    <li className="breadcrumb__content--menu__items"><Link to={route} className='text-white'>{route_name}</Link></li>
                                    <li className="breadcrumb__content--menu__items"><span className="text__secondary text-white">{page}</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='text-center'>
                        <Link to="/profile" className='btn btn-outline-warning btn-lg m-4'>Profile</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard_Header_bg
