// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    50% {
        transform: scale(0.75);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const StyledCharacter = styled.div`
    width: 30%;
    display: flex;
    margin: auto;
    border: 10px orange solid;
    background-color: black;

    h2 {
        font-size: 1.5rem;
        color: white;
        margin-left: 10px;
    }

    button {
        margin: auto;
        background-color: orange;
        color: black;
        font-weight: bold;
        border-radius: 30%;
        border: 2px darkgray solid;
        padding: 5px;
        margin-right: 10px;
        font-size: 1.5rem;

        &:hover {
            transform: scale(1.5);
            background-color: gray;
        }
    }

    transform: scale(0.2);
    opacity: 1;
    animation: ${kf} 0.5s ease-in-out forwards;
`;

const Character = (props) => {
    const { open, name, character} = props;
    return (
        <StyledCharacter>
            <h2>{name}</h2>
            <button onClick={() => open(character.name)}>
            Details
            </button>
        </StyledCharacter>
    );
    }

export default Character;