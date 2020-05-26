import React from "react"
import {Row,Col} from 'react-bootstrap'
import mock from "../mock/biblioteca.json"

const Home = ()=>{

  return (
    <Row>
      <Col>
      {mock.categoria[0].lenguajes[0].titulo_lenguaje}
      </Col>
    </Row>
  )
}
export default Home