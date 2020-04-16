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
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite(favId) {
    console.log('me clickan en app', favId);
    let pokemon = this.state.Pokedex;
    const pokemonfavorito = this.state.Pokedex.findIndex((favPoke) => favPoke.id === favId);
    if (pokemon[pokemonfavorito].isFavorite === true) {
      pokemon[pokemonfavorito].isFavorite = false;
    } else {
      pokemon[pokemonfavorito].isFavorite = true;
    }
    this.setState({
      Pokedex: pokemon,
    });
  }

  render() {
    return (
      <main className='App'>
        <h1 className='main__title'>Mi lista de Pokemon</h1>
        <Pokelist list={this.state.Pokedex} addFavorite={this.addFavorite} />
      </main>
    );
  }
}

export default App;
