import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Registers from "./components/pages/registers/Registers";
import Teachers from "./components/pages/teachers";
import Employees from "./components/pages/employees";
import Rooms from "./components/pages/rooms";
import Footer from "./components/footer/Footer";
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/teachers" element={<Teachers />} />
          <Route exact path="/" element={<Registers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
