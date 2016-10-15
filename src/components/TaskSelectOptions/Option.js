import React, {PropTypes} from 'react';

const Option = (props) => {        
    return (
        <option value={props.id}>
            {props.name}
        </option>
    );
};

Option.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default Option;