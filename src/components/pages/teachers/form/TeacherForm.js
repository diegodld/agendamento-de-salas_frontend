import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "../../../../api/axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { TeacherContext } from "../context/TeacherContext";

export default function TeacherForm() {
  const { getTeachers } = React.useContext(TeacherContext);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <h2>Cadastro de Professor</h2>
      <form onSubmit={handleSubmit(createTeacher)}>
        <section className="field-name">
          <label htmlFor="nome">Nome</label>
          <div className="input-name">
            <input
              type="text"
              name="nome"
              id="nome"
              {...register("nome", { required: true })}
            />
          </div>
          {errors.nome && <p>Insira um nome</p>}
        </section>
        <section className="field-contact">
          <label htmlFor="telefone">Telefone</label>
          <div className="input-contact">
            <input
              type="text"
              name="telefone"
              id="telefone"
              {...register("telefone", { required: true })}
            />
          </div>
          {errors.telefone && <p>Insira um Telefone</p>}
        </section>
        <Button type="submit" variant="success">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
