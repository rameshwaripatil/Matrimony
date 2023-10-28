import React from "react";
import { Card_Data } from "../../json data/Card_Data";
import { Link } from "react-router-dom";
import Slider from "../cmp/Slider";
import Success_Mlife from "../cmp/Success_Mlife";
import { SuccessMlife } from "../../json data/SuccessMlife";
import { useEffect } from "react";
import Model_Register from "../cmp/Model_Register";
import AuthUser from "../../auth/Authuser";

function Index() {
  const { user } = AuthUser();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {/* Start slider section */}
      <section className="hero__slider--section slider__section--bg">
        <div className="hero__slider--inner position__relative">
          <div className="container-fluid">
            <Slider></Slider>
          </div>
          <div className="slider__pagination swiper-pagination" />
        </div>
      </section>
      {/* End slider section */}
      {/* Start service section */}
      <section className="services__section services__section--bg section--padding">
        <div className="container">
          <div className="section__heading text-center mb-50">
            <h2 className="section__heading--maintitle text__secondary mb-10">
              Our Best Service
            </h2>
            <p className="section__heading--desc">
              {" "}
              Marriage bureaus can provide a range of services.
            </p>
          </div>
          <div className="services__inner">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n30">
              {Card_Data.map((item, index) => (
                <div className="col custom-col mb-30" key={index}>
                  <article className="services__card">
                    <Link className="services__card--link" to={item.link}>
                      <div className="services__card--topbar d-flex justify-content-between">
                        <div className="services__card--icon mb-20">
                          <img
                            className="display-block services__card--primary__icon"
                            src={require(`../../all_style/img/icon/${item.img}`)}
                            alt="services-icon"
                          />
                          <img
                            className="display-block services__card--secondary__icon"
                            src={require(`../../all_style/img/icon/${item.img2}`)}
                            alt="services-icon"
                          />
                        </div>
                        <div className="services__card--number">
                          <span className="services__card--number__text">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="services__card--content">
                        <h3 className="services__card--maintitle mb-15">
                          {item.title.slice(0, 18)}
                        </h3>
                        <p className="services__card--desc mb-15">
                          {item.discrption.slice(0, 100)}...
                        </p>
                        {/* <span className="services__card--readmore text__secondary">
                          {" "}
                          Read More
                          <svg
                            className="services__card--readmore__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.51"
                            height="15.443"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={48}
                              d="M268 112l144 144-144 144M392 256H100"
                            />
                          </svg>
                        </span> */}
                      </div>
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End service section */}

      {/* Start banner section */}
      <div className="banner__video--section banner__section--bg position__relative section--padding">
        <img
          className="drone__position--img display-block"
          src={require("../../all_style/img/other/groombride4.jpg.png")}
          alt="drone-position-img"
        />
        <div className="container">
          <div className="banner__video--content position__relative text-center">
            <div className="bideo__play banner__video--play mb-35">
              <a
                className="bideo__play--icon banner__video--play__icon glightbox"
                href="https://www.youtube.com/@royalmarriagebureau9076"
                data-gallery="video"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={22}
                  viewBox="0 0 31 37"
                >
                  <path
                    data-name="Polygon 1"
                    d="M16.783,2.878a2,2,0,0,1,3.435,0l14.977,25.1A2,2,0,0,1,33.477,31H3.523a2,2,0,0,1-1.717-3.025Z"
                    transform="translate(31) rotate(90)"
                    fill="currentColor"
                  />
                </svg>
                <span className="visually-hidden">Play</span>
              </a>
            </div>
            <h2 className="banner__video--title text-white mb-15">
              All Service we All
            </h2>
            <p className="banner__video--info text-white">
              Get Your Quote or Call:{" "}
              <a href="tel:+88021544142">(+91 7020403671)</a>
            </p>
            {
              sessionStorage.getItem('token') === null ? (
                <Link to="/register" className="banner__video--btn primary__btn">
                  Resiter Now
                </Link>
              ) : (
                <></>
              )


            }

          </div>
        </div >
      </div >
      {/* End banner section */}
      {/* Start team members section */}
      <section className="team__section section--padding">
        <div className="container">
          <div className="section__heading text-center mb-50">
            <h2 className="section__heading--maintitle text__secondary mb-10">
              Success Marriages
            </h2>
            <p className="section__heading--desc">
              A perfect marriage is just two imperfect people who refuse to give
              up on each other.
            </p>
          </div>
          <div className="team__container">
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30">
              {SuccessMlife.map((item, index) => (
                <Success_Mlife
                  key={index}
                  img={item.img}
                  discrption={item.discrption}
                ></Success_Mlife>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End team members section */}
      {/* Start image with text section */}
      <section className="image__with--text__section section--padding">
        <div className="container">
          <div className="row row-cols-md-2 row-cols-1  align-items-center">
            <div className="col">
              <div className="image__with--text__thumbnail">
                <img className="display-block" src={require("../../all_style/img/slider/slider2.jpg")} alt="drone-image" />
              </div>
            </div>
            <div className="col">
              <div className="image__with--text__content">
                <h3 className="image__with--text__title mb-18">Download our mobile app & find
                  start searching your life partner
                  in a tap.
                </h3>
                <p className="image__with--text__desc mb-25">A marriage bureau is a business that helps people find suitable matches for marriage. This can be done through online services or by matching people based on their preferences and interests.</p>
                <div className="image__with--text__percent color-primary-2 mb-40">
                  <ul>
                    <li className="image__with--text__percent--list mb-25">
                      <span className="image__with--text__percent--top d-flex justify-content-between align-content-center">
                        <h2 >Download App Now !</h2>

                      </span>
                    </li>

                  </ul>
                </div>
                <div className="image__with--text__content--footer d-flex">
                  <img className="display-block" src={require("../../all_style/img/other/text-shape.webp")} alt="text-shape" />

                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="image__with--text__position--shape display-block" src={require("../../all_style/img/other/image-with-text-section-shape.webp")} alt="shape img" />
      </section>
      {
        !user ? (
          <Model_Register />
        ) : (
          <></>
        )
      }
      {/* End image with text section */}
    </>
  );
}

export default Index;
