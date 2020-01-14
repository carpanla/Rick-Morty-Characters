import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterList.css';
import PropTypes from 'prop-types';

const CharacterList = props => {
  return (
    <div>
      <ul className="app__list">
        {props.allCharacters
          .filter(
            character =>
              props.value === '' ||
              character.name.toLowerCase().includes(props.value.toLowerCase())
          )
          .map(character => (
            <li className="character-wrapper" key={character.id}>
              <Link to={`/character/${character.id}`}>
                <CharacterCard
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  id={character.id}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  allCharacters: PropTypes.array,
};

export default CharacterList;
