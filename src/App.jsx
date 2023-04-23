import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kathai from "./pages/Kathai";
import Kavithai from "./pages/Kavithai";
import Katturai from "./pages/Katturai";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./contexts/AuthContext";
import About from "./pages/About";

function App() {
  return (
    <>
      <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="kathai" element={<Kathai />} />
              <Route path="kavithai" element={<Kavithai />} />
              <Route path="katturai" element={<Katturai />} />
              <Route path='about' element={<About />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
