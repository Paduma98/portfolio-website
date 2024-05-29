import React from "react";
import AboutImg from '../assets/images/about_picture.png';

function AboutSection() {
    return(
        <div className='bg-primary text-light py-5' id='about'>
            <div className='container py-md-5'>
                <div className='flex-column-reverse flex-md-row row'>
                    <div className='col-md-6 d-flex flex-column align-items-md-start align-items-center'>
                       <img className='img-fluid w-75' src={AboutImg} alt="about img" />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className='md-5 pb-4'>About Me</h2>
                        <p className='text-start fs-6 lh-base'>I'm a Software Engineering graduate, frontend developer with good experience in building web development solutions.
                        In addition, a person who is particularly interested in UI/UX designing.
                        I have knowledge and experience of HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, VueJS, React, Adobe Photoshop,
                        Adobe illustrator, Adobe XD and Figma. Also have a little academic knowledge of PHP, C, C#, JAVA, SQL.
                        And also I have five years of experience in graphic design, logo and illustration categories.
                        This fusion of development prowess and design acumen empowers me to create visually captivating and
                        functionally superior digital experiences.</p>
                        <p className='text-start mb-5 fs-6 lh-base'>Beyond my technical skills, I'm passionate about staying updated with the latest industry trends and
                        continuously improving my craft. I thrive on challenging projects that allow me to push the boundaries of
                        software design and development. My approach is user-centric, ensuring that every project not only meets
                        client expectations but also provides an exceptional user experience. I am eager to bring my unique blend
                        of skills to innovative projects and collaborate with forward-thinking teams to create impactful digital
                        solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;