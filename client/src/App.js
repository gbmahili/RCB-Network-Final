import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import test from './meeting2.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          <img src={test} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
=======
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';


const App = () =>
  <Router>
    <div>
      <Route exact path ='/test' component={Test} />
    </div>
  </Router>
  
>>>>>>> master

export default App;
