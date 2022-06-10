import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import OptionsTeacher from "./data/OptionsTeacher.js";
import OptionsRooms from "./data/OptionsRooms.js";
import OptionsEmployees from "./data/OptionsEmployees.js";

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
            <select {...register("retirado_por", { required: true })}>
              <OptionsTeacher />
            </select>
          </div>
          {errors.retirado_por && <p>Insira um nome</p>}
        </section>
        <section className="field-room">
          <label htmlFor="sala">Sala</label>
          <div className="input-room">
            <select {...register("sala", { required: true })}>
              <OptionsRooms />
            </select>
          </div>
          {errors.sala && <p>Insira a sala</p>}
        </section>
        <section className="field-employee">
          <label htmlFor="sala">Entregue Por</label>
          <div className="input-employee">
            <select {...register("entregue_por", { required: true })}>
              <OptionsEmployees />
            </select>
          </div>
          {errors.entregue_por && <p>selecione</p>}
        </section>

        <Button type="submit" variant="success">
          Adicionar
        </Button>
      </form>
    </div>
  );
}
