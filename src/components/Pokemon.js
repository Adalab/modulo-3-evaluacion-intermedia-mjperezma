import React from 'react';

function Pokemon(props) {
  const itemsTypes = props.items.types.map((type, index) => {
    return (
      <li className='pokemon__types__items' key={index}>
        {type}
      </li>
    );
  });
  return (
    <>
      <img src={props.items.url} alt={props.items.name} />
      <h4 className='pokemon__types__name'>{props.items.name}</h4>
      <ul className='pokemon__types'>{itemsTypes}</ul>
    </>
  );
}

export default Pokemon;
