import { useState } from 'react';
import useLocalStorageState from '@/hooks/useLocalStorageState';
import TodoList from '@/components/TodoList';
import DetailedTodoList from '@/components/DetailedTodoList';
import ErrorMessages from '@/utils/ErrorMessages';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
  const [todos, setTodos] = useLocalStorageState<string[]>('todos', ['']);
  const [inputValue, setInputValue] = useLocalStorageState<string>('inputValue', '');
  const [detailedTodos, setDetailedTodos] = useLocalStorageState('detailedTodos', [{ task: '', description: '' }]);
  const [detailedInput, setDetailedInput] = useLocalStorageState('detailedInput', { task: '', description: '' });
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  const hasEmptyTodos = () => {
    return todos.length === 1 && todos[0] === ''
      ? inputValue.trim() === ''
      : todos.some(todo => todo.trim() === '');
  };

  const hasEmptyDetailedTodos = () => {
    return detailedTodos.length === 1 && detailedTodos[0].task === '' && detailedTodos[0].description === ''
      ? detailedInput.task.trim() === '' || detailedInput.description.trim() === ''
      : detailedTodos.some(todo => todo.task.trim() === '' || todo.description.trim() === '');
  };

  const handleSubmit = () => {
    setShowErrors(true);
    if (!hasEmptyTodos() && !hasEmptyDetailedTodos()) {
      toast.success('Form submitted successfully!', {
        duration: 3000,
        position: 'top-right',
        style: {
          background: '#00a67d',
          color: '#fff',
        },
      });
      navigate('/');
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4">
      <Toaster />
      <div className="shadow-lg rounded px-4 pb-4">
        <h1 className="text-3xl font-bold mb-15">Add FORM</h1>

        <TodoList
          todos={todos}
          setTodos={setTodos}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        <DetailedTodoList
          detailedTodos={detailedTodos}
          setDetailedTodos={setDetailedTodos}
          detailedInput={detailedInput}
          setDetailedInput={setDetailedInput}
        />

        <ErrorMessages
          showErrors={showErrors}
          hasEmptyTodos={hasEmptyTodos}
          hasEmptyDetailedTodos={hasEmptyDetailedTodos}
        />

        <button
          className="bg-slate-700 hover:bg-slate-800 text-white w-full rounded py-4 font-bold my-5"
          onClick={handleSubmit}
        >
          ADD FORM
        </button>
      </div>
    </div>
  );
};

export default AddForm;
