import $ from 'jquery';
import {statusCodeConverter} from '../dictionary';
import moment from '../../node_modules/moment/moment';
import toastr from 'toastr';
import TaskTable from './TaskTable/TaskTable';
import CreateTaskForm from './TaskEditor/CreateTaskForm';
import {FilterStore} from './FilterStore';

const TaskService = {
    getTasks() {
        let query = "";
        Object.keys(FilterStore).map((key) => {
            query += key + "=" + FilterStore[key] + "&";
        });              
        $.ajax({            
            url: "http://localhost:8080/api/tasks?" + query
        }).done(this.getTasksCompleted)
          .fail(this.getTasksFailed);  
    },
    getTasksFailed () {
        toastr.error("Проверьте соединение с сервером.", "Данные не загружены!", {"closeButton": true, "positionClass": "toast-bottom-right"});
    },
    getTasksCompleted (tasks) {
        tasks.forEach((task) => {
            task.typeId = task.type.id;
            task.typeName = task.type.name;
            task.creationDateFormatted = moment(task.creationDate).format("DD.MM.YYYY / HH:MM");
            if (task.endDate) {task.endDateFormatted = moment(task.endDate).format("DD.MM.YYYY / HH:MM");}
            task.progressStatus = statusCodeConverter[task.statusCode].progressBar;
            task.statusCodeTranslated = statusCodeConverter[task.statusCode].translated;
        });                                    
        this.setState({tasks: tasks});             
    },    
    deleteTask(id) {        
        $.ajax({
            url: "http://localhost:8080/api/tasks/"+id,
            type: 'DELETE'            
        }).done(this.deleteTaskCompleted)
          .fail(this.deleteTaskFailed);
    },
    deleteTaskCompleted() {        
        this.getTasks();
        toastr.success("", "Задача удалена!", {"closeButton": true, "positionClass": "toast-bottom-right"});     
    },
    deleteTaskFailed() {
        toastr.error("", "Не удалось удалить задачу!", {"closeButton": true, "positionClass": "toast-bottom-right"});
    },
    createTask(task) {
        $.ajax({
            url: "http://localhost:8080/api/tasks",
            type: 'POST',            
            data: task.params
        }).done(this.createTaskCompleted)
          .fail(this.createTaskFailed);
    },
    createTaskCompleted(taskId) {        
        $.ajax({
            url: "http://localhost:8080/api/tasks/" + taskId.id
        }).done(this.updateTasksOnCreation);
    },
    updateTasksOnCreation(task) {        
        this.getTasks();
        toastr.success(
            "Дата создания: " + moment(task.creationDate).format("DD.MM.YYYY / HH:MM"),
            "Создана задача: " + task.name, {"closeButton": true, "positionClass": "toast-bottom-right"}
        );
    },
    createTaskFailed() {
        toastr.error("", "Не удалось создать задачу!", {"closeButton": true, "positionClass": "toast-bottom-right"});
    },
    editTask(task) {        
        $.ajax({
            url: "http://localhost:8080/api/tasks/" + task.id,
            type: 'PUT',
            data: task.params
        }).done(this.editTaskCompleted)
          .fail(this.editTaskFailed);
    },
    editTaskCompleted() {
        this.getTasks();
        toastr.success("", "Задача успешно обновлена!", {"closeButton": true, "positionClass": "toast-bottom-right"});        
    },
    editTaskFailed() {
        toastr.error("", "Не удалось обновить задачу!", {"closeButton": true, "positionClass": "toast-bottom-right"});
    },    
    createFilter(e) {
        FilterStore[e.target.id] = e.target.value;
        this.getTasks();        
    },
    clearFilter() {
        FilterStore.name = '';
        FilterStore.typeId = '';
        FilterStore.statusCode = '';
        FilterStore.from = '';
        FilterStore.to = '';
        $('input').val('');
        $('select').val('');
        this.getTasks();
    }
};    


export default TaskService;