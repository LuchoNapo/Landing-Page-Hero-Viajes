import React from "react";
import { Articulos } from "./Articulos/Articulos";
import "./Blog.css";

export const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <h3 className="seccion-titulo">BLOG</h3>
        <div className="row">
          <div className="col-12">
            <Articulos />
          </div>
        </div>
      </div>
    </div>
  );
};
