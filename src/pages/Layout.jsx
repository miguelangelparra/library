import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'
import Header from "../components/header/Header"
import Home from "./Home"
import Lenguaje from "./Lenguaje"
import mock from "../mock/biblioteca.json"


const Layout = () => {

  return (
    <Container fluid>
      <Row >
        <Header />
      </Row>
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:idCategoria/:idLenguaje" component={Lenguaje}></Route>
      </BrowserRouter>
    </Container>
  )
}
export default Layout