import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ClientesSection from "../sections/Custom/ClientesSection";

const ClientesStyle = styled.section`
  display: flex;
  flex-direction: column;

  .titleWrapper {
    text-align: center;

    h1 {
      font-size: 40px;
    }
  }
`;

function Clientes(props) {
  const objClientes = [
    {
      _id: 1,
      nombre: "Juan Pérez",
      telefono: "+56 9 1234 5678",
      email: "juan.perez@example.com",
      direccion: "Av. Siempre Viva 123, Curicó",
      vehiculos: [
        { marca: "Toyota", modelo: "Corolla", anio: 2020, patente: "XX-1234" },
        { marca: "Chevrolet", modelo: "Spark", anio: 2018, patente: "YY-5678" },
      ],
    },
    {
      _id: 2,
      nombre: "Ana López",
      telefono: "+56 9 8765 4321",
      email: "ana.lopez@example.com",
      direccion: "Calle Falsa 456, Curicó",
      vehiculos: [
        { marca: "Hyundai", modelo: "Tucson", anio: 2021, patente: "AB-7890" },
      ],
    },
    {
      _id: 3,
      nombre: "Carlos Martínez",
      telefono: "+56 9 1111 2222",
      email: "carlos.martinez@example.com",
      direccion: "Pasaje Los Aromos 789, Curicó",
      vehiculos: [],
    },
  ];

  return (
    <ClientesStyle>
      <div className="titleWrapper">
        <h1>Administracion de clientes</h1>
      </div>
      <ClientesSection {...{ clientes: objClientes }} />
    </ClientesStyle>
  );
}

Clientes.propTypes = {};

export default Clientes;
