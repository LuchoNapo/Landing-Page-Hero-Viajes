import React from "react";
import { Card } from "../Card/Card";

import { useFetch } from "../../hooks/useFetch";

export const Cards = () => {
  const numRandom = Math.floor(Math.random() * 9);
  const query = "landscape";
  const fetchedData = useFetch(
    `https://api.pexels.com/v1/search?query=${query}&page=3&per_page=${numRandom}`
  );
  console.log(fetchedData.fetchedData.photos?.[2]);

  const imagesURL = [
    fetchedData.fetchedData.photos?.[0].src.tiny,
    fetchedData.fetchedData.photos?.[1].src.tiny,
    fetchedData.fetchedData.photos?.[2].src.tiny,
  ];

  const cards = [
    {
      id: 1,
      tittle: "Montañas y magia",
      image: imagesURL[0],
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
      image: imagesURL[1],
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
      image: imagesURL[2],
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
