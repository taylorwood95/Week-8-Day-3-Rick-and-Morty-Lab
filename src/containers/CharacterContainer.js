import React, {useState, useEffect} from 'react'
import CharacterDetail from '../components/CharacterDetail';
import CharacterList from "../components/CharacterList"
import ListItem from '../components/ListItem';
import PageSelector from '../components/PageSelector';

const CharacterContainer = ({pages}) => {

    const [characters,setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null)

    useEffect(() => {
        getCharacters(pages[0].url);
    }, [pages]);

    const getCharacters = url => {

        fetch(url)
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    };

    const onCharacterClick = (character) => {

        setSelectedCharacter(character);

      
    }

    const handleSelectChange = event => {

        getCharacters(event.target.value);
      
    }

    



  return (
    <>
    <PageSelector handleSelectChange={handleSelectChange} pages={pages}/>
    <div>{selectedCharacter ? <CharacterDetail character={selectedCharacter}/> : <img src={require('./plumbus.png')}/>}
    </div>
    <div>
    <CharacterList characters={characters} onCharacterClick={onCharacterClick}/>
    

 </div>
    </>

  )
  }

export default CharacterContainer