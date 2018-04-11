import React from "react";

class UserAbout extends React.Component {
    render() {
        return (
            <div >
                <div style={{ minHeight: 400 }} className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.firstName}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#!">This is a link</a>
                        <a href="#!">This is a link</a>
                    </div>
                </div>
            </div>
        );
    };
};

// Export for others to use:
export default UserAbout;