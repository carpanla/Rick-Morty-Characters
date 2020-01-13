import React from 'react';

const CharacterCard = props => {
    console.log(props)
  return <div className="card__container">
            <div className="img__container">
                <img src={props.image} alt={props.results.name} className="img"/>
            </div>
            <h2 className="name__card">{props.name}</h2>
            <p className="specie__card">{props.species}</p>
        </div>
  
};

export default CharacterCard;