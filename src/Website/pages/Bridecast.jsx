import React, { useEffect, useState } from 'react'
import Circular from './Circular';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom/dist';
import Authuser from '../Authentication/Authuser';

const Bridecast = (props) => {
    const [Loader, setLoader] = useState(true);
    const { http } = Authuser();
    const [cast, Setcast] = useState([]);
    useEffect(() => {
        http.get(`/get_curd_all_imformation/for_fillter`).then((res) => {
            Setcast(res.data.cast);
            setLoader(false)
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    const items = [

        <Link className="bg-danger text-center text-white"
            to={`/view_by_cast/${props.value}/${cast[0] && cast[0].caste_id}/${cast[0] && cast[0].caste}`}
            style={{
                height: "90px", width: "90px",
                borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

            }}> {cast[0] && cast[0].caste.substring(0, 8)}..
        </Link >,
        <Link className="bg-danger text-center text-white  " to={`/view_by_cast/${props.value}/${cast[1] && cast[1].caste_id}/${cast[1] && cast[1].caste}`} style={{
            height: "90px", width: "90px",
            borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

        }}> {cast[1] && cast[1].caste.substring(0, 8)}..
        </Link >,
        <Link className="bg-danger text-center text-white  " to={`/view_by_cast/${props.value}/${cast[2] && cast[2].caste_id}/${cast[2] && cast[2].caste}`}
            style={{
                height: "90px", width: "90px",
                borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

            }}> {cast[2] && cast[2].caste.substring(0, 8)}..
        </Link >,
        <Link className="bg-danger text-center text-white  " to={`/view_by_cast/${props.value}/${cast[3] && cast[3].caste_id}/${cast[3] && cast[3].caste}`} style={{
            height: "90px", width: "90px",
            borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

        }}> {cast[3] && cast[3].caste.substring(0, 8)}..
        </Link >,
        <Link className="bg-danger text-center text-white  " to={`/view_by_cast/${props.value}/${cast[4] && cast[4].caste_id}/${cast[4] && cast[4].caste}`}
            style={{
                height: "90px", width: "90px",
                borderRadius: "50%", paddingTop: "38px", fontSize: "14px"

            }}> {cast[4] && cast[4].caste.substring(0, 8)}..
        </Link >,

    ]
    const Skeleton = [

        <Circular />,
        <Circular/>,
        <Circular/>,
        <Circular/>,
        <Circular/>
       
    ]
  return (
    <div>  <div>
    <div className="container p-3">
        <h3> Cast : </h3>
    </div>
    <div className="container-fluid " style={{ marginTop: "10px", marginBottom: "10px", }}>
        <div className="row">

            <div className="col-md-9 offset-md-2  ">
                {
                    Loader === false ? (
                        <AliceCarousel
                            items={items}
                            responsive={{
                                0: { items: 1 },
                                0: { items: 2 },
                                0: { items: 4 },
                                992: { items: 4 },
                                1200: { items: 5 },
                            }}
                            autoPlay
                            autoPlayInterval={3000}
                            animationDuration={1000}
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
                            animationDuration={1000}
                            disableButtonsControls={true}

                            disableDotsControls={true}
                            infinite
                        />
                    )
                }

            </div>
        </div>
    </div>
</div></div>
  )
}

export default Bridecast