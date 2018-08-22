import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo, removeTodo}) => {
	return (
		<section>
			{
				todos.length > 0 ?
					todos.map(todo => 
						<Todo data={todo} 
							key={todo.id}
							onToggleTodo={toggleTodo}
							onRemoveTodo={removeTodo}
						/>
					) :
					(
						<article>
							<h5>No Toodos here!!!</h5><h5></h5>
						</article>
					)
			}
		</section>
	)
};

export default TodoList;