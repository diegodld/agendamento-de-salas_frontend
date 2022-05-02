import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import UsersList from "../list/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";

export default function UserForm() {
  useEffect(() => {
    document.title = "Register";
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data, e) {
    axios
      .post("/teachers", data)
      .then(() => {
        alert("Dados cadastrados com sucesso!");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h2>Cadastro de Professor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

      <UsersList />
    </div>
  );
}
