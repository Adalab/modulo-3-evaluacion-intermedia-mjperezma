import React from 'react';
import '../style/App.css';
import Pokelist from './Pokelist';
import PokedexData from '../data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pokedex: PokedexData,
      Fav: [],
    };
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite(favId) {
    debugger;
    const pokemonFav = this.state.Pokedex.find((Pokede) => Pokede.id === favId);
    this.setState(function (prevState) {
      prevState.Fav.push(pokemonFav);
      return {
        Fav: prevState.Fav,
      };
    });
    console.log('me clickan en app', favId);
  }
  render() {
    return (
      <main className='App'>
        <h1 className='main__title'>Mi lista de Pokemon</h1>
        <Pokelist list={this.state.Pokedex} addFavorite={this.addFavorite} fav={this.state.Fav} />
      </main>
    );
  }
}

export default App;
