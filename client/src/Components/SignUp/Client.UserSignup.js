import React from 'react';
import InformationSection from './../InformationSection';
import GBMHead from './../GBMHead';
import './Client.UserSignup.css';


class Signup extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender :"",
    dateOfBirth: "",
    country: "",
    telephone: "",
    houseNumber: "",
    streetName: "",
    city: "",
    stateName: "",
    zipCode: "",
    userDoesNotExists: true

  };

  handleInput = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  };

 
  signUp = e => {

    e.preventDefault();

    const signupInfo = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      email : this.state.email,
      password : this.state.password,
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
    fetch("/userSignup",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(signupInfo)
      })
      .then(res => res.json())
      .then(body => {
        // Remove storage data
        localStorage.removeItem("RCB_USER");
        // Set new storage data
        localStorage.setItem("RCB_USER", JSON.stringify(body));
        localStorage.removeItem("RCB_CURRENT_RESUMES");
        localStorage.setItem("RCB_CURRENT_RESUMES", JSON.stringify(body));
          // Get storage Data for validation and process
        let RCB_USER = JSON.parse(localStorage.getItem("RCB_USER"));
        // If the user does not exist in the DB: DB is validating against email
        if(!RCB_USER.Error){
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
            console.log("STATE UPDATED");
          });
          
        }else{
          this.setState({
            userDoesNotExists: false
          })
          
          console.log("There is a user with that email. Please login instead.")
        }        

      });//end of response
  };


  render() {

    //Render based on user existing or not
    let userSignUpForm;
    if (this.state.userDoesNotExists) {
      userSignUpForm = (
        <div className="App">

        


<div className= "background"></div>
          <div className="showcase container">
            <div className="row">
              <div className="col s12 m10 offset-m1 center">
                <div id="portfolioHeading">
                  <h4 className="grey-text">Welcome!</h4>
                </div>
              </div>
            </div>
          </div>

          <form className="form-area card" style={{ padding: 30 }}>

            <div className="row">
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">account_circle</i>
                <input className="grey-text darken-3 rcb_required_field" id="firstName" onChange={this.handleInput} name="firstName" value={this.state.firstName} type="text" />
                <label className="grey-text" htmlFor="firstName">First Name
                <span className=" red-text"> *</span>
                </label>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">account_circle</i>
                <input className="grey-text darken-3 rcb_required_field" id="lastName" onChange={this.handleInput} name="lastName" value={this.state.lastName} type="text" />
                <label className="grey-text" htmlFor="lastName">Last Name
                <span className=" red-text"> *</span>
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field validate col m6 s12">
                <i className="material-icons prefix">email</i>
                <input className="grey-text darken-3 rcb_required_field" id="email" onChange={this.handleInput} name="email" value={this.state.email} type="email" />
                <label className="grey-text" htmlFor="email">Email
                  <span className=" red-text"> *</span>
                </label>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">security</i>
                <input className="grey-text darken-3 rcb_required_field" id="password" onChange={this.handleInput} name="password" type="password" value={this.state.password} />
                <label className="grey-text " htmlFor="password">Create Password
                <span className=" red-text"> *</span>
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">portrait</i>
                <input id="gender" onChange={this.handleInput} name="gender" value={this.state.gender} type="text" className="materialize-textarea grey-text" />
                <label className="grey-text darken-3" htmlFor="gender">Gender (Male or Female)
                </label>
              </div>
              <div className="grey-text input-field col m6 s12">
                <i className="material-icons prefix">date_range</i>
                <input type="date" className="datepicker darken-3" id="date_of_birth" name="dateOfBirth" onChange={this.handleInput} value={this.state.dateOfBirth} />
                <label htmlFor="date_of_birth">Enter your Birthday</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">public</i>
                <input id="country" className="grey-text darken-3" type="text" name="country" onChange={this.handleInput} value={this.state.country} />
                <label className="grey-text darken-3" htmlFor="country">Country</label>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">local_phone</i>
                <input id="telephone" className="grey-text darken-3" type="tel" name="telephone" onChange={this.handleInput} value={this.state.telephone} />
                <label className="grey-text darken-3" htmlFor="telephone">Telephone ( ex. 732-999-9999)
            </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">home</i>
                <input id="house_number" className="grey-text darken-3" type="number" name="houseNumber" onChange={this.handleInput} value={this.state.houseNumber} />
                <label className="grey-text darken-3" htmlFor="house_number">House Number</label>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">local_post_office</i>
                <input id="street_name" className="grey-text darken-3" type="text" name="streetName" onChange={this.handleInput} value={this.state.streetName} />
                <label className="grey-text darken-3" htmlFor="street_name">Street Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col m4 s12">
                <i className="material-icons prefix">location_city</i>
                <input id="city" className="grey-text darken-3" type="text" name="city" onChange={this.handleInput} value={this.state.city} />
                <label className="grey-text darken-3" htmlFor="city">City</label>
              </div>
              <div className="input-field col m4 s12">
                <i className="material-icons prefix">home</i>
                <input id="stateName" className="grey-text darken-3" type="text" name="stateName" onChange={this.handleInput} value={this.state.stateName} />
                <label className="grey-text darken-3" htmlFor="state">State Name</label>
              </div>
              <div className="input-field col m4 s12">
                <i className="material-icons prefix">local_post_office</i>
                <input id="zipcode" className="grey-text darken-3" type="number" name="zipCode" onChange={this.handleInput} value={this.state.zipCode} />
                <label className="grey-text darken-3" htmlFor="zipcode">Zip Code</label>
              </div>
            </div>

            <center>
              <div className="input-field col s12">
                <button className="btn signUpButton" onClick={this.signUp} >Sign Up <i className="material-icons right">done</i></button>
              </div>
            </center>

          </form>
        </div>
      );
    } else {
      userSignUpForm = (
        <InformationSection
          windowStyle="blue-grey"
          informationTitle="Account exists"
          mainMessage="It looks like you already have an account. Please click below to login!"
          loginButton="Login"
          signupButton=""
        />
      );
    };

    return (
      <div>
        <GBMHead />
        {userSignUpForm}
      </div>
    
    )
  }

};

export default Signup;