import React from 'react';

const CharacterCard = props => {
  return <div className="card__container">
            <div className="img__container">
                <img src={props.image} alt={props.name} className="img"/>
            </div>
            <h2 className="name__card">{props.name}</h2>
            <h3 className="specie__card">{props.species}</h3>
        </div>
};

export default CharacterCard;