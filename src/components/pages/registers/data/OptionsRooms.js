import React from "react";
import axios from "../../../../api/axios.js";
import { useEffect, useState } from "react";

export default function SelectRooms() {
  const [rooms, setRooms] = useState([]);

  async function getRooms() {
    const { data } = await axios.get("/rooms");
    setRooms(data);
  }

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      {rooms.map((room) => {
        return (
          <option key={room.id_sala} value={room.id_sala}>
            {room.nome}
          </option>
        );
      })}
    </>
  );
}
