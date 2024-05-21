import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

function NavigationBar() {
    return(
        <Navbar expand='lg' className='bg-primary w-100 fixed-top z-1'
        data-bs-theme='dark'>
           <Container>
               <Navbar.Brand href='#'><span className='logo'>
              <img src={logo} className='logo' style={{ width: '150px'}} alt="logo"/>
            </span></Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto w-100 d-flex justify-content-end gap-sm-1 gap-lg-4'>
                    <Nav.Link href='#header' className='text-light'>Home</Nav.Link>
                    <Nav.Link href='#about' className='text-light'>About</Nav.Link>
                    <Nav.Link href='#projects' className='text-light'>Projects</Nav.Link>
                    <Nav.Link href='#contact' type="button" className='text-primary fw-semibold btn bg-light'>Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
           </Container>
        </Navbar>
    )
}

export default NavigationBar;