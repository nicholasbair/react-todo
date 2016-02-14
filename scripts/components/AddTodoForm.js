import React  from 'react';
import autobind from 'autobind-decorator';

@autobind
class AddTodoForm extends React.Component {
  createTodo(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      let todo = {
        desc: this.refs.desc.value,
        isCompleted: false,
        inEditMode: false
      };
      this.props.addTodo(todo);
      this.refs.form.reset();
    }
  }

  // Setup for removing submit button
  handleKeyUp(event) {
    this.createTodo(event);
  }

  render() {
    return (
      <form ref="form" onSubmit={this.createTodo}>
        <input type="text" ref="desc"
          placeholder={this.props.placeholder} required
          onKeyUp={this.handleKeyUp}
        />

      </form>
    );
  }
}

export default AddTodoForm;
