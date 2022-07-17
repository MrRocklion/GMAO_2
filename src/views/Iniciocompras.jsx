import React, { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { collection, setDoc, query, doc, onSnapshot } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";
import { db, storage } from "../firebase/firebase-config";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from "reactstrap";
import Grid from "@mui/material/Grid"
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import '../hoja-de-estilos/Ordentrabajo.css';

export default function Formularioscompras() {
  const navigate = useNavigate();
  const [cedulacom, setCedulacom] = useState('');
  const [codigoeqcom, setCodigoeqcom] = useState('');
  const [equipocom, setEquipocom] = useState('');
  const [articulocom, setArticulocom] = useState('');
  const [cantidadcom, setCantidadcom] = useState('');
  const [preciocom, setPreciocom] = useState('');
  const [proveedorcom, setProveedorcom] = useState('');
  const [file, setFile] = useState(null);
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
  const handleOpen = () => {
    setModal1(true);
  };
  const handleClose = (e) => {
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
  const getData = () =>{
    const reference = query(collection(db, "usuario"));
    onSnapshot(reference, (querySnapshot) => {
        console.log(querySnapshot.docs)
        setCurrentuid(
            querySnapshot.docs.map((doc) => ({ ...doc.data() }))
        );

    });
};
console.log(currentuid)
  const cancelar = () => {
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
  const buscarImagen = (e) => {
    if (e.target.files[0] !== undefined) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    } else {
      console.log('no hay archivo');
    }
  };

  const sendData = () => {
    var compra = {};
    var val = Date.now();
    var val2 = new Date(val);
    var val3 = val2.toLocaleDateString("en-US");
    console.log(val);
    console.log(val3);
    if( cedulacom !== '' && codigoeqcom !== ''&& equipocom !== ''&& articulocom !== ''&& cantidadcom !== ''){
    if (file === null) {
      compra = {
        fechacom: val3,
        indice: val,
        cedulacom: cedulacom,
        codigoeqcom: codigoeqcom,
        equipocom: equipocom,
        articulocom: articulocom,
        cantidadcom: cantidadcom,
        preciocom: preciocom,
        proveedorcom: proveedorcom,
        comentariocom: "",
        estadocom: "En Proceso",
        nameImg: 'SP.PNG',
        // comentarios:" hola ",
        id: uuidv4(),
      };
      sendFirestore(compra);
      handleOpen();
      setCedulacom("");
      setCodigoeqcom("");
      setEquipocom("");
      setArticulocom("");
      setCantidadcom("");
      setPreciocom("");
      setProveedorcom("");
    } else {
      compra = {
        fechacom: val3,
        indice: val,
        cedulacom: cedulacom,
        codigoeqcom: codigoeqcom,
        equipocom: equipocom,
        articulocom: articulocom,
        cantidadcom: cantidadcom,
        preciocom: preciocom,
        proveedorcom: proveedorcom,
        comentariocom: "",
        estadocom: "En Proceso",
        nameImg: file.name,
        // comentarios:" hola ",
        id: uuidv4(),
      };
      sendFirestore(compra);
      sendStorage();
      handleOpen();
      setCedulacom("");
      setCodigoeqcom("");
      setEquipocom("");
      setArticulocom("");
      setCantidadcom("");
      setPreciocom("");
      setProveedorcom("");
    }
  }else{
    console.log('faltan campos');
    var opcion= window.confirm("Faltan Campos. Por favor complete toda la informacion de las casillas en rojo " );
        if (opcion === true) {
          if(currentuid[0].uid === "akD6lbAK3ngeChavoYU6Kg7GKNI3"){
            navigate('/externos/home/inventario/solicitudcompra')
          }
          if(currentuid[0].uid === 'kEjcItjveTZKOPCTHVzUAXUNoyR2'){
            navigate('/inventario/home/inventario/solicitudcompra')
          }
          if(currentuid[0].uid === 'TS3QouZOApgtdoTiSc3giotXDmr1'){
            navigate('/compras/home/inventario/solicitudcompra')
          }
          if(currentuid[0].uid === 'd6E6U8EmGoO59w6NigHhrZx3vTw2' ){
            navigate('/compras/home/inventario/solicitudcompra')
          }
          if(currentuid[0].uid === 'qyA0iGnJYCeaW2z7NVwNtkKpaMb2'){
            navigate('/orden/home/inventario/solicitudcompra')
          }
          if(currentuid[0].uid=== 'LJdzQIBTv5cQhkxUWuj2Lhq1rz72'){
            navigate('/personal/home/inventario/solicitudcompra')
          }
          if(currentuid[0].uid === 'pJr295Xo0xgcntGd1uv6wd3RvZG3'){
            navigate('/personal/home/inventario/solicitudcompra')
          }
        }
  };
  setFile(null);
    


  };
  const sendFirestore = (compra) => {
    try {
      setDoc(doc(db, "compras", `${compra.id}`), compra);
      console.log("Solicitud agregada")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const sendStorage = () => {
    //pasar parametros variables
    const storageRef = ref(storage, `proformas/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  };
  
  useEffect(() => {
    getData();
  }, [])
  return (
    <>

      <h1 className="titu"> Solicitud de Compra</h1>
      <br/>
      <Container  >

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid item xs={6}>
              <TextField  value={cedulacom} color={cedulacom !== '' ? "gris" : "oficial"}  fullWidth label="Número de Cédula Técnico"  focused type="int" onChange={(e) => setCedulacom(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
              <TextField value={codigoeqcom} color={codigoeqcom !== '' ? "gris" : "oficial"} fullWidth label="Código Equipo"  focused type="int" onChange={(e) => setCodigoeqcom(e.target.value)} />
          </Grid>

          <Grid item xs={6}>
              <TextField value={equipocom} color={equipocom !== '' ? "gris" : "oficial"} fullWidth label="Equipo" focused type="int" onChange={(e) => setEquipocom(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
              <TextField value={articulocom} color={articulocom !== '' ? "gris" : "oficial"} fullWidth label="Articulo"  focused type="int" onChange={(e) => setArticulocom(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
              <TextField value={cantidadcom}  color={cantidadcom !== '' ? "gris" : "oficial"} fullWidth label="Cantidad"  focused type="int" onChange={(e) => setCantidadcom(e.target.value)} />
          </Grid>
          <Grid item xs={6}>

              <TextField  value={preciocom} color="gris" fullWidth label="Precio"  focused type="int" onChange={(e) => setPreciocom(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
           
              <TextField value={proveedorcom} color="gris" fullWidth label="Proveedor"  focused type="int" onChange={(e) => setProveedorcom(e.target.value)} />

          </Grid>

          <Grid item xs={12}>
            <div className="mb-3">
              <label className="form-label">Cargar proforma</label>
              <input  className="form-control" onChange={buscarImagen} type="file" id="formFile" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} alignitems="center" justifyContent="center" >
              <Button variant="outlined" color="cancelarcp" startIcon={<DeleteIcon />} className="boton" onClick={cancelar}>
                Cancelar</Button>
              <Button variant="contained" color="enviarcp" endIcon={<SendIcon />} onClick={sendData}>
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



