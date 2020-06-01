import React from 'react'
import mock from "../mock/biblioteca.json"
import {useParams} from 'react-router-dom'
import {Row,Col,Button} from 'react-bootstrap'


import Articulo from './Articulo'
import ModalCreateArticulo from './ModalCreateArticulo'

const Tema = () => {
  const { idCategoria, idLenguaje, idTema } = useParams()
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Row>
      <Col xs={10}>
      <h2>{idTema}</h2>
      </Col>
      <Col xs={2}>
      <Button onClick={() => setModalShow(true)}>Nuevo Articulo</Button>
      </Col>
    
      </Row>
      <Row>
        <Col xs={12}>
      {mock.categorias.find(categoria => categoria.categoria == idCategoria).lenguajes.find(lenguaje => lenguaje.lenguaje == idLenguaje).temas.find(tema=>tema.tema==idTema).articulos.map((articulo)=><Articulo articulo={articulo}/>)}
      </Col>
      </Row>
      <ModalCreateArticulo
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
  )
}

export default Tema