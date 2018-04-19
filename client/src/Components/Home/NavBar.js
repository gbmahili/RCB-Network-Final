import React from 'react';
class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar-fixed teal lighten-2">
                <nav className="teal lighten-2" style={{ paddingLeft: 30 }}>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">RCB Network 2018</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href={this.props.loginOrLogoutLink}>{this.props.loginOrLogout}</a></li>
                            <li><button className="btn btn-flat white-text" onClick={this.props.logoutFunction}><a href={this.props.signUpOrEditProfileLink}>{this.props.signUpOrName}</a></button></li>
                        </ul>
                    </div>
                </nav>
            </div> 
        );
    }
}
export default NavBar;