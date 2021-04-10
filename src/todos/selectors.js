import { createSelector } from 'reselect';
export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

export const getIncompleteTodos = createSelector(
	getTodos,
	getTodosLoading,
	todos => todos.filter(todo => !todo.isCompleted)
);

export const getCompletdTodos = createSelector(getTodos, todos =>
	todos.filter(todo => todo.isCompleted)
);
