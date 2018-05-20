import React from 'react';
import InformationSection from './../InformationSection';
import NavBar from '../Home/NavBar';


class UpdateProfile extends React.Component {

    // First we instantiate the state to an empty array
    state = {
        userData: []
    }
    // Then, when our component mounts (loads), we grab the current data from localStorage
    componentDidMount(){
        // If the user is logged in, that means there is something on local storage:
        if (JSON.parse(localStorage.getItem("RCB_USER"))) {
            // So, we grab whatever is there...and set our current state with that data
            let RCB_USER = JSON.parse(localStorage.getItem("RCB_USER"));
            this.setState({
                firstName: RCB_USER.firstName,
                lastName: RCB_USER.lastName,
                email: RCB_USER.email,
                password: RCB_USER.password,
                gender: RCB_USER.gender,
                dateOfBirth: RCB_USER.dateOfBirth,
                country: RCB_USER.country,
                telephone: RCB_USER.telephone,
                houseNumber: RCB_USER.houseNumber,
                streetName: RCB_USER.streetName,
                city: RCB_USER.city,
                stateName: RCB_USER.stateName,
                zipCode: RCB_USER.zipCode,
                userData: RCB_USER,
                userIsLoggedIn: true
            })
        }else{
            // Else, we just set our state with a message that the user is not logged in array
            this.setState({
                userData: ["User is not logged in"],
                userIsLoggedIn: false
            })
        }
    };

    // Handle any change in the input fields...we are getting the data from the current state...that has just been updated from the localStorage
    handleInput = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }; 

    updateProfile = e => {

        e.preventDefault();
        // Value to send to the database
        const updateInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            country: this.state.country,
            telephone: this.state.telephone,
            houseNumber: this.state.houseNumber,
            streetName: this.state.streetName,
            city: this.state.city,
            stateName: this.state.stateName,
            zipCode: this.state.zipCode
        };

        // Send to the server
        fetch("/userUpdateProfile",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(updateInfo)
            })
            .then(res => res.json())
            .then(body => {
                // Remove storage data
                localStorage.removeItem("RCB_USER");
                // Set new storage data
                localStorage.setItem("RCB_USER", JSON.stringify(body));
                // Get storage Data for validation and process
                let RCB_USER = JSON.parse(localStorage.getItem("RCB_USER"));
                // If the user does not exist in the DB: DB is validating against email
                if (!RCB_USER.Error) {
                    // Update the state with the data from the database
                    this.setState({
                        firstName: body.firstName,
                        lastName: body.lastName,
                        email: body.email,
                        password: body.password,
                        gender: body.gender,
                        dateOfBirth: body.dateOfBirth,
                        country: body.country,
                        telephone: body.telephone,
                        houseNumber: body.houseNumber,
                        streetName: body.streetName,
                        city: body.city,
                        stateName: body.stateName,
                        zipCode: body.zipCode
                    }, () => {
                        window.location.href = "/portfolio";
                    });

                } else {
                    this.setState({
                        userIsLoggedIn: false
                    })

                    console.log("There is a user with that email. Please login instead.")
                }

            });//end of response
    };

    render() {        

        //Render based on user existing or not
        let userUpdateProfile;
        if (this.state.userIsLoggedIn) {
            userUpdateProfile = (
                <div className="row blue-grey center card white-text" style={{ padding: 5 }}>

                    <div className="row showcase container " style={{ padding: 5 }}>
                        <h4 className="white-text" >Welcome, {this.state.firstName}</h4>
                        <p>You can update your profile below and click submit when you are done</p>
                    </div>

                    <form className="form-area card" style={{ padding: 10 }}>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input className="cyan-text darken-3 rcb_required_field" id="firstName" onChange={this.handleInput} name="firstName" value={this.state.firstName} type="text" />
                                <label className="grey-text" htmlFor="firstName">First Name<span className=" red-text"> *</span>
                                </label>
                            </div>
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input className="cyan-text darken-3 rcb_required_field" id="lastName" onChange={this.handleInput} name="lastName" value={this.state.lastName} type="text" />
                                <label className="grey-text" htmlFor="lastName">Last Name<span className=" red-text"> *</span>
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field validate col m6 s12">
                                <i className="material-icons prefix">email</i>
                                <input className="cyan-text darken-3 rcb_required_field" id="email" onChange={this.handleInput} name="email" value={this.state.email} type="email" />
                                <label className="grey-text" htmlFor="email">Email<span className=" red-text"> *</span>
                                </label>
                            </div>
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">security</i>
                                <input className="cyan-text darken-3 rcb_required_field" id="password" onChange={this.handleInput} name="password" type="password" value={this.state.password} />
                                <label className="grey-text " htmlFor="password">Create Password<span className=" red-text"> *</span>
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">portrait</i>
                                <input id="gender" onChange={this.handleInput} name="gender" value={this.state.gender} type="text" className="materialize-textarea cyan-text" />
                                <label className="grey-text darken-3" htmlFor="gender">Gender (Male or Female)</label>
                            </div>
                            <div className="grey-text input-field col m6 s12">
                                <i className="material-icons prefix">date_range</i>
                                <input type="date" className="datepicker cyan-text darken-3" id="date_of_birth" name="dateOfBirth" onChange={this.handleInput} value={this.state.dateOfBirth} />
                                <label htmlFor="date_of_birth">Enter your Birthday</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">public</i>
                                <input id="country" className="cyan-text darken-3" type="text" name="country" onChange={this.handleInput} value={this.state.country} />
                                <label className="grey-text darken-3" htmlFor="country">Country</label>
                            </div>
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">local_phone</i>
                                <input id="telephone" className="cyan-text darken-3" type="tel" name="telephone" onChange={this.handleInput} value={this.state.telephone} />
                                <label className="grey-text darken-3" htmlFor="telephone">Telephone ( ex. 732-999-9999)</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">home</i>
                                <input id="house_number" className="cyan-text darken-3" type="number" name="houseNumber" onChange={this.handleInput} value={this.state.houseNumber} />
                                <label className="grey-text darken-3" htmlFor="house_number">House Number</label>
                            </div>
                            <div className="input-field col m6 s12">
                                <i className="material-icons prefix">local_post_office</i>
                                <input id="street_name" className="cyan-text darken-3" type="text" name="streetName" onChange={this.handleInput} value={this.state.streetName} />
                                <label className="grey-text darken-3" htmlFor="street_name">Street Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col m4 s12">
                                <i className="material-icons prefix">location_city</i>
                                <input id="city" className="cyan-text darken-3" type="text" name="city" onChange={this.handleInput} value={this.state.city} />
                                <label className="grey-text darken-3" htmlFor="city">City</label>
                            </div>
                            <div className="input-field col m4 s12">
                                <i className="material-icons prefix">home</i>
                                <input id="stateName" className="cyan-text darken-3" type="text" name="stateName" onChange={this.handleInput} value={this.state.stateName} />
                                <label className="grey-text darken-3" htmlFor="state">State Name</label>
                            </div>
                            <div className="input-field col m4 s12">
                                <i className="material-icons prefix">local_post_office</i>
                                <input id="zipcode" className="cyan-text darken-3" type="number" name="zipCode" onChange={this.handleInput} value={this.state.zipCode} />
                                <label className="grey-text darken-3" htmlFor="zipcode">Zip Code</label>
                            </div>
                        </div>

                        <center>
                            <div className="input-field col s12">
                            
                                <button className="btn updateProfileButton" onClick={this.updateProfile} >UPDATE PROFILE <i className="material-icons right">done</i></button> 
                               
                                <a href="/portfolio" className="btn red" id="cancelBtn">CANCEL<i className="material-icons right">clear</i></a>
                               
                                
                            </div>
                        </center>

                    </form>
                </div>
            );
        } else {
            userUpdateProfile = (
                <InformationSection
                    windowStyle="row red white-text"
                    informationTitle="Wait...what...Hmmm... &#9785;"
                    mainMessage="You are not supposed to be on this page unless logged in. How did this happen! It's not my fault!"
                    createAccountInfo="Please login first. No account? No problem. Click Sign up to create one."
                    loginButton="Login"
                    signupButton="Sign Up"
                />
            );
        };

        return (
            <div>
                <NavBar />
                <div className="container">
                    {userUpdateProfile}
                </div>
            </div>
        )
    }

};

export default UpdateProfile;