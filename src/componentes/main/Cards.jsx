import React from "react";
import Card from "react-bootstrap/Card";
import "./main.css";

const Cards = () => {
  const productos = [
    {
      id: 1,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_654752-MLA41371596823_042020-V.jpg",
      precio: 69.999,
      descripcion: "productos de la mejor calidad",
    },
    {
      id: 2,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_654752-MLA41371596823_042020-V.jpg",
      precio: 69.999,
      descripcion: "productos de la mejor calidad",
    },
    {
      id: 3,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_654752-MLA41371596823_042020-V.jpg",
      precio: 69.999,
      descripcion: "productos de la mejor calidad",
    },
    {
      id: 4,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_654752-MLA41371596823_042020-V.jpg",
      precio: 69.999,
      descripcion: "productos de la mejor calidad",
    },
    {
      id: 5,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_654752-MLA41371596823_042020-V.jpg",
      precio: 69.999,
      descripcion: "productos de la mejor calidad",
    },
  ];

  return (
    <>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Card className="cards">
            <Card.Img className="img" variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>{producto.precio}</Card.Title>
              <Card.Text>{producto.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>no hay productos</h1>
      )}
    </>
  );
};

export default Cards;
