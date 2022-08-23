import React, { useState } from 'react'
import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai"
import "./tarjetas.css"

const Tarjetas = () => {
    const [ancho, setAncho]=useState("0")
const avanzar = () => {
    ancho === "0" ? (setAncho("-100%")):<></>;
    ancho === "-100%" ? setAncho("-200%"): <></>;
    ancho === "-200%" ? setAncho("-300%"): <></>;

}
const retroceder = () => {
    ancho === "-300%" ? (setAncho("-200%")):<></>;
    ancho === "-200%" ? setAncho("-100%"): <></>;
    ancho === "-100%" ? setAncho("0"): <></>;
    
}
  return (
    <div className="tarjetas">
        <div className='control'>
        <div className='avanzar' onClick={avanzar}><AiFillCaretRight/></div>
        <div className='retroceder' onClick={retroceder}><AiFillCaretLeft/></div>
        </div>
        <div className='tarjet-contenedor' style={{ marginLeft:ancho}}>
        <div className='tarjetas__unicas tarjeta1'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="tarjetaDeCredito"/>
            <div className='tarjet'>

            <h3>Tarjeta de crédito</h3>
            <span><a href="https://www.mercadolibre.com.ar/">Ver promociones bancarias</a> </span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta2'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="tarjetaDEDebito"/>
            <div className='tarjet'>

            <h3>Tarjeta de débito</h3>
            <span><a href="https://www.mercadolibre.com.ar/">Ver más</a></span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta3'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="cuotas"/>
            <div className='tarjet'>

            <h3>Cuotas sin tarjeta</h3>
            <span> <a href="https://www.mercadolibre.com.ar/">Conocé Mercado Crédito</a></span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta4'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="efectivo"/>
            <div className='tarjet'>

            <h3>Efectivo</h3>
            <span><a href="Tarjeta de débito">Ver más</a></span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta5'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="Ver más" />
        </div>

        </div>
        
    </div>
  )
}

export default Tarjetas