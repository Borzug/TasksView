import React from 'react';
import {Modal} from 'react-bootstrap';
import TaskService from '../TaskService';
import ModalService from '../ModalService';

class TaskDeleteModal extends React.Component {   
    constructor() {
        super();
        this.state = {showEditor: false};
        this.open = ModalService.open.bind(this);
        this.close = ModalService.close.bind(this);
        this.editTask = ModalService.editTask.bind(this);
        this.handleDelete = this.handleDelete.bind(this);       
    }
    handleDelete(e) {                     
        this.props.handleDelete(e.target.value);
    }    
    render () {
        return (
            <div style={{display: "inline-block", paddingRight: "2px"}}>

                <button className="btn btn-danger btn-xs" onClick={this.open}><span className="glyphicon glyphicon-trash"></span> Удалить</button>
                                
                <Modal show={this.state.showEditor} onHide={this.close} animation={false}>                
                    <Modal.Header closeButton>
                        <Modal.Title>Вы уверены, что хотите удалить задачу?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p><b>Задача:</b> {this.props.value[1]}</p>
                        <p><b>Тип:</b> {this.props.value[2]}</p>
                        <p><b>Статус:</b> {this.props.value[3]}</p>
                        <p><b>Создано:</b> {this.props.value[4]}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <button value={this.props.value[0]} className="btn btn-danger" onClick={this.handleDelete} style={{float: "left"}}>
                            <span className="glyphicon glyphicon-trash"></span> Удалить
                        </button>
                        <button className="btn btn-default" type="button" onClick={this.close} style={{float: "right"}}>Отмена</button>                        
                    </Modal.Footer>                                                          
                </Modal>
            </div>            
        );
    }
}

export default TaskDeleteModal;