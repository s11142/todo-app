import { useState } from 'react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText);
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUpdate();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mt-1 w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
        aria-label={`${todo.text}を${todo.completed ? '未完了' : '完了'}にする`}
      />

      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
            aria-label="TODOを編集"
          />
        ) : (
          <div>
            <p
              onDoubleClick={() => setIsEditing(true)}
              className={`text-gray-800 cursor-pointer break-words ${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
              title="ダブルクリックで編集"
            >
              {todo.text}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              作成: {formatDate(todo.createdAt)}
            </p>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="flex gap-2">
          <button
            onClick={handleUpdate}
            className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="変更を保存"
          >
            保存
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="編集をキャンセル"
          >
            キャンセル
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`${todo.text}を編集`}
          >
            編集
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label={`${todo.text}を削除`}
          >
            削除
          </button>
        </div>
      )}
    </div>
  );
};
