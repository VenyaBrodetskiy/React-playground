class TodoTaskService {

    public getTaskList(): string[] {
        return [
            "Do Elias homework",
            "Find good extention for bootstrap"
        ]
    }
}

export default new TodoTaskService();