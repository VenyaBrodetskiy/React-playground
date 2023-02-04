import React, { useEffect } from 'react';
import { useState } from 'react';


import TodoTaskService from "../../services/todotask.service";

import TaskCardComponent from "../../components/taskCard/taskCard.component";

export default function TodoPage() {

    const [tasks, setTasks] = useState([""]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const taskArray = TodoTaskService.getTaskList();
        setTasks(taskArray);
    }, []);

    function handleDone(index: number) {
        console.log("button clicked");
        const newTasks = tasks.filter(((task, i) => i !== index));
        setTasks(newTasks);
    }

    function handleAdd() {
        const newTasks = [...tasks, inputValue];
        setTasks(newTasks);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div className="d-flex flex-column justify-content-start col-4 text-center">
            <h2 className="my-3">Tasks to do today</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add new task" onChange={handleInputChange} />
                <button type="button" className="btn btn-outline-secondary" onClick={handleAdd}>Add task</button>
            </div>
            {tasks.map((task, index) => {
                return <TaskCardComponent
                    key={index}
                    className="mb-3"
                    taskText={task}
                    handleDelete={() => handleDone(index)} />
            })}
        </div>
    );
}
