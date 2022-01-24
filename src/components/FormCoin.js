import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default function FormCoin({ hijofuncion }) {
  const mostrardatos = () => {
    hijofuncion();
  };

  const [botonsend, setBotonsend] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const enviardatos = (data) => {
    try {
      setBotonsend(true);
      axios
        .post(`http://localhost:3001/crypto`, {
          nombre: data.nombre,
          usd: data.usd
        })
        .then(() => {
          setBotonsend(false);
          mostrardatos();
          reset();
          Swal.fire("Buen trabajo!", "Tu moneda está guardada!", "success");
        })
        .catch((error) => {
          setBotonsend(false);
          Swal.fire("Error!", "Ocurrio un error intentelo mas luego!", "error");
          console.error(error);
        });
    } catch (error) {
      Swal.fire("Error!", "Ocurrio un error intentelo mas luego!", "error");
      setBotonsend(false);
      console.error(error);
    }
  };

  const onSubmit = (data) => {
    enviardatos(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="form-control bg-dark text-light border-0 mt-4"
        placeholder="Nombre de la moneda"
        {...register("nombre", {
          required: {
            value: true,
            message: "nombre es requerido y no debe llevar espacios vacios"
          }
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors.nombre && errors.nombre.message}
      </span>
      <input
        type="number"
        className="form-control bg-dark text-light border-0 mt-4"
        placeholder="Precio de la moneda"
        {...register("usd", {
          required: {
            value: true,
            message: "número es requerido y maximo 9 digitos"
          },
          min: {
            value: 1,
            message: "número mayor a 0"
          }
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors.usd && errors.usd.message}
      </span>

      {botonsend ? (
        <input
          value="Creando Moneda.."
          className="btn btn-outline-success mt-4"
          type="button"
        />
      ) : (
        <input
          value="Crear Moneda"
          className="btn btn-outline-success mt-4"
          type="submit"
        />
      )}
    </form>
  );
}
