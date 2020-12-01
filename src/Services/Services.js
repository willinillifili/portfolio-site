import React from 'react';
import './Services.css';
import services from '../data/Services.js';

const Services = (props) => {
  const servicesView = services.map(service => {
    return(
      <div className="service">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    );
  });

  return(
    <div className="servicesContainer">
      { servicesView }
    </div>
  );

}

export default Services;
