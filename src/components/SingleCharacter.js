import React from 'react';

const SingleCharacter = props => {
  console.log(props.character)
  return <div className="character-info-wrapper">
          <img src={props.character.image} alt={props.character.name}/>
          <h1>{props.character.name}</h1>
          <p>{props.character.species}</p>
          <p>{props.character.status}</p>
          {/* <p>{props.character.origin}</p>
          <p>{props.character.episode}</p> */}
        </div>
}

export default SingleCharacter;