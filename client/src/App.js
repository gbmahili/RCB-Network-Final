<<<<<<< HEAD
import React, { Component } from 'react';

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


=======
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';
import Form from './Components/form';
import Portfolio from './Components/Porfolio';
>>>>>>> master

const App = () =>
  <Router>
    <div>
      <Route exact path ='/' component={Form} />
      <Route exact path ='/' component={Test} />
      <Route exact path='/uploaded' component={Portfolio} />
    </div>
  </Router>
<<<<<<< HEAD
  
>>>>>>> master
=======
>>>>>>> master

export default App;