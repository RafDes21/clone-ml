import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import {BsCart2, BsPersonCircle} from "react-icons/bs"
import {VscBell} from "react-icons/vsc"

const NavBar = () => {
  return (
    <>
      <div className="container__abajo-direccion">
        <span className="locacion"><IoLocationOutline /></span>
        <span className="envio">Enviar a fulano </span> <span className="direccion">Dirección</span> 
        <span className="envioCapital">Enviar a Capital Federal</span>
      </div>
      <div className="navegacion">
        <ul>
          <li><a href="https://www.mercadolibre.com.ar" rel="noopener noreferrer" >Categorias</a></li>
          <li><a href="https://www.mercadolibre.com.ar" rel="noopener noreferrer">Ofertas</a></li>
          <li><a href="https://www.mercadolibre.com.ar" rel="noopener noreferrer">Historial</a></li>
          <li><a href="https://www.mercadolibre.com.ar" rel="noopener noreferrer">Supermercado</a></li>
          <li><a href="https://www.mercadolibre.com.ar" rel="noopener noreferrer">Moda</a></li>
          <li><a href="https://www.mercadolibre.com.ar" rel="noopener noreferrer">Vender</a></li>
          <li><a href="https://www.mercadolibre.com.ar" rel="noopener noreferrer">Ayuda</a></li>
          
        </ul>
      </div>
      <div className="datos">
       <span className="logo-persona"> <BsPersonCircle/></span> <span className="fulano">Fulano</span><span>Mis compras</span><span>Favoritos</span><span className="logo-bell"><VscBell/></span><span className="logo-car"><BsCart2/></span>
      </div>
      <span className="cart"><BsCart2/></span>
     
    </>
  );
};

export default NavBar;
