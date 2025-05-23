import { useState } from 'react';
import { api } from '../api';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');

const AddTaskForm = ({ onTaskAdded }: { onTaskAdded: () => void }) => {
  const [text, setText] = useState('');

  const handleAdd = async () => {
    if (!text.trim()) return;
    await api.post('/tasks', { content: text, status: 'To Do' });
    socket.emit('task-updated');
    setText('');
    onTaskAdded();
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="New task..."
        className="p-2 flex-1 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTaskForm;
