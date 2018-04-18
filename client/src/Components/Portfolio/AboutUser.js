import React from "react";
import ResumeUpload from "./ResumeUpload";
import Resumes from "./Resumes"
class UserAbout extends React.Component {    
     render() {  
        return (
            <div >
                <div style={{ minHeight: 495 }} className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                        <div className="row">
                            <div className="col s6 m6">
                                <h4 id="userEmail" email={this.props.email} className="white-text">{this.props.firstName}</h4>
                            </div>
                            <div className="col s6 m6">
                                <a href="/update-profile" className="btn btn-large waves-effect waves-light white-text" style={{ width: "100%"}}>UPDATE YOUR PROFILE</a>
                            </div>
                        </div>

                        <p>You can add your profession and resume below.</p>



                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header black-text">
                                    <i className="material-icons">folder_shared</i>
                                    Here is a list of your current resumes. Click to view.
                                    
                                    <span className="new badge" data-badge-caption=" Resume(s)">
                                    {
                                        (JSON.parse(localStorage.getItem("RCB_CURRENT_RESUMES")) != undefined) 
                                        ? 
                                        JSON.parse(localStorage.getItem("RCB_CURRENT_RESUMES")).professions.length
                                        : 0
                                    }
                                    </span>
                                </div>
                                <div className="collapsible-body">
                                
                                
                                    <div className="collection ">
                                        {
                                            (JSON.parse(localStorage.getItem("RCB_CURRENT_RESUMES")) != undefined)
                                            ?
                                            JSON.parse(localStorage.getItem("RCB_CURRENT_RESUMES")).professions.map((profession, index) => (
                                                <Resumes
                                                    key={index}
                                                    professionName={profession.professionName}
                                                    resumeLink={profession.resumeLink}
                                                />
                                            ))
                                            : <p>You currently don't have any resume cached. Follow the link below to start uploading</p>
                                        }

                                    </div>
                                
                                
                                
                                
                                </div>
                            </li>
                            
                        </ul>







                        
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Add Resume</a>
                        {/* <a href="/update-profile" className="btn btn-large waves-effect waves-light white-text" style={{ width: "100%", position:"fixed", bottom:0, left:0 }}>UPDATE YOUR PROFILE</a> */}
                    </div>
                </div>
                <ResumeUpload />
            </div>
        );
    };
};
export default UserAbout;