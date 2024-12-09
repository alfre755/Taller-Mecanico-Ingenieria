import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import MecanicosTableSection from "../sections/Custom/MecanicosTableSection";

const MecanicosStyle = styled.section`
  display: flex;
  flex-direction: column;

  .titleWrapper {
    text-align: center;

    h1 {
      font-size: 40px;
    }
  }
`;

function Mecanicos() {
  const objMecanicos = [
    {
      rut: "12345678-9",
      nombre: "Juan",
      apellidoPaterno: "Pérez",
      apellidoMaterno: "Gómez",
      telefono: "987654321",
      correo: "juan.perez@mail.com",
      ordenesTrabajo: ["Orden 1", "Orden 2"],
    },
    {
      rut: "23456789-0",
      nombre: "Ana",
      apellidoPaterno: "González",
      apellidoMaterno: "Lopez",
      telefono: "912345678",
      correo: "ana.gonzalez@mail.com",
      ordenesTrabajo: ["Orden 3"],
    },
    {
      rut: "34567890-1",
      nombre: "Carlos",
      apellidoPaterno: "Martínez",
      apellidoMaterno: "Sánchez",
      telefono: "934567890",
      correo: "carlos.martinez@mail.com",
      ordenesTrabajo: ["Orden 4", "Orden 5", "Orden 6"],
    },
  ];

  return (
    <MecanicosStyle>
      <div className="titleWrapper">
        <h1>Administración de mecánicos</h1>
      </div>
      <MecanicosTableSection {...{ mecanicos: objMecanicos }} />
    </MecanicosStyle>
  );
}

Mecanicos.propTypes = {};

export default Mecanicos;
