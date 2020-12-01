import React from 'react';
import contact from '../data/Contact.js';

const Contact = (props) => {
  const social = contact.social.map( soc => {
    return(
      <a href={soc.url}>
        <img alt="social-logo" src={soc.logo} />
      </a>
    );
  });

  return(
    <article class="contact">
      <span class="email">{contact.email}</span>
      <div class="social">{ social }</div>
      <span class="phone">{contact.phone}</span>
    </article>
  );
};

export default Contact;
