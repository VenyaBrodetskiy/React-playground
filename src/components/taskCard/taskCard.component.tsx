import React from 'react';

interface ITaskCardProps {
    taskText: string,
    className?: string,
    handleDelete: () => void
}

export default function TaskCardComponent({ taskText, className, handleDelete }: ITaskCardProps) {
    return (
        <div className={"card " + className}>
            <div className="card-header">Task</div>
            <div className="card-body">
                <h4 className="card-title">{taskText}</h4>
                <button type="button" className="btn btn-primary" onClick={handleDelete}>Done</button>
            </div>
        </div>
    )
}
