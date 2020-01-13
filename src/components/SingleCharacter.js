import React from 'react';
import PropTypes from 'prop-types';

const SingleCharacter = props => {
  console.log(props.character)
  return <div className="info_wrapper">
          <img src={props.character.image} alt={props.character.name}/>
          <h1>Name: {props.character.name}</h1>
          <p>Specie: {props.character.species}</p>
          <p>Status: {props.character.status}</p>
          {/* <p>{props.character.origin}</p>
          <p>{props.character.episode}</p> */}
        </div>
}

SingleCharacter.propTypes = {
  character: PropTypes.object,
  name:PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string
}

export default SingleCharacter;