import React, { Component } from 'react';

class Todo extends Component {
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

export default Todo;