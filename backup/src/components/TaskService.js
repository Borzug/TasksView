import $ from 'jquery';
import {statusCodeConverter} from '../dictionary';
import moment from '../../node_modules/moment/moment';
import {filter} from '../filter';
import TaskTable from './TaskTable/TaskTable';
import EditorForm from './TaskEditor/EditorForm';

const TaskService = {
    getTasks () {                
        $.ajax({            
            url: "http://localhost:8080/api/tasks",
        }).done(this.getTasksCompleted)
          .fail(this.getTasksFailed);  
    },
    getTasksFailed () {
        alert("Данные не загружены!");
    },
    getTasksCompleted (tasks) {
        tasks.forEach((task) => {
            task.typeId = task.type.id;
            task.typeName = task.type.name;
            task.creationDateFormatted = moment(task.creationDate).format("HH:MM / DD.MM.YYYY");
            if (task.endDate) {task.endDateFormatted = moment(task.endDate).format("HH:MM / DD.MM.YYYY");}
            task.progressStatus = statusCodeConverter[task.statusCode].progressBar;
            task.statusCodeTranslated = statusCodeConverter[task.statusCode].translated;
        });                                    
        this.setState({tasks: tasks});
    },
    deleteTask(id) {              
        $.ajax({
            url: "http://localhost:8080/api/tasks/"+id,
            type: 'DELETE'            
        }).done(alert("Удалено"))
          .fail(alert("Не удалось удалить задачу"));
    },
    createTask(task) {
        $.ajax({
            URL: "http://localhost:8080/api/tasks",
            type: 'POST',            
            dataType: 'json',
            data: task
        })
    }    
};

export default TaskService;