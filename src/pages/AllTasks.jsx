import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default AllTasks;