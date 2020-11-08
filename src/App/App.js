import React from 'react';
import './App.css';
import Tile from '../Tile/Tile';
import tileData from '../data/TileData';
import { Blob, Rack } from '../assets/SVGs';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TileGrid = tileData.map((tile) => {
      return(<Tile
              text={tile.title}
              styleName={tile.style}
              assets={tile.assets}
              content={tile.content}/>
      );
    });

    console.log(TileGrid);
    return (
      <div className="App">
        <div className="TilesContainer">
          {TileGrid}
        </div>
      </div>
    );
  }
}

export default App;
