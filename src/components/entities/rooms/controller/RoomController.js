import axios from "../../../../api/axios";

const createRoom = async (data, e) => {
  try {
    await axios.post("/rooms", data);
    window.alert("Dados cadastrados com sucesso!");
    e.target.reset();
  } catch (error) {
    throw error;
  }
};

const deleteRoom = async (id) => {
  if (window.confirm("Tem certeza que deseja excluir essa sala?")) {
    try {
      await axios.delete(`/rooms/${id}`);
      window.alert(`Registro: ${id} excluido com sucesso!`);
    } catch (error) {
      alert(error);
    }
  }
};

export { createRoom, deleteRoom };
