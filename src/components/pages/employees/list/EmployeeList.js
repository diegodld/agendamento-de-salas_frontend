import React from "react";
import axios from "../../../../api/axios.js";
import { useEffect, useState, useCallback } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { deleteEmployee } from "../controller/EmployeeController.js";
import Modal from "../form/Modal.js";

export default function EmployeerList() {
  const [employees, setEmployees] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getEmployees = useCallback(async () => {
    const { data } = await axios.get("/employees");
    setEmployees(data);
  }, []);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const edit = async (id) => {
    const response = await axios.get(`employees/${id}`);
    const { data } = response;
    setData(data);
    console.log(data);
  };

  const handleEdit = (id) => {
    setShowModal(true);
    edit(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

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
                      <button
                        className="bt-edit"
                        onClick={() => handleEdit(employee.id_funcionario)}
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
              );
            })
          ) : (
            <p>Loading employees...</p>
          )}
        </tbody>
      </Table>
      <Modal close={handleClose} show={showModal} data={data} />
    </div>
  );
}