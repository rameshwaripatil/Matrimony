import React from 'react'
import { Master } from './Website/Layout/Master'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from './Website/Components/Home'
import About from './Website/pages/About'
import Contact from './Website/pages/Contact'
import Register from './Website/Authentication/Register'
import Grooms from './Website/pages/Grooms'
import Brides from './Website/pages/Brides'
import "./App.css"
import Search from './Website/pages/Search'
import Membarship from './Website/pages/Membarship'
import Login from './Website/Authentication/Login'
import Profile from './Website/pages/Profile'


const App = () => {
  return(

     <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Master Rcf={Home}/>} />
      <Route path="/about"  element={<Master Rcf={About}/>} />
      <Route path="/contact"  element={<Master Rcf={Contact}/>} />
      <Route path="/register"  element={<Master Rcf={Register}/>} />
      <Route path="/grooms"  element={<Master Rcf={Grooms}/>} />
      <Route path="/brides"  element={<Master Rcf={Brides}/>} />
      <Route path="/search"  element={<Master Rcf={Search}/>} />
      <Route path="/membarship"  element={<Master Rcf={Membarship}/>} />
      <Route path="/login"  element={<Master Rcf={Login}/>} />
      <Route path="/profile"  element={<Master Rcf={Profile}/>} />









     </Routes>
     </BrowserRouter>
  )

}

export default App