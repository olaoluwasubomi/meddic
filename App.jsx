import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'
import AppRoutes from "./routes/AppRoutes.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./Services.jsx";


const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return(
      <>
       <Nav/>
       <AppRoutes/>
       <Footer/>
      </>
  )
}
export default App;