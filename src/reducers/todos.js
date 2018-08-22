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
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			];
		case REMOVE_TODO:
			/*return state.map(t =>
				todo(t, action)
			);*/
			return state.filter(todo => todo.id !== action.id);
		case TOGGLE_TODO:
			return state.map(t =>
				todo(t, action)
			);
		default:
			return state;
	}
};

export default todos;