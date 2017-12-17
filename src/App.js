import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import TodoList from './components/TodoList';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allItems: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo list with graphQL</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
