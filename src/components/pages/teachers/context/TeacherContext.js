import React from "react";
import axios from "../../../../api/axios.js";

const TeacherContext = React.createContext();

const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = React.useState();
  const [showModal, setShowModal] = React.useState(false);
  const [oneTeacherData, setOneTeacherData] = React.useState();

  const getTeachers = React.useCallback(async () => {
    const { data } = await axios.get("/teachers");
    setTeachers(data);
  }, []);

  React.useEffect(() => {
    getTeachers();
  }, [getTeachers]);

  const createTeacher = async (data, e) => {
    try {
      await axios.post("/teachers", data);
      window.alert("Dados cadastrados com sucesso!");
      e.target.reset();
      getTeachers();
    } catch (error) {
      alert(error);
    }
  };

  const updateTeacher = async (data, e) => {
    try {
      await axios.put(`teachers/`, data);
      alert("Dados atualizados com sucesso!");
      e.target.reset();
      handleCloseModal();
      getTeachers();
    } catch (error) {
      alert(error);
    } finally {
      handleCloseModal();
    }
  };

  const deleteTeacher = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esse professor? ")) {
      try {
        await axios.delete(`/teachers/${id}`).then((response) => {
          alert(`Registro: ${id} excluido com sucesso!`);
          getTeachers();
        });
      } catch (error) {
        alert(error);
      }
    }
  };

  const findAndEditTeacher = async (id) => {
    try {
      const { data } = await axios.get(`/teachers/${id}`);
      setOneTeacherData(data);
      setShowModal(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <TeacherContext.Provider
      value={{
        teachers,
        createTeacher,
        updateTeacher,
        deleteTeacher,
        findAndEditTeacher,
        oneTeacherData,
        handleCloseModal,
        showModal,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export { TeacherContext, TeacherProvider };
