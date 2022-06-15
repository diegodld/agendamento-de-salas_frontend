import React, { useEffect } from "react";

import RoomForm from "./form/RoomForm";
import RoomList from "./list/RoomList";
import { RoomProvider } from "./context/RoomContext";

export default function Rooms() {
  useEffect(() => {
    document.title = "Salas";
  }, []);

  return (
    <div className="container">
      <RoomProvider>
        <RoomForm />
        <RoomList />
      </RoomProvider>
    </div>
  );
}
