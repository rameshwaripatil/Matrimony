import React from 'react'
import { Master } from './Website/Layout/Master'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from './Website/Components/Home'
import About from './Website/pages/About'

const App = () => {
  return(

     <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Master Rcf={Home}/>} />
      <Route path="/about"  element={<Master Rcf={About}/>} />

     </Routes>
     </BrowserRouter>
  )

}

export default App