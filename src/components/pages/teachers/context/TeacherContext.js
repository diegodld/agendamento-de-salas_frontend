import React from "react";
import axios from "../../../../api/axios.js";

const TeacherContext = React.createContext();

const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = React.useState();

  const getTeachers = React.useCallback(async () => {
    const { data } = await axios.get("/teachers");
    setTeachers(data);
  }, []);

  React.useEffect(() => {
    getTeachers();
  }, [getTeachers]);
  console.log("context render");
  return (
    <TeacherContext.Provider value={{ teachers, getTeachers }}>
      {children}
    </TeacherContext.Provider>
  );
};

export { TeacherContext, TeacherProvider };
