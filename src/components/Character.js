// Write your Character component here
import React from 'react';


const Character = (props) => {
    const {name} = props;

    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    );
    }

export default Character;