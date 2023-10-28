import React, { useEffect } from 'react'
import HeaderBg from '../cmp/HeaderBg';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <div>
        {/* Start breadcrumb section */}
        <HeaderBg main="About Us" route="\" route_name="Home" page="About Us" />
        {/* End breadcrumb section */}
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
        {/* End image with text section */}
        {/* Start banner section */}
        <div className="banner__video--section banner__section--bg position__relative section--padding">
          <img className="drone__position--img display-block" src={require("../../all_style/img/other/groombride4.jpg.png")} alt="drone-position-img" />
          <div className="container">
            <div className="banner__video--content position__relative text-center">
              <div className="bideo__play banner__video--play mb-35">
                <a className="bideo__play--icon banner__video--play__icon glightbox" href="https://www.youtube.com/@royalmarriagebureau9076" data-gallery="video">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} viewBox="0 0 31 37">
                    <path data-name="Polygon 1" d="M16.783,2.878a2,2,0,0,1,3.435,0l14.977,25.1A2,2,0,0,1,33.477,31H3.523a2,2,0,0,1-1.717-3.025Z" transform="translate(31) rotate(90)" fill="currentColor" />
                  </svg>
                  <span className="visually-hidden">Play</span>
                </a>
              </div>
              <h2 className="banner__video--title text-white mb-15">All Service we All.</h2>
              <p className="banner__video--info text-white">Get Your Quote or Call: <a href="tel:+88021544142">(+91 7020403671)</a></p>
              {
                sessionStorage.getItem('token') === null ? (
                  <Link className="banner__video--btn primary__btn" to="/register">Resiter Now</Link>
                ) : (
                  <></>
                )
              }


            </div>
          </div>
        </div>
        {/* End banner section */}
        {/* Start about section */}
        <section className="about__section section--padding border-bottom">
          <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
              <div className="col">
                <div className="about__content">
                  <h2 className="about__content--title mb-18">Our motto is to help people in finding real happiness and that comes with the good partner.</h2>
                  <div className="about__content--step mb-25">
                    <p className="about__content--desc mb-20">“ 100% Authentic Elite Profiles not like from any other online matrimonial website in India who does not know their members. We know each and every one as we visited them personally..</p>
                    <ul className="mb-20">
                      {/* <li className="about__content--desc__list">Beyond drone is an to be contre unmanned aerial.</li> */}
                      <li className="about__content--desc__list">Marriage Bureau is now a known name in providing Matchmaking services but we are still every day striving to expand and improve in every way to make our clients happy.</li>
                    </ul>
                    <p className="about__content--desc style2">Beyond more stoic this along goodness this sed wow
                      flusterd impressive</p>
                  </div>
                  <div className="about__content--author d-flex align-items-center mb-50">
                    <div className="about__content--author__thumb">
                      {/* <img className="display-block" src={require("../../all_style/img/other/")} alt="about author thumb" /> */}
                    </div>
                    <div className="about__content--author__text d-flex align-items-center">
                      <div className="about__content--author__text--left">
                        <h3 className="about__content--author__name text__secondary">Every single member’s profile is being approved by the site administrator so that you come across only genuine profiles.</h3>
                      </div>
                      {/* <img className="about__author--signature display-block" src={require("../../all_style/img/icon/signature.webp")} alt="signature" /> */}
                    </div>
                  </div>
                  <Link className="about__content--btn primary__btn" to="/register">Resiter Now</Link>
                </div>
              </div>
              <div className="col">
                <div className="about__thumbnail">
                  <img className="display-block" src={require("../../all_style/img/other/About1.jpg.jpg")} alt="about-thumb" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End about section */}
        {/* Start counterup section */}
        <div className="counterup__section section--padding" id="funfactId">
          <div className="container">
            <div className="section__heading text-center mb-50">
              <h2 className="section__heading--maintitle text__secondary mb-10">  Why Royal Marriage?</h2>
              <p className="section__heading--desc">  We bring over 15 years of expertise in pioneering the Royal
                Marriage Bureau matchmaking service, and offer the most
                exclusive database of truly Elite matches for you! At Royal
                Marriage Bureau, we help you find the perfect life partner who
                matches your stature, aura, and sophistication in every sense of
                the word</p>
            </div>
            <div className="counterup--inner">
              <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 mb--n30">
                <div className="col mb-30">
                  <div className="single__counterup">
                    <div className="counterup__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={65} height={61} viewBox="0 0 65 61">
                        <image id="_1850984" data-name={1850984} width={65} height={61} xlinkHref="data:image/png;base64,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" />
                      </svg>
                    </div>
                    <h3 className="counterup__title">Confidential</h3>
                    <p className="counterup__number"><span className="js-counter" data-count={12}>100</span>%</p>
                  </div>
                </div>
                <div className="col mb-30">
                  <div className="single__counterup">
                    <div className="counterup__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={63} height={63} viewBox="0 0 63 63">
                        <image id="_1850998" data-name={1850998} width={63} height={63} xlinkHref="data:image/png;base64,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" />
                      </svg>
                    </div>
                    <h3 className="counterup__title">Success Stories</h3>
                    <p className="counterup__number"><span className="js-counter" data-count={67}>1000</span>+</p>
                  </div>
                </div>
                <div className="col mb-30">
                  <div className="single__counterup">
                    <div className="counterup__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={62} height={62} viewBox="0 0 62 62">
                        <image id="_1851059" data-name={1851059} width={62} height={62} xlinkHref="data:image/png;base64,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" />
                      </svg>
                    </div>
                    <h3 className="counterup__title">Managers</h3>
                    <p className="counterup__number"><span className="js-counter" data-count={255}>100</span>+</p>
                  </div>
                </div>
                <div className="col mb-30">
                  <div className="single__counterup">
                    <div className="counterup__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={60} height={60} viewBox="0 0 60 60">
                        <image id="_1850963" data-name={1850963} width={60} height={60} xlinkHref="data:image/png;base64,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" />
                      </svg>
                    </div>
                    <h3 className="counterup__title">Years of Experience</h3>
                    <p className="counterup__number"><span className="js-counter" data-count={5}>5</span>+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End counterup section */}
      </div>

    </>
  )
}

export default About