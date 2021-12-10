import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [character, setCharacter] = useState([]);
const [currentId, setCurrentId] = useState('1');

const openDetails = id => {
  setCurrentId(id)
}

const closeDetails = () => {
  setCurrentId(null)
}


useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then(resp => {
    console.log(resp.data);
    setCharacter(resp.data)
  })
  .catch(err => {
    console.error(err);
  });
}, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        character.map(char => {
          return <Character name={char.name} key={char.name} info={char} open={openDetails}/>
    })
      }

      {
        currentId && <Details 
        charId={currentId} 
        close={closeDetails}
        gender={character.gender}
        height={character.height}
        mass={character.mass}
        birth_year={character.birth_year}
        eye_color={character.eye_color}
        hair_color={character.hair_color} 
        skin_color={character.skin_color}
        />
      }
    </div>
  );
}

export default App;