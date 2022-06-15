import React from "react";
import axios from "../../../../api/axios.js";

const EmployeeContext = React.createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = React.useState();

  const getEmployees = React.useCallback(async () => {
    const { data } = await axios.get("/employees");
    setEmployees(data);
  }, []);

  React.useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    <EmployeeContext.Provider value={{ employees, getEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
