import React from 'react'
import Download from '../pages/Download'
import SuccessfullMarriges from '../pages/SuccessfullMarriges'
import Services from '../pages/Services'
import VideoLinkButton from '../pages/VideoLinkButton'

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
<VideoLinkButton/>
<Services/>
<SuccessfullMarriges/>
<Download/>
    </div>
  )
}
