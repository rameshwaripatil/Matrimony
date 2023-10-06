import React from 'react'

const Register = () => {
  return (
    <div>
<div>
  <section id="about_heading" className="about_register">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="about_heading">
            <h5><a href="#">Home</a> <span>//</span>Register</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="register" className="clearfix">
    <div className="register clearfix">
      <div className="col-sm-5 space_left">
        <div className="register_left">
          <div className="card-image"><img src="img/45.jpg" width="100%" /></div>
        </div>
      </div>
      <div className="col-sm-7">
        <div className="register_right">
          <h3>Sign Up</h3>
          <hr />
          <div className="register_right_inner clearfix">
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="First Name *" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Last Name *" />
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Email *" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Mobile *" />
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Location *" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" id="cal_1" placeholder="Date of Birth" />
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option>Search For</option>
                  <option>Lorem</option>
                  <option>Ipsum </option>
                  <option>Dolor</option>
                  <option>Amet</option>
                  <option>Consectetur </option>
                  <option>Elit</option>
                </select>
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Religion">Religion</option>
                  <option>Lorem</option>
                  <option>Ipsum </option>
                  <option>Dolor</option>
                  <option>Amet</option>
                  <option>Consectetur </option>
                  <option>Elit</option>
                </select>
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Caste" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Marital Status">Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                </select>
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <select className="form-control">
                  <option value="Gender">Upload Photo</option>
                  <option value="Male">Lorem</option>
                  <option value="Female">Ipsum</option>
                </select>
              </div>
            </div>
            <div className="clearfix clear_1">
              <div className="col-sm-6 register_right_inner_1 space_left">
                <input type="text" className="form-control" placeholder="Captcha Code" />
              </div>
              <div className="col-sm-6 register_right_inner_1 space_left">
                <h4>FBGRE</h4>
              </div>
            </div>
            <div className="clearfix col-sm-12 clear_2">
              <p><a href="#">SUBMIT</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>

    </div>
  )
}

export default Register