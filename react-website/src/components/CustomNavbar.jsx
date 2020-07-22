import React, {Component} from "react"
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Button, Form, FormControl, } from 'react-bootstrap'
import "./CustomNavbar.css"

class CustomNavbar extends Component{
  render(){
    return (
      <Navbar bg="primary" variant="dark" expand="xl">
        <Navbar.Brand href="/">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
            <circle cx="4" cy="4" r="1.5"/>
            <circle cx="12" cy="4" r="1.5"/>
            <circle cx="12" cy="12" r="1.5"/>
            <circle cx="4" cy="12" r="1.5"/>
            <circle cx="8" cy="8" r="1.5"/>
            </svg>
            <span className="brand-text">5 stack Programming</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" className="ml-5 home">Home</Nav.Link>
            <Nav.Link href="/about" className="ml-5 home">About</Nav.Link>
            <Nav.Link href="/news" className="ml-5 home">News</Nav.Link>
            <Nav.Link href="/contact" className="ml-5 home">Contact Us</Nav.Link>
          </Nav >
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-light" className="m-1">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default CustomNavbar
