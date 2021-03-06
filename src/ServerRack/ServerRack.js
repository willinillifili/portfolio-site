import React from 'react';

class ServerRack extends React.Component {

  constructor(props) {
    super(props);
    this.state = { lightOn : true }
  }

  render() {
    return (
      <svg width="226" height="186" viewBox="0 0 226 186" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="225" height="61" fill="#C4C4C4" stroke="#FAFAFA"/>
      <ellipse cx="29.7567" cy="18.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0">
        <animate attributeName="fill"
                 values="#FFFAD0;#C4C4C4" dur="1s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="52.3567" cy="18.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
      <rect x="21.0933" y="33.9726" width="189.087" height="6.79452" fill="white"/>
      <ellipse cx="74.9567" cy="18.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
      <rect x="0.5" y="62.5" width="225" height="61" fill="#C4C4C4" stroke="#FDFDFB"/>
      <ellipse cx="29.7567" cy="80.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
      <ellipse cx="52.3567" cy="80.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
      <rect x="21.0933" y="95.9726" width="189.087" height="6.79452" fill="white"/>
      <ellipse cx="74.9567" cy="80.2603" rx="8.66333" ry="8.91781" fill="#FFFAD0">
      <animate attributeName="fill"
               values="#FFFAD0;#C4C4C4" dur="0.3s" repeatCount="indefinite"/>
      </ellipse>
      <rect x="0.5" y="124.5" width="225" height="61" fill="#C4C4C4" stroke="#FAFAFA"/>
      <ellipse cx="29.7567" cy="142.26" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
      <ellipse cx="52.3567" cy="142.26" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
      <rect x="21.0933" y="157.973" width="189.087" height="6.79452" fill="white"/>
      <ellipse cx="74.9567" cy="142.26" rx="8.66333" ry="8.91781" fill="#FFFAD0"/>
      </svg>
    );
  }
}

export default ServerRack;
