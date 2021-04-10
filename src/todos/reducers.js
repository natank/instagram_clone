import {
	CREATE_TODO,
	REMOVE_TODO,
	COMPLETE_TODO,
	LOAD_TODOS_IN_PROGRESS,
	LOAD_TODOS_SUCCESS,
	loadTodosFailure,
	LOAD_TODOS_FAILURE,
} from './actions';

const initialState = {
	isLoading: false,
	data: [],
};

export const todos = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CREATE_TODO: {
			const { todo } = payload;
			return { ...state, data: state.data.concat(todo) };
		}

		case REMOVE_TODO: {
			const { todo: todoToRemove } = payload;
			return {
				...state,
				data: state.data.filter(todo => todo.id !== todoToRemove.id),
			};
		}
		case COMPLETE_TODO: {
			// payload: {text: string}
			const { todo: todoToMarkAsCompleted } = payload;
			return {
				...state,
				data: state.data.map(todo => {
					if (todo.id == todoToMarkAsCompleted.id) return todoToMarkAsCompleted;
					else return todo;
				}),
			};
		}

		case LOAD_TODOS_SUCCESS: {
			const { todos } = payload;
			return { ...state, isLoading: false, data: todos ? todos : [] };
		}
		case LOAD_TODOS_IN_PROGRESS:
			return { ...state, isLoading: true };
		case LOAD_TODOS_FAILURE:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
