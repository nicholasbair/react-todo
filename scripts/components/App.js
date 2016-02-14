import React from 'react';
import autobind from 'autobind-decorator';
import Header from './Header';
import AddTodoForm from './AddTodoForm';
import Todo from './Todo';

// App
@autobind
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: {}
    };
  }

  addTodo(todo) {
    // create unique Id for key
    const TIMESTAMP = (new Date()).getTime();
    // update the state object
    this.state.todos['todo-' + TIMESTAMP] = todo;
    // set the state
    this.setState({ todos: this.state.todos });
  }

  removeTodo(key) {
    delete this.state.todos[key];
    this.setState({
      todos: this.state.todos
    });
  }

  todoCheckboxToggle(key) {
    let todoItem = this.state.todos[key];

    if (todoItem.isCompleted) {
      todoItem.isCompleted = false;
    } else {
      todoItem.isCompleted = true;
    }

    this.setState({
      todos: this.state.todos
    });
  }

  editTodo(key) {
    this.state.todos[key].inEditMode = true;

    this.setState({
      todos: this.state.todos
    });
  }

  // testing update todo after edit
  saveTodo(key, newVal) {
    let todoItem = this.state.todos[key];
    if (todoItem.inEditMode === true) {
      // save the new value of todo
      todoItem.desc = newVal;
      // change inEditMode to false
      todoItem.inEditMode = false;
    }
    this.setState({
      todos: this.state.todos
    });
  }

  renderTodos(key) {
    return (
      <Todo key={key} index={key}
        desc={this.state.todos[key]}
        removeTodo={this.removeTodo}
        todoCheckboxToggle={this.todoCheckboxToggle}
        editTodo={this.editTodo}
        saveTodo={this.saveTodo}
      />
    );
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <div className="input-todos-card">
          <AddTodoForm placeholder="What needs to be done?" addTodo={this.addTodo}/>
          <hr/>
          <ul>
            {Object.keys(this.state.todos).map(this.renderTodos)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
