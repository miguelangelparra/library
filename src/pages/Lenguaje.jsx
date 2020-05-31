import React from 'react'
import { useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import mock from "../mock/biblioteca.json"
import Tema from '../components/Tema'


const Lenguaje = () => {

  const { idCategoria, idLenguaje } = useParams()

  let { path, url } = useRouteMatch();

  return (
    <Row >
      <Col xs={2}>
        <h3>Temas:</h3>
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

