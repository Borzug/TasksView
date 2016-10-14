import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import TaskService from '../TaskService';
import TaskEditModal from '../TaskEditor/TaskEditModal';
import TaskDeleteModal from '../TaskEditor/TaskDeleteModal';

class Task extends React.Component {
    constructor() {
        super();
        this.state = {taskId: []};
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleDelete(id) {                     
        this.props.onDelete(id);
    }
    handleEdit(task) {
        this.props.onEdit(task);
    }
    render () {       
        return (
            <tr>
                <td style={{paddingLeft: "20px"}}>{this.props.name}</td>
                <td>{this.props.typeName}</td>
                <td>{this.props.statusCode}</td>
                <td>                                
                    <ProgressBar bsStyle={this.props.progressStatus} now={this.props.progress} label={`${this.props.progress}%`} />
                </td>
                <td style={{paddingLeft: "20px"}}>{this.props.creationDate}</td>
                <td>{this.props.endDate}</td>                
                <td>
                    <div>                        
                        <TaskEditModal 
                            value={[
                                this.props.name, 
                                this.props.typeId, 
                                this.props.id
                            ]}                            
                            editTask={this.handleEdit} 
                        />
                        <TaskDeleteModal 
                            value={[
                                this.props.id, 
                                this.props.name, 
                                this.props.typeName, 
                                this.props.statusCode, 
                                this.props.creationDate
                            ]} 
                            handleDelete={this.handleDelete} 
                        />
                    </div>
                </td>
            </tr>
        );
    }
}

export default Task;