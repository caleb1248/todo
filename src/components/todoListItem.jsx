import React from "react";
import TrashIcon from'./trash.png';
const trashIcon = <img width="20" height="20" src={TrashIcon}/>;
export default class TodoItem extends React.Component {
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