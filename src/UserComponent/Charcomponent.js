import React from 'react';

const Charcomponent = (props) => {
    const charcompostyle = {
        display: "inline-block", 
        padding: "16px",
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
      };

    return (
        <div style={charcompostyle} onClick={props.click}>
            {props.letter}
        </div>
    )
};

export default Charcomponent;