import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Pizza from "./static/sub-menu/pizza";
import Burgers from "./static/sub-menu/Burgers";
import Boissons from "./static/sub-menu/Boissons";
import About from "./pages/About";
import Service from "./pages/Service";


function App() {
  return (
    <div class="container-xxl bg-white p-0">
    <div class="container-xxl position-relative p-0">
      <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu/pizza" element={<Pizza />} />
          <Route path="/menu/burgers" element={<Burgers />} />
          <Route path="/menu/boissons" element={<Boissons />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
