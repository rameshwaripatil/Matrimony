import React, { useEffect, useState } from "react";
import AuthUser from "../../auth/Authuser";
import HeaderBg from "../cmp/HeaderBg";
import Skeletons from "../cmp/Skeletons";

function Membership() {
  const { http } = AuthUser();
  const [Load, SetLoad] = useState([]);
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    http
      .get(`/membership_plan/view`)
      .then((res) => {
        SetLoad(res.data.data.reverse());
        SetLoading(true);
      })
      .catch((e) => {
        console.log(e);
      });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <HeaderBg
        main="Membership"
        route="\"
        route_name="Home"
        page="Membership"
      />

      {/* Start team members section */}
      <section className="team__section my-4">
        <div className="container">
          <div className="section__heading text-center mb-50">
            <h2 className="section__heading--maintitle text__secondary mb-10">
              Membership Plan
            </h2>
            <p className="section__heading--desc">
              Select from our multiple membership plan and find your best life
              partner with membership benefits..
            </p>
          </div>

          <div className="team__container">
            <div className="row mb--n30">
              {Loading ? (
                <>
                  {Load.map((iteam, index) => (
                    <div
                      className="col-md-6 col-lg-4 custom-col mb-30"
                      key={index}
                    >
                      <article className="team__card">
                        <div className="team__card--thumbnail">
                          <img
                            className="team__card--thumbnail__img display-block"
                            src={require("../../all_style/img/other/gold plan .jpg")}
                            alt="team-thumb"
                          />
                        </div>
                        <div className="team__card--content text-center">
                          <h3> Plan Name : {iteam.plan_name}</h3>
                          <hr />
                          <h4>Plan Amount</h4>
                          <p className="text-danger fs-4">
                            {iteam.paymat_amount}
                          </p>
                          <hr />
                          <h4>Plan Duration</h4>
                          <p className="text-danger fs-4">
                            {iteam.plan_duration}
                          </p>
                          <hr />
                          {/* <h4>Message</h4>
                          <p className="text-danger fs-4">{iteam.msg}</p>
                          <hr />
                          <h4>Contact Views</h4>
                          <p className="text-danger fs-4">
                            {iteam.allow_contact}
                          </p>
                          <hr /> */}
                          <h4>Profile Views</h4>
                          <p className="text-danger fs-4">
                            {iteam.allow_profile}
                          </p>
                          <hr />
                          <button
                            className="banner__video--btn primary__btn"
                            style={{ background: "green" }}
                          >
                            By Now
                          </button>
                        </div>
                      </article>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {[1, 2, 3].map((iteam, index) => (
                    <div
                      className="col-md-6 col-lg-4 custom-col mb-30"
                      key={index}
                    >
                      <Skeletons></Skeletons>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Membership;
