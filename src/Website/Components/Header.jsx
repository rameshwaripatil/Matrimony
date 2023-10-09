import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <section id="top">
          <div className="container">
            <div className="row">
              <div className="top clearfix">
                <div className="col-sm-6">
                  <div className="top_left">
                    <p>Eternal Bonds, Endless Love: Start Your Journey</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="top_right clearfix text-right">
                    {/* <span className="span_1"><i className="fa fa-phone-square" />  +91 - 9960-046-879</span> */}
                    <span className="span_2"> <i className="fa fa-whatsapp" />  +91 - 7057-921-848 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="header" className="cd-secondary-nav">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav className="navbar navbar-default" role="navigation">
                  {/* Brand and toggle get grouped for better mobile display */}
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="nav navbar-nav navbar-right">
                    <a className="navbar-brand" href="index.html">Jab-We-Met </a>

                      <li> <Link to="/"> <a className="color_1 active_1" href="/">Home</a>    </Link>   </li>
                      <li> <Link to="/about"> <a className="color_1" href="/about">About Us</a></Link> </li>
                      {/* <li>  <Link  to="/services"><a className="color_1" href="services">Services</a> </Link></li> */}
                      <li>  <Link to="/grooms"><a className="color_1" href="services">Grooms</a> </Link></li>
                      <li>  <Link to="/brides"><a className="color_1" href="services">Brides</a> </Link></li>


                      <li>  <Link to="/register"> <a className="color_1" href="/register">Register</a> </Link></li>
                      <li>  <Link to="/contact"> <a className="color_1" href="contact">Contact Us</a>  </Link></li>
                      {/* <Link  to="/services">  <li><a className="color_1" href="pages.html">Typography</a></li>  </Link> */}
                      {/* <li className="dropdown">
                        <a className="dropdown-toggle color_1" data-toggle="dropdown" href="services.html" aria-expanded="false">Dropdown
                          <span className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="services.html">Services</a></li>

                          <li><a href="contact.html">Contact Us</a></li>



                          <li> <Link to="/login"> <button className="my-button">
                            Login
                          </button>  </Link></li>
                          <li>  <Link to="/register"> <button className="my-button ">
                            Register
                          </button>   </Link> </li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Header