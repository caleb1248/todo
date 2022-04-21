import React from "react";
import TrashIcon from'./trash.png';
const trashIcon = <img width="20" height="20" src={TrashIcon}/>;
export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };

    this.state.checked = this.props.todo.checked;
  }

  render() {
    return (
      <div 
        className="listItem"
        style={{
          cursor: "pointer",
          userSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none"
        }}

        onClick={
          () => {
            this.setState({checked: !this.state.checked});
            this.props.todo.checked = !this.props.todo.checked;
          }
        }
      >
        <div>
          <span style={{
            marginRight: "10px"
          }}>{this.state.checked?"☑":"☐"}</span>
          { this.props.todo.todo }
        </div>
        
        <button onClick={ e => {
          e.preventDefault();
          this.props.onDelete(this.props.todo.id);
        } }>{ trashIcon }</button>
      </div>
    )
  }
}