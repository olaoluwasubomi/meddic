import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import Hero from '../Hero';
import About from '../About';
import Services from '../Services';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route name="home" path='/Home' element={<Home/>}/>
        <Route name="about" path='/About' element={<About/>} />
        <Route name="services" path='/Services' element={<Services />} />
      </Routes>
    </>
  )
}

export default AppRoutes

