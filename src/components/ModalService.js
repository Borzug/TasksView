import React from 'react';

const ModalService = {
    open() {
        this.setState({showEditor: true});
    },
    close() {
        this.setState({showEditor: false});
    },
    createTask(task) {
        this.close();
        this.props.createTask(task);
    },
    editTask(task) {
        this.close();
        this.props.editTask(task);        
    }
};

export default ModalService;