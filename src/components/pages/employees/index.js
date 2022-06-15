import React, { useEffect } from "react";
import EmployeeForm from "./form/EmployeeForm";
import EmployeerList from "./list/EmployeeList";
import { EmployeeProvider } from "./context/EmployeeContext";

export default function Employees() {
  useEffect(() => {
    document.title = "Funcionários";
  });

  return (
    <div className="container">
      <EmployeeProvider>
        <EmployeeForm />
        <EmployeerList />
      </EmployeeProvider>
    </div>
  );
}
