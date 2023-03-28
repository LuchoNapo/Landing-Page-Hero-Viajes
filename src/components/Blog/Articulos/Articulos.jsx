import React from "react";
import { ArticuloBig } from "/src/components/Blog/Articulos/ArticuloBig/ArticuloBig.jsx";
import { ArticuloSmall } from "/src/components/Blog/Articulos/ArticuloSmall/ArticuloSmall.jsx";
import art1 from "/src/assets/img/articulo_big_01.png";
import art2 from "/src/assets/img/articulo_big_02.png";
import art3 from "/src/assets/img/articulo_small_01.png";
import art4 from "/src/assets/img/articulo_small_02.png";
import art5 from "/src/assets/img/articulo_small_03.png";
import clock from "/src/assets/iconos/time.png";

const articulosBig = [
  {
    id: 1,
    type: "CIUDAD",
    articleOf: "puente",
    description:
      "Un puente es una construcción que permite salvar un accidente geográfico.",
    time: "2m",
    image: art1,
  },
  {
    id: 2,
    type: "AVENTURA",
    articleOf: "bosque",
    description:
      "Lugar poblado de árboles y arbustos. Área con una importante densidad de árboles.",
    time: "15m",
    image: art2,
  },
];
const articulosSmall = [
  {
    id: 3,
    articleOf: "elefante",
    time: "3h",
    image: art3,
  },
  {
    id: 4,
    articleOf: "loro",
    time: "4h",
    image: art4,
  },
  {
    id: 5,
    articleOf: "camino",
    time: "8h",
    image: art5,
  },
];

export const Articulos = () => {
  return (
    <div>
      <div className="row">
        <div className="art-big col-lg-8">
          {articulosBig.map((articuloB) => (
            <ArticuloBig
              key={articuloB.id}
              image={articuloB.image}
              articleOf={articuloB.articleOf}
              type={articuloB.type}
              description={articuloB.description}
              time={articuloB.time}
              clock={clock}
            />
          ))}
        </div>
        <div className="col-4">
          {articulosSmall.map((articuloS) => (
            <ArticuloSmall
              key={articuloS.id}
              articleOf={articuloS.articleOf}
              image={articuloS.image}
              time={articuloS.time}
              clock={clock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
