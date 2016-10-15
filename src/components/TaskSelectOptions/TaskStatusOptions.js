import React, {PropTypes} from 'react';
import {statusCodeConverter} from '../../dictionary';
import Option from './Option';

class TaskStatusOptions extends React.Component {
    constructor() {
        super();
        this.filterTasks = this.filterTasks.bind(this);
    }
    filterTasks(status) {
        this.props.filterTasks(status);       
    }
    render() {    
        let optionNodes = Object.keys(statusCodeConverter).map((key) => {
            return (
                <Option
                    id={key} 
                    key={statusCodeConverter[key].id}
                    name={statusCodeConverter[key].translated}                                 
                />
            );    
        });       
        return (
            <select id="statusCode" className="form-control input-sm" onInput={this.filterTasks}>
                <option value="">Не задано</option>            
                {optionNodes}
            </select>
        );
    }
}

TaskStatusOptions.propTypes = {
    filterTasks: PropTypes.func.isRequired
};

export default TaskStatusOptions;