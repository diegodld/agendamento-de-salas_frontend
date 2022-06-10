import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import EmployeeList from "../list/EmployeeList";
import { RegisterEmployee } from "../controller/EmployeeController.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EmployeeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container">
      <h2>Cadastro de Funcionário</h2>
      <form onSubmit={handleSubmit(RegisterEmployee)}>
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
      <EmployeeList />
    </div>
  );
}
