
import React from 'react';
import { Check, Trash } from 'lucide-react';
import { motion } from 'framer-motion';

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <button
        onClick={() => onToggle(id)}
        className={`flex-shrink-0 w-5 h-5 rounded-md border-2 transition-colors duration-200 flex items-center justify-center ${
          completed
            ? 'bg-primary border-primary'
            : 'border-gray-300 hover:border-primary'
        }`}
      >
        {completed && <Check className="w-3 h-3 text-white" />}
      </button>
      <span
        className={`flex-grow text-sm ${
          completed ? 'text-gray-400 line-through' : 'text-gray-700'
        }`}
      >
        {text}
      </span>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 p-2 rounded-md hover:bg-red-50 transition-all duration-200"
      >
        <Trash className="w-4 h-4 text-red-500" />
      </button>
    </motion.div>
  );
};

export default TaskItem;
