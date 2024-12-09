import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import TableDisplayer from "../../components/Custom/TableDisplayer";
import { usePopup } from "../../hooks/UsePopUp";
import ClienteAgregarForm from "../../components/Custom/ClienteAgregarForm";
import ClienteEditarForm from "../../components/Custom/ClienteEditarForm";
import ClienteEliminarForm from "../../components/Custom/ClienteEliminarForm";

const ClientesSectionStyle = styled.section``;

function ClientesSection() {
  const { showPopUp } = usePopup();
  const [clientes, setClientes] = useState([]);

  // Cargar datos desde localStorage al montar el componente
  useEffect(() => {
    const storedClientes = JSON.parse(localStorage.getItem("clientes")) || [];
    console.log("Clientes cargados desde localStorage:", storedClientes);
    setClientes(storedClientes);
  }, []);

  // Función para agregar un nuevo cliente
  const agregarCliente = (nuevoCliente) => {
    const updatedClientes = [...clientes, nuevoCliente];
    setClientes(updatedClientes);
    localStorage.setItem("clientes", JSON.stringify(updatedClientes));
  };

  // Función para editar un cliente existente
  const editarCliente = (clienteEditado) => {
    const updatedClientes = clientes.map((cliente) =>
      cliente.rut === clienteEditado.rut ? clienteEditado : cliente
    );
    setClientes(updatedClientes);
    localStorage.setItem("clientes", JSON.stringify(updatedClientes));
  };

  // Función para eliminar un cliente
  const eliminarCliente = (rut) => {
    const updatedClientes = clientes.filter((cliente) => cliente.rut !== rut);
    setClientes(updatedClientes);
    localStorage.setItem("clientes", JSON.stringify(updatedClientes));
  };

  // Función para mostrar el formulario de agregar cliente
  const popUpAgregarCliente = useCallback(() => {
    showPopUp(
      <ClienteAgregarForm
        onAdd={agregarCliente} // Pasar función para agregar clientes
      />
    );
    return true;
  }, [showPopUp, agregarCliente]);

  // Función para mostrar el formulario de editar cliente
  const popUpEditarCliente = useCallback(
    (obj) => {
      console.log("Rut recibido:", obj);
      const { rut } = obj;
      const storedClientes = JSON.parse(localStorage.getItem("clientes")) || [];
      console.log(
        "Clientes cargados desde localStorage para editar:",
        storedClientes
      );

      // Comparar solo el rut
      const clienteSeleccionado = storedClientes.find(
        (cliente) => String(cliente.rut) === String(rut)
      );

      console.log("Cliente encontrado:", clienteSeleccionado);

      if (clienteSeleccionado) {
        showPopUp(
          <ClienteEditarForm
            cliente={clienteSeleccionado}
            onEdit={editarCliente}
          />
        );
      } else {
        alert("Cliente no encontrado");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showPopUp]
  );

  // Función para mostrar el formulario de eliminar cliente
  const popUpEliminarCliente = useCallback(
    (obj) => {

      const {rut} = obj
      const storedClientes = JSON.parse(localStorage.getItem("clientes")) || [];
      console.log("Clientes cargados desde localStorage para eliminar:", storedClientes);
  
      // Buscar el cliente a eliminar por rut
      const clienteSeleccionado = storedClientes.find(
        (cliente) => String(cliente.rut) === String(rut)
      );
  
      console.log("Cliente encontrado:", clienteSeleccionado);
  
      if (clienteSeleccionado) {
        showPopUp(
          <ClienteEliminarForm
            cliente={clienteSeleccionado}
            onDelete={eliminarCliente}
          />
        );
      } else {
        alert("Cliente no encontrado");
      }
    },
    [showPopUp, eliminarCliente]
  );
  

  // Columnas de la tabla
  const columnsClientes = [
    "Rut",
    "Nombre",
    "Apellido paterno",
    "Apellido materno",
    "Telefono",
    "Correo electronico",
    "Vehiculos asociados",
  ];

  // Renderizado de cada fila en la tabla
  const renderItem = (cliente) => (
    <>
      <td>{cliente.rut}</td>
      <td>{cliente.nombre}</td>
      <td>{cliente.apellidoPaterno}</td>
      <td>{cliente.apellidoMaterno}</td>
      <td>{cliente.telefono}</td>
      <td>{cliente.email}</td>
      <td>
        {cliente.vehiculos?.length > 0 ? (
          <ul>
            {cliente.vehiculos.map((vehiculo, index) => (
              <li key={index}>
                {vehiculo.marca} {vehiculo.modelo} ({vehiculo.anio}) - Patente:{" "}
                {vehiculo.patente}
              </li>
            ))}
          </ul>
        ) : (
          "No tiene vehículos"
        )}
      </td>
    </>
  );

  return (
    <ClientesSectionStyle>
      <TableDisplayer
        data={clientes}
        nombreEntidad="cliente"
        columns={columnsClientes}
        renderItem={renderItem}
        popUpAgregar={popUpAgregarCliente}
        popUpEditar={popUpEditarCliente}
        popUpEliminar={popUpEliminarCliente}
      />
    </ClientesSectionStyle>
  );
}

ClientesSection.propTypes = {};

export default ClientesSection;
