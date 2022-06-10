import React from "react";
import axios from "../../../../api/axios.js";
import { useEffect, useState, useCallback } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { deleteTeacher } from "../controller/teacherController";
import Modal from "./Modal";

export default function TeacherList() {
  const [teachers, setTeacher] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getTeachers = useCallback(async () => {
    const { data } = await axios.get("/teachers");
    setTeacher(data);
  }, []);

  useEffect(() => {
    getTeachers();
  }, [getTeachers]);

  const edit = async (id) => {
    try {
      const { data } = await axios.get(`/teachers/${id}`);
      setData(data);
      setShowModal(true);
    } catch (error) {
      alert(error);
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
