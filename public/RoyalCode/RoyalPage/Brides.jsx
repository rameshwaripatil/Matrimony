import React, { useEffect, useState } from "react";
import AuthUser from "../../auth/Authuser";
import HeaderBg from "../cmp/HeaderBg";
import GroomsBrides from "../cmp/GroomsBrides";
import Skeletons from "../cmp/Skeletons";
import CastCard from "../cmp/CastCard";
import { Link } from "react-router-dom";
import CastView from "../cmp/CastView";
import BrideCast from "../cmp/BrideCast";
import Groom_Bride_Cast_Show from "../cmp/Groom_Bride_Cast_Show";

function Brides() {
  const { http } = AuthUser();
  const [Load, SetLoad] = useState([]);
  const [Loading, SetLoading] = useState(false);
  const [toggleCast, settoggleCast] = useState(0);
  const value = 2;
  const HandleToggle = () => {
    settoggleCast(1);
  }
  const GobackToggle = () => {
    settoggleCast(0);
  }
  const LoadCategory = (peginate) => {
    http
      .get(`/get_member_detail_bride`)
      .then((res) => {
        SetLoad(res.data.data.data);
        SetLoading(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    LoadCategory(1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {/* Start breadcrumb section */}
      <HeaderBg main="Brides" route="\" route_name="Home" page="Brides" />
      {/* Start team members section */}
      <h2 className="text-center text-danger mt-4">
        Our Brides
      </h2>
      <section className="team__section my-4">
        {
          toggleCast === 0 ? (
            <>
              <BrideCast value={value} />
              <div className="text-center mt-4 ml-2">
                <Link onClick={HandleToggle} className="btn btn-outline-danger btn-lg">View all</Link>
              </div>
            </>
          ) : (<>
            <div className="text-center mt-4 ml-2">
              <Link onClick={GobackToggle} className="btn btn-outline-danger btn-lg">Go Back</Link>
            </div>
            <Groom_Bride_Cast_Show value={value} />
          </>
          )
        }
        <div className="container">
          <div className="section__heading text-center mb-50 ">


            {/* <p className="section__heading--desc">
              Beyond more stoic this along goodness this sed wow manatee mongos
              flusterd impressive man farcrud opened.
            </p> */}
          </div>
          <div className="team__container">
            <div className="row row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n30" >
              {Loading ? (
                <>
                  {Load.map((item, index) => (
                    <GroomsBrides
                      key={index}
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
                  ))}
                </>
              ) : (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (iteam, index) => (
                      <div
                        className="col-md-6 col-lg-3 custom-col mb-30"
                        key={index}
                      >
                        <Skeletons></Skeletons>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brides;
