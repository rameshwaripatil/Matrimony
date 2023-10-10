import React from 'react'

const About = () => {
	const backgroundStyle = {
		backgroundImage: 'url("https://c1.wallpaperflare.com/preview/979/135/785/5968a02795f49.jpg")',  // Replace with the actual path to your image
		backgroundSize: '100% 100%',  // Make the background image responsive
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		// Set the height as needed
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
	return (
		<div>
			<section id="about">
				<img src="img/44.jpg" width="100%" />
			</section>
			<section id="about_heading_main" class="clearfix">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="about_heading_main_1">
								<h5><a href="#">Home</a> <span>//</span> About Us</h5>
								<h1>About <span> Us</span> </h1>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section class="image__with--text__section section--padding">
				<div class="container">
					<div class="row row-cols-md-2 row-cols-1  align-items-center">
						<div class="col-lg-6"><div class="image__with--text__thumbnail">
							<img class="display-block" src="img/wed12.jpg" alt="drone-image" style={{ height: "500px", width: "450px" }} />
						</div></div><div class="col"><div class="image__with--text__content">
							<h3 class="image__with--text__title mb-18">Download our mobile app &amp; find start searching your life partner in a tap.</h3>
							<p class="image__with--text__desc mb-25">A marriage bureau is a business that helps people find suitable matches for marriage. This can be done through online services or by matching people based on their preferences and interests.</p>
							<div class="image__with--text__percent color-primary-2 mb-40"><ul><li class="image__with--text__percent--list mb-25">
								<span class="image__with--text__percent--top d-flex justify-content-between align-content-center">
									<h2>Download App Now !</h2></span>
							</li></ul>
							</div>
							<div class="image__with--text__content--footer d-flex">
								<img class="display-block" src="img/logo.webp" alt="text-shape" />
							</div>

						</div>
						</div>
					</div>
				</div>

			</section>



			<div className="App" style={{ marginBottom: "50px", marginTop: "50px" }}>
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
							>
								Register Now
							</a>
						</div>
					</div>
				</div>
			</div>

		

			<section class="about__section section--padding border-bottom">
				<div class="container">
					<div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
						<div class="col-lg-5">
							<div class="about__content">
								<h2 class="about__content--title mb-18">Our motto is to help people in finding real happiness and that comes with the good partner.</h2>
								<div class="about__content--step mb-25">
									<p class="about__content--desc mb-20">“ 100% Authentic Elite Profiles not like from any other online matrimonial website in India who does not know their members. We know each and every one as we visited them personally..</p>
									<ul class="mb-20">
										<li class="about__content--desc__list">Marriage Bureau is now a known name in providing Matchmaking services but we are still every day striving to expand and improve in every way to make our clients happy.</li>
									</ul><p class="about__content--desc style2">Beyond more stoic this along goodness this sed wow flusterd impressive</p>
								</div>
								<div class="about__content--author d-flex align-items-center mb-50">
									<div class="about__content--author__thumb">
									</div>
									<div class="about__content--author__text d-flex align-items-center">
										<div class="about__content--author__text--left">
											<h3 class="about__content--author__name text__secondary">Every single member’s profile is being approved by the site administrator so that you come across only genuine profiles.</h3>
										</div>
									</div>
								</div>
								<a class="about__content--btn primary__btn" href="/register">Resiter Now</a>
							</div>
						</div>
						<div class="col">
							<div class="about__thumbnail">
								<img class="display-block" src="img/1212.jpg" alt="about-thumb" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="about_last">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="about_last">
								<h1><span>Our</span> Team Unity!</h1>
								<p>Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent.</p>
							</div>
						</div>
						<div class="team col-sm-12  clearfix">

							<div class="col-sm-3 ">
								<div class="team_1 clearfix">
									<div class="grid clearfix">
										<figure class="effect-jazz">
											<img src="img/143.jpeg" alt="img25" />

										</figure>

									</div>
								</div>
								<div class="team_inner clearfix text-center">
									<h3>Sandip Gadekar</h3>
									<h4>OWNER and Founder</h4>
									<ul>
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="team_1 clearfix">
									<div class="grid clearfix">
										<figure class="effect-jazz">
											<img src="img/36.jpg" alt="img25" />
										</figure>

									</div>
								</div>
								<div class="team_inner clearfix text-center">
									<h3>Semper Porta</h3>
									<h4>Director</h4>
									<ul>
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="team_1 clearfix">
									<div class="grid clearfix">
										<figure class="effect-jazz">
											<img src="img/37.jpg" alt="img25" />
										</figure>

									</div>
								</div>
								<div class="team_inner clearfix text-center">
									<h3>Eget Nulla</h3>
									<h4>Manager</h4>
									<ul>
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="team_1 clearfix">
									<div class="grid clearfix">
										<figure class="effect-jazz">
											<img src="img/38.jpg" alt="img25" />
										</figure>
									</div>
								</div>
								<div class="team_inner clearfix text-center">
									<h3>Semper Porta</h3>
									<h4>Director</h4>
									<ul>
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}

export default About