
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';
import EmptyState from '../components/EmptyState';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([
      { id: Date.now(), text, completed: false },
      ...tasks,
    ]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium text-gray-900 mb-2">Tasks</h1>
          <p className="text-gray-500">Keep track of your daily tasks</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-6">
          <TaskInput onAddTask={addTask} />
        </div>

        <div className="space-y-3">
          <AnimatePresence>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  {...task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Index;
