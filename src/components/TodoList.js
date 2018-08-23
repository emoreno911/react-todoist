import React from 'react';
import Sortable from 'sortablejs';
import Todo from './Todo';


class TodoList extends React.Component {
	componentDidMount() {
		this.sortable = new Sortable(this.list, {
			draggable: "article",
			onEnd: (e) => {
				//console.log(`moved from ${e.oldIndex} to ${e.newIndex}`);
				this.props.sortTodo(e.oldIndex, e.newIndex);
			}
		});
	}
	render() {
		const {todos, toggleTodo, removeTodo} = this.props;
		return (
			<section ref={list => this.list = list}>
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
	}
}

export default TodoList;