import Navbar from "./components/Layout/Navbar"
import Carousel from "./components/Carousel"
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer";


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
