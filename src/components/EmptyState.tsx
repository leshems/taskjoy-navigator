
import React from 'react';
import { ListTodo } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <ListTodo className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
      <p className="text-sm text-gray-500">
        Add your first task using the input above
      </p>
    </div>
  );
};

export default EmptyState;
