import React from 'react';
import {Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import TaskCreationModal from './TaskCreationModal';
import TaskService from '../TaskService';
import FormService from '../FormService';

class CreateTaskForm extends React.Component {
    constructor() {
        super();
        this.state = {name: "", typeId: "0"};
        this.handleNameChange = FormService.handleNameChange.bind(this);
        this.handleTypeChange = FormService.handleTypeChange.bind(this);
        this.getValidationState = FormService.getValidationState.bind(this);
        this.handleSubmit = FormService.handleSubmit.bind(this);
        this.close = FormService.close.bind(this);
    }      
    render() {
        return (
            <div>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="name" validationState={this.getValidationState()}>
                        <Col componentClass={ControlLabel} sm={3}>Название задачи</Col>
                        <Col sm={9}>
                            <FormControl type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Новая задача" />
                            <FormControl.Feedback />                        
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="typeId">
                        <Col componentClass={ControlLabel} sm={3}>Тип задачи</Col>
                        <Col sm={9}>                        
                            <FormControl componentClass="select" value={this.state.typeId} onChange={this.handleTypeChange}>
                                <option value="0">Ручное</option>
                                <option value="1">Автоматическое</option>
                                <option value="2">Расписание</option>
                                <option value="3">Срочное</option>
                            </FormControl>                        
                        </Col>
                    </FormGroup>
                    <button className="btn btn-success" type="submit">Сохранить</button>
                    <button className="btn btn-default" type="button" onClick={this.close} style={{float: "right"}}>Отмена</button>
                </Form>
                
            </div>
            
        );
    }
}

export default CreateTaskForm;