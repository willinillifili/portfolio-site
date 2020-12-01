import React from 'react';
import './Info.css';
import Services from '../Services/Services.js';
import Portfolio from '../Portfolio/Portfolio.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import { Blob } from '../assets/SVGs';

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info;
    switch(this.props.info) {
      case 'services':
        info = <Services />;
      break;
      case 'portfolio':
        info = <Portfolio />;
      break;
      case 'about':
        info = <About />;
      break;
      case 'contact':
        info = <Contact />;
      break;
    }
    return (
      <article class="info">
        {info}
      </article>
    );
  }
}

export default Info;
