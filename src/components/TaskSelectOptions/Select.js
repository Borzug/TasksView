import React from 'react';
import Option from './Option';
import TaskService from '../TaskService';

class Select extends React.Component {
    constructor() {
        super();
        this.filterTasks = this.filterTasks.bind(this);
    }
    filterTasks(type) {
        this.props.filterTypes(type);
    }
    render () {
        let optionNodes = this.props.types.map((type) => {        
            return (
                <Option 
                    key={type.id}
                    id={type.id}
                    name={type.name}                                                 
                />
            );
        });    
        return (
            <select id="typeId" className="form-control input-sm" onInput={this.filterTasks}>
                <option value="">Не задано</option>             
                {optionNodes}
            </select>
        );
    }
}

export default Select;