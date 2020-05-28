import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import mock from "../mock/biblioteca.json"


const Lenguaje = ()=>{

  const {idCategoria,idLenguaje} = useParams()

  return (
    <Row >
        <Col xs={2}>
          <ul>
            {mock.categorias.find(categoria=>categoria.categoria==idCategoria).lenguajes.find(lenguaje=>lenguaje.lenguaje==idLenguaje).temas.map(tema=><li><Link to={tema.tema}>{tema.tema}</Link></li>)}
          </ul>
        </Col>
        <Col xs={10}>
        <h1>{idLenguaje}</h1>

        </Col>


      </Row>
  )
}

export default Lenguaje