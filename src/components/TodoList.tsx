import { handleAddInitialTodo, handleAddAnotherTodo, handleDeleteTodo, handleUpdateTodo } from '../todoHandlers';
import { Dispatch, SetStateAction } from 'react';

type TodoListProps = {
  todos: string[];
  setTodos: Dispatch<SetStateAction<string[]>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

const TodoList = ({ todos, setTodos, inputValue, setInputValue }: TodoListProps) => {
  const handlers = {
    todos,
    setTodos,
    inputValue,
    setInputValue,
    detailedTodos: [],
    setDetailedTodos: () => {},
    detailedInput: { task: '', description: '' },
    setDetailedInput: () => {},
  };

  return (
    <div className="mt-4">
      <h2>TODO LIST</h2>
      <div className="border-l-3 border-gray-300 p-2 ml-6">
        <p className="pb-1">Task Name</p>

        {todos.map((todo, index) => (
          <div key={index} className="flex items-center gap-2 mb-3">
            <input
              className="shadow appearance-none border rounded-lg py-1 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={todos.length === 1 && index === 0 ? inputValue : todo}
              onChange={(e) =>
                todos.length === 1 && index === 0
                  ? setInputValue(e.target.value)
                  : handleUpdateTodo(handlers, index, e.target.value)
              }
              placeholder="Task Name"
            />
            <button
              className={`w-10 h-8 rounded flex items-center justify-center ${
                todos.length === 1 && index === 0
                  ? 'bg-gray-300 hover:bg-gray-400'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
              onClick={() =>
                todos.length === 1 && index === 0
                  ? handleAddInitialTodo(handlers)
                  : handleDeleteTodo(handlers, index)
              }
            >
              <span
                className={`${
                  todos.length === 1 && index === 0 ? 'text-4xl' : 'text-3xl'
                } leading-none -mt-1.5 font-light`}
              >
                {todos.length === 1 && index === 0 ? '+' : '×'}
              </span>
            </button>
          </div>
        ))}

        <div className="flex justify-end">
          <button
            className="w-36 h-6 bg-emerald-600 text-sm font-bold rounded flex items-center justify-around mt-2 hover:bg-emerald-700 text-white"
            onClick={() => handleAddAnotherTodo(handlers)}
          >
            <span className="text-3xl leading-none -mt-1.5 font-light">+</span> Add TODO LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;