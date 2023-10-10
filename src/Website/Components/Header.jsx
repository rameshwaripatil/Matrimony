import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <section id="top">
        <div className="container">
          <div className="row">
            <div className="top clearfix">
              <div className="col-sm-6">
                <div className="top_left">
                  <p>Endless Love: Start Your Journey</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="top_right clearfix text-right">
                  <span className="span_2"> <i className="fa fa-whatsapp" /> +91 - 7057-921-848 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="header" className="cd-secondary-nav fixed-top">
        <div className="container">
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
                  <a className="navbar-brand d-bl" href="index.html">Jab-We-Met</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li> <Link to="/"> <a className="color_1 active_1" href="/">Home</a> </Link> </li>
                    <li> <Link to="/about"> <a className="color_1" href="/about">About Us</a></Link> </li>
                    <li> <Link to="/grooms"><a className="color_1" href="services">Grooms</a> </Link></li>
                    <li> <Link to="/brides"><a className="color_1" href="services">Brides</a> </Link></li>
                    <li> <Link to="/search"><a className="color_1" href="services">Search</a> </Link></li>
                    <li> <Link to="/membarship"><a className="color_1" href="services">Membership</a> </Link></li>
                    <li> <Link to="/contact"> <a className="color_1" href="contact">Contact Us</a> </Link></li>
                    <li> <button className='button'> <Link to="/register"> <a className="color_1" href="/register">Login</a> </Link></button> </li>
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
