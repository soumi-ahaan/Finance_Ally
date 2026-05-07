import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "../components/pages/Home/HomeComponent";
import AboutComponent from "../components/pages/About/AboutComponent";
import TopHeader from "../components/Layouts/Header/TopHeader";
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer"

const AppRoutes = () => {
  return (
    <BrowserRouter>
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
