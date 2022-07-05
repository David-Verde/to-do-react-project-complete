// eslint-disable-line no-unused-vars
import React from 'react';
import TodoItem from './TodoItem.js';

class TodosList extends React.Component {
  // eslint-disable-line
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;