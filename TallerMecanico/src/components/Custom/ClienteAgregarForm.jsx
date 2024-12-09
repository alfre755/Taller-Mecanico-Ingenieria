import React, { useState } from "react";
import PropTypes from "prop-types";

function ClienteAgregarForm({ onAdd }) {
  const [cliente, setCliente] = useState({
    rut: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    telefono: "",
    email: "",
    vehiculos: [],
  });

  const [vehiculo, setVehiculo] = useState({
    marca: "",
    modelo: "",
    anio: "",
    tipoCombustible: "",
    patente: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleVehiculoChange = (e) => {
    const { name, value } = e.target;
    setVehiculo({
      ...vehiculo,
      [name]: value,
    });
  };

  const handleAddVehiculo = () => {
    if (
      vehiculo.marca &&
      vehiculo.modelo &&
      vehiculo.anio &&
      vehiculo.tipoCombustible &&
      vehiculo.patente
    ) {
      setCliente({
        ...cliente,
        vehiculos: [...cliente.vehiculos, vehiculo],
      });
      setVehiculo({
        marca: "",
        modelo: "",
        anio: "",
        tipoCombustible: "",
        patente: "",
      }); // Reset vehicle fields
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(cliente); // Agregar cliente al estado principal
    setCliente({
      rut: "",
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      telefono: "",
      email: "",
      vehiculos: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos de cliente */}
      <div>
        <label>
          RUT:
          <input
            type="text"
            name="rut"
            value={cliente.rut}
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
            value={cliente.nombre}
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
            value={cliente.apellidoPaterno}
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
            value={cliente.apellidoMaterno}
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
            value={cliente.telefono}
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
            value={cliente.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

      {/* Campos para vehículo */}
      <h3>Agregar Vehículo</h3>
      <div>
        <label>
          Marca:
          <input
            type="text"
            name="marca"
            value={vehiculo.marca}
            onChange={handleVehiculoChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Modelo:
          <input
            type="text"
            name="modelo"
            value={vehiculo.modelo}
            onChange={handleVehiculoChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Año:
          <input
            type="number"
            name="anio"
            value={vehiculo.anio}
            onChange={handleVehiculoChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Tipo de Combustible:
          <input
            type="text"
            name="tipoCombustible"
            value={vehiculo.tipoCombustible}
            onChange={handleVehiculoChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Patente:
          <input
            type="text"
            name="patente"
            value={vehiculo.patente}
            onChange={handleVehiculoChange}
            required
          />
        </label>
      </div>
      <button type="button" onClick={handleAddVehiculo}>
        Agregar Vehículo
      </button>

      {/* Mostrar vehículos agregados */}
      <div>
        <h4>Vehículos Asociados:</h4>
        <ul>
          {cliente.vehiculos.map((v, index) => (
            <li key={index}>
              {v.marca} {v.modelo} ({v.anio}) - {v.tipoCombustible} - Patente:{" "}
              {v.patente}
            </li>
          ))}
        </ul>
      </div>

      <button type="submit">Agregar Cliente</button>
    </form>
  );
}

ClienteAgregarForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ClienteAgregarForm;
