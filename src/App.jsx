import Navbar from "./components/Layout/Navbar";
import Carousel from "./components/Carousel";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Layout/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Har safar sahifa o'zgarganda yuqoriga chiqadi
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
