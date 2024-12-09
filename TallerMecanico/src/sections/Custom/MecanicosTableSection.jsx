import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import MecanicoAgregarForm from "../../components/Custom/MecanicoAgregarForm";
import MecanicoEditarForm from "../../components/Custom/MecanicoEditarForm";
import MecanicoEliminarForm from "../../components/Custom/MecanicoEliminarForm";
import { usePopup } from "../../hooks/UsePopUp";
import TableDisplayer from "../../components/Custom/TableDisplayer";

const MecanicosTableSectionStyle = styled.section`
  display: flex;
`;

function MecanicosTableSection({ mecanicos }) {
  const { showPopUp } = usePopup();

  const popUpAgregarMecanico = useCallback(() => {
    showPopUp(<MecanicoAgregarForm />);
    return true;
  }, [showPopUp]);

  const popUpEditarMecanico = useCallback(() => {
    showPopUp(<MecanicoEditarForm />);
    return true;
  }, [showPopUp]);

  const popUpEliminarMecanico = useCallback(() => {
    showPopUp(<MecanicoEliminarForm />);
    return true;
  }, [showPopUp]);

  // Define las columnas para los mecánicos
  const columnsMecanicos = [
    "RUT",
    "Nombre",
    "Apellido Paterno",
    "Apellido Materno",
    "Teléfono",
    "Correo Electrónico",
    "Órdenes de Trabajo",
  ];

  // Función para renderizar cada item del mecánico
  const renderItem = (mecanico) => (
    <>
      <td>{mecanico.rut}</td>
      <td>{mecanico.nombre}</td>
      <td>{mecanico.apellidoPaterno}</td>
      <td>{mecanico.apellidoMaterno}</td>
      <td>{mecanico.telefono}</td>
      <td>{mecanico.correo}</td>
      <td>
        {mecanico.ordenesTrabajo.length > 0 ? (
          <ul>
            {mecanico.ordenesTrabajo.map((orden, i) => (
              <li key={i}>{orden}</li>
            ))}
          </ul>
        ) : (
          "Sin órdenes"
        )}
      </td>
    </>
  );

  return (
    <MecanicosTableSectionStyle>
      <TableDisplayer
        data={mecanicos}
        nombreEntidad="Mecanico"
        columns={columnsMecanicos}
        renderItem={renderItem}
        popUpAgregar={popUpAgregarMecanico}
        popUpEditar={popUpEditarMecanico}
        popUpEliminar={popUpEliminarMecanico}
      />
    </MecanicosTableSectionStyle>
  );
}

MecanicosTableSection.propTypes = {
  mecanicos: PropTypes.arrayOf(
    PropTypes.shape({
      rut: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      apellidoPaterno: PropTypes.string.isRequired,
      apellidoMaterno: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired,
      correo: PropTypes.string.isRequired,
      ordenesTrabajo: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default MecanicosTableSection;
