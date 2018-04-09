import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';
import Form from './Components/form';


const App = () =>
  <Router>
    <div>
      <Route exact path ='/' component={Form} />
    </div>
  </Router>
  

export default App;
