import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import VehiculosTableSection from "../sections/Custom/VehiculosTableSection";

const VehiculosStyle = styled.section`
  display: flex;
  flex-direction: column;

  .titleWrapper {
    text-align: center;
    h1 {
      font-size: 40px;
    }
  }
`;

function Vehiculos(props) {
  const objVehiculos = [
    {
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2020,
      combustible: "Gasolina",
      patente: "ABC123",
      cliente: "Juan Pérez", // Nombre del cliente (dueño)
    },
    {
      marca: "Ford",
      modelo: "Focus",
      anio: 2018,
      combustible: "Diesel",
      patente: "XYZ456",
      cliente: "Ana Gómez", // Nombre del cliente (dueño)
    },
    {
      marca: "Chevrolet",
      modelo: "Cruze",
      anio: 2021,
      combustible: "Gasolina",
      patente: "LMN789",
      cliente: "Carlos López", // Nombre del cliente (dueño)
    },
  ];

  return (
    <VehiculosStyle>
      <div className="titleWrapper">
        <h1>Administracion de vehiculos</h1>
      </div>
      <VehiculosTableSection {...{ vehiculos: objVehiculos }} />
    </VehiculosStyle>
  );
}

Vehiculos.propTypes = {};

export default Vehiculos;
