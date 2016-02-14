// Todo

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class Todo extends React.Component {
  onButtonClick() {
    let key = this.props.index;
    this.props.removeTodo(key);
  }

  onBoxCheck() {
    let key = this.props.index;
    this.props.todoCheckboxToggle(key);
  }

  doubleClickTodo() {
    let key = this.props.index;
    this.props.editTodo(key);
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      let key = this.props.index;
      let newVal = this.refs.desc.value;
      this.props.saveTodo(key, newVal);
    }
  }

  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.onBoxCheck}/>
        <input type="text" ref="desc"
          onDoubleClick={this.doubleClickTodo}
          onKeyUp={this.handleKeyUp}
          defaultValue={this.props.desc.desc}
          disabled={!this.props.desc.inEditMode}
        />
        <button onClick={this.onButtonClick}> x</button>
      </li>
    );
  }
}

export default Todo;
