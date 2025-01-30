import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/home/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
