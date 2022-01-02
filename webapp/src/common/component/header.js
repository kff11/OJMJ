import React from "react";
import {Container,Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    return (
        <div className="my_nav">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">오점뭐먹</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/admin">AdminPage</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;