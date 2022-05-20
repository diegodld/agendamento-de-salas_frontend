import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import logo from "./img/UVC-logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        {" "}
        <header>
          <div>
            <NavLink className="logo" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Cadastrar
              </Dropdown.Toggle>
              <DropdownMenu variant="light">
                <NavLink to="/registerTeacher">Novo Professor</NavLink>
                <NavLink to="/registerEmployee">Novo Funcionário</NavLink>
                <NavLink to="/registerRoom">Nova Sala</NavLink>
              </DropdownMenu>
            </Dropdown>
          </nav>
        </header>
      </div>
    </div>
  );
}
