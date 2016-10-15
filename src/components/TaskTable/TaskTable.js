import React from 'react';
import TaskTableBody from './TaskTableBody';
import TaskTypeOptions from '../TaskSelectOptions/TaskTypeOptions';
import TaskStatusOptions from '../TaskSelectOptions/TaskStatusOptions';
import TaskService from '../TaskService';
import TaskCreationModal from '../TaskEditor/TaskCreationModal';

class TaskTable extends React.Component {
    constructor() {
        super();
        this.state = {tasks: []};
        this.getTasks = TaskService.getTasks.bind(this); 
        this.getTasksCompleted = TaskService.getTasksCompleted.bind(this);
        this.getTasksFailed = TaskService.getTasksFailed.bind(this);
        this.createTask = TaskService.createTask.bind(this);
        this.createTaskCompleted = TaskService.createTaskCompleted.bind(this);
        this.updateTasksOnCreation = TaskService.updateTasksOnCreation.bind(this);
        this.createTaskFailed = TaskService.createTaskFailed.bind(this);
        this.deleteTask = TaskService.deleteTask.bind(this);
        this.deleteTaskCompleted = TaskService.deleteTaskCompleted.bind(this);
        this.deleteTaskFailed = TaskService.deleteTaskFailed.bind(this);
        this.editTask = TaskService.editTask.bind(this);
        this.editTaskCompleted = TaskService.editTaskCompleted.bind(this);        
        this.createFilter = TaskService.createFilter.bind(this);        
        this.clearFilter = TaskService.clearFilter.bind(this);        
    }    
    componentDidMount() {        
        this.getTasks();        
    }      
    render() {        
        return (            
            <div className="container-fluid">
                <div className="row">                               
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">                        
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">                                    
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>                                
                                <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-th-large" /> Менеджер задач <span className="badge">{this.state.tasks.length}</span>
                                </a>
                            </div>
                            <div id="navbar" className="collapse navbar-collapse navbar-right">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <button className="btn btn-default navbar-btn" style={{marginRight: "5px"}} onClick={this.getTasks}>
                                            <span className="glyphicon glyphicon-refresh" aria-hidden="true" /> Обновить
                                        </button>
                                    </li>
                                    <li>
                                        <TaskCreationModal createTask={this.createTask} />
                                    </li>
                                </ul>                                                              
                            </div>        
                    </nav>
                </div>
                

                <div className="row" style={{paddingTop: "70px"}}>                                        
                    <table className="table table-fixed table-condensed table-hover table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Тип</th>
                                <th>Статус</th>
                                <th>Прогресс</th>
                                <th>Дата создания</th>
                                <th>Дата завершения</th>                                
                                <th>Действия</th>
                            </tr>              
                            <tr>                  
                                <th><input id="name" className="form-control input-sm" type="text" onChange={this.createFilter} /></th>
                                <th>                                
                                    <TaskTypeOptions filterTasks={this.createFilter} />
                                </th>
                                <th>
                                    <TaskStatusOptions filterTasks={this.createFilter} />
                                </th>
                                <th />
                                <th><input id="from" type="date" className="form-control input-sm" onInput={this.createFilter}/></th>
                                <th><input id="to"  type="date" className="form-control input-sm" onInput={this.createFilter}/></th>                                
                                <th>
                                    <button className="btn btn-primary btn-sm" onClick={this.clearFilter} style={{width: "157px"}}>
                                        <span className="glyphicon glyphicon-remove"/> Очистить фильтры
                                    </button>
                                </th>
                            </tr>
                        </thead>          
                        <TaskTableBody tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} />
                    </table>
                </div>
            </div>
           
        );    
    }
}

export default TaskTable;