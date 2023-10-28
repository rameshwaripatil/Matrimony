import React from 'react'
import { Link } from 'react-router-dom'

function HeaderBg({ main, route, route_name, page }) {
    return (
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content">
                            <h1 className="breadcrumb__content--title mb-10 text-white">{main}</h1>
                            <ul className="breadcrumb__content--menu d-flex">
                                <li className="breadcrumb__content--menu__items"><Link to={route} className='text-white'>{route_name}</Link></li>
                                <li className="breadcrumb__content--menu__items"><span className="text__secondary text-white">{page}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderBg
