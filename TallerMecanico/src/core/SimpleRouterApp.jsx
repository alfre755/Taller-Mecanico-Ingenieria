import React from "react";
import PT from "prop-types";
import { Route, Routes } from "react-router";
import NotFound from "../pages/Not.Found";
import Clientes from "../pages/Clientes";
import Vehiculos from "../pages/Vehiculos";
import Mecanicos from "../pages/Mecanicos";
import OrdenesTrabajo from "../pages/OrdenesTrabajo";
import Reportes from "../pages/Reportes";

function SimpleRouterApp() {
  return (
    <Routes>
      <Route path="/" exact element={<Clientes />} />
      <Route path="/Vehiculos" exact element={<Vehiculos />} />
      <Route path="/Mecanicos" exact element={<Mecanicos />} />
      <Route path="/OrdenesTrabajo" exact element={<OrdenesTrabajo />} />
      <Route path="/Reportes" exact element={<Reportes />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
}

SimpleRouterApp.propTypes = {};

export default SimpleRouterApp;
