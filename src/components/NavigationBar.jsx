import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <Navbar expand='lg' className={`bg-primary w-100 fixed-top z-1 ${isScrolled ? 'navbar-shadow' : ''}`} data-bs-theme='dark'>
           <Container>
               <Navbar.Brand href='#'><span className='logo'>
                <img src={logo} className='logo' style={{ width: '150px'}} alt="logo"/>
                </span></Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto w-100 d-flex justify-content-end gap-sm-1 gap-lg-4'>
                    <Nav.Link href='#header' className='text-light'>Home</Nav.Link>
                    <Nav.Link href='#about' className='text-light'>About</Nav.Link>
                    <Nav.Link href='#services' className='text-light'>Services</Nav.Link>
                    <Nav.Link href='#projects' className='text-light'>Projects</Nav.Link>
                    <Nav.Link href='#contact' type="button" className='text-primary fw-semibold btn bg-light'>Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
           </Container>
        </Navbar>
    )
}

export default NavigationBar;