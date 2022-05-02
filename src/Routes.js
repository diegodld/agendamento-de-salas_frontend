import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./components/users/form/UserForm";
import Header from "./components/header/Header";
// import UsersList from "./components/users/list/UserList";
import Registers from "./components/registers/Registers";
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/registerUser" element={<UserForm />} />
          <Route path="/" element={<Registers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
