import React from 'react'

export const Footer = () => {
  return (
<div className="footer_main clearfix">
  <section id="footer">
    <div className="container">
      <div className="row">
        <div className="footer clearfix">
          <div className="col-sm-3">
            <div className="footer_left">
              <img src="img/32.png" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer_right">
              <p>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Register</a>
                <a href="#">Contact Us</a>
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
              <img src="Img/32.png" />
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
