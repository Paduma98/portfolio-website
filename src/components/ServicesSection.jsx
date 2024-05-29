import React from "react";
import ServiceItems from "../assets/ServiceItems";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
    return(
        <div className='pt-5' id='services'>
        <div className='container py-md-5'>
           <h2 className='mb-5 pt-lg-4'>Services</h2>
            <div className='row g-4'>
            {
                ServiceItems.map((Service) => <ServiceCard key={Service.id} ServiceImage={Service.ServiceImg} ServiceName={Service.ServiceTitle} />)
            }
            </div>              
        </div>
    </div>
    )
}

export default ServicesSection;