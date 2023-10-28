import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <div>
   <section id="top">
    {/* <div class="container">
        <div class="row">
          
            <div class="top clearfix">
                <div class="col-sm-6">
                    <div class="top_left">
                        <p>Endless Love : Start Your Journey</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="top_right clearfix text-right">
                        <span class="span_2"> <i class="fa fa-whatsapp" /> +91 - 7057-921-848 </span>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div id="google_element"></div>
    <script src="http://translate.google.com/translate_a/element.js?cd=loadGoogleTranslate"></script>
   <script>
  function loadGoogleTranslate () {
      new google.translate.TranslateElement (
        "google_element") 
  }
   </script> */}
  <div >
    <div className="container">
      <div className="header__topbar--inner d-flex align-items-center justify-content-between">
        <ul className="header__contact--info d-flex align-items-center">
          <li className="header__contact--info__list text-white">
            <svg className="header__contact--info__icon" xmlns="ht tp://www.w3.org/2000/svg" width="15.797" height="20.05" viewBox="0 0 512 512">
              <path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="currentColor" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
              <a href="tel:+91 7020403671">7020403671</a></li>
              <li className="header__contact--info__list text-white">
                <a><svg stroke="currentColor" fill="currentColor" strokeWidth={0} t={1569683925316} viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{height: 20, width: 20}}><defs />
                <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z" />
                <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" /></svg> Contact On Whatsapp</a></li>
                <li className="header__contact--info__list text-white" id="google_translate_element">
                  <div className="skiptranslate goog-te-gadget" dir="ltr" style={{}}>
                    <div id=":0.targetLanguage"><select className="goog-te-combo" aria-label="Language Translate Widget">
                      <option value>Select Language</option>
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="mr">Marathi</option>
                      </select>
                      </div>Powered by <span style={{whiteSpace: 'nowrap'}}>
                        <a className="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com" target="_blank">
                          <img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style={{paddingRight: 3}} alt="Google Translate" />Translate</a></span>
                          </div>
                          </li></ul>
                          <div />
                          <div className="language__currency d-none d-lg-block">
                            <ul className="d-flex align-items-center">
                              <li className="language__currency--list text-white"><svg className="header__contact--info__icon" xmlns="http://www.w3.org/2000/svg" width="20.57" height="13.13" viewBox="0 0 31.57 31.13">
                                <path d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" transform="translate(-2 -4)" fill="currentColor" /></svg>
                                <a href="mailto:md.royalmarriagebureau@gmail.com">md.royalmarriagebureau@gmail</a>
                                </li>
                                </ul>
                                </div>
                                </div>
                                </div>
                                </div>

</section>


      <section id="header" className="cd-secondary-nav fixed-top">
        <div className="container fixed-top">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-default" role="navigation">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  {/* <a className="navbar-brand d-bl" href="index.html">Jab-We-Met</a> */}
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  
                  <ul className="nav navbar-nav navbar-right">
                    <li><img  src="https://cdn3.mycity4kids.com/images/article-images/web/headersV2/img-20160911-57d5b330917a6.jpg" style={{height:"70px"}}/> </li>
                    <li> <Link to="/"> <a className="color_1 active_1" href="/">Home</a> </Link> </li>
                    <li> <Link to="/about"> <a className="color_1" href="/about">About Us</a></Link> </li>
                    <li> <Link to="/grooms"><a className="color_1" href="services">Grooms</a> </Link></li>
                    <li> <Link to="/brides"><a className="color_1" href="services">Brides</a> </Link></li>
                    <li> <Link to="/search"><a className="color_1" href="services">Search</a> </Link></ li>
                    <li> <Link to="/membarship"><a className="color_1" href="services">Membership</a> </Link></li>
                    <li> <Link to="/contact"> <a className="color_1" href="contact">Contact Us</a> </Link></li>
                    <li> <button className='button'> <Link to="/login"> <a className="color_1" href="/login">Login</a> </Link></button> </li>
                    <li> <button className='button'> <Link to="/register"> <a className="color_1" href="/register">Register</a> </Link></button> </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header;
