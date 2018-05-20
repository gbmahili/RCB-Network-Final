import React from 'react';
class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className={this.props.customClass || "navbar-fixed teal lighten-2"}>
                    <nav className={this.props.customClass || "navbar-fixed teal lighten-2"} style={{ paddingLeft: 30 }}>
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">RCB Network 2018</a>
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href={this.props.loginOrLogoutLink}>{this.props.loginOrLogout}</a></li>
                                <li><button className="btn btn-flat white-text" onClick={this.props.logoutFunction}><a href={this.props.signUpOrEditProfileLink}>{this.props.signUpOrName}</a></button></li>
                                <li><a href="/whats-new">What's New</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href={this.props.loginOrLogoutLink}>{this.props.loginOrLogout}</a></li>
                    <li><button className="btn btn-flat white-text" onClick={this.props.logoutFunction}><a href={this.props.signUpOrEditProfileLink}>{this.props.signUpOrName}</a></button></li>
                    <li><a href="/whats-new">What's New</a></li>
                </ul>
            </div>
        );
    }
}
export default NavBar;