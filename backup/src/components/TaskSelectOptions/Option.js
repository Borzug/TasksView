import React from 'react';

const Option = (props) => {        
    return (
        <option value={props.id}>
            {props.name}
        </option>
    );
};

export default Option;