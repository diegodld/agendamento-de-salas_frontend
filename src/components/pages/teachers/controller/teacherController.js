import axios from "../../../../api/axios";

const deleteTeacher = (id) => {
  if (window.confirm("Tem certeza que deseja excluir esse professor? ")) {
    axios.delete("/teachers/" + id).then((response) => {
      alert(`Registro: ${id} excluido com sucesso!`);
      console.log(id);
    });
  }
};

export default deleteTeacher;
