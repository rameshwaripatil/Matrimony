import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
<div className="footer_main clearfix">
  <section id="footer">
    <div className="container">
      <div className="row">
        <div className="footer clearfix">
          <div className="col-sm-3">
            <div className="footer_left">
              <img src="img/61.jpg" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer_right">
              <p>
              <Link to="/">  <a href="#">Home</a> </Link>
              <Link to="/about">  <a href="#">About Us</a> </Link>
              <Link to="/Services"> <a href="#">Service</a> </Link>
              <Link to="/register"> <a href="#">Register</a> </Link>
              <Link to="/contact"> <a href="#">Contact Us</a> </Link>
              </p>
              <div className="footer_right_inner clearfix">
                <ul className="social-network social-circle">
                  <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss" /></a></li>
                  <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                </ul>				
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer_left">
              <img src="Img/62.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="footer_bottom">
    <div className="container">
      <div className="row">
        <div className="footer_bottom clearfix">
          <div className="col-sm-7">
            <div className="footer_bottom_left">
              <p> © 2013 Your Website Name. All Rights Reserved | Design by <a href="http://www.templateonweb.com">Sandip Gadekar</a></p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="footer_bottom_right text-right">
              <p><a href="#">Powered By <span>@mrx_sandy</span></a> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="toTop" className="btn btn-info" style={{display: 'block'}}><span className="glyphicon glyphicon-chevron-up" />  Top</div>


</div>


  )
}
