import React from "react";
import axios from "../../../../api/axios.js";
import { useEffect, useState } from "react";

export default function SelectEmployees() {
  const [employees, setEmployees] = useState([]);

  async function getEmployees() {
    const { data } = await axios.get("/employees");
    setEmployees(data);
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      {employees.map((employee) => {
        return (
          <option key={employee.id_funcionario} value={employee.id_funcionario}>
            {employee.nome}
          </option>
        );
      })}
    </>
  );
}
