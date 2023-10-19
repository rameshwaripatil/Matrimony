import React from 'react';

const VideoLinkButton = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://wallpapercave.com/dwp1x/wp6239280.jpg")',  // Replace with the actual path to your image
        backgroundSize: '100%',  // Make the background image responsive
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        // Set the height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="App">
            <div className="background" style={backgroundStyle}>
                <div className="container">


                    
                    <div className="banner__video--content position__relative text-center">
                        <div className="bideo__play banner__video--play mb-35">
                            
                            <a
                                className="bideo__play--icon banner__video--play__icon glightbox"
                                href="https://youtu.be/tyBJioe8gOs?si=0JT1UsJMwTlUGuyB"
                                data-gallery="video"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={22}
                                    viewBox="0 0 31 37"
                                >
                                    <path
                                        data-name="Polygon 1"
                                        d="M16.783,2.878a2,2,0,0,1,3.435,0l14.977,25.1A2,2,0,0,1,33.477,31H3.523a2,2,0,0,1-1.717-3.025Z"
                                        transform="translate(31) rotate(90)"
                                        fill="currentColor"
                                    />
                                </svg>
                                <h2 className="visually-hidden">Play</h2>
                            </a>
                        </div>
                        <h1 className="banner__video--title text-white mb-15">
                            All Service we All
                        </h1>
                        <h4 className="banner__video--info text-white">
                            Get Your Quote or Call:{' '}
                            <a href="tel:+917057921848">(+91 7057921848)</a>
                        </h4>
                        <a
                            className="banner__video--btn primary__btn"
                            href="/register"
                            style={{marginTop: '500px'}}
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoLinkButton;
