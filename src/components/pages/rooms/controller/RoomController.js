import axios from "../../../../api/axios";

const createRoom = async (data, e) => {
  try {
    await axios.post("/rooms", data);
    window.alert("Dados cadastrados com sucesso!");
    e.target.reset();
    window.location.reload();
  } catch (error) {
    alert(error);
  }
};

const deleteRoom = async (id) => {
  if (window.confirm("Tem certeza que deseja excluir essa sala?")) {
    try {
      await axios.delete(`/rooms/${id}`);
      window.alert(`Registro: ${id} excluido com sucesso!`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }
};

const updateRoom = async (data, e) => {
  try {
    console.log(data);
    await axios.put(`rooms/`, data);
    alert("Dados atualizados com sucesso!");
    e.target.reset();
    window.location.reload();
  } catch (error) {
    alert(error);
  }
};

export { createRoom, deleteRoom, updateRoom };
