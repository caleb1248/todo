import React from "react";
import '../todoForm.css';
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.todo = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    const todo = this.todo.current.value;
    this.props.onAddTodo(todo);
    this.todo.current.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.todo} placeholder="Your todo name"/>
        <button type="submit">+</button>
      </form>
    )
  }
}

export default TodoForm;