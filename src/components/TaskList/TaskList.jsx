import "./TaskList.css"

export default function TaskList({ task, deleteTask, toggleComplete }) {
    return (
        <li
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
        >
            <input type="checkbox" onChange={() => toggleComplete(task.id)} />
            <span className="task-text">
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="delete-button">
                ✕
            </button>
        </li>
    )
}