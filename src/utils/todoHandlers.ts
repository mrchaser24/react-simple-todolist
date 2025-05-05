import { SetStateAction, Dispatch } from 'react';

export interface DetailedTodo {
  task: string;
  description: string;
}

export interface TodoHandlers {
  todos: string[];
  setTodos: Dispatch<SetStateAction<string[]>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  detailedTodos: DetailedTodo[];
  setDetailedTodos: Dispatch<SetStateAction<DetailedTodo[]>>;
  detailedInput: DetailedTodo;
  setDetailedInput: Dispatch<SetStateAction<DetailedTodo>>;
}

export const handleAddInitialTodo = ({ todos, setTodos, inputValue, setInputValue }: TodoHandlers) => {
  if (inputValue.trim()) {
    const filteredTodos = todos.filter(todo => todo !== '');
    setTodos([...filteredTodos, inputValue.trim(), '']);
    setInputValue('');
  }
};

export const handleAddAnotherTodo = ({ todos, setTodos, inputValue, setInputValue }: TodoHandlers) => {
  if (todos.length === 1 && todos[0] === '' && inputValue.trim()) {
    setTodos([inputValue.trim(), '']);
    setInputValue('');
  } else {
    const filteredTodos = todos.filter(todo => todo.trim() !== '');
    setTodos([...filteredTodos, '']);
  }
};

export const handleDeleteTodo = ({ todos, setTodos }: TodoHandlers, index: number) => {
  const updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos.length ? updatedTodos : ['']);
};

export const handleUpdateTodo = ({ todos, setTodos }: TodoHandlers, index: number, value: string) => {
  const updatedTodos = [...todos];
  updatedTodos[index] = value;
  setTodos(updatedTodos);
};

export const handleAddDetailedTodo = ({ detailedTodos, setDetailedTodos, detailedInput, setDetailedInput }: TodoHandlers) => {
  if (detailedInput.task.trim()) {
    const filteredDetailedTodos = detailedTodos.filter(todo => todo.task !== '');
    setDetailedTodos([
      ...filteredDetailedTodos,
      { task: detailedInput.task.trim(), description: detailedInput.description.trim() },
      { task: '', description: '' }
    ]);
    setDetailedInput({ task: '', description: '' });
  }
};

export const handleAddAnotherDetailedTodo = ({ detailedTodos, setDetailedTodos, detailedInput, setDetailedInput }: TodoHandlers) => {
  if (detailedTodos.length === 1 && !detailedTodos[0].task && !detailedTodos[0].description && detailedInput.task.trim()) {
      setDetailedTodos([
        { task: detailedInput.task.trim(), description: detailedInput.description.trim() },
        { task: '', description: '' }
      ]);
      setDetailedInput({ task: '', description: '' });
  } else {
    const filteredDetailedTodos = detailedTodos.filter(todo => todo.task.trim() !== '');
    setDetailedTodos([...filteredDetailedTodos, { task: '', description: '' }]);
  }
};

export const handleDeleteDetailedTodo = ({ detailedTodos, setDetailedTodos }: TodoHandlers, index: number) => {
  const updatedDetailedTodos = detailedTodos.filter((_, i) => i !== index);
  setDetailedTodos(updatedDetailedTodos.length ? updatedDetailedTodos : [{ task: '', description: '' }]);
};

export const handleUpdateDetailedTodo = (
  { detailedTodos, setDetailedTodos }: TodoHandlers,
  index: number,
  field: keyof DetailedTodo,
  value: string
) => {
  const updatedDetailedTodos = [...detailedTodos];
  updatedDetailedTodos[index][field] = value;
  setDetailedTodos(updatedDetailedTodos);
};
