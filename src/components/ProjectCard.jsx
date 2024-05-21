import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard(props) {
    return (
        <div className='col-md-3'>
           <Card className='h-100 rounded-5 shadow'>
              <Card.Img className='rounded-top-5' variant="top" src={props.ProjectImage} />
              <Card.Body className="p-5">
                <Card.Title className="fw-bold text-uppercase mb-4 fs-3">{props.ProjectName}</Card.Title>
                <Card.Text className="fs-6 lh-base">{props.ProjectDesc}</Card.Text>
                <Button className="shadow text-capitalize" variant="outline-primary">View project</Button>
              </Card.Body>
           </Card>
        </div>
    )
}

export default ProjectCard;