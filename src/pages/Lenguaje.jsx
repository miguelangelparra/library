import React from 'react'
import { useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Container, Row, Col, Button, Accordion, InputGroup, FormControl } from 'react-bootstrap'
import mock from "../mock/biblioteca.json"
import Tema from '../components/Tema'


const Lenguaje = () => {

  const { idCategoria, idLenguaje } = useParams()

  let { path, url } = useRouteMatch();

  return (
    <Row >
      <Col xs={2}>
        <Accordion>
          <Row>
            <Col xs={7}>        <h3>Temas:</h3>
            </Col>
            <Col xs={2}>
              <Accordion.Toggle as={Button} variant="link" eventKey={"nuevoArticulo"}>
                <Button size="sm">+</Button>
              </Accordion.Toggle>
            </Col>
            <Accordion.Collapse eventKey={"nuevoArticulo"}>

              <Row>
                <Col>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Tema</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Row>

        </Accordion>
        <ul>
          {mock.categorias.find(categoria => categoria.categoria == idCategoria).lenguajes.find(lenguaje => lenguaje.lenguaje == idLenguaje).temas.map(tema => <li><Link to={`${url}/${tema.tema}`}>{tema.tema}</Link></li>)}
        </ul>
      </Col>
      <Col xs={10}>
        <h1>{idLenguaje}</h1>
        <Switch>
          {//<Route path={`${path}/:idTema`} >
          }
          <Route exact path={"/:idCategoria/:idLenguaje/"}>
            <p>Selecciona un tema del panel izquierdo</p>
          </Route>
          <Route path={`/:idCategoria/:idLenguaje/:idTema`} component={Tema} />

        </Switch>

      </Col>


    </Row>
  )
}

export default Lenguaje

