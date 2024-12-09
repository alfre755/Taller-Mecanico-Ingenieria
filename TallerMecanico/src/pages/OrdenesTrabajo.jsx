import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import OrdenesTrabajoTableSection from "../sections/Custom/OrdenesTrabajoTableSection";

const OrdenesTrabajoStyle = styled.section`
  display: flex;
  flex-direction: column;

  .titleWrapper {
    text-align: center;

    h1 {
      font-size: 40px;
    }
  }
`;

function OrdenesTrabajo() {
  const objOrdenesTrabajo = [
    {
      fecha: "2024-12-01",
      hora: "10:00",
      descripcion: "Cambio de aceite y revisión general",
      vehiculoAsociado: "Toyota Corolla 2020 - Patente: ABC123",
      mecanicosAsociados: ["Juan Pérez", "Ana González"],
    },
    {
      fecha: "2024-12-02",
      hora: "14:00",
      descripcion: "Reparación de frenos",
      vehiculoAsociado: "Honda Civic 2018 - Patente: DEF456",
      mecanicosAsociados: ["Carlos Martínez"],
    },
    {
      fecha: "2024-12-03",
      hora: "09:00",
      descripcion: "Reemplazo de batería",
      vehiculoAsociado: "Chevrolet Spark 2021 - Patente: GHI789",
      mecanicosAsociados: ["Ana González", "Carlos Martínez"],
    },
  ];
  return (
    <OrdenesTrabajoStyle>
      <div className="titleWrapper">
        <h1>Administracion de ordenes de trabajo</h1>
      </div>
      <OrdenesTrabajoTableSection {...{ ordenesTrabajo: objOrdenesTrabajo }} />
    </OrdenesTrabajoStyle>
  );
}

OrdenesTrabajo.propTypes = {};

export default OrdenesTrabajo;
