import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ModelRegister.css"

function ModelRegister() {
  const [Open, setClose] = useState(1);
  return (
    <>
      <div
        className={`newsletter__popup ${Open ? "newsletter__show" : ""}`}
        data-animation="slideInUp"
        style={{ zIndex: "10000" }}
      >
        <div className="newsletter__popup--inner">
          <button
            className="newsletter__popup--close__btn"
            aria-label="search close button"
            onClick={() => setClose(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
          <div className="box newsletter__popup--box d-flex align-items-center">
            <div className="newsletter__popup--thumbnail">
            <img
  className="newsletter__popup--thumbnail__img display-block"
  src="https://wallpapercave.com/wp/wp6239212.jpg"
  alt="newsletter-popup-thumb"
  style={{width:"300px"}}
/>

            </div>
            <div className="newsletter__popup--box__right">
              <h4 className="newsletter__popup--title">"Update Your Profile and Find Your Perfect Match!"</h4>
              <div className="newsletter__popup--content">
                <label className="newsletter__popup--content--desc">
                  Stay proactive and regularly update your profile with new information, photos, and preferences to attract the right connections.
                </label>
                <Link to="/login" >
                  <h2> <b>Continue With Login...</b></h2></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End News letter popup */}
    </>
  );
}

export default ModelRegister;
