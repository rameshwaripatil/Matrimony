import React, { useEffect, useState } from 'react';
import Authuser from '../Authentication/Authuser';

const Membership = () => {
  const{http,token}=Authuser();

  const [member, setMember] = useState([]);
  const Members = () => {
    http.get(`membership_plan/view`)
      .then((response) => {
        setMember(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error memership data:', error);         
      });
  };
  useEffect(()=>
  {  
  Members();
  },[token])
  return (
    <div>

<div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ color: 'white', fontWeight: 'bold' }}>Membership</h1>
              <ul className="row ">
                <li className="breadcrumb-item active" style={{ color: 'white', fontWeight: 'bold',marginRight:950 }}>Home - Membership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>  



      <section className="team__section my-4">
        <div className="container">
          <div className="section__heading text-center mb-50">
            <h1 className="section__heading--maintitle text__secondary mb-10">Membership Plan</h1>
            <p className="section__heading--desc">Select from our multiple membership plans and find your best life partner with membership benefits.</p>
          </div>

          <div className="team__container bg-danger">
            <div className="row mb--n30">

              {member.map(plan => (
                <div key={plan.membership_plan_id} className="col-md-6 col-lg-4 custom-col mb-30">
                  <article className="team__card">
                    <div className="team__card--thumbnail">
                      <img className="team__card--thumbnail__img display-block" src={plan.image} alt="team-thumb" />
                    </div>
                    <div className="team__card--content text-center">
                      <h3>Plan Name: {plan.plan_name}</h3>
                      <hr />
                      <h4>Plan Amount</h4>
                      <p className="text-danger fs-4">{plan.paymat_amount}</p>
                      <hr />
                      <h4>Plan Duration</h4>
                      <p className="text-danger fs-4">{plan.plan_duration}</p>
                      <hr />
                      <h4>Profile Views</h4>
                      <p className="text-danger fs-4">{plan.allow_profile}</p>
                      <hr />
                      <button className="banner__video--btn primary__btn" style={{ background: 'green' }}>Buy Now</button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Membership;
