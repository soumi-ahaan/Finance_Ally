import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomeComponent from "../components/pages/Home/HomeComponent";
import AboutComponent from "../components/pages/About/AboutComponent";
import TopHeader from "../components/Layouts/Header/TopHeader";
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer"
import ContactComponent from "../components/pages/Contact/ContactComponent";
import ServiceComponent from "../components/pages/Service/ServiceComponent";
import KeeperofBooksComponent from "../components/pages/Service/Keeper-of-Books/KeeperofBooksComponent";
import WealthcareComponent from "../components/pages/Service/Wealthcare/WealthcareComponent";
import WholeFinanceComponent from "../components/pages/Service/Whole-Finance/WholeFinanceComponent";
import LivingLegacyStrategyComponent from "../components/pages/Service/Living-Legacy-Strategy/LivingLegacyStrategyComponent";
import WhoWeServeComponent from "../components/pages/Who-We-Serve/WhoWeServeComponent";
import MoneyMedicComponent from "../components/pages/Money-Medic/MoneyMedicComponent";
import ResourcesComponent from "../components/pages/Resources/ResourcesComponent";

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
        <Route path="/service" element={<ServiceComponent />} />
        <Route path="/keeper-of-books" element={<KeeperofBooksComponent />} />
        <Route path="/wealth-care" element={<WealthcareComponent />} />
        <Route path="/whole-finance" element={<WholeFinanceComponent />} />
        <Route path="/living-legacy-strategy" element={<LivingLegacyStrategyComponent />} />
        <Route path="/who-we-serve" element={<WhoWeServeComponent />} />
        <Route path="/money-medic" element={<MoneyMedicComponent />} />
        <Route path="/resources" element={<ResourcesComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRoutes;
