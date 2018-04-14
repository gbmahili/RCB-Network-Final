import React from "react";
import axios from 'axios';

// Instantiate cloudinary variables
const CLOUDINARY_UPLOAD_PRESET = 'rcbnetworkfinal';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/gbmahili/upload';
let resumeFile;
class ResumeUpload extends React.Component {
    // Initialize state
    state = {
        professionName: "",
        resumeExists: ""
    }
    // 1. Get the name of the profession selected by the user
    getProfessionName = (event) => {
        this.setState({
            professionName: event.target.value
        });
    };
    // 2. Get the resume file and return it to the global scope
    getResumeFile = (event) => {
        // Get the file being uploaded
        resumeFile = event.target.files[0];
        //console.log(resumeFile);
        return resumeFile;
    }
    // 3. Upload the resume to Cloudinary and the url to the user's account in our database:
    uploadResume = (event) => {
        // Create the form data
        const formData = new FormData();
        formData.append("file", resumeFile);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        // Send data to cloudinary
        axios({
            url: CLOUDINARY_UPLOAD_URL,
            method: "POST",
            HEADERS: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: formData
        }).then(res => {
            // Create data to send to the db
            let userEmail = document.getElementById("userEmail").getAttribute("email");
            let professionName = this.state.professionName;
            let resumeLink = res.data.secure_url;            
            // Data to send to the server:
            let resumeData = { userEmail, professionName, resumeLink }

            // Now send to the server
            axios({
                url:"/uploadResume",
                method: "POST",
                data: resumeData
            }).then(res=> {
                if (res.data.RCB_RESUME_EXISTS_INFO){
                    localStorage.setItem("RCB_RESUME_EXISTS_INFO", JSON.stringify(res.data.RCB_RESUME_EXISTS_INFO)); 
                }
                localStorage.setItem("RCB_CURRENT_RESUMES", JSON.stringify(res.data));
                // Show links to uploaded resumes
                console.log(res);
            }).catch(err => console.log(err));//End of sending data to our database
            
        }).catch(err => console.log(err));//End of sending file to cloudinary
    }

    render() {
        return (
            <div>            

            {/* Modal Structure */}
                <div id="modal1" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4>Add Resume</h4>
                        <p>You can upload one resume for each of the below professions. The upload shall be done one at a time.</p>
                        <div className="row">

                        <div className="col s12 m6">                   

                        
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Developer" type="radio" onChange={this.getProfessionName}/>
                                    <span>Developer</span>
                                </label>
                            </div>
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Graphic Artist" type="radio" onChange={this.getProfessionName}/>
                                    <span>Graphic Artist</span>
                                </label>
                            </div>
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Photographer" type="radio" onChange={this.getProfessionName}/>
                                    <span>Photographer</span>
                                </label>
                            </div>                 

                       
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Writer" type="radio" onChange={this.getProfessionName}/>
                                    <span>Writer</span>
                                </label>
                            </div>
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Scrum Writer" type="radio" onChange={this.getProfessionName}/>
                                    <span>Scrum Writer</span>
                                </label>
                            </div>
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Chef" type="radio" onChange={this.getProfessionName}/>
                                    <span>Chef</span>
                                </label>
                            </div>
                        
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Teacher" type="radio" onChange={this.getProfessionName}/>
                                    <span>Teacher</span>
                                </label>
                            </div>
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Sales" type="radio" onChange={this.getProfessionName}/>
                                    <span>Sales</span>
                                </label>
                            </div>
                            <div className="col s12 m4">
                                <label>
                                    <input name="professionName" value="Other" type="radio" onChange={this.getProfessionName}/>
                                    <span>Other</span>
                                </label>
                            </div>                        

                        </div> 

                        <div className="col s12 m6">

                            <form>
                                <div className="input-field">
                                        <div className="file-path-wrapper">
                                        {/* <span><i className="material-icons">add</i></span> */}                                        
                                            <input type="file" className="file-path validate" onChange={this.getResumeFile} placeholder={"Add resume for " + this.state.professionName} />
                                    </div>

                                </div>
                            </form>
                        
                        </div>
                    </div>                     

                    </div>
                    <div className="modal-footer cyan white-text">
                        <a href="#!" onClick={this.uploadResume} className="modal-action modal-close waves-effect waves-green btn-flat white-text">Upload</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default ResumeUpload;