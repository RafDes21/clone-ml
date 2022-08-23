import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Menu from "./Menu";
import "./navres.css";

const NavRes = () => {
  return (
    <div className="navres">
      <div className="login">
        <span>
          <BsPersonCircle />
        </span>
        <div className="texto">
          <h5>Bienvenido</h5>
          <p>Ingresa a tu cuenta para ver tus compras, favoritos, ect.</p>
        </div>
      </div>
      <div className="botones">
      <button className="btn1">Ingresa</button>
      <button className="btn2">Creá tu cuenta</button>
      </div>
      <Menu/>
    </div>
  );
};


export default NavRes;
