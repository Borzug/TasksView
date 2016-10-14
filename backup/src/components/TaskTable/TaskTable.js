import React from 'react';
import TaskTableBody from './TaskTableBody';
import TaskTypeOptions from '../TaskSelectOptions/TaskTypeOptions';
import TaskStatusOptions from '../TaskSelectOptions/TaskStatusOptions';
import {filter} from '../../filter';
import TaskService from '../TaskService';
import TaskEditor from '../TaskEditor/TaskEditor';

class TaskTable extends React.Component {
    constructor() {
        super();
        this.state = {tasks: []};
        this.getTasks = TaskService.getTasks.bind(this); 
        this.getTasksCompleted = TaskService.getTasksCompleted.bind(this);
        this.getTasksFailed = TaskService.getTasksFailed.bind(this);            
    }    
    componentDidMount() {
        this.getTasks();
    }    
    render() {
        return (            
            <div className="container-fluid">
                <div className="row">                               
                    <nav className="navbar navbar-default navbar-fixed-top col-xs-12">                        
                            <div className="navbar-header">                                
                                <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-th-large" /> Менеджер задач</a>
                            </div>
                            <div className="navbar-right">
                                <button className="btn btn-default navbar-btn" style={{marginRight: "5px"}} onClick={this.getTasks}>
                                    <span className="glyphicon glyphicon-refresh" aria-hidden="true" /> Обновить
                                </button>
                                <TaskEditor />                                                                
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
                                <th>Дата создания</th>
                                <th>Дата завершения</th>
                                <th>Прогресс</th>
                                <th>Действия</th>
                            </tr>              
                            <tr>                  
                                <th><input className="form-control input-sm" type="text" onInput={filter}/></th>
                                <th>                                
                                    <TaskTypeOptions />
                                </th>
                                <th>
                                    <TaskStatusOptions />
                                </th>
                                <th />
                                <th />             
                                <th />
                                <th />                            
                            </tr>
                        </thead>          
                        <TaskTableBody tasks={this.state.tasks} />
                    </table>
                </div>
            </div>
           
        );    
    }
}

export default TaskTable;