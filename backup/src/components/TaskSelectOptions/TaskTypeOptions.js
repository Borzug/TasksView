import React from 'react';
import Select from './Select';
import $ from 'jquery';

class TaskTypeOptions extends React.Component {
    constructor() {
        super();
        this.state = {types: []};
        this.getTasksTypes = this.getTasksTypes.bind(this);
        this.getTasksTypesCompleted = this.getTasksTypesCompleted.bind(this);
        this.getTasksTypesFailed = this.getTasksTypesFailed.bind(this);
    }
    componentDidMount() {        
        this.getTasksTypes();
    }
    getTasksTypes() {
        $.ajax({
            url: "http://localhost:8080/api/tasks/types",
        }).done(this.getTasksTypesCompleted)
          .fail(this.getTasksTypesFailed);
    }
    getTasksTypesCompleted (tasksTypes) {
        this.setState({types: tasksTypes});                        
    }
    getTasksTypesFailed () {
        alert("Не удалось загрузить типы задач!");
    }                       
    
    render() {
        return (
            <Select types={this.state.types} />
        );
    }        
}

export default TaskTypeOptions;