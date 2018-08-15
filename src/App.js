import React, { Component } from 'react';
import './App.css';


class TodoItem extends Component {
  state = {
    animationClass: 'fadeInLeftBig'
  }
  formatTimeAgo(ms) {
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
  handleClickRemove = (e) => {
    e.preventDefault();
    this.props.onRemove(this.props.data.timestamp);
  }
  render() {
    const { onToggleComplete } = this.props;
    const { timestamp, content, done } = this.props.data;
    return (
      <article className={`animated ${this.state.animationClass}`}>
        <h5>
          <a href="#" className="btn-remove" onClick={this.handleClickRemove}>&times;</a> &nbsp;
          <span className={done ? 'completed' : null}>{ content }</span>
          <small>{this.formatTimeAgo(timestamp)}</small>
        </h5>
        <label className="label--checkbox">
          <input type="checkbox" 
            className="checkbox" 
            checked={done}
            data-timestamp={timestamp} 
            onClick={onToggleComplete} />
        </label>
      </article>
    );
  }
}

class App extends Component {
  state = {
    files: [],
    todos: [
      { timestamp: 1534308648707, done: false, content: "Do homework" },
      { timestamp: 1534308748708, done: false, content: "Make breakfast" },
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
                <TodoItem data={todo} 
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

export default App;
