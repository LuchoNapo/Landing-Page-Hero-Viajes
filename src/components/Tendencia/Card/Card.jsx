import React, { useEffect, useState } from "react";
import "./Card.css";

export const Card = ({ tittle, imageSource, text }) => {

  //Sacar el tamaño actual de la ventana
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  
  //Media Query CSS
  if (tittle != "Montañas y magia" && width < 990) {
    return <div className="card display:none border-0"></div>;
  }

  return (
    <div>
      <div className="card my-4">
        <img src={imageSource} className="card-img-top" alt="foto" />
        <div className="c-body">
          <h6 className="card-tittle fw-bold">{tittle}</h6>
          {(() => {
            if (tittle === "Montañas y magia") {
              return <span className="fw-bold etiqueta">NUEVO</span>;
            }
          })()}
          <div className="card-text">{text}</div>
        </div>
      </div>
    </div>
  );
};
