import React from "react";
import { Cards } from "./Cards/Cards";
import "./Tendencia.css";

export const Tendencia = () => {
  return (
    <div className="tendencia">
      <div className="container">
        <h3 className="seccion-titulo">TENDENCIA</h3>
        <div className="row">
          <Cards />
        </div>
      </div>
    </div>
  );
};
