import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/HeadFoot/Header";
import Footer from "./Components/HeadFoot/Footer";
import Homepage from "./Components/Homepage/Homepage";
import Homepage2 from "./Components/Homepage/Homepage2";
import About from './Components/About/About';
import Contact from './Components/Pages/Contact';
import Blogs from './Components/Pages/Blogs';
import Blogdetails from './Components/Pages/Blogdetails';
import Team from './Components/Pages/Team';
import Teamdetails from './Components/Pages/Teamdetails';
import Services from './Components/Services/Services';
import Servicesdetails from './Components/Services/Servicesdetails';
import Portfolio from './Components/Portfolio/Portfolio';
import Portfoliodetails from './Components/Portfolio/Portfoliodetails';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/Homepage2" element={<Homepage2 />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Blogs" element={<Blogs />} />
        <Route exact path="/Blogdetails" element={<Blogdetails />} />
        <Route exact path="/Team" element={<Team />} />
        <Route exact path="/Teamdetails" element={<Teamdetails />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Servicesdetails" element={<Servicesdetails />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/Portfoliodetails" element={<Portfoliodetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;