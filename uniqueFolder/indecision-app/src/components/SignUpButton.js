import React from 'react';
import LoginForm2 from './loginForm2';
import SignUpForm from './SignUpForm';

export default class SignUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }
  render() {
    return (
      <div>
        <button onClick={this._onButtonClick}>Sign Up!</button>
        {this.state.showComponent ? <SignUpForm /> : null}
      </div>
    );
  }
}
