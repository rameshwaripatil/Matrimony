import React from 'react'

const Services = () => {
  return (
    <div>
      <section class="services__section services__section--bg section--padding">
        <div class="container">
          <div class="section__heading text-center mb-50">
            <h2 class="section__heading--maintitle text__secondary mb-10">Our Best Service</h2><p class="section__heading--desc"> Marriage bureaus can provide a range of services.</p>
            </div>
            <div class="services__inner">
              <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n30">
                <div class="col custom-col mb-30">
                  <article class="services__card">
                    <a class="services__card--link" href="/">
                      <div class="services__card--topbar d-flex justify-content-between">
                        <div class="services__card--icon mb-20">
                          <img class="display-block services__card--primary__icon" src="data:image/jpeg" alt="services-icon" />
                          <img class="display-block services__card--secondary__icon" src="/static/media/service-icon2-white.5db366b7e1f8eb308234.webp" alt="services-icon" />
                          </div>
                          <div class="services__card--number"><span class="services__card--number__text">1</span></div></div><div class="services__card--content"><h3 class="services__card--maintitle mb-15"> Profile Registrat</h3>
                          <p class="services__card--desc mb-15">Individuals interested in finding a partner register with the marriage bureau by providing their per...</p>
                          </div>
                          </a>
                          </article>
                          </div>
                          <div class="col custom-col mb-30">
                            <article class="services__card">
                              <a class="services__card--link" href="/">
                                <div class="services__card--topbar d-flex justify-content-between">
                                  <div class="services__card--icon mb-20">
                                    <img class="display-block services__card--primary__icon" src="data:image/jpeg" alt="services-icon"/>
                                    <img class="display-block services__card--secondary__icon" src="/static/media/service-icon2-white.5db366b7e1f8eb308234.webp" alt="services-icon"/>
                                    </div>
    <div class="services__card--number"><span class="services__card--number__text">2</span>
    </div>
    </div>
    <div class="services__card--content"><h3 class="services__card--maintitle mb-15">Matchmaking</h3>
    <p class="services__card--desc mb-15">The marriage bureau uses its database and resources to search for compatible matches based on the cr...</p>
    </div>
    </a>
    </article>
    </div>
    <div class="col custom-col mb-30">
      <article class="services__card">
        <a class="services__card--link" href="/">
      <div class="services__card--topbar d-flex justify-content-between">
        <div class="services__card--icon mb-20">
          <img class="display-block services__card--primary__icon" src="data:image/jpeg" alt="services-icon"/>
        <img class="display-block services__card--secondary__icon" src="/static/media/service-icon2-white.5db366b7e1f8eb308234.webp" alt="services-icon"/>
        </div>
    <div class="services__card--number">
      <span class="services__card--number__text">3</span>
    </div>
    </div>
    <div class="services__card--content">
      <h3 class="services__card--maintitle mb-15">Profile Sharing</h3>
      <p class="services__card--desc mb-15">Once potential matches are found, the marriage bureau shares the profiles and relevant information w...</p>
      </div>
      </a>
      </article>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
  )
}

export default Services