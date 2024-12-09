import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../Main/Button";
import { usePopup } from "../../hooks/UsePopUp";

const TableDisplayerStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  flex-grow: 1;

  .tableHeader {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    width: 100%;
  }

  .titleWrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  .buttonHeader {
    padding: 5px 15px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
  }

  th {
    background-color: #f1f1f1;
    font-weight: bold;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #fff;
  }

  .buttonsWrapper {
    display: flex;
    gap: 10px;
    justify-content: center;

    button {
      padding: 5px 15px;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

function TableDisplayer({
  data,
  nombreEntidad,
  columns,
  renderItem,
  popUpAgregar,
  popUpEditar,
  popUpEliminar,
}) {
  return (
    <TableDisplayerStyle>
      <div className="tableHeader">
        <Button className="buttonHeader" type={5} onClick={popUpAgregar}>
          Agregar nuevo {nombreEntidad}
        </Button>
        <div className="titleWrapper">
          <h2>Lista de {nombreEntidad}s</h2>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {renderItem(item)}
              <td>
                <div className="buttonsWrapper">
                  <Button type={5} onClick={() => popUpEditar(item)}>
                    Editar
                  </Button>
                  <Button type={5} onClick={() => popUpEliminar(item)}>
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableDisplayerStyle>
  );
}

TableDisplayer.propTypes = {
  data: PropTypes.array.isRequired,
  nombreEntidad: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderItem: PropTypes.func.isRequired,
  popUpAgregar: PropTypes.func.isRequired,
  popUpEditar: PropTypes.func.isRequired,
  popUpEliminar: PropTypes.func.isRequired,
};

export default TableDisplayer;
