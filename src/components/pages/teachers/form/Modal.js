import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Button } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import { TeacherContext } from "../context/TeacherContext";

export default function Modal() {
  const { updateTeacher, showModal, handleCloseModal, oneTeacherData } =
    React.useContext(TeacherContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (oneTeacherData) {
      reset({
        id_professor: oneTeacherData[0].id_professor,
        nome: oneTeacherData[0].nome,
        telefone: oneTeacherData[0].telefone,
      });
    }
  }, [reset, oneTeacherData]);

  return (
    <ReactModal
      isOpen={showModal}
      ariaHideApp={false}
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="over-modal"
    >
      <div className="modal-header">
        <h3>Editar Professor</h3>
        <button onClick={handleCloseModal}>
          <i className="bt-close">
            <FaWindowClose size={30} />
          </i>
        </button>
      </div>
      <form onSubmit={handleSubmit(updateTeacher)}>
        <section className="field-id">
          <label htmlFor="id">ID </label>
          <input
            id="id"
            type="text"
            readOnly={true}
            autoFocus={true}
            {...register("id_professor", { required: true })}
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
          {errors.nome && <p>O campo "nome" é obrigatório.</p>}
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
          {errors.telefone && <p>O campo "Telefone" é obrigatório.</p>}
        </section>
        <Button type="submit" variant="success">
          Atualizar
        </Button>
      </form>
    </ReactModal>
  );
}
