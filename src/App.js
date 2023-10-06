import React from 'react'
import { Master } from './Website/Layout/Master'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from './Website/Components/Home'
import About from './Website/pages/About'
import Contact from './Website/pages/Contact'
import Services from './Website/pages/Services'
import Register from './Website/pages/Register'

const App = () => {
  return(

     <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Master Rcf={Home}/>} />
      <Route path="/about"  element={<Master Rcf={About}/>} />
      <Route path="/contact"  element={<Master Rcf={Contact}/>} />
      <Route path="/Services"  element={<Master Rcf={Services}/>} />
      <Route path="/register"  element={<Master Rcf={Register}/>} />




     </Routes>
     </BrowserRouter>
  )

}

export default App