import React from 'react'
import { useEffect } from 'react';
import CircularScaler from './CircularScaler';
import AuthUser from '../../auth/Authuser';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

const DistrictCard = () => {
    const [Loader, setLoader] = useState(true);
    const { http } = AuthUser();
    const [District, SetDistrict] = useState([]);
    useEffect(() => {
        http.get(`/get/state/district`).then((res) => {
            SetDistrict(res.data.district
            );
            setLoader(false);
        }).catch((e) => {
            console.log(e);
        });
    }, [])
    const occupationitems = [
        <Link className="bg-primary text-center text-light " to={`/view_by_district/${District[1] && District[1].dist_id}`} style={{
            height: "90px", width: "90px",
            borderRadius: "50%", paddingTop: "38px", fontSize: "14px"
        }}> {District[1] && District[1].dist_name

            .substring(0, 8)}..
        </Link >,
        <Link className="bg-primary text-center text-light " to={`/view_by_district/${District[2] && District[2].dist_id}`}
            style={{
                height: "90px", width: "90px",
                borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

            }}>{District[2] && District[2].dist_name
                .substring(0, 8)}..
        </Link >,
        <Link className="bg-primary text-center text-light " to={`/view_by_district/${District[3] && District[3].dist_id}`}
            style={{
                height: "90px", width: "90px",
                borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

            }}> {District[3] && District[3].dist_name
                .substring(0, 8)}..
        </Link >,
        <Link className="bg-primary text-center text-light" to={`/view_by_district/${District[4] && District[4].dist_id}`}
            style={{
                height: "90px", width: "90px",
                borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

            }}> {District[4] && District[4].dist_name
                .substring(0, 8)}..
        </Link >,
        <Link className="bg-primary text-center text-light" to={`/view_by_district/${District[5] && District[5].dist_id}`}

            style={{
                height: "90px", width: "90px",
                borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

            }}>{District[5] && District[5].dist_name
                .substring(0, 8)}..
        </Link >,
    ]

    const Skeleton = [
        <CircularScaler />,
        <CircularScaler />,
        <CircularScaler />,
        <CircularScaler />,
        <CircularScaler />,
    ]
    return (
        <div>
            <div>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>By District : </h3>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{}}>
                    <div className="row">
                        <div className="col-md-9 offset-md-2">
                            {
                                Loader === false ? (
                                    <AliceCarousel
                                        items={occupationitems}
                                        responsive={{
                                            0: { items: 1 },
                                            0: { items: 2 },
                                            0: { items: 4 },
                                            992: { items: 4 },
                                            1200: { items: 5 },
                                        }}
                                        autoPlay
                                        autoPlayInterval={3000}
                                        disableButtonsControls={true}
                                        disableDotsControls={true}
                                        infinite
                                    />
                                ) : (
                                    <AliceCarousel
                                        items={Skeleton}
                                        responsive={{
                                            0: { items: 1 },
                                            0: { items: 2 },
                                            0: { items: 4 },
                                            992: { items: 4 },
                                            1200: { items: 5 },
                                        }}
                                        autoPlay
                                        autoPlayInterval={3000}
                                        disableButtonsControls={true}
                                        disableDotsControls={true}
                                        infinite
                                    />
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DistrictCard
