import React, { useEffect } from "react";
import TeacherForm from "./form/TeacherForm";
import TeacherList from "./list/TeacherList";

export default function Teachers() {
  useEffect(() => {
    document.title = "Professores";
  });

  return (
    <div className="container">
      <TeacherForm />
      <TeacherList />
    </div>
  );
}
