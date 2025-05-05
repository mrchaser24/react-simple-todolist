import { Dispatch, SetStateAction } from 'react';
import {
  handleAddDetailedTodo,
  handleAddAnotherDetailedTodo,
  handleDeleteDetailedTodo,
  handleUpdateDetailedTodo,
} from '../todoHandlers';

interface DetailedTodo {
  task: string;
  description: string;
}

interface DetailedTodoListProps {
  detailedTodos: DetailedTodo[];
  setDetailedTodos: Dispatch<SetStateAction<DetailedTodo[]>>;
  detailedInput: DetailedTodo;
  setDetailedInput: Dispatch<SetStateAction<DetailedTodo>>;
}

const DetailedTodoList: React.FC<DetailedTodoListProps> = ({
  detailedTodos,
  setDetailedTodos,
  detailedInput,
  setDetailedInput,
}) => {
  const handlers = {
    detailedTodos,
    setDetailedTodos,
    detailedInput,
    setDetailedInput,
    todos: [],
    setTodos: () => {},
    inputValue: '',
    setInputValue: () => {},
  };

  const renderTodoItem = (todo: DetailedTodo, index: number) => {
    const isSingleTodo = detailedTodos.length === 1 && index === 0;

    return (
      <div key={index} className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <input
            className="shadow appearance-none border rounded-lg py-1 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={isSingleTodo ? detailedInput.task : todo.task}
            onChange={(e) =>
              isSingleTodo
                ? setDetailedInput({ ...detailedInput, task: e.target.value })
                : handleUpdateDetailedTodo(handlers, index, 'task', e.target.value)
            }
            placeholder="Task Name"
          />
          <input
            className="shadow appearance-none border rounded-lg py-1 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={isSingleTodo ? detailedInput.description : todo.description}
            onChange={(e) =>
              isSingleTodo
                ? setDetailedInput({ ...detailedInput, description: e.target.value })
                : handleUpdateDetailedTodo(handlers, index, 'description', e.target.value)
            }
            placeholder="Description"
          />
          <button
            className={`w-10 h-8 rounded flex items-center justify-center px-1.5 ${
              isSingleTodo ? 'bg-gray-300 hover:bg-gray-400' : 'bg-red-600 text-white hover:bg-red-700'
            }`}
            onClick={() =>
              isSingleTodo
                ? handleAddDetailedTodo(handlers)
                : handleDeleteDetailedTodo(handlers, index)
            }
          >
            <span className={`${isSingleTodo ? 'text-4xl' : 'text-3xl'} leading-none -mt-1.5 font-light`}>
              {isSingleTodo ? '+' : '×'}
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-4">
      <h2>TODO LIST with Description</h2>
      <div className="border-l-3 border-gray-300 p-2 ml-6">
        <p className="pb-1">Task Details</p>
        {detailedTodos.map(renderTodoItem)}
        <div className="flex justify-end">
          <button
            className="w-36 h-6 bg-emerald-600 text-sm font-bold rounded flex items-center justify-around mt-2 hover:bg-emerald-700 text-white"
            onClick={() => handleAddAnotherDetailedTodo(handlers)}
          >
            <span className="text-3xl leading-none -mt-1.5 font-light">+</span> Add TODO LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedTodoList;