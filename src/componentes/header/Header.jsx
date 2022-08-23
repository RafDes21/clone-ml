import React, { useState } from "react";
import NavBar from "./NavBar";
import {IoIosSearch} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi"
import "./header.css"
import NavRes from "./NavRes";

const Header = () => {
  const [navbar, setNavbar]=useState(false)
  const [header, setHeader]=useState("container-fluid")
  const toogler =()=>{
    navbar === true ? setNavbar(false) : setNavbar(true)
    header === "container-fluid" ? setHeader("header") : setHeader("container-fluid")
  }
  return (
    <div className={header}>
      <header >
        <div className="container__arriba">
            <img className="logo-secundario" src="https://www.expoknews.com/wp-content/uploads/2020/03/1200px-MercadoLibre.svg-1.png" alt="logo"/>
            <img className="logo" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus@2x.png" alt="logo" />
            <div className="buscador">
                 <input type="text" placeholder="Buscar productos, marcas y más..."/><span><IoIosSearch/></span>
            </div>
            <img className="logo2" src="https://http2.mlstatic.com/D_NQ_756491-MLA48681720059_122021-OO.webp" alt="logo2"  />
            <div className="toogler" onClick={toogler}>
              <GiHamburgerMenu/>
            </div>
        </div>
        <div className="container__abajo">
            <NavBar/>
        </div>
        <div>
        {navbar ? (
          <NavRes/>
          ) :(
          <></>
        )
        }

        </div>
      </header>
    </div>
  );
};
export default Header;


