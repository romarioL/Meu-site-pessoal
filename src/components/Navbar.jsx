import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './styleNavbar.css'

class CustomNavbar extends Component {
	render() {
		return (
			  <Navbar bg="dark" variant="dark" expand ="lg" >
			    <Navbar.Brand href="/">Meu santuário</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="mr-auto">
			        <Nav.Link href="/">Home</Nav.Link>
			        <Nav.Link href="/experimentos">Experimentos</Nav.Link>
			        <Nav.Link href="/projetos">Projetos</Nav.Link>
			        <Nav.Link href="/textos">Textos</Nav.Link>
			        <Nav.Link href="/contato">Contato</Nav.Link>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			)
	}
}

export default CustomNavbar