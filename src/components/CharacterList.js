import React from 'react'
import ListItem from './ListItem'


const CharacterList = ({characters, onCharacterClick}) => {

    const allCharacters = characters.map((character, index) => {
        return <ListItem key={index} character={character} onCharacterClick={onCharacterClick}/>

    })

  return (
   <>
    <div>{allCharacters}</div>
    

    </>

  )
}



export default CharacterList