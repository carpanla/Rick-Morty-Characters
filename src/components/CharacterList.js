import React from 'react';
import CharacterCard from './CharacterCard';
//import { Link } from 'react-router-dom';

const CharacterList = props => {
    console.log(props)
    return <div>
                <ul> 
                    {props.allCharacters
                        .filter(character => props.value === '' || character.name.toLowerCase().includes(props.value.toLowerCase()))
                        .map ((character) => <li className="character-wrapper" key={character.id}>
                            <CharacterCard
                                image = {character.image}
                                name = {character.name}
                                species = {character.species}
                                id = {character.id}
                            />
                        </li>
                    )} 
                </ul>
            </div>
}

export default CharacterList;