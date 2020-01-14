import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/SingleCharacter.css';
import Header from './Header';
import PropTypes from 'prop-types';

const SingleCharacter = props => {
  const { species, status } = props.character;

  return <div className="info_container">
            <Header />
            <Link to="/"><p className="back">Back</p></Link>
            
            <div className="detail__container">
              <div className="detail__image-container"></div>
                <img className="detail__image" src={props.character.image} alt={props.character.name}/>
              </div>

              <div className="detail__content-container"> 
                <h1 className="detail__title">{props.character.name}</h1>
                <ul className="detail__list">
                  <li className="detail__list-item">
                    <p>Specie: {props.character.species}
                    {
                      (species === 'Alien') ?
                      <i class="detail__list-item__icon fab fa-reddit-alien"></i>
                      : <i className="detail__list-item__icon fas fa-user-alt"></i>
                    }
                    </p>
                  </li>
                  <li className="detail__list-item">
                    <p>Status: {props.character.status}
                    {
                      (status === 'Dead') ?
                        <i className="detail__list-item__icon fas fa-skull-crossbones"></i>
                      : (status === 'Alive') ?
                        <i class="detail__list-item__icon fas fa-thumbs-up"></i>
                      : ''
                    }
                    </p>
                  </li>
                </ul>
                  {/* <p>{props.character.origin}</p>
                  <p>{props.character.episode}</p> */}
              </div> 
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