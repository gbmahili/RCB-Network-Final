import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';


const App = () =>
  <Router>
    <div>
      <Route exact path ='/test' component={Test} />
    </div>
  </Router>
  

export default App;
