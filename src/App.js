import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
function App() {
  return (
    <div class="container-xxl bg-white p-0">
    <div class="container-xxl position-relative p-0">
      <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
