import React from "react";
import img1 from "./../../imagenes/imagen3.jpg";
export default function Articulos(props) {
    const {titulo,fecha,descripcion,imagen} = props
    console.log(titulo,fecha,descripcion,imagen);
    return(
        <div className="w3-third w3-container w3-margin-bottom">
            <img src={imagen} alt="Norway" style={{width:"300px", height:"200px"}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
                <h2 className="titulo-articulo">{titulo.slice(0, 50) + "......"}</h2>
                <p className="fecha-articulo"><b>{fecha.slice(0, 10)}</b></p>
                <p className="fecha-articulo">{descripcion.slice(0, 100) + "......"}</p>
            </div>
        </div>
    );
}