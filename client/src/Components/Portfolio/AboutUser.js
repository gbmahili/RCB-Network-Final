import React from "react";
import ResumeUpload from "./ResumeUpload";
class UserAbout extends React.Component {    
     render() {  
        return (
            <div >
                <div style={{ minHeight: 495 }} className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                        <span id="userEmail" email={this.props.email} className="card-title">{this.props.firstName}</span>
                        <p>You can add your profession and resume below.</p>                        
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Add Resume</a>
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Current Resumes - COMMING SOON</a>
                        <a href="/update-profile" className="btn btn-large waves-effect waves-light white-text" style={{ width: "100%", position:"fixed", bottom:0, left:0 }}>UPDATE YOUR PROFILE</a>
                    </div>
                </div>
                <ResumeUpload />
            </div>
        );
    };
};
export default UserAbout;