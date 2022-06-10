import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createRoom } from "../controller/RoomController.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TeacherForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <h2>Cadastro de Sala</h2>
      <form onSubmit={handleSubmit(createRoom)}>
        <section className="field-name">
          <label htmlFor="nome">Descrição</label>
          <div className="input-name">
            <input
              type="text"
              name="nome"
              id="nome"
              {...register("nome", { required: true })}
            />
          </div>
          {errors.nome && <p>Insira uma descrição</p>}
        </section>
        <section className="field-key">
          <label htmlFor="chave">Número da Chave</label>
          <div className="chave">
            <input
              type="text"
              name="chave"
              id="chave"
              {...register("chave", { required: true })}
            />
          </div>
          {errors.chave && <p>O campo "chave" é obrigatório.</p>}
        </section>
        <Button type="submit" variant="success">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
