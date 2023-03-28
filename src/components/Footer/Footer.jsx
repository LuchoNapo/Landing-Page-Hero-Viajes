import React from "react";
import logo from "/src/assets/logo/logo_02.png";
import face from "/src/assets/iconos/facebook.png";
import insta from "/src/assets/iconos/instagram.png";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <div className="d-flex redes gap-4">
        <img src={insta} alt="" />
        <img src={face} alt="" />
      </div>
    </div>
  );
};
