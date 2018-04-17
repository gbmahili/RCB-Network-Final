import React from 'react';
import OptionModal from './OptionModal';
import SubmitButton from './SubmitButton';
import SignUpButton from './SubmitButton';
import LoginForm2 from './loginForm2';

export default class Jumbo extends React.Component {
  state = {
    selectedOption: undefined
  };
  render() {
    return (
      <div className="jumbo">
        <h1>Welcome to RCB Network</h1>
        <h2>Where Class Developers meet</h2>
        <SignUpButton />
      </div>
    );
  }
}
// <OptionModal selectedOption={this.state.selectedOption} />
