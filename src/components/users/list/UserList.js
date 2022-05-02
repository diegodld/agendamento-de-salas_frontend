import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./list.css";

export default function UsersList() {
  const [users, setUser] = useState([{}]);

  async function getUsers() {
    const response = await axios.get("/teachers");
    setUser(response.data);
    console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Lista de Professores</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{user.nome}</td>
                    <td>{user.telefone}</td>
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
