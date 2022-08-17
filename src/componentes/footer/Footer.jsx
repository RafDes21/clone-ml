import React from 'react'
import Pagos from './Pagos'
import "./footer.css"
import Cancelar from './Cancelar'

const Footer = () => {
  return (
    <div className='footer'>
        <Pagos/>
        <Cancelar/>
        <div className='derechos'>
            <h2>Esta página es creada a modo de educación</h2>
        </div>
    </div>
  )
}

export default Footer