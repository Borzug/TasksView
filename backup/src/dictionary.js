export const statusCodeConverter = {
    "QUEUED": {
        id: 1,
        translated: "В очереди"        
    }, 
    "RUNNING": {
        id: 2,
        translated: "Выполняется",
        progressBar: "info"
    },
    "CANCELED": {
        id: 3,
        translated: "Отменено",
        progressBar: "warning"
    },
    "FINISHED": {
        id: 4,
        translated: "Завершено",
        progressBar: "success"
    },
    "FAILED": {
        id: 5,
        translated: "Провалено",
        progressBar: "danger"
    }
};