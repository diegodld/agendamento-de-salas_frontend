import React from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Modal from "../form/Modal.js";
import { EmployeeContext } from "../context/EmployeeContext.js";

export default function EmployeerList() {
  const { employees, findAndEdit, deleteEmployee } =
    React.useContext(EmployeeContext);

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
          {employees &&
            employees.map((employee) => (
              <>
                <tr key={employee.id_funcionario}>
                  <td>{employee.nome}</td>
                  <td>{employee.telefone}</td>
                  <td>
                    <button
                      className="bt-edit"
                      onClick={() => findAndEdit(employee.id_funcionario)}
                    >
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
            ))}
        </tbody>
      </Table>
      <Modal />
    </div>
  );
}
