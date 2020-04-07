import React from 'react';
import '../style/App.css';
import Pokelist from './Pokelist';
import PokedexData from '../data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pokedex: PokedexData,
    };
  }
  render() {
    return (
      <main className='App'>
        <h1 className='main__title'>Mi lista de Pokemon</h1>
        <Pokelist list={this.state.Pokedex} />
      </main>
    );
  }
}

export default App;
