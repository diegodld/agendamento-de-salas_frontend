import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Button } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import { updateRoom } from "../controller/RoomController.js";

export default function Modal({ close, show, data }) {
  console.log(data);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data.length !== 0) {
      reset({
        id_sala: data[0].id_sala,
        nome: data[0].nome,
        chave: data[0].chave,
      });
    }
  }, [reset, data]);

  return (
    <ReactModal
      isOpen={show}
      ariaHideApp={false}
      onRequestClose={close}
      className="modal"
      overlayClassName="over-modal"
    >
      <div className="modal-header">
        <h3>Editar Sala</h3>
        <button onClick={close}>
          <i className="bt-close">
            <FaWindowClose size={30} />
          </i>
        </button>
      </div>
      <form onSubmit={handleSubmit(updateRoom)}>
        <section className="field-id">
          <label htmlFor="id">ID </label>
          <input
            id="id"
            type="text"
            readOnly={true}
            autoFocus={true}
            {...register("id_sala", { required: true })}
          />
        </section>
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
          {errors.nome && <p>O Campo "Descrição" é Obrigatório</p>}
        </section>
        <section className="field-contact">
          <label htmlFor="chave">Chave</label>
          <div className="input-contact">
            <input
              type="text"
              name="chave"
              id="chave"
              {...register("chave", { required: true })}
            />
          </div>
          {errors.chave && <p>O campo "chave" é obrigatório</p>}
        </section>
        <Button type="submit" variant="success">
          Atualizar
        </Button>
      </form>
    </ReactModal>
  );
}
