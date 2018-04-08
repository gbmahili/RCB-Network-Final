import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';
import Portfolio from './Components/Porfolio';


const App = () =>
  <Router>
    <div>
      <Route exact path ='/' component={Test} />
      <Route exact path='/uploaded' component={Portfolio} />
    </div>
  </Router>
  

export default App;
