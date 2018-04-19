// Get dependencies
import React from "react";
import LoginWithGoogle from "./Client.LoginWithGoogle";
import NavBar from "../Home/NavBar";

class UserLogin extends React.Component {
        state = {
            firstName: "",
            lastName: "",
            userEmail : "",
            userPassword: "",
            currentUserId: '',
            userProfilePicture: "",
            userProfession: ''
        };   

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
        
    };

    // Upload Image to Cloudability and the url to the user's account:
    handleLogin = e => {
        e.preventDefault();
        // 1.  UPLOAD THE IMAGE TO CLOUDABILITY:
        const loginInfo = {
            userEmail : this.state.userEmail,
            userPassword: this.state.userPassword
        }
        // 2. Send file name to the dababase 
        fetch("/userLogin",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(body => {
                console.log(body)
                if(body){
                    localStorage.removeItem("RCB_USER");
                    localStorage.setItem("RCB_USER", JSON.stringify(body));
                    localStorage.removeItem("RCB_CURRENT_RESUMES");
                    localStorage.setItem("RCB_CURRENT_RESUMES", JSON.stringify(body));
                    // Update the state with the data from the database
                    this.setState({
                        currentUserId: body._id,
                        firstName: body.firstName,
                        lastName: body.lastName,
                        userProfilePicture: body.UserProfilePicture
                    }, () => {
                        if (this.state.currentUserId) {
                            console.log(body._id);
                            window.location.href = "/portfolio";
                        }

                    });
                }else{
                    const messageDiv = `
                    <div class="row">
                        <div class="col s12" id="memberbox">
                        <div class="card red white-teext darken-1">
                            <div class="card-content white-text">
                            <span class="card-title">Hhmm...&#9785;</span>
                            <p>We can't find your account in our system. No worry, you can open one below &#x261F;</p>
                            </div>
                            <div class="card-action">
                            <a href="/signup">Create an account</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    `
                    const message = document.getElementById("rcb_no_user");
                    message.innerHTML = messageDiv;
                    message.setAttribute("class", "show");
                    setTimeout(() => {
                        message.setAttribute("class", "hide");
                    }, 10000);
                   
                    console.log("User does not exist...please create an account!")
                }

            });//end of response
    }
    // Render Components
    render() {
        return (
            <div>
                <NavBar                    
                    signUpOrName="Create Account"
                    signUpOrEditProfileLink="/signup"
                />
                <div className="container grey lighten-3" style={{ paddingTop: 150 }}>

                
                <div className="col s12 m12 l12">

                <p className="center-align">Please login with your email or with a Google registered email.</p>


                <div className="row card" >
                    <form className="col s12 m4 offset-m4">
                        <div className="row"> 
                            <div className="input-field col s12">
                            <input
                                type="text"
                                placeholder="Email"
                                name="userEmail"
                                value={this.state.userEmail}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                type="password"
                                placeholder="Password"
                                name="userPassword"
                                value={this.state.userPassword}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-field col s12">
                            <div className="row">
                                <div className="col s12 m6 input-field">
                                        <button className="btn waves-effect waves-light" onClick={this.handleLogin} >
                                            <i className="material-icons left">account_box</i> Sign in 
                                        </button>
                                </div>
                                <div className="col s12 m6 input-field" >
                                   
                                    <LoginWithGoogle />
                                </div>
                            </div>
                            <div id="rcb_no_user" className="row hide blue-grey white-text center-align card" style={{ padding: 10, fontSize: 14}}>
                               
                            </div>
                        </div>
                        </div>
                    </form>
               
               
                </div>

                </div>

               



                </div>
            </div>
        );
    };
};
export default UserLogin;