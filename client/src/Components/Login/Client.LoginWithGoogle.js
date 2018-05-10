import React from 'react';
class LoginWithGoogle extends React.Component {
    render() {        
        return (
            // The logic for this button is located in './../../../public/assets/js/App-Scripts'
            <div id="googleBtn" className="g-signin2" data-onsuccess="onSignIn"></div>
        );
    }
}
export default LoginWithGoogle;