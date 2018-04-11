// Get dependencies
import React from "react";

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
            userPassword : this.state.password
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
                localStorage.setItem("RCB_NETWORK_PROFILE_PICUTURE", body.UserProfilePicture)
                // Update the state with the data from the database
                this.setState({
                    currentUserId: body._id,
                    firstName: body.firstName,
                    lastName: body.lastName,
                    userProfilePicture: body.UserProfilePicture
                    // userProfession: body.profession
                }, () => {
                    //document.getElementById('close').click();
                    //document.getElementById("profilePicture").setAttribute("src", body.UserProfilePicture);
                    // Redirect user to the portfolio page
                    console.log("STATE UPDATED")

                });

            });//end of response

    }
    // Render Components
    render() {
        return (
            <div className="row">
                <form className="col s12 m6 offset-m3">
                    <div className="row"> 
                        <div className="input-field col s12">
                        <input
                            type="text"
                            placeholder="Email"
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-field col s12">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-field col s12">
                        <button className="btn" onClick={this.handleLogin}>Login</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    };
};



// Export for others to use:
export default UserLogin;