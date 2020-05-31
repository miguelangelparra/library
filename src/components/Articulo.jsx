import React from 'react'
import { Card, Accordion, Button } from 'react-bootstrap'

const Articulo = ({ articulo }) => {

  return (
    <Accordion defaultActiveKey="0"> 
      <Card>
        <Accordion.Toggle as={Button} variant="link" eventKey={articulo.articulo}>
          <Card.Header>

            <h2> {articulo.articulo} </h2>
          </Card.Header>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={articulo.articulo}>
          <Card.Body>
            <p>{articulo.descripcion}</p>
          </Card.Body>
        </Accordion.Collapse> 
      </Card>
    </Accordion>

  )
}

export default Articulo