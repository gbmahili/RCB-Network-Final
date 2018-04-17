import React from 'react';
import SubmitButton from './SubmitButton';
import LoginForm2 from './loginForm2';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1 className="header__title">RBC18</h1>
          <SubmitButton />
        </div>
      </div>
    );
  }
}
