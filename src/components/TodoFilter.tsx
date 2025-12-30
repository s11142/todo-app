import type { FilterType } from '../types/todo';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
}

export const TodoFilter = ({ filter, onFilterChange, counts }: TodoFilterProps) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'すべて' },
    { value: 'active', label: '未完了' },
    { value: 'completed', label: '完了' },
  ];

  return (
    <div className="flex gap-2 mb-6 justify-center">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            filter === value
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
          }`}
          aria-label={`${label}のTODOを表示`}
          aria-pressed={filter === value}
        >
          {label}
          <span className="ml-2 text-sm opacity-75">
            ({value === 'all' ? counts.all : value === 'active' ? counts.active : counts.completed})
          </span>
        </button>
      ))}
    </div>
  );
};
