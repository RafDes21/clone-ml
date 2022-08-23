import React from "react";
import Tarjetas from "./Tarjetas";
import Cards from "./Cards";
import "./main.css";
import Marcas from "./Marcas";
import Ropas from "./Ropas";
import Populares from "./Populares";
import Historial from "./Historial";

const Main = () => {
  return (
    <main>
      <Tarjetas />

      <div className="bloques">
        <h2>
          Basado en tu última vista
          <a href="https://www.mercadolibre.com.ar/">Ver historial</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques">
        <h2>
          Basado en tu última vista
          <a href="https://www.mercadolibre.com.ar/">Ver historial</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques">
        <h2>
          Relacionados con tu visita en Computacicón
          <a href="https://www.mercadolibre.com.ar/">Ver historial</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques">
        <h2>
          Ofertas <a href="https://www.mercadolibre.com.ar/">Ver todas</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques">
        <h2>
          Beneficios de Mercado Puntos
          <a href="https://www.mercadolibre.com.ar/">
            Ver todos los beneficios
          </a>
        </h2>
        <div className="beneficio">
          <div className="paramount">
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png"
              alt=""
            />
            <div className="descuento">
              <h3>50% OFF</h3>
              <span>Paramount+</span>
            </div>
          </div>
          <div className="beneficio__paramount">
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/widget/paramount-mla-mlc@2x.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="barra">
          <div>
            <img
              src="https://tpc.googlesyndication.com/simgad/7565460944474307068?"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bloques">
        <img src="" alt="" />
      </div>
      <div className="bloques">
        <h2>Descubrí </h2>
        <div className="cajas">
          <div className="caja">
            <div className="caja__ofertas">
              <h4>ZAPATILLAS</h4>
              <p>
                HASTA 25% OFF
                <br /> Y 6X SIN INTERES
              </p>
              <button>Ver más</button>
            </div>
            <img
              src="https://http2.mlstatic.com/D_NQ_783619-MLA51108227590_082022-C.webp"
              alt=""
            />
          </div>
          <div className="caja">
            <div className="caja__ofertas">
              <h4>ESPECIAL PINTURA</h4>
              <p>
                HASTA 15% OFF <br />Y 12X SIN INTERES
              </p>
              <button>Ver más</button>
            </div>
            <img
              src="https://http2.mlstatic.com/D_NQ_870443-MLA51108399411_082022-C.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bloques">
        <h2>
          Relacionado con tus visitas en Electrónica Audio y Video
          <a href="https://www.mercadolibre.com.ar/">Ver historial</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques bloque-marcas">
        <h2>
          Las mejores tiendas te esperan{" "}
          <a href="https://www.mercadolibre.com.ar/">Ver tiendas</a>
        </h2>
        <div className="card-img">
          <Marcas />
        </div>
      </div>
      <div className="bloques">
        <h2>
          Basado en tu carrito de compras
          <a href="https://www.mercadolibre.com.ar/">Ver carrito</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques bloque-ropa">
        <h2>
          Relacionado con tus compras en Ropas y Accesorios
          <a href="https://www.mercadolibre.com.ar/">Ver compras</a>
        </h2>
        <div className="card-img">
          <Ropas />
        </div>
      </div>
      <div className="bloques">
        <h2>Te puede interesar</h2>
        <div className="cajas">
          <div className="caja">
            <div className="caja__ofertas">
              <h4>LIBROS</h4>
              <p>HASTA 10% DE DESCUENTO</p>
              <button>Ver más</button>
            </div>
            <img
              src="https://http2.mlstatic.com/D_NQ_921088-MLA51002363342_082022-C.webp"
              alt=""
            />
          </div>
          <div className="caja">
            <div className="caja__ofertas">
              <h4>GAMMING</h4>
              <p>
                HASTA 20% OFF <br />Y 6X SIN INTERES
              </p>
              <button>Ver más</button>
            </div>
            <img
              src="https://http2.mlstatic.com/D_NQ_777871-MLA50990497747_082022-C.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bloques">
        <h2>
          También puede interesarte
          <a href="https://www.mercadolibre.com.ar/">Ver historial</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques">
        <h2>
          Relacionado con tu última compra
          <a href="https://www.mercadolibre.com.ar/">Ver compras</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques">
        <h2>
          Relacionado con tus compras en Electrónica, Audio y Video
          <a href="https://www.mercadolibre.com.ar/">Ver compras</a>
        </h2>
        <div className="card-img">
          <Cards />
        </div>
      </div>
      <div className="bloques">
        <h2>Categorías populares</h2>
        <div className="card-img">
        <Populares/>
        </div>
      </div>
      <div className="bloques bloque-historial">
        <h2>
          Tu historial
          <a href="https://www.mercadolibre.com.ar/">Ver historial completo</a>
        </h2>
        <div className="card-img">
        <Historial/>
        </div>
      </div>
    </main>
  );
};

export default Main;
