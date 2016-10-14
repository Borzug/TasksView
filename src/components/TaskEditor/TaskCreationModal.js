import React from 'react';
import {Modal} from 'react-bootstrap';
import CreateTaskForm from './CreateTaskForm';
import TaskService from '../TaskService';
import ModalService from '../ModalService';

class TaskCreationModal extends React.Component {   
    constructor() {
        super();
        this.state = {showEditor: false};
        this.open = ModalService.open.bind(this);
        this.close = ModalService.close.bind(this);
        this.createTask = ModalService.createTask.bind(this);
    }    
    render () {
        return (
            <div className="navbar-right" style={{marginRight: "30px"}}>

                <button className="btn btn-default navbar-btn" onClick={this.open}>
                    <span className="glyphicon glyphicon-new-window" aria-hidden="true" /> Создать задачу
                </button>
                
                <Modal show={this.state.showEditor} onHide={this.close}>                
                    <Modal.Header closeButton>
                        <Modal.Title>Параметры задачи:</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <CreateTaskForm onSubmit={this.createTask} onClose={this.close} />                        
                    </Modal.Body>                                                          
                </Modal>
            </div>            
        );
    }
}

export default TaskCreationModal;