import React from "react";

class UserAbout extends React.Component {
    render() {
        return (
            <div >
                <div style={{ minHeight: 400 }} className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.firstName}</span>
                        <p>
                            COMING SOON! <br />
                            You can add your profession and resume below.
                        </p>
                    </div>
                    <div className="card-action">
                        <a href="#!">More</a>
                        <a href="#!">This is a link</a>
                    </div>
                </div>
            </div>
        );
    };
};

// Export for others to use:
export default UserAbout;