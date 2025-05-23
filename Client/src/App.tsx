import TaskBoard from './components/TaskBoard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">TaskFlow Pro</h1>
      <TaskBoard />
    </div>
  );
}

export default App;
