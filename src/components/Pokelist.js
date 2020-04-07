import React from 'react';
import Pokemon from './Pokemon';

function Pokelist(props) {
  const ListPokemon = props.list.map((item) => {
    return (
      <li className='pokelist__items' key={item.id}>
        <Pokemon items={item} />
      </li>
    );
  });
  return <ul className='pokelist'>{ListPokemon}</ul>;
}

export default Pokelist;
