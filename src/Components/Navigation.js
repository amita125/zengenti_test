import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Css/Style.css'
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={require('../Images/logo.svg')}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Item>
            <Nav.Link href="/study">Study</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/research">Research</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/study">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/search">
              <img src={require('../Images/Search.svg')} alt="search-icon" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
