import React, {PropTypes} from 'react';
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

                <button className="btn btn-primary btn-xs" onClick={this.open}><span className="glyphicon glyphicon-pencil"/> Изменить</button>
                                
                <Modal show={this.state.showEditor} onHide={this.close} animation={false}>                
                    <Modal.Header closeButton>
                        <Modal.Title>Редактирование параметров задачи:</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EditTaskForm
                            onSubmit={this.editTask}
                            onClose={this.close}                            
                            name={this.props.name}
                            typeId={this.props.typeId}
                            id={this.props.id}
                         />                        
                    </Modal.Body>                                                          
                </Modal>
            </div>            
        );
    }
}

TaskEditModal.propTypes = {
    name: PropTypes.string.isRequired,
    typeId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default TaskEditModal;