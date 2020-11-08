import React from 'react';
import './Tile.css';
import { Blob, Code, Abstract } from '../assets/SVGs';
import ServerRack from '../ServerRack/ServerRack';
/*import blob from '../assets/blob.svg';
import rack from '../assets/server_rack.svg';
import code from '../assets/code.svg';
import abstract from '../assets/abstract.svg';*/

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flip : false }
  }

  render() {

    let className = "TileContainer";
    let content;
    let svg;

    if (this.props.styleName) className = className + " " + this.props.styleName;

    switch(this.props.content) {
        case 'blob':
          content = <Blob />;
        break;

        case 'serverRack':
          content = <ServerRack />;
        break;

        case 'textEditor':
          content = <Code />;
        break;

        case 'abstract':
          content = <Abstract />;
        break;
    }

    if (content) {
      svg = (
          <div style={{
            position : 'absolute',
            width : '70%',
            height : '70%'
          }}>
          { content }
          </div>
      );
    }

    return (
      <article className={className}>
        <h1>{this.props.text}</h1>
        { svg }
      </article>
    );
  }
}

export default Tile;
