import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import RoomList from "../list/RoomList";
import { createRoom } from "../controller/RoomController.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TeacherForm() {
  useEffect(() => {
    document.title = "Register Room";
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container">
      <h2>Cadastro de Sala</h2>
      <form onSubmit={handleSubmit(createRoom)}>
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
          {errors.nome && <p>Insira uma descrição</p>}
        </section>
        <section className="field-key">
          <label htmlFor="id_sala">Número da Chave</label>
          <div className="id_sala">
            <input
              type="number"
              name="id_sala"
              id="id_sala"
              {...register("id_sala", { required: true })}
            />
          </div>
          {errors.id_sala && <p>Insira o número da chave</p>}
        </section>
        <Button type="submit" variant="success">
          Cadastrar
        </Button>
      </form>

      <RoomList />
    </div>
  );
}
