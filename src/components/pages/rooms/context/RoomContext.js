import React from "react";
import axios from "../../../../api/axios.js";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = React.useState();

  const getRooms = React.useCallback(async () => {
    const { data } = await axios.get("/rooms");
    setRooms(data);
  }, []);

  React.useEffect(() => {
    getRooms();
  }, [getRooms]);
  console.log("context render");
  return (
    <RoomContext.Provider value={{ rooms, getRooms }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };
