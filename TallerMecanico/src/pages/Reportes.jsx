import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

// Componentes de reportes por entidad

import { usePopup } from "../hooks/UsePopUp";
import ReporteClientes from "../components/Custom/ReporteClientes";
import ReporteVehiculos from "../components/Custom/ReporteVehiculos";
import ReporteMecanicos from "../components/Custom/ReporteMecanicos";
import ReporteOrdenesTrabajo from "../components/Custom/ReporteOrdenesTrabajo";

// Estilo de la página de reportes
const ReportesStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .titulo {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .formularioFiltros {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .botonGenerar {
    margin-top: 20px;
  }
`;

function Reportes() {
  const { showPopUp } = usePopup();

  const [entidadSeleccionada, setEntidadSeleccionada] = useState("");
  const [filtroFechaInicio, setFiltroFechaInicio] = useState("");
  const [filtroFechaFin, setFiltroFechaFin] = useState("");

  const handleGenerarReporte = () => {
    // Dependiendo de la entidad seleccionada, se genera el reporte correspondiente
    if (entidadSeleccionada === "clientes") {
      showPopUp(
        <ReporteClientes
          filtros={{ fechaInicio: filtroFechaInicio, fechaFin: filtroFechaFin }}
        />
      );
    } else if (entidadSeleccionada === "vehiculos") {
      showPopUp(
        <ReporteVehiculos
          filtros={{ fechaInicio: filtroFechaInicio, fechaFin: filtroFechaFin }}
        />
      );
    } else if (entidadSeleccionada === "mecanicos") {
      showPopUp(
        <ReporteMecanicos
          filtros={{ fechaInicio: filtroFechaInicio, fechaFin: filtroFechaFin }}
        />
      );
    } else if (entidadSeleccionada === "ordenesTrabajo") {
      showPopUp(
        <ReporteOrdenesTrabajo
          filtros={{ fechaInicio: filtroFechaInicio, fechaFin: filtroFechaFin }}
        />
      );
    }
  };

  return (
    <ReportesStyle>
      <div className="titulo">
        <h1>Generar Reportes</h1>
      </div>

      <div className="formularioFiltros">
        <select
          value={entidadSeleccionada}
          onChange={(e) => setEntidadSeleccionada(e.target.value)}
          placeholder="Seleccionar entidad"
        >
          <option value="">Seleccionar Entidad</option>
          <option value="clientes">Clientes</option>
          <option value="vehiculos">Vehículos</option>
          <option value="mecanicos">Mecánicos</option>
          <option value="ordenesTrabajo">Órdenes de Trabajo</option>
        </select>

        <input
          type="date"
          value={filtroFechaInicio}
          onChange={(e) => setFiltroFechaInicio(e.target.value)}
          placeholder="Fecha de inicio"
        />

        <input
          type="date"
          value={filtroFechaFin}
          onChange={(e) => setFiltroFechaFin(e.target.value)}
          placeholder="Fecha de fin"
        />
      </div>

      <button className="botonGenerar" onClick={handleGenerarReporte}>
        Generar Reporte
      </button>
    </ReportesStyle>
  );
}

Reportes.propTypes = {};

export default Reportes;
