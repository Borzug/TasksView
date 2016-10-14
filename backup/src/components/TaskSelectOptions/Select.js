import React from 'react';
import Option from './Option';

const Select = (props) => {
    let optionNodes = props.types.map((type) => {        
        return (
            <Option 
                key={type.id}
                id={type.id}
                name={type.name}                             
            />
        );
    });
    return (
        <select className="form-control input-sm">
            <option value="">Не задано</option>             
            {optionNodes}
        </select>
    );
};

export default Select;