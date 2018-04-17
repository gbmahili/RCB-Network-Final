import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import SubmitButton from './components/SubmitButton';
import LoginForm2 from './components/loginForm2';
// import OptionModal from './components/OptionModal';
import Jumbo from './components/Jumbo';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js is running :)');

class RBCParent extends React.Component {
  state = {
    selectedOption: undefined
  };

  render() {
    return (
      <div>
        <Header />
        <Jumbo />
      </div>
    );
  }
}

ReactDOM.render(<RBCParent />, document.getElementById('app'));
