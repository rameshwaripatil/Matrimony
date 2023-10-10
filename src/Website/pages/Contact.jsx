import React from 'react'

const Contact = () => {
  return (
   <div>
  <div className="about_main clearfix">
    <section id="about">
      <img src="img/44.jpg" width="100%" />
      
    </section>
    
    <section id="about_top">
      <div className="container">
        <div className="row">
          <div className="col-sm-12" />
        </div>
      </div>
    </section>
    <section id="about_bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12" />
        </div>
      </div>
    </section>
  </div>
  <section id="about_heading" className="about_register">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="about_heading">
            <h5><a href="#">Home</a> <span>//</span>Contact Us</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="contact clearfix">
          <div className="col-sm-4">
            <div className="contact_inner text-center">
              <h1><i className="fa fa-map-marker" /></h1>
              <h2>Address</h2>
              <h3>Jab-We-Met MATRIMONIAL</h3>
              <p>
                Office No. B-10, 1st Floor, Lorem Amet,<br />
                Consectetur Adipiscing, Integer  Zone, <br />
                Delhi-123456, Praesent , India
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="contact_inner icon_2 text-center">
              <h1><i className="fa fa-envelope" /></h1>
              <h2>Email</h2>
              <p>
                <a href="#"> sandipgadekar143@gmail.com</a><br />
                <a href="#">info@gmail.com</a><br />
                <a href="#">info@gmail.com</a><br />
                <a href="#">info@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="contact_inner icon_3 text-center">
              <h1><i className="fa fa-phone" /></h1>
              <h2>Contact No.</h2>
              <span className="span_1"><i className="fa fa-phone-square" />  +91 - 1234-567-890</span>
              <span className="span_2"> <i className="fa fa-whatsapp" />  +91 - 1234-567-890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact_us">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="port">CONTACT</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-0">
              {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
              {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label>Message</label>
                    <textarea rows={5} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-xs-12">
                    <button type="submit" className="btn btn-success btn-lg">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-lg-offset-0">
              <div className="contact_main">
                <a href="#"><img src="img/56.jpg" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Contact