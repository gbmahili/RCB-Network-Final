import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import SubmitButton from './components/SubmitButton';

class RBCParent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
        <SubmitButton />
      </div>
    );
  }
}

ReactDOM.render(<RBCParent />, document.getElementById('app'));
