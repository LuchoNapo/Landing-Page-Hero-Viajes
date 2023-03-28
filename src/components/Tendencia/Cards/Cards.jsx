import React from "react";
import { Card } from "../Card/Card";

import image1 from "/src/assets/img/card_01.png";
import image2 from "/src/assets/img/card_02.png";
import image3 from "/src/assets/img/card_03.png";

export const Cards = () => {
  const cards = [
    {
      id: 1,
      tittle: "Montañas y magia",
      image: image1,
      text: (
        <p>
          Aquí la descripción para{" "}
          <span className="fw-bold">Montañas y magia.</span>
        </p>
      ),
    },
    {
      id: 2,
      tittle: "Playas y sol",
      image: image2,
      text: (
        <p>
          La descripción de <span className="fw-bold"> Playas y sol </span> debe
          ser esta.
        </p>
      ),
    },
    {
      id: 3,
      tittle: "Nieve y aventuras",
      image: image3,
      text: (
        <p>
          Contiene la información de{" "}
          <span className="fw-bold">Nieve y aventura</span>.
        </p>
      ),
    },
  ];

  return (
    <div>
      <div className="">
        <div className="row">
          {cards.map((card) => (
            <div className="col-lg-4 col-12" key={card.id}>
              <Card
                tittle={card.tittle}
                imageSource={card.image}
                text={card.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
