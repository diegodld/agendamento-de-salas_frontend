import React from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Modal from "../form/Modal";
import { RoomContext } from "../context/RoomContext";

export default function RoomList() {
  const { rooms, deleteRoom, findAndEditRoom } = React.useContext(RoomContext);

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
          {rooms &&
            rooms.map((room) => (
              <>
                <tr key={room.id_sala}>
                  <td>{room.nome}</td>
                  <td>{room.chave}</td>
                  <td>
                    <button
                      className="bt-edit"
                      onClick={() => findAndEditRoom(room.id_sala)}
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
            ))}
        </tbody>
      </Table>
      <Modal />
    </div>
  );
}
