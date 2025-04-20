import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/header";
import Content from "./Components/content";
import Footer from "./Components/header/Footer";
import AboutUs from "./Components/header/Aboutus";
import Help from "./Components/header/Help";
import Kurta from "./Components/kurti/Kurta";
import Cotton from "./Components/kurti/Cotton";
import Silk from "./Components/kurti/Silk";
import Rayon from "./Components/kurti/Rayon";
import SignIn from "./Components/header/SignIn";
import SignUp from "./Components/header/SignUp";
import Customize from "./Components/kurti/Customize";
import Tailors from "./Components/kurti/Tailors";
import OrderSummary from "./Components/Ordersummary";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/kurta" element={<Kurta />} />
        <Route path="/customize" element={<Customize />}  />
        <Route path="/tailors" element={<Tailors />} />
        <Route path="/cotton" element={<Cotton />} />
        <Route path="/Silk" element={<Silk />} />
        <Route path="/rayon" element={<Rayon />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<Help />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route path="/ordersummary" element={<OrderSummary />} /> 
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
