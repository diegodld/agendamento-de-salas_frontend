import React, { useState } from "react";
import axios from "../../../../api/axios";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Modal from "../form/Modal";
import { RoomContext } from "../context/RoomContext";

export default function RoomList() {
  const { rooms, getRooms } = React.useContext(RoomContext);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const edit = async (id) => {
    try {
      const { data } = await axios.get(`/rooms/${id}`);
      setData(data);
      setShowModal(true);
    } catch (error) {
      alert(error);
    }
  };

  const deleteRoom = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir essa sala?")) {
      try {
        await axios.delete(`/rooms/${id}`);
        window.alert(`Registro: ${id} excluido com sucesso!`);
        getRooms();
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
