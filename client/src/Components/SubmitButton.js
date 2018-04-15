import React from 'react';
import LoginForm2 from './loginForm2';

class SubmitButton extends React.Component {
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
            <div className="green">
                <button onClick={this._onButtonClick}>Log in!</button>
                {this.state.showComponent ? <LoginForm2 /> : null}
            </div>
        );
    }
};

export default SubmitButton;