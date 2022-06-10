import React, { useEffect } from "react";
import EmployeeForm from "./form/EmployeeForm";
import EmployeerList from "./list/EmployeeList";

export default function Employees() {
  useEffect(() => {
    document.title = "Funcionários";
  });

  return (
    <div className="container">
      <EmployeeForm />
      <EmployeerList />
    </div>
  );
}
