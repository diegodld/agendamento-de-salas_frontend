import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SelectTeacher() {
  const [teachers, setTeacher] = useState([]);

  async function getUsers() {
    const response = await axios.get("/teachers");
    setTeacher(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {teachers.map((teacher) => {
        return <option value={teacher.id_professor}>{teacher.nome}</option>;
      })}
    </>
  );
}
