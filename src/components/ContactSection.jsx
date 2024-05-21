import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactSection() {
    return (
       <div className="pb-5" id='contact'>
         <div className="container px-lg-5">
            <h2 className='mb-5'>Contact Me</h2>
            <Form className="px-lg-5 text-secondary pb-3">
               <div className="row">
                 <Form.Group className="md-3 col-lg-4 pb-4" controlId="firstName">
                    <Form.Control className="shadow-sm" type="text" placeholder="Your Name"/>
                 </Form.Group>
                 <Form.Group className="md-3 col-lg-4 pb-4" controlId="emailAddress">
                    <Form.Control className="shadow-sm" type="email" placeholder="Your Email Address Here"/>
                 </Form.Group>
                 <Form.Group className="md-3 col-lg-4 pb-4" controlId="phoneNumber">
                    <Form.Control className="shadow-sm" type="text" placeholder="Your Phone Number Here"/>
                 </Form.Group>
                 <Form.Group className="md-3 pb-4" controlId="textArea">
                    <Form.Control className="shadow-sm" as="textarea" placeholder="Your Message Here..." rows={5} />
                 </Form.Group>
               </div>
            </Form>
            <Button variant="primary" type="submit">Send Message</Button>
         </div>
       </div>
    )
}


export default ContactSection;