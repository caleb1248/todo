import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  render() {
    return (
      <>
        <h1>you todos</h1>
        <TodoForm onAddTodo={this.addTodo} />
        <TodoListItems todos={this.state.todos} ref="todoList"/>
      </>
    )
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const todo = this.refs.todo.value;
    this.props.onAdd(todo);
    this.refs.todo.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="todo" />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

class TodoListItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var todoItems = this.props.todos.map((todo) => {
      return <TodoItem todo={todo}/>
    });
    return (
      <ul>
        {todoItems}
      </ul>
    )
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="checkbox"/>
        {this.props.todo}
      </div>
    )
  }
}