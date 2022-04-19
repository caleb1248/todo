import React from "react";
import TodoItem from "./todoListItem";
import '../todoListItems.css';
export default class TodoListItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var todoItems = this.props.todos.map(todo => {
      return <TodoItem todo={todo} onDelete={
        id => {
          this.props.onDelete(id);
        }
      }/>
    });

    return (
      <ul className="list">
        { todoItems }
      </ul>
    )
  }
}