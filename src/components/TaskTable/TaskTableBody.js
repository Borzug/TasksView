import React from 'react';
import Task from './Task';

class TaskTableBody extends React.Component {
    constructor() {
        super();
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
    }
    deleteTask(id) {
        this.props.deleteTask(id);
    }
    editTask(task) {
        this.props.editTask(task);
    }
    render () {
        let taskNodes = this.props.tasks.map((task) => {
            return (
                <Task
                    onDelete={this.deleteTask}
                    onEdit={this.editTask}
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    statusCode={task.statusCodeTranslated}
                    typeId={task.typeId}
                    typeName={task.typeName}
                    creationDate={task.creationDateFormatted}
                    endDate={task.endDateFormatted}
                    progress={task.progress}
                    progressStatus={task.progressStatus}                
                />
            );
        });                   
        return (
            <tbody>
                {taskNodes}
            </tbody>
        );  
    }
}

export default TaskTableBody;