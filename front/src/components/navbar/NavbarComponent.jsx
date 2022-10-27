import './navbar.scss';
import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import SearchInputComponent from '../search/SearchInputComponent';


const NavbarComponent = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="/">
            <Image src = { process.env.PUBLIC_URL +  '/images/Logo_ML.png' }/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <SearchInputComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
