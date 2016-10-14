import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import TaskService from '../TaskService';

const Task = (props) => {        
    return (
        <tr>
            <td style={{paddingLeft: "20px"}}>{props.name}</td>
            <td>{props.typeName}</td>
            <td>{props.statusCode}</td>
            <td>{props.creationDate}</td>
            <td>{props.endDate}</td>
            <td>                                
                <ProgressBar bsStyle={props.progressStatus} now={props.progress} label={`${props.progress}%`} />
            </td>
            <td>
                <div className="btn-group" role="group">
                    <button className="btn btn-info btn-xs">Изменить</button>                
                    <button className="btn btn-danger btn-xs" onClick={TaskService.deleteTask}>Удалить</button>
                </div>
            </td>
        </tr>
    );
};

export default Task;