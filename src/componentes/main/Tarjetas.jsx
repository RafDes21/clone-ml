import React from 'react'
import "./main.css"

const Tarjetas = () => {
  return (
    <div className="tarjetas">
        <div className='tarjetas__unicas tarjeta1'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="tarjetaDeCredito"/>
            <div>

            <h3>Tarjeta de crédito</h3>
            <span><a href="https://www.mercadolibre.com.ar/">Ver promociones bancarias</a> </span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta2'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="tarjetaDEDebito"/>
            <div>

            <h3>Tarjeta de débito</h3>
            <span><a href="https://www.mercadolibre.com.ar/">Ver más</a></span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta3'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="cuotas"/>
            <div>

            <h3>Cuotas sin tarjeta</h3>
            <span> <a href="https://www.mercadolibre.com.ar/">Conocé Mercado Crédito</a></span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta4'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="efectivo"/>
            <div>

            <h3>Efectivo</h3>
            <span><a href="Tarjeta de débito">Ver más</a></span>
            </div>
        </div>
        <div className='tarjetas__unicas tarjeta5'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="Ver más" />
        </div>
    </div>
  )
}

export default Tarjetas