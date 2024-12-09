import React, { useCallback } from "react";
import PropTypes from "prop-types";
import TableDisplayer from "../../components/Custom/TableDisplayer"; // Asegúrate de que este path sea el correcto
import { usePopup } from "../../hooks/UsePopUp";
import styled from "@emotion/styled";
import OrdenTrabajoAgregarForm from "../../components/Custom/OrdenTrabajoAgregarForm";
import OrdenTrabajoEditarForm from "../../components/Custom/OrdenTrabajoEditarForm";
import OrdenTrabajoEliminarForm from "../../components/Custom/OrdenTrabajoEliminarForm";

const OrdenesTrabajoTableSectionStyle = styled.section``;

function OrdenesTrabajoTableSection({ ordenesTrabajo }) {
  const { showPopUp } = usePopup();

  // Pop-ups para agregar, editar y eliminar órdenes de trabajo
  const popUpAgregarOrden = useCallback(() => {
    showPopUp(<OrdenTrabajoAgregarForm />);
    return true;
  }, [showPopUp]);

  const popUpEditarOrden = useCallback(() => {
    showPopUp(<OrdenTrabajoEditarForm />);
    return true;
  }, [showPopUp]);

  const popUpEliminarOrden = useCallback(() => {
    showPopUp(<OrdenTrabajoEliminarForm />);
    return true;
  }, [showPopUp]);

  const columnsOrdenesTrabajo = [
    "Fecha",
    "Hora",
    "Descripción",
    "Vehículo Asociado",
    "Mecánicos Asociados",
  ];

  const renderItem = (ordenTrabajo) => (
    <>
      <td>{ordenTrabajo.fecha}</td>
      <td>{ordenTrabajo.hora}</td>
      <td>{ordenTrabajo.descripcion}</td>
      <td>{ordenTrabajo.vehiculoAsociado}</td>
      <td>{ordenTrabajo.mecanicosAsociados.join(", ")}</td>
    </>
  );

  return (
    <OrdenesTrabajoTableSectionStyle>
      <TableDisplayer
        data={ordenesTrabajo}
        nombreEntidad="Orden de trabajo"
        columns={columnsOrdenesTrabajo}
        renderItem={renderItem}
        popUpAgregar={popUpAgregarOrden}
        popUpEditar={popUpEditarOrden}
        popUpEliminar={popUpEliminarOrden}
      />
    </OrdenesTrabajoTableSectionStyle>
  );
}

OrdenesTrabajoTableSection.propTypes = {
  ordenesTrabajo: PropTypes.arrayOf(
    PropTypes.shape({
      fecha: PropTypes.string.isRequired,
      hora: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      vehiculoAsociado: PropTypes.string.isRequired,
      mecanicosAsociados: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default OrdenesTrabajoTableSection;
