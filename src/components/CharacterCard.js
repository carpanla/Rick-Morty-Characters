import React from 'react';
import '../stylesheets/CharacterCard.css';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  return <div className="card__container" id={props.id}>
            <div className="img__container">
                <img src={props.image} alt={props.name} className="img"/>
            </div>
            <h2 className="name__card">{props.name}</h2>
            <h3 className="specie__card">{props.species}</h3>
        </div>
};

CharacterCard.propTypes = {
    name:PropTypes.string,
    img: PropTypes.string,
    species: PropTypes.string
}

export default CharacterCard;