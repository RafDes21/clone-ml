import React from "react";
import NavBar from "./NavBar";
import {IoIosSearch} from "react-icons/io";
import "./header.css"

const Header = () => {
  return (
    <div className="container-fluid">
      <header>
        <div className="container__arriba">
            <img className="logo" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus@2x.png" alt="logo" />
            <div className="buscador">
            <input type="text" placeholder="Buscar productos, marcas y más..."/><span><IoIosSearch/></span>
            </div>
            <img className="logo2" src="https://http2.mlstatic.com/D_NQ_756491-MLA48681720059_122021-OO.webp" alt="logo2"  />
        </div>
        <div className="container__abajo">
            <NavBar/>
        </div>
      </header>
    </div>
  );
};
export default Header;


