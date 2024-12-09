import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ClienteEditarForm({ cliente, onEdit }) {
  const [editedCliente, setEditedCliente] = useState({ ...cliente });
  const [editedVehiculo, setEditedVehiculo] = useState(null);

  // Mantener los datos del cliente actualizados cuando el cliente cambia
  useEffect(() => {
    setEditedCliente({ ...cliente });
  }, [cliente]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCliente({
      ...editedCliente,
      [name]: value,
    });
  };

  const handleVehiculoChange = (e) => {
    const { name, value } = e.target;
    setEditedVehiculo({
      ...editedVehiculo,
      [name]: value,
    });
  };

  const handleEditVehiculo = (index) => {
    setEditedVehiculo({ ...editedCliente.vehiculos[index], index });
  };

  const handleSaveVehiculo = () => {
    const updatedVehiculos = [...editedCliente.vehiculos];
    updatedVehiculos[editedVehiculo.index] = {
      marca: editedVehiculo.marca,
      modelo: editedVehiculo.modelo,
      anio: editedVehiculo.anio,
      tipoCombustible: editedVehiculo.tipoCombustible,
      patente: editedVehiculo.patente,
    };
    setEditedCliente({ ...editedCliente, vehiculos: updatedVehiculos });
    setEditedVehiculo(null); // Resetear la edición del vehículo
  };

  const handleDeleteVehiculo = (index) => {
    const updatedVehiculos = editedCliente.vehiculos.filter(
      (_, i) => i !== index
    );
    setEditedCliente({ ...editedCliente, vehiculos: updatedVehiculos });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí se actualiza la lista completa de clientes en el almacenamiento local
    onEdit(editedCliente);

    // Actualizar localStorage con todos los clientes
    const storedClientes = JSON.parse(localStorage.getItem("clientes")) || [];
    const updatedClientes = storedClientes.map((cliente) =>
      cliente.rut === editedCliente.rut ? editedCliente : cliente
    );
    localStorage.setItem("clientes", JSON.stringify(updatedClientes));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Editar Cliente</h3>
      {/* Campos de cliente */}
      <div>
        <label>
          RUT:
          <input
            type="text"
            name="rut"
            value={editedCliente.rut}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={editedCliente.nombre}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellidoPaterno"
            value={editedCliente.apellidoPaterno}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellidoMaterno"
            value={editedCliente.apellidoMaterno}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={editedCliente.telefono}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={editedCliente.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

      {/* Vehículos asociados */}
      <h3>Vehículos Asociados</h3>
      <ul>
        {editedCliente.vehiculos.map((vehiculo, index) => (
          <li key={index}>
            {vehiculo.marca} {vehiculo.modelo} ({vehiculo.anio}) -{" "}
            {vehiculo.tipoCombustible} - Patente: {vehiculo.patente}{" "}
            <button type="button" onClick={() => handleEditVehiculo(index)}>
              Editar
            </button>
            <button type="button" onClick={() => handleDeleteVehiculo(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {editedVehiculo && (
        <div>
          <h4>Editar Vehículo</h4>
          <div>
            <label>
              Marca:
              <input
                type="text"
                name="marca"
                value={editedVehiculo.marca}
                onChange={handleVehiculoChange}
              />
            </label>
          </div>
          <div>
            <label>
              Modelo:
              <input
                type="text"
                name="modelo"
                value={editedVehiculo.modelo}
                onChange={handleVehiculoChange}
              />
            </label>
          </div>
          <div>
            <label>
              Año:
              <input
                type="number"
                name="anio"
                value={editedVehiculo.anio}
                onChange={handleVehiculoChange}
              />
            </label>
          </div>
          <div>
            <label>
              Tipo de Combustible:
              <input
                type="text"
                name="tipoCombustible"
                value={editedVehiculo.tipoCombustible}
                onChange={handleVehiculoChange}
              />
            </label>
          </div>
          <div>
            <label>
              Patente:
              <input
                type="text"
                name="patente"
                value={editedVehiculo.patente}
                onChange={handleVehiculoChange}
              />
            </label>
          </div>
          <button type="button" onClick={handleSaveVehiculo}>
            Guardar Vehículo
          </button>
        </div>
      )}

      <button type="submit">Guardar Cambios</button>
    </form>
  );
}

ClienteEditarForm.propTypes = {
  cliente: PropTypes.shape({
    rut: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    apellidoPaterno: PropTypes.string.isRequired,
    apellidoMaterno: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    vehiculos: PropTypes.arrayOf(
      PropTypes.shape({
        marca: PropTypes.string.isRequired,
        modelo: PropTypes.string.isRequired,
        anio: PropTypes.string.isRequired,
        tipoCombustible: PropTypes.string.isRequired,
        patente: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ClienteEditarForm;
