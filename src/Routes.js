import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Registers from "./components/entities/registers/Registers";
import TeacherForm from "./components/entities/teachers/form/TeacherForm";
import Employees from "./components/entities/employees";
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/registerTeacher" element={<TeacherForm />} />
          <Route path="/" element={<Registers />} />
          <Route path="/registerEmployee" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
