import React from 'react';

const formatTimeAgo = (ms) => {
	var date = new Date(ms);
	var seconds = Math.floor((new Date() - date) / 1000);
	var interval = seconds / 31536000;
	var str = ' ago';

	if (interval > 1) {
		return Math.floor(interval) + " years" + str;
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + " months" + str;
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + " days" + str;
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + " hours" + str;
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + " minutes" + str;
	}
	return "few moments ago";
}

const Todo = (props) => {
	const { onToggleTodo, onRemoveTodo } = props;
	const { id, text, completed } = props.data;
	return (
		<article className={`animated fadeInTop`}>
			<h5>
				<a href="#" className="btn-remove" onClick={e => {onRemoveTodo(id)}}>&times;</a> &nbsp;
				<span className={completed ? 'completed' : null}>{ text }</span>
				<small>{formatTimeAgo(id)}</small>
			</h5>
			<label className="label--checkbox">
				<input type="checkbox" 
					className="checkbox"
					defaultChecked={completed}
					onClick={e => { onToggleTodo(id) }} />
			</label>
		</article>
	);
}

export default Todo;