import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { deleteRoom } from "../controller/RoomController";
import Modal from "./Modal";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getRooms = async () => {
    try {
      const { data } = await axios.get("/rooms");
      setRooms(data);
    } catch (error) {
      alert(error);
    }
  };

  const edit = async (id) => {
    try {
      const { data } = await axios.get(`/rooms/${id}`);
      setData(data);
      setShowModal(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div>
      <h2>Lista de Salas</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Número da Chave</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {rooms ? (
            rooms.map((room) => {
              return (
                <>
                  <tr key={room.id_sala}>
                    <td>{room.nome}</td>
                    <td>{room.chave}</td>
                    <td>
                      <button
                        className="bt-edit"
                        onClick={() => edit(room.id_sala)}
                      >
                        <BsPencilSquare />
                      </button>
                      <button
                        className="bt-delete"
                        onClick={() => deleteRoom(room.id_sala)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <p>Loading rooms...</p>
          )}
        </tbody>
      </Table>
      <Modal close={handleClose} show={showModal} data={data} />
    </div>
  );
}
