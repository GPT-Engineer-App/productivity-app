import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <Card key={task.id}>
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <div className="flex space-x-2 mt-2">
              <Button variant="outline" onClick={() => onEdit(task)}>Edit</Button>
              <Button variant="destructive" onClick={() => onDelete(task.id)}>Delete</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;