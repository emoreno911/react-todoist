import localforage from 'localforage';
import {
	ADD_TODO,
	REMOVE_TODO,
  TOGGLE_TODO
} from '../actions';

const todo = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		/*case REMOVE_TODO:
			if (state.id !== action.id) {
				return state;
			}
		
			return todos.filter(todo => todo.timestamp !== id);*/
		case TOGGLE_TODO:
			if (state.id !== action.id) {
				return state;
			}
		
			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

const todos = (state= [], action) => {
	var result;
	switch (action.type) {
		case ADD_TODO:
			result = [
				...state,
				todo(undefined, action)
			];

			localforage.setItem('todos_list', result);
			return result;
		case REMOVE_TODO:
			/*const result = state.map(t =>
				todo(t, action)
			);*/
			result = state.filter(todo => todo.id !== action.id);
			localforage.setItem('todos_list', result);
			return result;
		case TOGGLE_TODO:
			result = state.map(t =>
				todo(t, action)
			);

			localforage.setItem('todos_list', result);
			return result;
		default:
			return state;
	}
};

export default todos;