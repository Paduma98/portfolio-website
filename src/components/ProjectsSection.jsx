import React from "react";
import ProjectsItems from "../assets/ProjectsItems";
import ProjectCard from "./ProjectCard";
import LoadMoreBtn from "./LoadMoreBtn";

function ProjectsSection() {
    return(
        <div className='py-5' id='projects'>
            <div className='container py-md-5'>
               <h2 className='mb-5'>MY Projects</h2>
                <div className='row g-4 pb-5'>
                   {
                      ProjectsItems.map((project) => <ProjectCard key={project.id} ProjectImage={project.ProjectImg} ProjectName={project.ProjectTitle} ProjectDesc={project.ProjectDescription} />)
                   }
                </div> 
                <div className='pt-lg-5'>
                    <LoadMoreBtn />
                </div>             
            </div>
        </div>
    )
}


export default ProjectsSection;