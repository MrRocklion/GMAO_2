import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { db } from "../firebase/firebase-config";
import { v4 as uuidv4 } from 'uuid';
import { Container } from "reactstrap";
import Grid from "@mui/material/Grid";
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import { collection, setDoc, query, doc, onSnapshot } from "firebase/firestore";
import '../hoja-de-estilos/Ordentrabajo.css';

export default function Ordentrabajoview() {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [prioridad1, setPrioridad1] = useState('');
  const [tipotrabajo, setTipotrabajo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [problematica, setProblematica] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [currentuid ,setCurrentuid] = React.useState([{correo:'cargando..',uid: 'cargando..',ordenes:false}]);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: 3,
  };

  const getData = () =>{
    const reference = query(collection(db, "usuario"));
    onSnapshot(reference, (querySnapshot) => {
        console.log(querySnapshot.docs)
        setCurrentuid(
            querySnapshot.docs.map((doc) => ({ ...doc.data() }))
        );

    });
}
console.log(currentuid)
  const handleOpen = () => {
    setModal1(true);
  };
  const handleClose = () => {
    setModal1(false);
  };
  const handleOpen2 = () => {
    setModal2(true);
  };
  const handleClose2 = () => {
    setModal2(false);
    setModal1(false);
    if(currentuid[0].uid === "akD6lbAK3ngeChavoYU6Kg7GKNI3"){
      navigate('/externos/home')
    }
    if(currentuid[0].uid === 'kEjcItjveTZKOPCTHVzUAXUNoyR2'){
      navigate('/inventario/home')
    }
    if(currentuid[0].uid === 'TS3QouZOApgtdoTiSc3giotXDmr1'){
      navigate('/compras/home')
    }
    if(currentuid[0].uid === 'd6E6U8EmGoO59w6NigHhrZx3vTw2' ){
      navigate('/compras/home')
    }
    if(currentuid[0].uid === 'qyA0iGnJYCeaW2z7NVwNtkKpaMb2'){
      navigate('/orden/home')
    }
    if(currentuid[0].uid=== 'LJdzQIBTv5cQhkxUWuj2Lhq1rz72'){
      navigate('/personal/home')
    }
    if(currentuid[0].uid === 'pJr295Xo0xgcntGd1uv6wd3RvZG3'){
      navigate('/personal/home')
    }
  };
  const handleClose3 = () => {
    setModal2(false);
  };

  const regresar = () => {
    if(currentuid[0].uid === "akD6lbAK3ngeChavoYU6Kg7GKNI3"){
      navigate('/externos/home')
    }
    if(currentuid[0].uid === 'kEjcItjveTZKOPCTHVzUAXUNoyR2'){
      navigate('/inventario/home')
    }
    if(currentuid[0].uid === 'TS3QouZOApgtdoTiSc3giotXDmr1'){
      navigate('/compras/home')
    }
    if(currentuid[0].uid === 'd6E6U8EmGoO59w6NigHhrZx3vTw2' ){
      navigate('/compras/home')
    }
    if(currentuid[0].uid === 'qyA0iGnJYCeaW2z7NVwNtkKpaMb2'){
      navigate('/orden/home')
    }
    if(currentuid[0].uid=== 'LJdzQIBTv5cQhkxUWuj2Lhq1rz72'){
      navigate('/personal/home')
    }
    if(currentuid[0].uid === 'pJr295Xo0xgcntGd1uv6wd3RvZG3'){
      navigate('/personal/home')
    }
  };

  const enviardatos = () => {
    var val = Date.now();
    var val2 = new Date(val);
    var val3 = val2.toLocaleDateString("en-US");
    console.log(val);
    console.log(val3);
    if (cedula !== '' && departamento !== '' && prioridad1 !== '' && tipotrabajo !== '' && asunto !== '' && problematica !== '') {
      var orden = {
        fecha: val3,
        indice: val,
        cedula: cedula,
        departamento: departamento,
        prioridad1: prioridad1,
        tipotrabajo: tipotrabajo,
        asunto: asunto,
        problematica: problematica,
        observaciones: observaciones,
        estado: "Pendiente",
        id: uuidv4(),
      }
      sendFirestore(orden);
      handleOpen();
      setCedula("");
      setAsunto("");
      setProblematica("");
      setObservaciones("");
    } else {
      console.log('faltan campos');
      var opcion = window.confirm("Faltan Campos. Por favor complete toda la informacion de las casillas en ROJO. ");
      if (opcion === true) {
        if(currentuid[0].uid === "akD6lbAK3ngeChavoYU6Kg7GKNI3"){
          navigate('/externos/home/OTS')
        }
        if(currentuid[0].uid === 'kEjcItjveTZKOPCTHVzUAXUNoyR2'){
          navigate('/inventario/home/OTS')
        }
        if(currentuid[0].uid === 'TS3QouZOApgtdoTiSc3giotXDmr1'){
          navigate('/compras/home/OTS')
        }
        if(currentuid[0].uid === 'd6E6U8EmGoO59w6NigHhrZx3vTw2' ){
          navigate('/compras/home/OTS')
        }
        if(currentuid[0].uid === 'qyA0iGnJYCeaW2z7NVwNtkKpaMb2'){
          navigate('/orden/home/OTS')
        }
        if(currentuid[0].uid=== 'LJdzQIBTv5cQhkxUWuj2Lhq1rz72'){
          navigate('/personal/home/OTS')
        }
        if(currentuid[0].uid === 'pJr295Xo0xgcntGd1uv6wd3RvZG3'){
          navigate('/personal/home/OTS')
        }
      }
    };
  };

  const sendFirestore = (orden) => {
    try {
      setDoc(doc(db, "ordenes", `${orden.id}`), orden);
      console.log("Orden agregada")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <> 
    {/* hola sami by david :3 */}
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h1 className="titu">Orden de Trabajo</h1>
          </Grid>
          {/* <Grid item xs={12}>
            <p className="texto1"> El formulario en línea constará de 4 secciones que permitirán determinar los problemas y atender adecuadamente la solicitud. Por favor, responda todos los campos de manera específica. </p>
          </Grid> */}
          <Grid item xs={6}>
            <TextField value={cedula} color={cedula !== '' ? "gris" : "oficial"} fullWidth label="Cédula del solicitante" focused type="int" onChange={(e) => setCedula(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disableClearable
              id="combo-box-demo"
              options={departamentos}
              onChange={(event, newvalue) => setDepartamento(newvalue.label)}
              renderInput={(params) => <TextField {...params} fullWidth label="Departamento Solicitante" color={departamento !== '' ? "gris" : "oficial"} type="text" focused />}
            />
            {/* <p className="pregunta">Seleccionar el departamento</p> */}
            {/* <select onChange={(e) => { setDepartamento(e.target.value) }} label="Departamento Solicitante"className="form-select" aria-label="Default select tipo">
              <option value="Emergencia">Emergencia</option>
              <option value="Ambulancia">Ambulancia</option>
              <option value="Farmacia">Farmacia</option>
            </select> */}
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disableClearable
              id="combo-box-demo"
              options={prioridad}
              onChange={(event, newvalue) => setPrioridad1(newvalue.label)}
              renderInput={(params) => <TextField {...params} fullWidth label="Prioridad del trabajo" color={prioridad1 !== '' ? "gris" : "oficial"} type="text" focused />}
            />
            {/* <p className="pregunta1">Seleccionar la prioridad del trabajo</p>
            <select onChange={(e) => { setPrioridad1(e.target.value) }} className="form-select" aria-label="Default select tipo">
              <option value="Media (Menor a 15 días)">Media "Menor a 15 días"</option>
              <option value="Alta (Menor a 7 días)">Alta "Menor a 7 días"</option>
              <option value="Crítica (EMERGENCIA)">Crítica "EMERGENCIA"</option>
            </select> */}
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disableClearable
              id="combo-box-demo"
              options={tipos}
              onChange={(event, newvalue) => setTipotrabajo(newvalue.label)}
              renderInput={(params) => <TextField {...params} fullWidth label="Tipo de trabajo requerido" color={tipotrabajo !== '' ? "gris" : "oficial"} type="text" focused />}
            />
            {/* <p className="pregunta2">Seleccionar el tipo de trabajo requerido</p>
            <select onChange={(e) => { setTipotrabajo(e.target.value) }} className="form-select" aria-label="Default select tipo">
              <option value="Equipo Médico">Equipo Médico</option>
              <option value="Infraestructura">Infraestructura</option>
              <option value="Sistema de Cómputo">Sistema de Cómputo</option>
              <option value="Sistema Eléctrico" >Sistema Eléctrico</option>
              <option value="Civil / Plomería">Civil / Plomería</option>
              <option value="Carpintería / Mobiliario">Carpintería / Mobiliario</option>
            </select> */}
          </Grid>
          <Grid item xs={12}>
            <TextField value={asunto} color={asunto !== '' ? "gris" : "oficial"} fullWidth label="Descripción del equipo" focused type="int" onChange={(e) => setAsunto(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField value={problematica} color={problematica !== '' ? "gris" : "oficial"} fullWidth label="Inconveniente o Problemática" focused type="int" onChange={(e) => setProblematica(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField value={observaciones} fullWidth label="Observaciones" color="gris" focused type="int" onChange={(e) => setObservaciones(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} alignitems="center" justifyContent="center" >

              <Button variant="outlined" color="cancelarcp" startIcon={<DeleteIcon />} className="boton" onClick={regresar}>
                Cancelar</Button>
              <Button variant="contained" color="enviarcp" className="botone" endIcon={<SendIcon />} onClick={enviardatos}>
                Enviar</Button>

            </Stack>
          </Grid>
        </Grid>



      </Container>
      <Modal
        open={modal1}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Su solicitud fue enviada</h2>
          <Button onClick={handleOpen2}>Salir</Button>
          <Button onClick={handleClose}>Nueva Orden</Button>
          <Modal
            hideBackdrop
            open={modal2}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 200 }}>
              {/* <h2 id="child-modal-title">Text in a child modal</h2> */}
              <p id="child-modal-description">
              ¿Seguro que desea salir?
              </p>
              <Button onClick={handleClose2}>Si</Button>
              <Button onClick={handleClose3}>No</Button>
            </Box>
          </Modal>
        </Box>
      </Modal>

    </>
  );
}

const departamentos = [
  { label: 'Angiográfo 1' },
  { label: 'Angiográfo 2' },
  { label: 'Ambulancia' },
  { label: 'Cedicardio' },
  { label: 'Densitometría' },
  { label: 'Ecografía' },
  { label: 'Emergencia' },
  { label: 'Endoscopia' },
  { label: 'Enfermería 2' },
  { label: 'Enfermería 3' },
  { label: 'Enfermería 4' },
  { label: 'Estación de Generadores y Transformadores' },
  { label: 'Esterilización' },
  { label: 'Hemodinamia' },
  { label: 'Hospital del Día' },
  { label: 'Imágenes' },
  { label: 'Laboratorio Clínico' },
  { label: 'Laboratorio Covid' },
  { label: 'Lavado Instrumental' },
  { label: 'Mamografía' },
  { label: 'Neurosi' },
  { label: 'Oftalmología' },
  { label: 'Quirófano' },
  { label: 'Rayos X' },
  { label: 'Recuperación' },
  { label: 'Resonancia Magnética' },
  { label: 'Tomografía' },
  { label: 'UCI Adultos' },
  { label: 'UCI Covid' },
  { label: 'UCI Neonatal' },
  { label: 'UCI Pedíatrica' },

]

const prioridad = [
  { label: 'Media (Menor a 15 días)' },
  { label: 'Alta (Menor a 7 días)' },
  { label: 'Crítica (EMERGENCIA)' },
]

const tipos = [
  { label: 'Equipo Médico' },
  { label: 'Infraestructura' },
  { label: 'Sistema de Cómputo' },
  { label: 'Sistema Eléctrico' },
  { label: 'Civil / Plomería' },
  { label: 'Carpintería / Mobiliario' },
]