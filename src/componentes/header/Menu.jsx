import React from 'react'
import {VscHome, VscVerified, VscCompass, VscCallOutgoing, VscJersey, VscListUnordered, VscTag} from "react-icons/vsc"
import {AiOutlineFileDone} from "react-icons/ai"
import {BsStar, BsBagCheck} from "react-icons/bs"
import {SiHomeassistantcommunitystore} from "react-icons/si"
import {GrDownload} from "react-icons/gr"
import "./menu.css"

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><a href="https://www.mercadolibre.com.ar/"><VscHome/><span>Inicio</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><VscVerified/><span>Ofertas</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><VscCompass/><span>Historial</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><VscCallOutgoing/><span>Ayuda</span></a></li><br/>
            <li><a href="https://www.mercadolibre.com.ar/"><BsBagCheck/><span>Supermercado</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><VscJersey/><span>Moda</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><BsStar/><span>Más vendidos</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><SiHomeassistantcommunitystore/><span>Tiendas oficiales</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><VscListUnordered/><span>Categorias</span></a></li><br/>
            <li><a href="https://www.mercadolibre.com.ar/"><AiOutlineFileDone/><span>Resumen</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><VscTag/><span>Vender</span></a></li>
            <li><a href="https://www.mercadolibre.com.ar/"><GrDownload/><span>¡Comprá y vendé con la app</span></a></li>
        </ul>
    </div>
  )
}

export default Menu