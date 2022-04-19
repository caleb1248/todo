import React from "react";
import TodoForm from "./todoForm";
import TodoListItems from "./todoListItems";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, new Todo(todo)]
    });
  }

  clearAll() {
    this.setState({
      todos: []
    });
  }

  clearAllThatAreChecked() {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.checked === false;
      })
    });
  }

  render() {
    return (
      <>
        <h1 style={{textAlign: "center"}}>Todo List</h1>
        <TodoForm onAddTodo={ this.addTodo } />
        <TodoListItems todos={ this.state.todos } onDelete={
          todoId => {
            this.setState({
              todos: this.state.todos.filter(todo => todo.id !== todoId)
            });
          }
        }/>
        <button onClick={ this.clearAll.bind(this) }>Clear all</button>
        <button onClick={ this.clearAllThatAreChecked.bind(this) }>Delete checked</button>
      </>
    )
  }
}





class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listItem">
        <div>
        <input type="checkbox" onChange={() => this.props.todo.checked = !this.props.todo.checked}/>
        { this.props.todo.todo }
        </div>
        <button onClick={ () => {
          this.props.onDelete(this.props.todo.id);
        } }>{ trashIcon }</button>
      </div>
    )
  }
}

class Todo {
  constructor(todo) {
    this.todo = todo;
    this.checked = false;
    this.id = Math.round(Math.random() * 100000);
  }
}