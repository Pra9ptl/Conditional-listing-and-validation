import React from 'react';

const Validationcomponent = (props) => {
    return (
        <div>
            {
                props.strLen > 10 ? <p>Long Enough</p> : <p>Too Short</p>
            }
        </div>
    )
};

export default Validationcomponent;