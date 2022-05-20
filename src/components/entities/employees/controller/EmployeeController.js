import axios from "../../../../api/axios";

const RegisterEmployee = async (data, e) => {
  try {
    await axios.post("/employees", data);
    alert("Dados cadastrados com sucesso!");
    e.target.reset();
  } catch (erro) {
    console.log(erro);
  }
};

const deleteEmployee = async (id) => {
  if (window.confirm("Tem certeza que deseja excluir esse funcionário? ")) {
    try {
      await axios.delete(`/employees/${id}`);
      alert(`Registro: ${id} excluido com sucesso!`);
    } catch (erro) {
      throw erro;
    }
  }
};
export { RegisterEmployee, deleteEmployee };
