import { useState } from "react";
import './TaskForm.css'

export default function TaskForm({ addTask }) {
    const [newTask, setNewTask] = useState("");

    function addNewTask() {
        addTask(newTask);
        setNewTask("");
    }

    return (
        <div className="input-container">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="task-input"
                placeholder="Add a new task"
            />
            <button onClick={addNewTask} className="add-button">Add</button>
        </div>

    )
}