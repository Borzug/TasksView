import React from 'react';
import {statusCodeConverter} from '../../dictionary';
import Option from './Option';

const TaskStatusOptions = () => {    
    let optionNodes = Object.keys(statusCodeConverter).map((key) => {        
        return (
            <Option 
                key={statusCodeConverter[key].id}
                name={statusCodeConverter[key].translated}                
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

export default TaskStatusOptions;