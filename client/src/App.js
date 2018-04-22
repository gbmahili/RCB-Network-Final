import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Portfolio from './Components/Portfolio/Portfolio';
import UserLogin from './Components/Login/Client.UserLogin';
import Signup from './Components/SignUp/Client.UserSignup';
// Nancy compontent import
import Search from './Components/search';
import UpdateProfile from './Components/Portfolio/UpdateProfile';
import NavBar from './Components/Home/NavBar';
import WelcomePage from './Components/Home/WelcomePage';
// import Footer from './Components/Home/Footer';
// *End - Nancy compontent import
const App = () =>
  <Router>
    <div>
      {/* Venna's components */}
      <Route exact path ='/search' component={Search} />
      {/* Baraka's components */}
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/login' component={UserLogin} />
      <Route exact path='/update-profile' component={UpdateProfile} />
      <Route exact path="/" render={(props) => 
        <NavBar {...props}
          loginOrLogout="Login"  
          signUpOrName="Sign Up" 
          loginOrLogoutLink="/login" 
          signUpOrEditProfileLink="/signup" 
           />} 
      />
      <Route exact path='/' component={WelcomePage} />
      {/* <Route exact path='/' component={Footer} /> */}
      {/* Miles's components */}
      <Route exact path='/signup' component= {Signup}/>
      
    </div>
  </Router>

export default App;