import React from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { TeacherContext } from "../context/TeacherContext.js";
import Modal from "../form/Modal";

export default function TeacherList() {
  const { teachers, findAndEditTeacher, deleteTeacher } =
    React.useContext(TeacherContext);

  return (
    <div>
      <h2>Lista de Professores</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {teachers &&
            teachers.map((teacher) => (
              <>
                <tr key={teacher.id_professor}>
                  <td>{teacher.nome}</td>
                  <td>{teacher.telefone}</td>
                  <td>
                    <button
                      className="bt-edit"
                      onClick={() => findAndEditTeacher(teacher.id_professor)}
                    >
                      <BsPencilSquare />
                    </button>
                    <button
                      className="bt-delete"
                      onClick={() => deleteTeacher(teacher.id_professor)}
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
