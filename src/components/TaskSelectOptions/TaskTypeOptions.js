import React from 'react';
import Select from './Select';
import $ from 'jquery';
import toastr from 'toastr';

class TaskTypeOptions extends React.Component {
    constructor() {
        super();
        this.state = {types: []};
        this.getTasksTypes = this.getTasksTypes.bind(this);
        this.getTasksTypesCompleted = this.getTasksTypesCompleted.bind(this);
        this.getTasksTypesFailed = this.getTasksTypesFailed.bind(this);
        this.filterTypes = this.filterTypes.bind(this);
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
        toastr.error("Проверьте соединение с сервером.", "Не удалось загрузить типы задач!", {"closeButton": true, "positionClass": "toast-top-center"});
    }
    filterTypes(type) {
        this.props.filterTasks(type);
    }    
    render() {
        return (
            <Select types={this.state.types} filterTypes={this.filterTypes} />
        );
    }        
}

export default TaskTypeOptions;