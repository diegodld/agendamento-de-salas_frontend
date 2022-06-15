import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../../../api/axios";
import { RoomContext } from "../context/RoomContext";

export default function TeacherForm() {
  const { getRooms } = React.useContext(RoomContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createRoom = async (data, e) => {
    try {
      await axios.post("/rooms", data);
      window.alert("Dados cadastrados com sucesso!");
      e.target.reset();
      getRooms();
    } catch (error) {
      alert(error);
    }
  };

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
