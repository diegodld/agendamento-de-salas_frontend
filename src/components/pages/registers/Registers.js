import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { Table } from "react-bootstrap";
import RegisterForm from "./RegisterForm.js";
import "./registers.css";

export default function Registers() {
  const [register, setRegisters] = useState([]);
  useEffect(() => {
    document.title = "Agendamento de Salas";
    loadRegister();
  }, []);

  function loadRegister() {
    axios.get("/registers").then((response) => {
      setRegisters(response.data);
    });
  }

  return (
    <div className="container">
      <RegisterForm />
      <h2>Registros</h2>
      <div className="content">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Id</th>
              <th>Professor</th>
              <th>Sala</th>
              <th>Data_solicitação</th>
              <th>Entregue_por</th>
              <th>Data_devolução</th>
              <th>Recebido_por</th>
              <th>Contato</th>
            </tr>
          </thead>
          <tbody>
            {register ? (
              register.map((reg) => {
                return (
                  <>
                    <tr key={reg.Id}>
                      <td>{reg.Id}</td>
                      <td>{reg.Professor}</td>
                      <td>{reg.Sala}</td>
                      <td>{reg.Data_solicitação}</td>
                      <td>{reg.Entregue_por}</td>
                      <td>{reg.Data_devolução}</td>
                      <td>{reg.Recebido_por}</td>
                      <td>{reg.Contato}</td>
                    </tr>
                  </>
                );
              })
            ) : (
              <p>Loading users...</p>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
