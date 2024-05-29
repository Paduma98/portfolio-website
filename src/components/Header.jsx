import React from "react";
import DownloadCVBtn from "./DownloadCVBtn";
import HeaderImg from '../assets/images/profile_picture.png';

function Header() {
    return(
        <header className='pt-5' id='header'>
           <div className='container py-md-5'>
            <div className='row'>
               <div className='col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0'>
                  <h2 className='text-dark text-start fw-bold'>I'm Paduma Hitihami.</h2>
                  <h3 className='text-capitalize text-start text-primary fs-3 mb-4'>web developer</h3>
                  <p className='text-dark text-start fs-6 lh-base pb-4'>I'm a Software Engineering graduate, frontend developer with good experience in building web development solutions. 
                  In addition, a person who is particularly interested in UI/UX designing. With over five years of experience in Graphic 
                  Design, I possess a multifaceted skill set enriched by proficiency in Adobe Photoshop, Adobe Illustrator, Adobe XD, and Figma. 
                  This fusion of development prowess and design acumen empowers me to create visually captivating and functionally superior
                  digital experiences.</p>
                  <DownloadCVBtn />
               </div>
               <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
                  <img className='img-fluid w-75 my-5' src={HeaderImg} alt="header Img" />
               </div>
            </div>
           </div>
        </header>
    )
}

export default Header;