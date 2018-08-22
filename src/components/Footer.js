import React from 'react';
import { connect } from 'react-redux'
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = ({todos}) => {
	const doneTodos = todos.filter(t => t.completed);
	const progress = (todos.length > 0)? (doneTodos.length*100/todos.length) : 0;

	return (
		<footer>
			<div className="progress-general">
				<div style={{width:`${progress}%`}}></div>
			</div>
			<div className="info">
				<div className="filters">
					<FilterLink filter={VisibilityFilters.SHOW_ALL}>
						All
					</FilterLink>
					<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
						Active
					</FilterLink>
					<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
						Completed
					</FilterLink>
				</div>
				<h5>Completed {doneTodos.length} of {todos.length}</h5>
			</div>
		</footer>
	)
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Footer);