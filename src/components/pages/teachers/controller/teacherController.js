import axios from "../../../../api/axios";

const deleteTeacher = async (id) => {
  if (window.confirm("Tem certeza que deseja excluir esse professor? ")) {
    try {
      await axios.delete(`/teachers/${id}`).then((response) => {
        alert(`Registro: ${id} excluido com sucesso!`);
        window.location.reload();
      });
    } catch (error) {
      alert(error);
    }
  }
};

const createTeacher = async (data, e) => {
  try {
    await axios.post("/teachers", data);
    window.alert("Dados cadastrados com sucesso!");
    e.target.reset();
    window.location.reload();
  } catch (error) {
    alert(error);
  }
};

const updateTeacher = async (data, e) => {
  try {
    console.log(data);
    await axios.put(`teachers/`, data);
    alert("Dados atualizados com sucesso!");
    e.target.reset();
    window.location.reload();
  } catch (error) {
    alert(error);
  }
};

export { createTeacher, deleteTeacher, updateTeacher };
