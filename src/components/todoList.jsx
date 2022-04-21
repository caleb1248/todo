import React from "react";
import TodoForm from "./todoForm";
import TodoListItems from "./todoListItems";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || []
    };

    this.addTodo = this.addTodo.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.clearAllThatAreChecked = this.clearAllThatAreChecked.bind(this);
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
    var newTodos = [];
    this.state.todos.forEach(todo => {
      if (!todo.checked) {
        newTodos.push(todo);
      }
    });

    newTodos.map(todo => {
      var t = todo;
      t.checked = false;
      return t;
    });

    this.setState({
      todos: newTodos
    });
  }

  render() {
    // save to localStorage on ctrl+s
    window.onkeydown = e => {
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    };
    

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
        <div className="clearStuff">
          <button onClick={ this.clearAll }>Clear all</button>
          <button onClick={ this.clearAllThatAreChecked }>Delete checked</button>
          <button onClick={
            () => {
              localStorage.setItem("todos", JSON.stringify(this.state.todos));
            }
          }>save</button>
        </div>
      </>
    )
  }
}

class Todo {
  constructor(todo) {
    this.checked = false;
    this.todo = todo;
    this.id = Math.round(Math.random() * 100000);
  }
}