import React from "react";
import ResumeUpload from "./ResumeUpload";

class UserAbout extends React.Component {
 
    state = {
        resumeExists: "", 
    }
    
    
     render() {
  
        return (
            <div >
                <div style={{ minHeight: 400 }} className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                        <span id="userEmail" email={this.props.email} className="card-title">{this.props.firstName}</span>
                        <p>                            
                            You can add your profession and resume below. <br/>                            
                            {/* { //Check if message failed
                                (this.state.currentResumes === '')
                                    ? <b> Here is a list of your current resummes </b>
                                    : this.state.currentResumes.map((resume, i) => (
                                        <li key={i}>{resume.professionName}</li>
                                    ))
                            } */}
                            {/* {
                                this.state.currentResumes == "" ? "" :
                                this.state.currentResumes.map((resume, i) => (
                                    <li key={i}>{resume.professionName}</li>
                                ) )
                            } */}
                        </p>
                        {/* <p>{this.state.resumeExists}</p> */}
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Add Resume</a>
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Current Resumes</a>
                    </div>
                </div>

                <ResumeUpload />
            </div>
        );
    };
};

// Export for others to use:
export default UserAbout;