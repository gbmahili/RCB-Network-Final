import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SubmitButton from './components/SubmitButton';
import LoginForm2 from './components/loginForm2';

class RBCParent extends React.Component {
  state = {
    selectedOption: undefined
  };

  render() {
    return (
      <div>
        <Header />
        <SubmitButton />
      </div>
    );
  }
}

ReactDOM.render(<RBCParent />, document.getElementById('app'));
