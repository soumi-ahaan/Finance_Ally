import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomeComponent from "../components/pages/Home/HomeComponent";
import AboutComponent from "../components/pages/About/AboutComponent";
import TopHeader from "../components/Layouts/Header/TopHeader";
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRoutes;
