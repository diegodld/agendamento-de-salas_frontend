import React from "react";
import axios from "../../../../api/axios.js";

const EmployeeContext = React.createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = React.useState();
  const [oneEmployeeData, setOneEmployeeData] = React.useState();
  const [showModal, setShowModal] = React.useState(false);

  const getEmployees = React.useCallback(async () => {
    const { data } = await axios.get("/employees");
    setEmployees(data);
  }, []);

  React.useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const createEmployee = async (data, e) => {
    try {
      await axios.post("/employees", data);
      alert("Dados cadastrados com sucesso!");
      e.target.reset();
      getEmployees();
    } catch (erro) {
      alert(erro);
    }
  };

  const findAndEdit = async (id) => {
    try {
      const { data } = await axios.get(`employees/${id}`);
      setOneEmployeeData(data);
      setShowModal(true);
    } catch (error) {
      alert(error);
    }
  };

  const updateEmployee = async (data, e) => {
    try {
      console.log(data);
      await axios.put(`employees/`, data);
      alert("Dados atualizados com sucesso!");
      e.target.reset();
      handleCloseModal();
      getEmployees();
    } catch (error) {
      alert(error);
    }
  };

  const deleteEmployee = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esse funcionário? ")) {
      try {
        await axios.delete(`/employees/${id}`);
        alert(`Registro: ${id} excluido com sucesso!`);
        getEmployees();
      } catch (erro) {
        alert(erro);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        createEmployee,
        updateEmployee,
        deleteEmployee,
        findAndEdit,
        oneEmployeeData,
        handleCloseModal,
        showModal,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
