import React from 'react';

const Membership = () => {
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
              {/* Plan 1: Platinum Plan */}
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

              {/* Plan 2: Gold Plan */}
              <div className="col-md-6 col-lg-4 custom-col mb-30">
                <article className="team__card">
                  <div className="team__card--thumbnail">
                    <img className="team__card--thumbnail__img display-block" src="https://royalmarriagebureau.com/static/media/gold%20plan%20.2174e1cff0232d30532a.jpg" alt="team-thumb" />
                  </div>
                  <div className="team__card--content text-center">
                    <h3>Plan Name: Gold plan</h3>
                    <hr />
                    <h4>Plan Amount</h4>
                    <p className="text-danger fs-4">99</p>
                    <hr />
                    <h4>Plan Duration</h4>
                    <p className="text-danger fs-4">30</p>
                    <hr />
                    <h4>Profile Views</h4>
                    <p className="text-danger fs-4">10</p>
                    <hr />
                    <button className="banner__video--btn primary__btn" style={{ background: 'green' }}>Buy Now</button>
                  </div>
                </article>
              </div>

              {/* Plan 3: Silver Plan */}
              <div className="col-md-6 col-lg-4 custom-col mb-30">
                <article className="team__card">
                  <div className="team__card--thumbnail">
                    <img className="team__card--thumbnail__img display-block" src="https://royalmarriagebureau.com/static/media/gold%20plan%20.2174e1cff0232d30532a.jpg" alt="team-thumb" />
                  </div>
                  <div className="team__card--content text-center">
                    <h3>Plan Name: Silver plan</h3>
                    <hr />
                    <h4>Plan Amount</h4>
                    <p className="text-danger fs-4">933</p>
                    <hr />
                    <h4>Plan Duration</h4>
                    <p className="text-danger fs-4">01 MONTH</p>
                    <hr />
                    <h4>Profile Views</h4>
                    <p className="text-danger fs-4">20</p>
                    <hr />
                    <button className="banner__video--btn primary__btn" style={{ background: 'green' }}>Buy Now</button>
                  </div>
                </article>
              </div>

              {/* Add more plans following the same structure */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Membership;
