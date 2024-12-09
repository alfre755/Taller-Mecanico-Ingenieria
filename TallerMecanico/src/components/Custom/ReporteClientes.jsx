import React from "react";
import PropTypes from "prop-types";

function ReporteClientes({ filtros }) {
  // Aquí podrías traer los datos de los clientes desde un API o servicio y aplicarle los filtros

  return (
    <div>
      <h2>Reporte de Clientes</h2>
      <p>Fecha de inicio: {filtros.fechaInicio}</p>
      <p>Fecha de fin: {filtros.fechaFin}</p>
      {/* Aquí renderizas la tabla o el reporte con los datos filtrados */}
    </div>
  );
}

ReporteClientes.propTypes = {
  filtros: PropTypes.shape({
    fechaInicio: PropTypes.string.isRequired,
    fechaFin: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReporteClientes;
