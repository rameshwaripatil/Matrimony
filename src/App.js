import React from 'react'
import { Master } from './Website/Layout/Master'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from './Website/Components/Home'

const App = () => {
  return(
  
     <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Master Rcf={Home}/>} />
     </Routes>
     </BrowserRouter>
  )

}

export default App