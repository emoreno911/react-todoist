import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
	handleKeyUp = (e) => {
		if(e.keyCode === 13)
			this.handleAddTodo();
	}
	handleAddTodo = (e) => {
		const {input} = this;
		if (!input.value.trim()) {
			return;
		}
		this.props.dispatch(addTodo(input.value));
		this.input.value = "" ;
	}
	render() {
		return (
			<header>
				<input type="text" 
					className="text-control" 
					placeholder="Add a Todo"
					ref={o => this.input = o} 
					onKeyUp={this.handleKeyUp}
				/>
				<button onClick={this.handleAddTodo}>
					<span>&#43;</span>
				</button>
			</header>
		);
	}
}

export default connect()(AddTodo);