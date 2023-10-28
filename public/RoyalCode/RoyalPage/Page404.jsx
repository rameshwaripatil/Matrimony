import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);
  return (
   <>
    <div>
  {/* Start breadcrumb section */}
  <section className="breadcrumb__section breadcrumb__bg">
    <div className="container">
      <div className="row row-cols-1">
        <div className="col">
          <div className="breadcrumb__content">
            <h1 className="breadcrumb__content--title mb-10 text-white">Error Page</h1>
            <ul className="breadcrumb__content--menu d-flex">
              <li className="breadcrumb__content--menu__items"><a href="index-2.html" className='text-white'>Home</a></li>
              <li className="breadcrumb__content--menu__items"><span className="text__secondary text-white">Error Page</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End breadcrumb section */}
  {/* Start error section */}
  <section className="error__section section--padding">
    <div className="container">
      <div className="row row-cols-1">
        <div className="col">
          <div className="error__content text-center">
            <img className="error__content--img mb-50" src={require('../../all_style/img/other/404-thumb.webp')} alt="error-img" />
            <h2 className="error__content--title">Opps ! We're not found this page</h2>
            <p className="error__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi aliquid minima assumenda.</p>
            <Link className="error__content--btn primary__btn" to="/">Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End error section */}
</div>

   </>
  )
}

export default Page404