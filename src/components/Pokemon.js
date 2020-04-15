import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  console.log(props.favs);
  function handlBtn() {
    props.addFavorite(props.items.id);
  }
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
      <button className='btn' type='submit' id={props.items.id} onClick={handlBtn}>
        Select as favorite
      </button>
    </>
  );
}
Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};
export default Pokemon;
