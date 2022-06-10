import React from "react";
import axios from "../../../../api/axios.js";
import { useEffect, useState } from "react";

export default function SelectTeacher() {
  const [teachers, setTeacher] = useState([]);

  async function getTeachers() {
    const { data } = await axios.get("/teachers");
    setTeacher(data);
  }

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <>
      {teachers.map((teacher) => {
        return (
          <option key={teacher.id_professor} value={teacher.id_professor}>
            {teacher.nome}
          </option>
        );
      })}
    </>
  );
}
