import React from "react";
import Ingresoequipos from "../components/Ingreso";
import '../hoja-de-estilos/Tabla.css'
import '../hoja-de-estilos/Ordentrabajo.css';

export default function Inventarioview(){

    return(
        <>
        <h1 className="titu" >Inventario Equipos</h1>
        <h3 className="subtitu">Médicos - Industriales</h3>
        <Ingresoequipos/>
        </>
    );
}