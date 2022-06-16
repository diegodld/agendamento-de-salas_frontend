import React from "react";
import axios from "../../../../api/axios.js";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { TeacherContext } from "../context/TeacherContext.js";
import Modal from "../form/Modal";

export default function TeacherList() {
  const { teachers, getTeachers } = React.useContext(TeacherContext);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const edit = async (id) => {
    try {
      const { data } = await axios.get(`/teachers/${id}`);
      setData(data);
      setShowModal(true);
    } catch (error) {
      alert(error);
    }
  };

  const deleteTeacher = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esse professor? ")) {
      try {
        await axios.delete(`/teachers/${id}`).then((response) => {
          alert(`Registro: ${id} excluido com sucesso!`);
          getTeachers();
        });
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

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
          {teachers ? (
            teachers.map((teacher) => {
              return (
                <>
                  <tr key={teacher.id_professor}>
                    <td>{teacher.nome}</td>
                    <td>{teacher.telefone}</td>
                    <td>
                      <button
                        className="bt-edit"
                        onClick={() => edit(teacher.id_professor)}
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
              );
            })
          ) : (
            <p>Loading teachers...</p>
          )}
        </tbody>
      </Table>
      <Modal close={handleClose} show={showModal} data={data} />
    </div>
  );
}
