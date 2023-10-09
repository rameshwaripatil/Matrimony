import React from 'react';

const VideoLinkButton = () => {
    return (
        <div className="App">

            <div className="banner__video--section banner__section--bg position__relative section--padding"><img className="drone__position--img display-block" src="https://image.slidesdocs.com/responsive-images/background/wedding-cover-hotel-marriage-cartoon-powerpoint-background_2330e81197__960_540.jpg" alt="drone-position-img" /><div className="container"><div className="banner__video--content position__relative text-center"><div className="bideo__play banner__video--play mb-35"><a className="bideo__play--icon banner__video--play__icon glightbox" href="https://youtu.be/tyBJioe8gOs?si=0JT1UsJMwTlUGuyB" data-gallery="video" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} viewBox="0 0 31 37"><path data-name="Polygon 1" d="M16.783,2.878a2,2,0,0,1,3.435,0l14.977,25.1A2,2,0,0,1,33.477,31H3.523a2,2,0,0,1-1.717-3.025Z" transform="translate(31) rotate(90)" fill="currentColor" /></svg><span className="visually-hidden">Play</span></a></div><h2 className="banner__video--title text-white mb-15">All Service we All</h2><p className="banner__video--info text-white">Get Your Quote or Call: <a href="tel:+88021544142">(+91 7020403671)</a></p><a className="banner__video--btn primary__btn" href="/register">Resiter Now</a></div></div></div>



            {/* <a href={videoUrl} className="video-link-button" target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a> */}
        </div>
    );
};

export default VideoLinkButton;
