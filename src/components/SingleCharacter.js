import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/SingleCharacter.css';
import Header from './Header';
import PropTypes from 'prop-types';

const SingleCharacter = props => {
  if(props.character === undefined){
    return(
        <div className="not-found">
            <p>Lost in Rick and Morty's universe...</p>
            <Link to="/">Back home</Link>
        </div>
    )
  } else {

  return <div className="info_container">
            <Header />
            <Link to="/"><i className="back fas fa-chevron-left"> Back</i></Link>
            <div className="detail__container">
              <div className="detail__image-container"></div>
                <img className="detail__image" src={props.character.image} alt={props.character.name}/>
              </div>

              <div className="detail__content-container"> 
                <h1 className="detail__title">{props.character.name}</h1>
                <ul className="detail__list">
                  <li className="detail__list-item">Species: {props.character.species === 'Alien' ? <i class="fab fa-reddit-alien"></i> : <i class="fas fa-user"></i>}</li>
                  {/* <li className="detail__list-item">Origin Planet: {props.character.origin.name}</li> */}
                  {/* <li className="detail__list-item">Episodes: {props.character.episode.length}</li> */}
                  <li className="detail__list-item">Status: {props.character.status === 'Alive' ? <i class="fas fa-heartbeat"></i> : <i class="fas fa-skull-crossbones"></i>}</li>
                </ul> 
              </div> 
        </div>
} 
}

SingleCharacter.propTypes = {
  character: PropTypes.object,
  name:PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string
}

export default SingleCharacter;