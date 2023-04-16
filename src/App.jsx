import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kathai from "./pages/Kathai";
import Kavithai from "./pages/Kavithai";
import Katturai from "./pages/Katturai";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="kathai" element={<Kathai />} />
          <Route path="kavithai" element={<Kavithai />} />
          <Route path="katturai" element={<Katturai />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
