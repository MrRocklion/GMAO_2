import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import Grid from '@mui/material/Grid';
import Barchart2 from "../components/Graficapersonal";
import { db } from "../firebase/firebase-config";
import { Input } from "reactstrap";
import '../hoja-de-estilos/Presentacion.css';
import '../hoja-de-estilos/Ordentrabajo.css';
import { Container } from "@mui/material";
import DatosPersonal from "../components/datosTrabajador";


export default function Indicadores() {
    const [nombre, setNombre] = useState("");
    const [reportin, setReportin] = useState([]);
    const [personales, setPersonales] = useState([]);
    const [total, setTotal] = useState([]);
    const [datouser, setDatouser] = useState([]);
    const [indicador, setIndicador]= useState([]);


    const selecCedula = (e) => {
        console.log(e.target.value)
        setNombre(e.target.value);
        const filtrados = reportin.filter(machine => machine.cedulat === e.target.value)
        var reformat = filtrados.map(function (obj) {
            var someDate1 = new Date(obj.fetermino);
            someDate1 = someDate1.getTime();
            var hours1 = someDate1 / (1000 * 60 * 60);
            var someDate2 = new Date(obj.feinicio);
            someDate2 = someDate2.getTime();
            var hours2 = someDate2 / (1000 * 60 * 60);
            var resultado = hours1 - hours2
            return resultado

        });
        var fallos = filtrados.map(function (obj) {
            return [obj.feinicio, obj.fetermino]
        });
        console.log(fallos);
        let total2 = reformat.reduce((a, b) => a + b, 0);
        setTotal([total2]);
    
        var meses = fallos.map(function (fecha) {
            console.log(fecha[1]);
            var someDate1 = new Date(fecha[1]);
            var mes = someDate1.getMonth();
            return mes;
        })
        var datos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        var i = 0;
        for (let value of meses) {

            datos[value] = reformat[i]
            i++
        }
        console.log("total",total2);
        console.log(i);
        const indi=(total2/(160*i))*100;
        console.log(indi)
        // setHorasp(i*160);
        // console.log(horasp)
        setDatouser(datos);
        setIndicador(indi);
    };
 
    const getReportes = () => {
        const internos = query(collection(db, "reportesint"));
        onSnapshot(internos, (querySnapshot) => {
            setReportin(
                querySnapshot.docs.map((doc) => ({ ...doc.data() }))
            );
        });

        const empleados = query(collection(db, "dpersonales"));
        onSnapshot(empleados, (querySnapshot) => {
            setPersonales(
                querySnapshot.docs.map((doc) => ({ ...doc.data() }))
            );
        });
    }

    useEffect(() => {
        getReportes();

    }, [])

    return (
        <>
            <h1 className="titu">INDICADORES PRODUCTIVIDAD</h1>
            <h3 className="subtitu">Productividad Laboral</h3>
            <br />
            <Container >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} md={6}>
                        <select onChange={selecCedula} className="form-select" aria-label="Default select seguro">
                            {personales.map((dato, index) => (<option key={index} value={dato.codigo}>{dato.apellidos}</option>))}
                        </select>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Input
                            readOnly
                            value={nombre}
                            label="Nombre"
                        />
                    </Grid>

                    <Grid itemxs={12} md={6}>
                        <p> Gráfica de Barras</p>

                        <div className="contenedor2 contenedor">
                        <Barchart2 datos={datouser} />
                        </div>              
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DatosPersonal nombre={nombre} total={total} indicador={indicador}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

