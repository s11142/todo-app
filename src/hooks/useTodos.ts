import { useLocalStorage } from './useLocalStorage';
import type { Todo } from '../types/todo';

const STORAGE_KEY = 'todos_app_data';

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>(STORAGE_KEY, []);

  const addTodo = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: Date.now() }
          : todo
      )
    );
  };

  const updateTodo = (id: string, text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: trimmedText, updatedAt: Date.now() }
          : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
  };
};
