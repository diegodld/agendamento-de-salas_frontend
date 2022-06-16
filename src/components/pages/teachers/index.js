import React, { useEffect } from "react";
import TeacherForm from "./form/TeacherForm";
import TeacherList from "./list/TeacherList";
import { TeacherProvider } from "./context/TeacherContext";

export default function Teachers() {
  useEffect(() => {
    document.title = "Professores";
  }, []);

  return (
    <div className="container">
      <TeacherProvider>
        <TeacherForm />
        <TeacherList />
      </TeacherProvider>
    </div>
  );
}
