import React from "react";
import Card from 'react-bootstrap/Card';

function ServiceCard(props) {
    return (
        <div className='col-md-3'>
           <Card className='no-border-card'>
              <Card.Img className='rounded-5 border' variant="top" src={props.ServiceImage} />
              <Card.Body className="pt-4">
                <Card.Title className="fw-bold text-uppercase fs-5">{props.ServiceName}</Card.Title>
              </Card.Body>
           </Card>
        </div>
    )
}

export default ServiceCard;