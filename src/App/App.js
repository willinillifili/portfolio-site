import React from 'react';
import './App.css';
import Tile from '../Tile/Tile';
import Info from '../Info/Info';
import tileData from '../data/TileData';
import { Blob, Rack } from '../assets/SVGs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesFlipped : false,
      info : 'none'
    }
    this.handleTileClick = this.handleTileClick.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.flipTiles = this.flipTiles.bind(this);
  }

  handleTileClick(e) {
    const tile = e.currentTarget;

    // do nothing when decoration tiles are clicked
    /* TODO: think of way to select tiles that does
    not depend on classname order */

    if (tile.classList[1] === "decoration" ) return;

    const thisClassName = tile.classList[2];

    // if all tiles are flipped, only react to a click on the unflipped tile

    if (this.state.tilesFlipped && thisClassName != this.state.info) return;
    this.handleInfo(thisClassName);
    this.flipTiles(thisClassName);
  }

  handleInfo(info) {
    switch(info) {
      case 'services':
        this.setState({ info : 'services'});
      break;

      case 'portfolio':
        this.setState({ info : 'portfolio'});
      break;

      case 'about':
        this.setState({ info : 'about'});
      break;

      case 'contact':
        this.setState({ info : 'contact'});
      break;
    }
  }

  flipTiles(tileClassName) {
    const tiles = document
                .querySelectorAll('.TileContainer:not(.'+ tileClassName +')');
    let delay = 0;
    const animations = ['flip1, flip2'];
    const add = (tile, animation) => tile.classList.add(animation);
    const remove = (tile, animation) => tile.classList.remove(animation);
    const method = this.state.tilesFlipped ? remove : add;
    const shuffled = [6,2,4,0,3,5,1];
    shuffled.forEach((index) => {
      setTimeout(() => method(tiles[index], 'flip1'), delay);
      delay += 30;
    });
    this.setState({tilesFlipped : !this.state.tilesFlipped});
  }

  render() {
    const TileGrid = tileData.map((tile) => {
      let style = tile.type + " " +  tile.style;
      return(<Tile
              text={tile.title}
              styleName={style}
              assets={tile.assets}
              content={tile.content}
              onClick={(e) => this.handleTileClick(e)}/>
      );
    });

    console.log(TileGrid);
    return (
      <div className="App">
        <div className="TilesContainer">
          {TileGrid}
          <Info info={this.state.info}/>
        </div>
      </div>
    );
  }
}

export default App;
