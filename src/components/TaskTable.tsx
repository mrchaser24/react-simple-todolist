import { useEffect, useState } from 'react'
import { DetailedTodo } from '@/utils/todoHandlers'

function TaskTable() {
  const [todos, setTodos] = useState<string[]>([])
  const [detailedTodos, setDetailedTodos] = useState<DetailedTodo[]>([])

  useEffect(() => {
    // Fetch todos from localStorage
    const storedTodos = localStorage.getItem('todos')
    const storedDetailedTodos = localStorage.getItem('detailedTodos')

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }

    if (storedDetailedTodos) {
      setDetailedTodos(JSON.parse(storedDetailedTodos))
    }
  }, [])

  return (
    <div className="shadow-lg rounded max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Task List</h1>

      {/* Simple Todos Table */}
      <h2 className="text-2xl font-semibold mb-4">Simple Tasks</h2>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 mb-8">No tasks available</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300 mb-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Task</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{todo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Detailed Todos Table */}
      <h2 className="text-2xl font-semibold mb-4">Tasks with Description</h2>
      {detailedTodos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks with description available</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Task</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {detailedTodos.map((todo, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{todo.task}</td>
                <td className="border border-gray-300 px-4 py-2">{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TaskTable