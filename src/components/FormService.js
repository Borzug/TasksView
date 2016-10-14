import TaskTable from './TaskTable/TaskTable';
import CreateTaskForm from './TaskEditor/CreateTaskForm';
import TaskService from './TaskService';
import toastr from 'toastr';

const FormService = {
    getValidationState() {
        const length = this.state.name.length;
        if (length > 0) return 'success';
        else if (length < 1) return 'error';
    },
    handleNameChange(e) {
        this.setState ({name: e.target.value});
    },
    handleTypeChange(e) {
        this.setState({typeId: e.target.value});
    },
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.name.length > 0) {
            this.props.onSubmit({params: {name: this.state.name, typeId: this.state.typeId}, id: this.state.id});
        this.setState({name: "", typeId: "0", id: ""});
        }
    },    
    close() {
        this.props.onClose();
    }
};

export default FormService;