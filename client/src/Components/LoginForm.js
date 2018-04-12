import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    handleLoginSubmit(e) {
        e.preventDefault();

        const loginData = e.target.elements.option.value.trim();
        if (loginData) {
            alert(loginData);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleLoginSubmit}>
                    <input type="text" name="option" />
                    <button>Login here</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;