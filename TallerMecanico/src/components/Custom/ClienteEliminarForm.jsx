import React from "react";
import PropTypes from "prop-types";

function ClienteEliminarForm({ cliente, onDelete }) {
  const handleDelete = () => {
    // Eliminar el cliente de la lista en localStorage
    const storedClientes = JSON.parse(localStorage.getItem("clientes")) || [];
    const updatedClientes = storedClientes.filter((c) => c.rut !== cliente.rut);
    localStorage.setItem("clientes", JSON.stringify(updatedClientes));

    // Llamar a onDelete para actualizar el estado en el componente padre
    onDelete(cliente.rut);
  };

  return (
    <div>
      <h3>Eliminar Cliente</h3>
      <p>
        ¿Estás seguro de que deseas eliminar al cliente{" "}
        {cliente.nombre} {cliente.apellidoPaterno}?
      </p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

ClienteEliminarForm.propTypes = {
  cliente: PropTypes.shape({
    rut: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    apellidoPaterno: PropTypes.string.isRequired,
    apellidoMaterno: PropTypes.string,
    telefono: PropTypes.string,
    email: PropTypes.string,
    vehiculos: PropTypes.array,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ClienteEliminarForm;
