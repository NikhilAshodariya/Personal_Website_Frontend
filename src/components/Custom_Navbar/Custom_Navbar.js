import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import "./Custom_Navbar.css";

export default class Custom_Navbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className="brandName" href="#home">Ashodariya.me</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link className="Nav-items" href="#">About</Nav.Link>
                            <Nav.Link className="Nav-items" href="#">Academics</Nav.Link>
                            <Nav.Link className="Nav-items" href="#">Projects</Nav.Link>
                            <Nav.Link className="Nav-items" href="#">Blog</Nav.Link>
                            <Nav.Link className="Nav-items Nav-items-contact" href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}