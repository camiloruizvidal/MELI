import './navbar.scss';
import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import SearchImputComponent from '../search/SearchImputComponent';

const NavbarComponent = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home">
            <Image src = { process.env.PUBLIC_URL +  '/images/Logo_ML.png' }/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <SearchImputComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
