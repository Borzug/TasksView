import React from 'react';
import {Col, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import TaskEditor from './TaskEditor';
import TaskService from '../TaskService';

class EditorForm extends React.Component {
    constructor () {
        super();
        this.state = {name: "", type: ""};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.createTask = TaskService.createTask.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);     
    }
    getValidationState() {
        const length = this.state.name.length;
        if (length > 1) return 'success';
        else if (length > 0) return 'warning';
    }
    handleNameChange(e) {
        this.setState ({name: e.target.value});
    }
    handleTypeChange(e) {
        this.setState({type: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({name: this.state.name, type: this.state.type});
    }
    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="name" validationState={this.getValidationState()}>
                    <Col componentClass={ControlLabel} sm={3}>Название задачи</Col>
                    <Col sm={9}>
                        <FormControl type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Новая задача" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="typeId">
                    <Col componentClass={ControlLabel} sm={3}>Тип задачи</Col>
                    <Col sm={9}>                        
                        <FormControl componentClass="select" value={this.state.type} onChange={this.handleTypeChange}>
                            <option value="0">Ручное</option>
                            <option value="1">Автоматическое</option>
                            <option value="2">Расписание</option>
                            <option value="3">Срочное</option>
                        </FormControl>
                    </Col>
                </FormGroup>
                <button className="btn btn-success" type="submit">Сохранить</button>                
            </Form>
            
        );
    }
}

export default EditorForm;