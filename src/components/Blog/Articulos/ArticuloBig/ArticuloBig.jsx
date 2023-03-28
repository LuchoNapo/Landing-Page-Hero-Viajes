import React from "react";
import "./ArticuloBig.css";

export const ArticuloBig = ({
  articleOf,
  type,
  description,
  time,
  image,
  clock,
}) => {
  return (
    <div className="articulo">
      <p className="item tipo fw-bold">{type}</p>
      <div className="image-container">
        <img className="image" src={image} alt="img-artc" />
      </div>
      <h3 className="item col-12 articleOf fw-bold">Artículo de un {articleOf}</h3>
      <p className="item description">{description}</p>
      <div className="time gap-2">
        <img className="time-icon" src={clock} alt="time" />
        <p className="time-text">Hace {time}</p>
      </div>
    </div>
  );
};
