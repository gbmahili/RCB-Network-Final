import React from "react";
import UserPicture from "./UserPicture";
import UserAbout from "./AboutUser";

class Portfolio extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col s12 m4">
                    <UserPicture/>
                </div>
                <div className="col s12 m8">
                    <UserAbout />
                </div>
            </div>
        );
    };
};

// Export for others to use:
export default Portfolio;