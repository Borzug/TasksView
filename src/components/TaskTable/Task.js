import React, {PropTypes} from 'react';
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
    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props;
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
                            name={this.props.name}
                            typeId={this.props.typeId}
                            id={this.props.id}                           
                            editTask={this.handleEdit} 
                        />
                        <TaskDeleteModal                            
                            id={this.props.id}
                            name={this.props.name}
                            typeName={this.props.typeName}
                            statusCode={this.props.statusCode}
                            creationDate={this.props.creationDate} 
                            handleDelete={this.handleDelete} 
                        />
                    </div>
                </td>
            </tr>
        );
    }
}

Task.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    typeName: PropTypes.string.isRequired,
    statusCode: PropTypes.string.isRequired,
    progressStatus: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    creationDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    typeId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default Task;