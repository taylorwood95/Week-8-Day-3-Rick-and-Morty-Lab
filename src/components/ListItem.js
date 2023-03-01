import React from 'react'
import CharacterDetail from './CharacterDetail'

const ListItem = ({character, onCharacterClick}) => {

    const handleClick = ()  => {
        onCharacterClick(character)
    }

  return (
    <div>

        <p>{character.name}</p>
        <img src={character.image} alt=""/>
        <button onClick={handleClick}>Plumbus</button>
        

    </div>
  )
}

export default ListItem