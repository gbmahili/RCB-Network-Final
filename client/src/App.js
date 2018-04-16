import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';
import Form from './Components/form';
import Portfolio from './Components/Portfolio/Portfolio';
import UserLogin from './Components/Login/Client.UserLogin';
import Signup from './Components/SignUp/Client.UserSignup';
// Nancy compontent import
import Header from './Components/Header';
import SubmitButton from './Components/SubmitButton';
import Search from './Components/search';
// *End - Nancy compontent import


const App = () =>
  <Router>
    <div>
      {/* Nancy's components */}
      <Route exact path='/' component={Header } />
      <Route exact path='/' component={SubmitButton } />

      {/* Venna's components */}
      <Route exact path ='/' component={Form} />
      <Route exact path ='/' component={Test} />
      <Route exact path ='/search' component={Search} />

      {/* Baraka's components */}
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/login' component={UserLogin} />

      {/* Miles's components */}
      <Route exact path='/signup' component= {Signup}/>
    </div>
  </Router>

export default App;