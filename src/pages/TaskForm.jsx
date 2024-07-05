import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" className="mb-4">Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">Title</label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium">Due Date</label>
            <Input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
          </div>
          <Button type="submit" variant="primary">Save Task</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskForm;