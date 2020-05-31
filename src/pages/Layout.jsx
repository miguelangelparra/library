import React from "react"
import { BrowserRouter, Route,Switch } from "react-router-dom"
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
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/:idCategoria/:idLenguaje" component={Lenguaje}></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}
export default Layout