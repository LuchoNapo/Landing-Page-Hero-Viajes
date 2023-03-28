import React from "react";
import "./Home.css";
import pin from "/src/assets/iconos/ic_pin.png";
import nav_slider from "/src/assets/iconos/nav_slider.png";
import arrow from "/src/assets/iconos/arrow.png";

export const Home = () => {
  return (
    <div className="home">
      <div className="section container-fluid">
        <div className="row">
          <div className="portada-container col-12">
            <div className="portada-principal row">
              <div className=" portada-tittle gap-3">
                <img src={pin} alt="" />
                <div className="">AMERICA DEL SUR</div>
              </div>
              <div className="row">
                <div className="linea-horizontal"></div>
              </div>

              <div className="portada-subtittle">
                Lugares maravillosos por America del Sur
              </div>
              <div className="portada-body">
                Estos son algunos lugares que eligen la mayoria de los turistas{" "}
                <br />
                que visitan America del Sur.
              </div>
            </div>
          </div>
        </div>
        <div className="portada-baja row">
          <div className="contenedor-slider col-lg-6 col-md-6">
            <img className="slider" src={nav_slider} alt="" />
          </div>
          <div className="contenedor-de-rectangulo col-lg-6 col-md-6">
            <div className="rectangulo">
              <div className="rectangulo-tittle gap-4">
                <div>PRÓXIMA AVENTURA</div>
                <img src={arrow} alt="" />
              </div>
              <div className="rectangulo-subtittle">Europa Meridional</div>
              <div className="rectangulo-body">
                Forman parte veinte pises, <br /> ej España, Francias, etc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
