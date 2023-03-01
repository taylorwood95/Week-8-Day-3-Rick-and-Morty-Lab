import React from 'react'

const CharacterDetail = ({character}) => {
  return (
    <>
    <h3><u>{character.name}</u></h3>
    
   
    <img src={character.image} alt=""/>
    <p>Status: {character.status}</p>
    <p>Gender: {character.gender}</p>
    <p>Species: {character.species}</p>
    <p>Origin: {character.origin.name}</p>
    <p>Location: {character.location.name}</p>
    <hr></hr>
    

    </>

  )
}

export default CharacterDetail