import React, { useState } from 'react';
import Authuser from '../Authentication/Authuser';

const Membership = () => {
  const{http,token}=Authuser();

  const [member, setMember] = useState([]);

  fetch("http://marriagebureau.ajspire.com/api/membership_plan/view")
  .then((response) => response.json())
  .then((data) => {
    setMember(data.data.data);
  })

  .catch((error) => console.error("Error fetching data:", error));
  // useEffect(()=>
  // {  
  // Members();
  // },[token])
  return (
    <div>
      <section className="team__section my-4">
        <div className="container">
          <div className="section__heading text-center mb-50">
            <h1 className="section__heading--maintitle text__secondary mb-10">Membership Plan</h1>
            <p className="section__heading--desc">Select from our multiple membership plans and find your best life partner with membership benefits.</p>
          </div>

          <div className="team__container">
            <div className="row mb--n30">
             
              {/* {
              member.map((el)=>(
              <div className="col-md-6 col-lg-4 custom-col mb-30">
                <article className="team__card">
                  <div className="team__card--thumbnail">
                    <img className="team__card--thumbnail__img display-block" src="https://royalmarriagebureau.com/static/media/gold%20plan%20.2174e1cff0232d30532a.jpg" alt="team-thumb" />
                  </div>
                  <div className="team__card--content text-center">
                    <h3>Plan Name: Platinum plan</h3>
                    <hr />
                    <h4>Plan Amount</h4>
                    <p className="text-danger fs-4">2000</p>
                    <hr />
                    <h4>Plan Duration</h4>
                    <p className="text-danger fs-4">90</p>
                    <hr />
                    <h4>Profile Views</h4>
                    <p className="text-danger fs-4">40</p>
                    <hr />
                    <button className="banner__video--btn primary__btn" style={{ background: 'green' }}>Buy Now</button>
                  </div>
                </article>
              </div>
))} */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Membership;
