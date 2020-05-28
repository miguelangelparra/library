import React from "react"
import { useRouteMatch} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import mock from "../../mock/biblioteca.json"


const NavBar =()=>{

return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>

      {mock.categorias.map((categoria)=>
           <NavDropdown title={categoria.categoria} id={`collasible-nav-dropdown${categoria.categoria}`}>
           {categoria.lenguajes.map((lenguaje)=>         
             <NavDropdown.Item href={`/${categoria.categoria}/${lenguaje.lenguaje}`}>{lenguaje.lenguaje}</NavDropdown.Item>
)}
      
         </NavDropdown>
      )}

    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>)
}

export default NavBar