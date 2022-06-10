import React, { useEffect } from "react";

import RoomForm from "./form/RoomForm";
import RoomList from "./list/RoomList";

export default function Rooms() {
  useEffect(() => {
    document.title = "Salas";
  }, []);

  return (
    <div className="container">
      <RoomForm />
      <RoomList />
    </div>
  );
}
