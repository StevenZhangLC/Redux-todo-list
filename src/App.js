import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text 
  }
}

const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(boundCompleteTodo(index))

boundAddTodo(text)
boundCompleteTodo(index)

class App extends Component {
  anything() {
    const ADD_TODO = 'ADD_TODO'
    {
      type: ADD_TODO,
      text: 'Build my first Redux app'
    }
    {
      type: TOGGLE_TODO,
      index: 5
    }
    {
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED
    }

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
