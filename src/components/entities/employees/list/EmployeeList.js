import React from "react";
import axios from "../../../../api/axios.js";
import { useEffect, useState, useCallback } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { deleteEmployee } from "../controller/EmployeeController.js";

export default function TeacherList() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = useCallback(async () => {
    const { data } = await axios.get("/employees");
    setEmployees(data);
  }, []);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee) => {
              return (
                <>
                  <tr key={employee.id_funcionario}>
                    <td>{employee.nome}</td>
                    <td>{employee.telefone}</td>
                    <td>
                      <button className="bt-edit">
                        <BsPencilSquare />
                      </button>
                      <button
                        className="bt-delete"
                        onClick={() => deleteEmployee(employee.id_funcionario)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <p>Loading employees...</p>
          )}
        </tbody>
      </Table>
    </div>
  );
}
