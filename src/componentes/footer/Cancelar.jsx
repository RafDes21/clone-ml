import React from "react";
import "./cancelar.css";

const Cancelar = () => {
  return (
    <div className="cancelar">
      <div className="cancelar__caja">
        <ul>
          <li className="distinto"><a href="https://www.mercadolibre.com.ar/">Bóton de arrepentimmiento</a></li>
          <li><a href="https://www.mercadolibre.com.ar/">Cancelar una compra</a></li>
          <li><a href="https://www.mercadolibre.com.ar/">Cancelar una suscripción</a></li>
          <li><a href="https://www.mercadolibre.com.ar/">Cancelar un seguro o garantía</a></li>
        </ul>
      </div>
      <div className="cancelar__caja">
        <p>Conocé las normas que aplican cuando compras</p>
        <h4><a href="https://www.mercadolibre.com.ar/">Ver contratos - Ley N.°24.240 de Defensa del Consumidor</a></h4>
      </div>
    </div>
  );
};

export default Cancelar;
