import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

function Footer() {
    return (
       <footer className="bg-primary text-light py-4">
          <div className="container">
             <div className="row">
                <div className="col-md-6 col-lg-6 col-12 ft-1 text-start pb-4">
                <Navbar.Brand href='#'><span className='logo'>
                <img src={logo} className='logo py-4' style={{ width: '150px'}} alt="logo"/>
                </span></Navbar.Brand>
                <p className="pb-3">Driven by a love for design and technology, I strive to craft<span className="d-none d-lg-block"></span> engaging and intuitive digital experiences
                that exceed<span className="d-none d-lg-block"></span> client expectations and delight users.</p>
                <div className="footer-icon">
                    <a href="https://www.facebook.com/paduma.maduvantha?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                       <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/pa_du_ma?igsh=M2xxOHEzcHY4bm52&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                       <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/paduma-hitihami" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                       <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                </div>

                <div className="col-md-6 col-lg-3 col-12 ft-2 py-4 text-start">
                    <h5 className="pb-3">Navigation</h5>
                    <ul>
                        <li className="nav-item pb-2">
                            <a className="" href="#header">Home</a>
                        </li>
                        <li className="nav-item pb-2">
                            <a className="" href="#about">About</a>
                        </li>
                        <li className="nav-item pb-2">
                            <a className="" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-3 pb-4 pt-md-4 pt-lg-4 text-start">
                <h5 className="pb-3">Contact</h5>
                <p><i class="fa-sharp fa-solid fa-phone-volume"></i> +94715611739</p>
                <p><i class="fa-brands fa-whatsapp"></i> +94715611739</p>
                <p><i class="fa-solid fa-envelope"></i> padumahitihami@gmail.com</p>
                <p><i class="fa-solid fa-location-dot"></i> Badulla, Sri Lanka.</p>
                </div>
             </div>

            <hr className="w-100 mx-auto" />
            <p className="w-50  mx-auto">Copyright<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle mx-1" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
            </svg>Paduma Hitihami</p>
          </div>
       </footer>
    )
}

export default Footer;