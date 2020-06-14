import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.todos.map((todo) => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          markComplete={this.props.markComplete}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
};

export default Todos;
