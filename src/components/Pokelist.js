import React from 'react';
import Pokemon from './Pokemon';

function Pokelist(props) {
  const ListPokemon = props.list.map((item) => {
    return (
      <li className='' key={item.id}>
        <Pokemon items={item} addFavorite={props.addFavorite} favs={props.fav} />
      </li>
    );
  });
  return <ul className='pokelist'>{ListPokemon}</ul>;
}

export default Pokelist;
