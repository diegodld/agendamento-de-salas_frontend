import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import OptionsTeacher from "./OptionsTeacher.js";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data, e) {
    // axios
    //   .post("/registers", data)
    //   .then(() => {
    //     alert("Dados cadastrados com sucesso!");
    //     e.target.reset();
    //   })
    //   .catch((err) => console.log(err));
    e.target.reset();
    console.log(data);
  }

  return (
    <div className="container">
      <h2>Requisições</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="field-teacher">
          <label htmlFor="nome">Professor</label>
          <div className="select-teacher">
            <select {...register("nome", { required: true })}>
              <OptionsTeacher />
            </select>
          </div>
          {errors.nome && <p>Insira um nome</p>}
        </section>
        <section className="field-teacher">
          <label htmlFor="sala">Sala</label>
          <div className="input-contact">
            <input
              type="text"
              name="telefone"
              id="telefone"
              {...register("sala", { required: true })}
            />
          </div>
          {errors.telefone && <p>Insira um Telefone</p>}
        </section>
        <Button type="submit" variant="success">
          Adicionar
        </Button>
      </form>
    </div>
  );
}
