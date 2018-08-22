import React from 'react';

const FilterLink = ({filter, current, text, onClick}) => {
	if (filter === current)
		return <span>{text}</span>;

	return (
		<a href="#"
			onClick={e => { 
				e.preventDefault();
				onClick(filter) 
			}}
		>
			{text}
		</a>
	);
}

const FilterTodo = ({visibilityFilter, onFilterClick}) => {
	return (
		<div className="filters">
			<FilterLink text="All" 
				filter="SHOW_ALL" 
				current={visibilityFilter}
				onClick={onFilterClick} />
			<FilterLink text="Active" 
				filter="SHOW_ACTIVE" 
				current={visibilityFilter}
				onClick={onFilterClick} />
			<FilterLink text="Completed" 
				filter="SHOW_COMPLETED" 
				current={visibilityFilter}
				onClick={onFilterClick} />
		</div>
	);
}

export default FilterTodo;