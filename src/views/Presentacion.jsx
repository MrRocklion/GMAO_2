import React from "react";
import imagen1 from '../components/imagenes/fachada.jpg';
import imagen2 from '../components/imagenes/NEO-01.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Box } from "@mui/material";
import '../hoja-de-estilos/Presentacion.css';

import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';





export default function Inicio() {
    return (
        <>
        
<Box  sx={{position:"initial"}}>
  <br/>
  {/* <h3 className="princi">Software Mantenimiento</h3> */}
  <Typography component="div" variant="h4" className="princi" >
            SOFTWARE DE MANTENIMIENTO
          </Typography>
  <Typography component="legend">¡Bienvenidas y bienvenidos! </Typography>
  <Typography component="legend">El departamento de Ingeniería Clínica agradece su colaboración </Typography>
<br/>
<Carousel>
  <Carousel.Item interval={200}>
    <img
      className="d-block w-20"
      src={imagen1}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3 >Departamento Ingeniería Clínica</h3>
      <p>¡Bienvenidas y bienvenidos, el departamento de Ingeniería Clínica del Hospital agradece su colaboración!</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={200}>
    <img
      className="d-block"
      src={imagen2}
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Departamento Ingeniería Clínica</h3>
      <p>¡Bienvenidas y bienvenidos, el departamento de Ingeniería Clínica del Hospital agradece su colaboración!</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={imagen1}
      alt="Third slide"
    />
    {/* <Carousel.Caption>
    <h3>Departamento Ingeniería Clínica</h3>
    <p>¡Bienvenidas y bienvenidos, el departamento de Ingeniería Clínica del Hospital agradece su colaboración!</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={imagen2}
      alt="Cuarta slide"
    />
    {/* <Carousel.Caption>
    <h3 className="titulo">Departamento Ingeniería Clínica</h3>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</Box>
<br/>
<Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      /> */}
      <Rating name="customized-10" defaultValue={2} max={5} size="large"/>
    </Box>
</>
    );
}