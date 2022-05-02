import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import RegisterForm from "./RegisterForm.js";

export default function Registers() {
  const [register, setRegisters] = useState([]);
  useEffect(() => {
    loadRegister();
  }, []);

  function loadRegister() {
    axios.get("/registers").then((response) => {
      setRegisters(response.data);
    });
  }

  return (
    <div>
      <RegisterForm />
      <h1>Registros</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Id</th>
            <th>Professor</th>
            <th>Sala</th>
            <th>Data_solicitacao</th>
            <th>Entregue_por</th>
            <th>Data_devolucao</th>
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
                    <td>{reg.Data_solicitacao}</td>
                    <td>{reg.Entregue_por}</td>
                    <td>{reg.Data_devolucao}</td>
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
  );
}
