import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { deleteRoom } from "../controller/RoomController";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    try {
      const { data } = await axios.get("/rooms");
      setRooms(data);
    } catch (error) {
      alert(error);
    }
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
                    <td>{room.id_sala}</td>
                    <td>
                      <button className="bt-edit">
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
    </div>
  );
}
