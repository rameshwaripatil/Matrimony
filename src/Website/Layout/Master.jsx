import React from 'react'
import Header from '../Components/Header'
import { Footer } from '../Components/Footer'
import ModelRegister from '../pages/ModelRegister'


export const Master = ({Rcf}) => {
  return (
    <div>
      <Header/>
      <Rcf></Rcf>
      <ModelRegister/>
      <Footer/>

    </div>
  )
}
