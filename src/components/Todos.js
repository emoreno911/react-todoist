import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  state = {
    todos: [
      { timestamp: 1534328648709, done: false, content: "Watch Netflix" }
    ]
  }
  handleKeyPressed = (e) => {
    if(e.keyCode === 13)
      this.handleAddTodo();
  }
  handleAddTodo = (e) => {
    const content = this.input.value;

    if (content.trim() === "")
      return;

    this.setState(prevState => {
      const newtodo = {
        content,
        timestamp: Date.now(),
        done: false
      }
      prevState.todos = [...prevState.todos, newtodo];
      return prevState;
    },
    () => {
      this.input.value = "";
    });
  }
  handleCompleteTodo = (e) => {
    const timestamp = parseInt(e.currentTarget.getAttribute('data-timestamp'));
    const index = this.state.todos.findIndex(o => o.timestamp === timestamp);
    this.setState(prevState => {
      prevState.todos[index]['done'] = !prevState.todos[index]['done'];
      return prevState;
    });
  }
  handleRemoveTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.timestamp !== id);
    this.setState({ todos });
  }
  render() {
    const { todos } = this.state;
    const doneTodos = todos.filter(t => t.done);
    const progress = (todos.length > 0)? (doneTodos.length*100/todos.length) : 0;
    const emptyListItem = (
      <article>
        <h5>No Toodos here!!!</h5><h5></h5>
      </article>
    );

    return (
      <div className="todo-container">
        <header>
          <input type="text" 
            className="text-control" 
            placeholder="Add a Todo"
            onKeyUp={this.handleKeyPressed} 
            ref={input => this.input = input} />
          <button onClick={this.handleAddTodo}>&#43;</button>
        </header>
        <section>
          {
            todos.length > 0 ?
              todos.map(todo => 
                <Todo data={todo} 
                  key={todo.timestamp}
                  onRemove={this.handleRemoveTodo}
                  onToggleComplete={this.handleCompleteTodo} />
              ) :
              emptyListItem
          }
        </section>
        <footer>
          <div className="progress-general">
            <div style={{width:`${progress}%`}}></div>
          </div>
          <div className="info">
            <h5></h5>
            <h5>Completed {doneTodos.length} of {todos.length}</h5>
          </div>
        </footer>
      </div>
    );
  }
}

export default Todos;