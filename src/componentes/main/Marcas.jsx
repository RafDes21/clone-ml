import React from "react";
import "./marcas.css";

const Marcas = () => {
  const marcas = [
    {
      id: 1,
      imagen: "img/samsung.jpg",
      logo: "https://http2.mlstatic.com/D_Q_NP_2X_869939-MLA28051336464_082018-AE.webp",
      titulo: "Samsung",
      img1: "https://http2.mlstatic.com/D_Q_NP_2X_645694-MLA49798449746_042022-R.webp",
      img2: "https://http2.mlstatic.com/D_Q_NP_2X_802754-MLA49925816150_052022-R.webp",
      img3: "https://http2.mlstatic.com/D_Q_NP_2X_986281-MLA49326772215_032022-R.webp",
      link: "https://www.mercadolibre.com.ar/",
    },
    {
      id: 2,
      imagen: "img/creciendo.jpg",
      logo: "https://http2.mlstatic.com/D_Q_NP_2X_885288-MLA25803752942_072017-AE.webp",
      titulo: "Creciendo",
      img1: "https://http2.mlstatic.com/D_Q_NP_2X_607502-MLA31351604725_072019-R.webp",
      img2: "https://http2.mlstatic.com/D_Q_NP_2X_787911-MLA51087686666_082022-R.webp",
      img3: "https://http2.mlstatic.com/D_Q_NP_2X_655959-MLA48172534950_112021-R.webp",
      link: "https://www.mercadolibre.com.ar/",
    },
    {
      id: 3,
      imagen: "img/adidas.jpg",
      logo: "https://mla-s1-p.mlstatic.com/687102-MLA45628970987_042021-AE.webp",
      titulo: "Adidas",
      img1: "https://http2.mlstatic.com/D_Q_NP_2X_669955-MLA49052180907_022022-R.webp",
      img2: "https://http2.mlstatic.com/D_Q_NP_2X_676072-MLA50182958905_062022-R.webp",
      img3: "https://http2.mlstatic.com/D_Q_NP_2X_993646-MLA48258348451_112021-R.webp",
      link: "https://www.mercadolibre.com.ar/",
    },
    {
      id: 4,
      imagen: "img/phillips.jpg",
      logo: "https://mla-s1-p.mlstatic.com/902765-MLA43138801201_082020-AE.webp",
      titulo: "Philips",
      img1: "https://http2.mlstatic.com/D_Q_NP_2X_765969-MLA49051720451_022022-R.webp",
      img2: "https://http2.mlstatic.com/D_Q_NP_2X_775512-MLA31120734463_062019-R.webp",
      img3: "https://http2.mlstatic.com/D_Q_NP_2X_930902-MLA43623760984_092020-R.webp",
      link: "https://www.mercadolibre.com.ar/",
    },
  ];
  return (
    <>
      {marcas.length > 0 ? (
        marcas.map((marca) =>
         <div className="marcas">
            <img className="img-top" src={marca.imagen} alt="" />
            <img className="img-logo" src={marca.logo} alt=""  />
           <h4>{marca.titulo}</h4>
           <div className="img-productos">
            <img src={marca.img1} alt="" />
            <img src={marca.img2} alt="" />
            <img src={marca.img3} alt="" />
           </div>
           <h3><a href={marca.link}>Ver tienda</a></h3> 
        </div>
        )) : (
        <h1>no hay productos</h1>
      )}
    </>
  );
};

export default Marcas;
