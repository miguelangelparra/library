import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from "../components/NavBar"
import Home from "./Home"
import mock from "../mock/biblioteca.json"


const Layout = () => {

  return (
    <Container>
      <NavBar></NavBar>
      <Row>
        <Col xs={2}>
<ul>
  {mock.categoria[0].lenguajes.map((x)=><li>{x.titulo_lenguaje}</li>)}
</ul>
        </Col>
        <Col xs={10}>
 
         <Home />
        </Col>

      </Row>
    </Container>
  )
}
export default Layout