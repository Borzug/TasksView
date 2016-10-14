import React from 'react';
import {Modal} from 'react-bootstrap';
import EditTaskForm from './EditTaskForm';
import TaskService from '../TaskService';
import ModalService from '../ModalService';

class TaskEditModal extends React.Component {   
    constructor() {
        super();
        this.state = {showEditor: false};
        this.open = ModalService.open.bind(this);
        this.close = ModalService.close.bind(this);
        this.editTask = ModalService.editTask.bind(this);        
    }        
    render () {
        return (
            <div style={{display: "inline-block", paddingRight: "2px"}}>

                <button className="btn btn-primary btn-xs" onClick={this.open}><span className="glyphicon glyphicon-pencil"></span> Изменить</button>
                                
                <Modal show={this.state.showEditor} onHide={this.close} animation={false}>                
                    <Modal.Header closeButton>
                        <Modal.Title>Редактирование параметров задачи:</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EditTaskForm onSubmit={this.editTask} onClose={this.close} value={[this.props.value[0], this.props.value[1], this.props.value[2]]} />                        
                    </Modal.Body>                                                          
                </Modal>
            </div>            
        );
    }
}

export default TaskEditModal;