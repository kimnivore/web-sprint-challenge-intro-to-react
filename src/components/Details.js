import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDetails = styled.div`
    
    background-color: black;
    color: white;
    h2 {
        font-size: 1.5rem;
        color: white;
        margin-left: 10px;
    }
    p {
        font-size: 1rem;
    }

`;


export default function Details(props) {
    const {charId, close } = props;

    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/`)
        .then(resp => {
          console.log(resp);
          setDetails(resp.data);
        })
        .catch(err => {
          console.error(err);
        });
      }, [charId]);

      return (
          <StyledDetails>
              <h2>Details: </h2>
              {
                details &&
                <>
                  <p>gender: {details.gender}</p>  
                  <p>height: {details.height}</p>
                  <p>mass: {details.mass}</p>
                  <p>Birth Year: {details.birth_year}</p>
                  <p>Eye Color: {details.eye_color}</p>
                  <p>Hair Color: {details.hair_color} </p>
                  <p>Skin Color: {details.skin_color} </p>
                  <p>Films: {details.films}</p>

                  <ul>
                      {
                      details.name.map(detail =>  <li>{detail}</li>)
                      }
                  </ul>
                </>

              }
              <button onClick={close}>Close</button>
          </StyledDetails>
      )
}

