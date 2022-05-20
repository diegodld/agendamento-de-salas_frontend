import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Registers from "./components/entities/registers/Registers";
import TeacherForm from "./components/entities/teachers/form/TeacherForm";
import Employees from "./components/entities/employees";
import Rooms from "./components/entities/rooms";
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/teachers" element={<TeacherForm />} />
          <Route exact path="/" element={<Registers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
