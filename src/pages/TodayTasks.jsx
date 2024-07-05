import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { isToday } from "date-fns";

const TodayTasks = () => {
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

  const todayTasks = tasks.filter(task => isToday(new Date(task.dueDate)));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today's Tasks</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={todayTasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default TodayTasks;