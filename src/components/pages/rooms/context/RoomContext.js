import React from "react";
import axios from "../../../../api/axios.js";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = React.useState();
  const [oneRoomData, setOneRoomData] = React.useState();
  const [showModal, setShowModal] = React.useState(false);

  const getRooms = React.useCallback(async () => {
    const { data } = await axios.get("/rooms");
    setRooms(data);
  }, []);

  React.useEffect(() => {
    getRooms();
  }, [getRooms]);

  const createRoom = async (data, e) => {
    try {
      await axios.post("/rooms", data);
      window.alert("Dados cadastrados com sucesso!");
      e.target.reset();
      getRooms();
    } catch (error) {
      alert(error);
    }
  };

  const updateRoom = async (data, e) => {
    try {
      console.log(data);
      await axios.put(`rooms/`, data);
      alert("Dados atualizados com sucesso!");
      e.target.reset();
      handleCloseModal();
      getRooms();
    } catch (error) {
      alert(error);
    }
  };

  const findAndEditRoom = async (id) => {
    try {
      const { data } = await axios.get(`/rooms/${id}`);
      setOneRoomData(data);
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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        getRooms,
        createRoom,
        updateRoom,
        deleteRoom,
        findAndEditRoom,
        oneRoomData,
        handleCloseModal,
        showModal,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };
