import React from 'react'
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap'

const ModalCreateArticulo = (props) => {

  return (<Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Form>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Titulo </h4>
          <Form.Group>
            <Form.Control type="text" placeholder="Ej:variables" />
          </Form.Group>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Descripcion</h4>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Form>
  </Modal>)
}

export default ModalCreateArticulo