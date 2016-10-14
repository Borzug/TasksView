import React from 'react';
import Task from './Task';

const TaskTableBody = (props) => {          
    let taskNodes = props.tasks.map((task) => {
        return (
            <Task 
                key={task.id}
                id={task.id}
                name={task.name}
                statusCode={task.statusCodeTranslated}
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
};

export default TaskTableBody;