import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import TableDisplayer from "../../components/Custom/TableDisplayer";
import { usePopup } from "../../hooks/UsePopUp";
import VehiculosAgregarForm from "../../components/Custom/VehiculosAgregarForm";
import VehiculosEditarForm from "../../components/Custom/VehiculosEditarForm";
import VehiculosEliminarForm from "../../components/Custom/VehiculosEliminarForm";
import Button from "../../components/Main/Button";

const VehiculosTableSectionStyle = styled.section``;

function VehiculosTableSection({ vehiculos }) {
  const { showPopUp } = usePopup();

  const popUpAgregarVehiculo = useCallback(() => {
    showPopUp(<VehiculosAgregarForm />);
    return true;
  }, [showPopUp]);

  const popUpEditarVehiculo = useCallback(() => {
    showPopUp(<VehiculosEditarForm />);
    return true;
  }, [showPopUp]);

  const popUpEliminarVehiculo = useCallback(() => {
    showPopUp(<VehiculosEliminarForm />);
    return true;
  }, [showPopUp]);

  // Define las columnas para los vehículos
  const columnsVehiculos = [
    "Marca",
    "Modelo",
    "Año",
    "Combustible",
    "Patente",
    "Cliente",
  ];

  // Función para renderizar cada item del vehículo
  const renderItem = (vehiculo) => (
    <>
      <td>{vehiculo.marca}</td>
      <td>{vehiculo.modelo}</td>
      <td>{vehiculo.anio}</td>
      <td>{vehiculo.combustible}</td>
      <td>{vehiculo.patente}</td>
      <td>{vehiculo.cliente}</td>
    </>
  );

  return (
    <VehiculosTableSectionStyle>
      <TableDisplayer
        data={vehiculos}
        nombreEntidad="Vehiculo"
        columns={columnsVehiculos}
        renderItem={renderItem}
        popUpAgregar={popUpAgregarVehiculo}
        popUpEditar={popUpEditarVehiculo}
        popUpEliminar={popUpEliminarVehiculo}
      />
    </VehiculosTableSectionStyle>
  );
}

VehiculosTableSection.propTypes = {
  vehiculos: PropTypes.arrayOf(
    PropTypes.shape({
      marca: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      anio: PropTypes.number.isRequired,
      combustible: PropTypes.string.isRequired,
      patente: PropTypes.string.isRequired,
      cliente: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VehiculosTableSection;
