import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Css/Stylesheet/nav_main.css'
function Navigation() {
  const [show, toggleShow] = React.useState(false)
  return (
    <Navbar collapseOnSelect expand="sm" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={require('../Images/logo.svg')}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          id="logo"
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
            <img
              src={require('../Images/Search.svg')}
              alt="search-icon"
              id="search-icon"
              onClick={() => toggleShow(!show)}
            />
          </Nav.Item>
          {show && (
            <Nav.Item>
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
