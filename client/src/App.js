import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';
import Form from './Components/form';
import Portfolio from './Components/Porfolio';
import Signup from './Components/signup';

const App = () =>
  <Router>
    <div>
      <Route exact path ='/' component={Form} />
      <Route exact path ='/' component={Test} />
      <Route exact path='/uploaded' component={Portfolio} />
      <Route exact path='/signup' component= {Signup}/>
    </div>
  </Router>

export default App;