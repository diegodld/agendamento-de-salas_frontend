import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Button } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import { EmployeeContext } from "../context/EmployeeContext";

export default function Modal() {
  const { showModal, handleCloseModal, oneEmployeeData, updateEmployee } =
    React.useContext(EmployeeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (oneEmployeeData) {
      reset({
        id_funcionario: oneEmployeeData[0].id_funcionario,
        nome: oneEmployeeData[0].nome,
        telefone: oneEmployeeData[0].telefone,
      });
    }
  }, [reset, oneEmployeeData]);

  return (
    <ReactModal
      isOpen={showModal}
      ariaHideApp={false}
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="over-modal"
    >
      <div className="modal-header">
        <h3>Editar Funcionário</h3>
        <button onClick={handleCloseModal}>
          <i className="bt-close">
            <FaWindowClose size={30} />
          </i>
        </button>
      </div>
      <form onSubmit={handleSubmit(updateEmployee)}>
        <section className="field-id">
          <label htmlFor="id">ID </label>
          <input
            id="id"
            type="text"
            readOnly={true}
            {...register("id_funcionario", { required: true })}
          />
        </section>
        <section className="field-name">
          <label htmlFor="nome">Nome</label>
          <div className="input-name">
            <input
              type="text"
              name="nome"
              id="nome"
              autoFocus={true}
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
          {errors.telefone && (
            <p style={{ color: "red" }}>Insira um Telefone</p>
          )}
        </section>
        <Button type="submit" variant="success">
          Atualizar
        </Button>
      </form>
    </ReactModal>
  );
}
