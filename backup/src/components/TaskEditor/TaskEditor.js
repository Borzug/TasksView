import React from 'react';
import {Modal} from 'react-bootstrap';
import EditorForm from './EditorForm';
import TaskService from '../TaskService';

class TaskEditor extends React.Component {   
    constructor() {
        super();
        this.state = {showEditor: false};
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.createTask = TaskService.createTask.bind(this);                
    }    
    open() {
        this.setState({showEditor: true});
    }
    close() {
        this.setState({showEditor: false});
    }    
    render () {
        return (
            <div className="navbar-right" style={{marginRight: "30px"}}>            
                <button className="btn btn-default navbar-btn" onClick={this.open}>
                    <span className="glyphicon glyphicon-new-window" aria-hidden="true" /> Создать задачу
                </button>
                
                <Modal show={this.state.showEditor} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Свойства задачи</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EditorForm onSubmit={this.createTask} />
                    </Modal.Body>                   
                </Modal>
            </div>            
        );
    }
}

export default TaskEditor;