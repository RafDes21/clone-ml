import React from "react";
import "./pagos.css";

const Pagos = () => {
  return (
    <div className="pagos">
      <div className="pagos__caja caja1">
        <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="" />
        <h3>Elegí cómo pagar</h3>
        <p>
          Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
          tarjeta con Mercado Crédito
        </p>
        <h4><a href="https://www.mercadolibre.com.ar/">Cómo pagar tus compras</a></h4>
      </div>
      <div className="pagos__caja caja2">
        <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="" />
        <h3>Envío gratis desde $ 5.500</h3>
        <p>
          Solo por estar registrado en Mercado Libre tenés envíos gratis en
          mmiles de productos. Es un beneficio de Mercado Puntos.
        </p>
         <h4><a href="https://www.mercadolibre.com.ar/">
          Conocé más sobre este beneficio
        </a></h4>
      </div>
      <div className="pagos__caja">
        <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="" />
        <h3>Seguridad, de principio a fin</h3>
        <p>
          ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas
          hacer, porque estás siempre protegido.
        </p>
       <h4><a href="https://www.mercadolibre.com.ar/">Cómo te protegemos</a></h4>
      </div>
    </div>
  );
};

export default Pagos;
