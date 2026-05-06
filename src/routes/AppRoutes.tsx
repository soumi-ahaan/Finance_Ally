import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "../components/pages/Home/HomeComponent";
import AboutComponent from "../components/pages/About/AboutComponent";


const AppRoutes = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
