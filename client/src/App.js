import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './Components/test';
import Form from './Components/form';
import Portfolio from './Components/Porfolio';
import UserLogin from './Components/Client.UserLogin';
import Signup from './Components/Client.UserSignup';
// Nancy compontent import
import LoginForm from './Components/LoginForm';
import Header from './Components/Header';
import SubmitButton from './Components/SubmitButton';
// *End - Nancy compontent import


const App = () =>
  <Router>
    <div>
      <Route exact path='/' component={Header } />
      <Route exact path='/' component={LoginForm } />
      <Route exact path='/' component={SubmitButton } />
      <Route exact path ='/' component={Form} />
      <Route exact path ='/' component={Test} />
      <Route exact path='/porfolio' component={Portfolio} />
      <Route exact path='/login' component={UserLogin} />
      <Route exact path='/signup' component= {Signup}/>
    </div>
  </Router>

export default App;