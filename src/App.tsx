import { useState, useMemo } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import type { FilterType } from './types/todo';

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo, updateTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const counts = useMemo(() => ({
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  }), [todos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-2">
          Todo App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          シンプルで使いやすいタスク管理
        </p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <TodoForm onAdd={addTodo} />
          <TodoFilter filter={filter} onFilterChange={setFilter} counts={counts} />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        </div>

        {todos.length > 0 && (
          <div className="mt-4 text-center text-sm text-gray-600">
            合計: {counts.all}件 | 未完了: {counts.active}件 | 完了: {counts.completed}件
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
