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
const [currentId, setCurrentId] = useState('');

const openDetails = charId => {
  setCurrentId(charId)
}

const closeDetails = () => {
  setCurrentId(null)
}


useEffect(() => {
  axios
  .get(`https://swapi.dev/api/people`)
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
          return <Character name={char.name} key={'ID-' + char.name} info={char} action={openDetails}/>
    })
      }
      {
        currentId && <Details charId={currentId} close={closeDetails} />
      }
    </div>
  );
}

export default App;