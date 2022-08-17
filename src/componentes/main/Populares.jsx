import React from "react";
import "./populares.css";
import { AiFillCar } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { IoIosFootball, IoMdBusiness } from "react-icons/io";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsBicycle } from "react-icons/bs";
import { RiBearSmileFill } from "react-icons/ri";

const Populares = () => {
  const populares = [
    {
      id: 1,
      imagen: <AiFillCar />,
      titulo: "Autos, Motos y Otros.",
    },
    {
      id: 2,
      imagen: <RiComputerLine />,
      titulo: "Computación",
    },
    {
      id: 3,
      imagen: <IoIosFootball />,
      titulo: "Deportes y Fitness",
    },
    {
      id: 4,
      imagen: <IoMdBusiness />,
      titulo: "Inmuebles",
    },
    {
      id: 5,
      imagen: <TbToolsKitchen2 />,
      titulo: "Eletrodomesticos",
    },
    {
      id: 6,
      imagen: <BsBicycle />,
      titulo: "Belleza y Personal",
    },
    {
      id: 7,
      imagen: <RiBearSmileFill />,
      titulo: "Juegos y Juguetes",
    },
  ];
  return (
    <div className="populares">
      <div className="populares-arriba">
        {populares.length > 0 ? (
          populares.map((popular) => (
            <div className="producto">
              <h2>{popular.imagen}</h2>
              <p>{popular.titulo}</p>
            </div>
          ))
        ) : (
          <h1>no hay productos</h1>
        )}
      </div>
      <div className="populares-arriba">
        {populares.length > 0 ? (
          populares.map((popular) => (
            <div className="producto">
              <h2>{popular.imagen}</h2>
              <p>{popular.titulo}</p>
            </div>
          ))
        ) : (
          <h1>no hay productos</h1>
        )}
      </div>
    </div>
  );
};

export default Populares;
