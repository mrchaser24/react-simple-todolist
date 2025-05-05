import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddForm from '@/components/AddForm'
import TaskTable from '@/components/TaskTable'

function App() {
  return (
    <Router>
      <div className="max-w-xl mx-auto px-4">
        <nav className="flex justify-between py-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/add-tasks" className="text-blue-500 hover:underline">Add Task</Link>
        </nav>

        <Routes>
          <Route path="/add-tasks" element={<AddForm />} />
          <Route path="/" element={<TaskTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;