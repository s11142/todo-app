export interface Todo {
  id: string;          // UUID v4
  text: string;        // TODO content
  completed: boolean;  // Completion status
  createdAt: number;   // Creation timestamp (Unix timestamp)
  updatedAt: number;   // Last update timestamp (Unix timestamp)
}

export type FilterType = 'all' | 'active' | 'completed';
