import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json';
import TodoForm from './components/todoForm';

//import Navigation from './components/Navigation';
//console.log(todos);
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Aplicacion de TAREAS',
      ntareas: 10,
      todos: todos,
      TodoForm: TodoForm
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    //this.removeTodo = this.removeTodo.bind(this);
  }
/////// antes del render
handleAddTodo(todo) {
  this.setState({
    todos: [...this.state.todos, todo]
  })
}

removeTodo(index) {
  console.log(index);
if (window.confirm('are you sure you want to delete it?')) {
  this.setState({
    todos: this.state.todos.filter((e,i) => {
      return i != index
    })
  })
}
}

render() {
  const todos = this.state.todos.map((todo, i) => {
    return (
    <div classname="col-md-4 key={i}">
      <div className="card mt-6">
       <div className="card-header">
        <h3>{todo.title}</h3>
        <span className="badge badge-pill badge-danger ml-2">
         { todo.priority}
        </span>
       </div>
       <div classname="card-body">
        <p>{todo.description}</p>
        <p><mark>{ todo.responsabile}</mark></p>
       </div>
       <div className="card-footer">
       <button className="btn btn-danger"
       onClick={this.removeTodo.bind(this, i)}>
       Delete
      </button>
       </div>
      </div>
    </div>
    )
  })
  //console.log('antes de renderizar el componente')
  return (
    <div className="App">
    <div>

    </div>
      <nav className="navbar navbar-dark bg-dark">
       <a href="" className="text-white">
        Tasks
        <span className="badge badge-pill badge-light m-2">
         {this.state.todos.length}
        </span>
       </a>
       </nav>
       <div>
       {this.state.TodoForm}
       </div>
        <div className="container">
         <div className="row mt-4">
          {todos}
         <div className=" ml-4">
         <TodoForm onAddTodo={this.handleAddTodo}/>
         </div>
         </div>
        </div>

      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
 }
}


export default App;
