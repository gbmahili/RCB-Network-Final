import React from "react";
import ResumeUpload from "./ResumeUpload";
class UserAbout extends React.Component {    
     render() {  
        return (
            <div >
                <div style={{ minHeight: 375 }} className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                        <span id="userEmail" email={this.props.email} className="card-title">{this.props.firstName}</span>
                        <p>You can add your profession and resume below.</p>
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Add Resume</a>
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Current Resumes - COMMING SOON</a>
                    </div>
                </div>
                <ResumeUpload />
            </div>
        );
    };
};
export default UserAbout;