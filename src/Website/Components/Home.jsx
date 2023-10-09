import React from 'react'
import Download from '../pages/Download'
import SuccessfullMarriges from '../pages/SuccessfullMarriges'
import Services from '../pages/Services'

export const Home = () => {
  return (
    <div >

<div className="center_main clerfix">
  <section id="center">
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to={0} className />
        <li data-target="#carousel-example-generic" data-slide-to={1} className />
        <li data-target="#carousel-example-generic" data-slide-to={2} className="active" />
      </ol>
      <div className="carousel-inner">
        <div className="item">
          <img src="img/2.jpg" alt="First slide" />
          <div className="carousel-caption">                      </div>
        </div>
        <div className="item">
          <img src="img/3.jpg" alt="Second slide" />
          <div className="carousel-caption">                      </div>
        </div>
        <div className="item active">
          <img src="img/4.jpg" alt="Third slide" />
          <div className="carousel-caption">                      </div>
        </div>
      </div>
    </div>
    <div className="main-text hidden-xs clearfix">
      <div className="col-md-12 text-center">
        <h1>Best Matrimonial Website</h1>
        <p>Vestibulum lacinia arcu eget nulla ad litora torquent per conubia nostra.</p>
      </div>
    </div>
  </section>
</div>












{/* <section id="outdoor">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="outdoor text-center">
          <div className="outdoor_1 clearfix">
            <h2>Tour &amp; Holiday</h2>
            <h5>08 Mar 2016</h5>
          </div>
          <div className="outdoor_2 clearfix">
            <div className="grid clearfix">
              <figure className="effect-apollo">
                <img src="img/64.jpg" alt="img22" />
                <figcaption>
                  <h2>Matrimonial <span>Website</span></h2>
                  <p> Duis sagittis ipsum   mauris  fusce nec tellus </p>
                  <a href="#">View more</a>						</figcaption>			
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
<Services/>

{/* <section id="arrange">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="arrange">
          <h1 className="text-center"><span>Matrimonial</span> Website</h1>
          <h2 className="text-center"><i className="fa fa-arrows-h" /></h2>
          <h3 className="text-center">"Integer nec odio Sed cursus ante dapibus diam  elementum imperdiet."</h3>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.Vestibulum lacinia arcu eget nulla.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitursodales ligula in libero. Sed dignissim lacinia nunc.</p>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="arrange_1">
          <ul>
            <li><span className="span_3">[</span></li>
            <li className="well_2">Fusce nec tellus sed augue semper porta Class aptent taciti <span className="span_5">torquent</span> per  nostra, per inceptos himenaeos. Curabitursodales ligula in.. </li>
            <li><span className="span_3">]</span></li>
          </ul>
        </div>   
        <div className="arrange_1">
          <p className="text-center" />
        </div>
      </div>
      <div className="col-sm-12 arrange_2">
        <div className="col-sm-6">
          <div className="arrange_2_inner">
            <h2>WOMEN</h2>
            <img className="img-circle" src="img/6.jpg" />
            <p>04/05/1991</p>
            <h3>Praesent Libero</h3>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="arrange_2_inner_1">
            <h2>MEN</h2>
            <img className="img-circle" src="img/7.jpg" />
            <p>06/09/1989</p>
            <h3>Ante Dapibus</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


<SuccessfullMarriges/>



{/* <section id="photo_gallery">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="photo_gallery">
          <div className="services_home clearfix">
            <h1 className="text-center"><span>Our</span>  Gallery</h1>
            <h2 className="text-center"><i className="fa fa-arrows-h" /></h2>
          </div>
          <div id="Carousel" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#Carousel" data-slide-to={0} className="active" />
              <li data-target="#Carousel" data-slide-to={1} />
              <li data-target="#Carousel" data-slide-to={2} className />
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <div className="row">
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/13.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/14.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/15.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/16.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/17.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/18.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/19.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/20.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/21.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/22.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/23.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                  <div className="col-sm-3"><a href="#" className="thumbnail"><img src="img/24.jpg" alt="Image" style={{maxWidth: '100%'}} /></a></div>
                </div>
              </div>
            </div>
            <a data-slide="prev" href="#Carousel" className="left carousel-control">‹</a>
            <a data-slide="next" href="#Carousel" className="right carousel-control">›</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<Download/>

{/* <div className="contact_home_main clearfix">
  <section id="contact_top">
    <div className="container">
      <div className="row">
        <div className="col-sm-12" />
      </div>
    </div>
  </section>
  <section id="contact_bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-12" />
      </div>
    </div>
  </section>
  <section id="contact_home">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="services_home clearfix">
            <h1 className="text-center"><span>Attend</span>   Now</h1>
            <h2 className="text-center"><i className="fa fa-arrows-h" /></h2>
          </div>
          <div className="col-sm-6">
            <div className="contact_home_1 clearfix">
              <div className="col-sm-6">
                <div className="contact_home_1_inner">
                  <input type="text" className="form-control" placeholder="First name *" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact_home_1_inner">
                  <input type="text" className="form-control" placeholder="Last name *" />
                </div>
              </div>
            </div>
            <div className="contact_home_1 clearfix">
              <div className="col-sm-6">
                <div className="contact_home_1_inner">
                  <input type="text" className="form-control" placeholder="Email *" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact_home_1_inner">
                  <input type="text" className="form-control" placeholder="Mobile *" />
                </div>
              </div>
            </div>
            <div className="contact_home_1 clearfix">
              <div className="col-sm-6">
                <div className="contact_home_1_inner">
                  <input type="text" className="form-control" placeholder="Location *" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact_home_1_inner_1 clerfix">
                  <div className="col-sm-5 space_left">
                    <input type="text" className="form-control" placeholder="Captcha Code *" />
                  </div>
                  <div className="col-sm-5 space_left">
                    <h4>FBGRE</h4>
                  </div>
                  <div className="col-sm-2" />
                </div>
              </div>
              <div className="contact_home_2 col-sm-12 clearfix">
                <textarea className="form-control" placeholder="Describe Your Details" defaultValue={""} />
                <p><a href="#">SUBMIT</a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="contact_home_3">
              <a href="#"><img src="img/48.jpg" /></a>
            </div>
          </div>	  	  	  
        </div>
      </div>
    </div>	
  </section>
</div> */}











{/* <section id="success">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="services_home clearfix">
          <h1 className="text-center"><span>Consec</span>Tetur</h1>
          <h2 className="text-center"><i className="fa fa-arrows-h" /></h2>
        </div>
        <div className="col-sm-4">
          <div className="success_inner clearfix">
            <div className="success_2">
              <p><img src="img/49.jpg" /></p>
            </div>
            <div className="success_3">
              <h2><a href="#">Dignissim Lacinia</a></h2>
              <p><a href="#">"Nibh Elementum Imperdiet.Duis Sagittis<br /> Torquent Per Conubia Nostra."</a></p>
            </div> 
          </div>	 
        </div>
        <div className="col-sm-4">
          <div className="success_inner clearfix">
            <div className="success_2">
              <p><img src="img/50.jpg" /></p>
            </div>
            <div className="success_3">
              <h2><a href="#">Elementum </a></h2>
              <p><a href="#">"Nibh Elementum Imperdiet.Duis Sagittis<br /> Torquent Per Conubia Nostra."</a></p>
            </div> 
          </div>	 
        </div>
        <div className="col-sm-4">
          <div className="success_inner clearfix">
            <div className="success_2">
              <p><img src="img/51.jpg" /></p>
            </div>
            <div className="success_3">
              <h2><a href="#"> Cursus Dapibus</a></h2>
              <p><a href="#">"Nibh Elementum Imperdiet.Duis Sagittis<br /> Torquent Per Conubia Nostra."</a></p>
            </div> 
          </div>	 
        </div>
      </div>
      <div className="col-sm-12 space_all">
        <div className="col-sm-10" />
        <div className="col-sm-2">
          <div className="success_4">
            <p><a href="#">View More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}






    </div>
  )
}
