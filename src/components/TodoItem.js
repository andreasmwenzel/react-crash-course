import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            style={btnStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#f00",
  color: "#fff",
  border: "none",
  padding: "8x 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
