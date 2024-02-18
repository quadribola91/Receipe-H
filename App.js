import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar2 from "./Components/Navbar2";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import FoodGrid1 from "./Components/FoodGrid1";
import FoodGrid2 from "./Components/FoodGrid2";
import FoodGrid3 from "./Components/FoodGrid3";
import FoodGrid4 from "./Components/FoodGrid4";
import FoodGrid5 from "./Components/FoodGrid5";
import CultleryAdvent from "./Components/CultleryAdvent";
import SeasonalSpecials from "./Components/SeasonalSpecials";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";

export default function App() {
  return (
    <Router>
      <>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/foodgrid1" element={<FoodGrid1 />} />
          <Route path="/foodgrid2" element={<FoodGrid2 />} />
          <Route path="/foodgrid3" element={<FoodGrid3 />} />
          <Route path="/foodgrid4" element={<FoodGrid4 />} />
          <Route path="/foodgrid5" element={<FoodGrid5 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/culinaryadvent" element={<CultleryAdvent />} />
          <Route path="/seasonalspecials" element={<SeasonalSpecials />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
