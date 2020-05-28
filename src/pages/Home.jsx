import React from "react"
import {Row,Col} from 'react-bootstrap'
import mock from "../mock/biblioteca.json"

const Home = ()=>{

  return (
    <Row>
      <Col>
      <h1>Bienvenido a la Biblioteca de Consulta</h1>
      <p>Usted podra seleccionar el área y luego el lenguaje para desplegar los temas que le interese consultar. 
        Luego de seleccionar uno podrá visualizar los articulos correspondientes  
      </p>
      {mock.categorias[0].lenguajes[0].titulo_lenguaje}
      </Col>
    </Row>
  )
}
export default Home