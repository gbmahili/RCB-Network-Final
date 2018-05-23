import React from "react";
import ResumeUpload from "./ResumeUpload";
import Resumes from "./Resumes";
import axios from 'axios';
class UserAbout extends React.Component {
    //  Send data to the server to delete the resume
    processDelete = (e) => {
        // Get query data:
        let resumeData = {
            resumeLink: e.target.getAttribute("resumeLink"),
            userId: e.target.getAttribute("userid")
        }
        // Now send to the server
        axios({
            url: "/deleteResume",
            method: "POST",
            data: resumeData
        }).then(res => {
            // Refresh the page after the resume has been uploaded
            localStorage.removeItem("RCB_RESUME_EXISTS_INFO");
            localStorage.setItem("RCB_CURRENT_RESUMES", JSON.stringify(res.data));
            window.location.reload();
            console.log(res.data)
        });
    }
    
     render() {
        //  Get the user's ID
         const currentUserId = (localStorage.getItem("RCB_CURRENT_RESUMES") === null) ? 0 : 
         (JSON.parse(localStorage.getItem("RCB_CURRENT_RESUMES")))._id;

        return (
            <div >
                <div style={{ minHeight: 495 }} className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                        <div className="row">
                            <div className="col s12 m6">
                                <h4 id="userEmail" email={this.props.email} className="white-text">{this.props.firstName}</h4>
                            </div>
                            <div className="col s12 m6">
                                <a href="/update-profile" className="btn waves-effect waves-light white-text" style={{ width: "100%"}}>UPDATE YOUR PROFILE</a>
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
                                        (localStorage.getItem("RCB_CURRENT_RESUMES") === null)
                                            ? 
                                            0
                                            : JSON.parse(localStorage.getItem("RCB_CURRENT_RESUMES")).professions.length
                                    }
                                    </span>
                                </div>
                                <div className="collapsible-body"> 
                                
                                    <div className="collection ">
                                        {
                                            (localStorage.getItem("RCB_CURRENT_RESUMES") === null)
                                            ?
                                            <p>You currently don't have any resume cached. Follow the link below to start uploading</p>
                                            
                                            : 
                                            JSON.parse(localStorage.getItem("RCB_CURRENT_RESUMES")).professions.map((profession, index) => (
                                                <Resumes
                                                    key={index}
                                                    professionName={profession.professionName}
                                                    resumeLink={profession.resumeLink}
                                                    userid={currentUserId}
                                                    processDelete={this.processDelete}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light modal-trigger" href="#modal1">Add Resume</a> 
                    </div>
                    <div style={{ padding: 10 }}
                        id="resumeExists"
                        className="hide row card red white-text row card col s12 m12 center-align">
                        A resume fot that profession already exist. Please select a different profession.
                        </div>
                </div>
                <ResumeUpload />
            </div>
        );
    };
};
export default UserAbout;