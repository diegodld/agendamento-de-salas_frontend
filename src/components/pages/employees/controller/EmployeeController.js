import axios from "../../../../api/axios";

const RegisterEmployee = async (data, e) => {
  try {
    await axios.post("/employees", data);
    alert("Dados cadastrados com sucesso!");
    e.target.reset();
    window.location.reload();
  } catch (erro) {
    alert(erro);
  }
};

const upadteEmployee = async (data, e) => {
  try {
    console.log(data);
    await axios.put(`employees/`, data);
    alert("Dados atualizados com sucesso!");
    e.target.reset();
    window.location.reload();
  } catch (error) {
    alert(error);
  }
};

const deleteEmployee = async (id) => {
  if (window.confirm("Tem certeza que deseja excluir esse funcionário? ")) {
    try {
      await axios.delete(`/employees/${id}`);
      alert(`Registro: ${id} excluido com sucesso!`);
      window.location.reload();
    } catch (erro) {
      alert(erro);
    }
  }
};
export { RegisterEmployee, deleteEmployee, upadteEmployee };
