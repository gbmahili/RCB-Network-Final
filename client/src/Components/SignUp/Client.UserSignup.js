import React from 'react';
import InformationSection from './../InformationSection';
import './Client.UserSignup.css';
import NavBar from '../Home/NavBar';


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
    userDoesNotExists: true,
    subscribeUser: false

  };

  handleInput = event => {
    const { name, value } = event.target
    this.setState({[name]: value});
  };
  // Subscribe user checkbox
  handleSubscribeUserCheckbox(event) {
    this.setState({
      subscribeUser: !this.state.subscribeUser
    }
    , () => console.log(this.state.subscribeUser)
    );
  }

 
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
      city: this.state.city !== "" ? this.state.city : "Not Provided",
      stateName: this.state.stateName !== "" ? this.state.stateName : "NP",
      zipCode: this.state.zipCode,
      subscribeUser: this.state.subscribeUser
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
            zipCode: body.zipCode,
            subscribeUser: body.subscribeUser
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

      userSignUpForm = <div className="App container">
          <div className="background" />
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
                <label className="grey-text" htmlFor="firstName">
                  First Name
                  <span className=" red-text"> *</span>
                </label>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">account_circle</i>
                <input className="grey-text darken-3 rcb_required_field" id="lastName" onChange={this.handleInput} name="lastName" value={this.state.lastName} type="text" />
                <label className="grey-text" htmlFor="lastName">
                  Last Name
                  <span className=" red-text"> *</span>
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field validate col m6 s12">
                <i className="material-icons prefix">email</i>
                <input className="grey-text darken-3 rcb_required_field" id="email" onChange={this.handleInput} name="email" value={this.state.email} type="email" />
                <label className="grey-text" htmlFor="email">
                  Email
                  <span className=" red-text"> *</span>
                </label>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">security</i>
                <input className="grey-text darken-3 rcb_required_field" id="password" onChange={this.handleInput} name="password" type="password" value={this.state.password} />
                <label className="grey-text " htmlFor="password">
                  Create Password
                  <span className=" red-text"> *</span>
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">portrait</i>
                {/* <input id="gender" onChange={this.handleInput} name="gender" value={this.state.gender} type="text" className="materialize-textarea grey-text" /> */}
                {/* <label className="grey-text darken-3" htmlFor="gender">
                  Gender (Male or Female)
                </label> */}

                <select onChange={this.handleInput} name="gender" value={this.state.gender}>
                  <option value="Gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
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
                {/* <input id="country" className="grey-text darken-3" type="text" name="country" onChange={this.handleInput} value={this.state.country} />
                <label className="grey-text darken-3" htmlFor="country">
                  Country
                </label> */}
                <select name="country" onChange={this.handleInput} value={this.state.country}>
                  <option value="Country">Country</option>
                  <option value="USA">United States</option>
                  <option value="AFG">Afghanistan</option>
                  <option value="ALA">Åland Islands</option>
                  <option value="ALB">Albania</option>
                  <option value="DZA">Algeria</option>
                  <option value="ASM">American Samoa</option>
                  <option value="AND">Andorra</option>
                  <option value="AGO">Angola</option>
                  <option value="AIA">Anguilla</option>
                  <option value="ATA">Antarctica</option>
                  <option value="ATG">Antigua and Barbuda</option>
                  <option value="ARG">Argentina</option>
                  <option value="ARM">Armenia</option>
                  <option value="ABW">Aruba</option>
                  <option value="AUS">Australia</option>
                  <option value="AUT">Austria</option>
                  <option value="AZE">Azerbaijan</option>
                  <option value="BHS">Bahamas</option>
                  <option value="BHR">Bahrain</option>
                  <option value="BGD">Bangladesh</option>
                  <option value="BRB">Barbados</option>
                  <option value="BLR">Belarus</option>
                  <option value="BEL">Belgium</option>
                  <option value="BLZ">Belize</option>
                  <option value="BEN">Benin</option>
                  <option value="BMU">Bermuda</option>
                  <option value="BTN">Bhutan</option>
                  <option value="BOL">
                    Bolivia, Plurinational State of
                  </option>
                  <option value="BES">
                    Bonaire, Sint Eustatius and Saba
                  </option>
                  <option value="BIH">Bosnia and Herzegovina</option>
                  <option value="BWA">Botswana</option>
                  <option value="BVT">Bouvet Island</option>
                  <option value="BRA">Brazil</option>
                  <option value="IOT">
                    British Indian Ocean Territory
                  </option>
                  <option value="BRN">Brunei Darussalam</option>
                  <option value="BGR">Bulgaria</option>
                  <option value="BFA">Burkina Faso</option>
                  <option value="BDI">Burundi</option>
                  <option value="KHM">Cambodia</option>
                  <option value="CMR">Cameroon</option>
                  <option value="CAN">Canada</option>
                  <option value="CPV">Cape Verde</option>
                  <option value="CYM">Cayman Islands</option>
                  <option value="CAF">Central African Republic</option>
                  <option value="TCD">Chad</option>
                  <option value="CHL">Chile</option>
                  <option value="CHN">China</option>
                  <option value="CXR">Christmas Island</option>
                  <option value="CCK">Cocos (Keeling) Islands</option>
                  <option value="COL">Colombia</option>
                  <option value="COM">Comoros</option>
                  <option value="COG">Congo</option>
                  <option value="COD">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="COK">Cook Islands</option>
                  <option value="CRI">Costa Rica</option>
                  <option value="CIV">Côte d'Ivoire</option>
                  <option value="HRV">Croatia</option>
                  <option value="CUB">Cuba</option>
                  <option value="CUW">Curaçao</option>
                  <option value="CYP">Cyprus</option>
                  <option value="CZE">Czech Republic</option>
                  <option value="DNK">Denmark</option>
                  <option value="DJI">Djibouti</option>
                  <option value="DMA">Dominica</option>
                  <option value="DOM">Dominican Republic</option>
                  <option value="ECU">Ecuador</option>
                  <option value="EGY">Egypt</option>
                  <option value="SLV">El Salvador</option>
                  <option value="GNQ">Equatorial Guinea</option>
                  <option value="ERI">Eritrea</option>
                  <option value="EST">Estonia</option>
                  <option value="ETH">Ethiopia</option>
                  <option value="FLK">Falkland Islands (Malvinas)</option>
                  <option value="FRO">Faroe Islands</option>
                  <option value="FJI">Fiji</option>
                  <option value="FIN">Finland</option>
                  <option value="FRA">France</option>
                  <option value="GUF">French Guiana</option>
                  <option value="PYF">French Polynesia</option>
                  <option value="ATF">French Southern Territories</option>
                  <option value="GAB">Gabon</option>
                  <option value="GMB">Gambia</option>
                  <option value="GEO">Georgia</option>
                  <option value="DEU">Germany</option>
                  <option value="GHA">Ghana</option>
                  <option value="GIB">Gibraltar</option>
                  <option value="GRC">Greece</option>
                  <option value="GRL">Greenland</option>
                  <option value="GRD">Grenada</option>
                  <option value="GLP">Guadeloupe</option>
                  <option value="GUM">Guam</option>
                  <option value="GTM">Guatemala</option>
                  <option value="GGY">Guernsey</option>
                  <option value="GIN">Guinea</option>
                  <option value="GNB">Guinea-Bissau</option>
                  <option value="GUY">Guyana</option>
                  <option value="HTI">Haiti</option>
                  <option value="HMD">
                    Heard Island and McDonald Islands
                  </option>
                  <option value="VAT">
                    Holy See (Vatican City State)
                  </option>
                  <option value="HND">Honduras</option>
                  <option value="HKG">Hong Kong</option>
                  <option value="HUN">Hungary</option>
                  <option value="ISL">Iceland</option>
                  <option value="IND">India</option>
                  <option value="IDN">Indonesia</option>
                  <option value="IRN">Iran, Islamic Republic of</option>
                  <option value="IRQ">Iraq</option>
                  <option value="IRL">Ireland</option>
                  <option value="IMN">Isle of Man</option>
                  <option value="ISR">Israel</option>
                  <option value="ITA">Italy</option>
                  <option value="JAM">Jamaica</option>
                  <option value="JPN">Japan</option>
                  <option value="JEY">Jersey</option>
                  <option value="JOR">Jordan</option>
                  <option value="KAZ">Kazakhstan</option>
                  <option value="KEN">Kenya</option>
                  <option value="KIR">Kiribati</option>
                  <option value="PRK">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="KOR">Korea, Republic of</option>
                  <option value="KWT">Kuwait</option>
                  <option value="KGZ">Kyrgyzstan</option>
                  <option value="LAO">
                    Lao People's Democratic Republic
                  </option>
                  <option value="LVA">Latvia</option>
                  <option value="LBN">Lebanon</option>
                  <option value="LSO">Lesotho</option>
                  <option value="LBR">Liberia</option>
                  <option value="LBY">Libya</option>
                  <option value="LIE">Liechtenstein</option>
                  <option value="LTU">Lithuania</option>
                  <option value="LUX">Luxembourg</option>
                  <option value="MAC">Macao</option>
                  <option value="MKD">
                    Macedonia, the former Yugoslav Republic of
                  </option>
                  <option value="MDG">Madagascar</option>
                  <option value="MWI">Malawi</option>
                  <option value="MYS">Malaysia</option>
                  <option value="MDV">Maldives</option>
                  <option value="MLI">Mali</option>
                  <option value="MLT">Malta</option>
                  <option value="MHL">Marshall Islands</option>
                  <option value="MTQ">Martinique</option>
                  <option value="MRT">Mauritania</option>
                  <option value="MUS">Mauritius</option>
                  <option value="MYT">Mayotte</option>
                  <option value="MEX">Mexico</option>
                  <option value="FSM">
                    Micronesia, Federated States of
                  </option>
                  <option value="MDA">Moldova, Republic of</option>
                  <option value="MCO">Monaco</option>
                  <option value="MNG">Mongolia</option>
                  <option value="MNE">Montenegro</option>
                  <option value="MSR">Montserrat</option>
                  <option value="MAR">Morocco</option>
                  <option value="MOZ">Mozambique</option>
                  <option value="MMR">Myanmar</option>
                  <option value="NAM">Namibia</option>
                  <option value="NRU">Nauru</option>
                  <option value="NPL">Nepal</option>
                  <option value="NLD">Netherlands</option>
                  <option value="NCL">New Caledonia</option>
                  <option value="NZL">New Zealand</option>
                  <option value="NIC">Nicaragua</option>
                  <option value="NER">Niger</option>
                  <option value="NGA">Nigeria</option>
                  <option value="NIU">Niue</option>
                  <option value="NFK">Norfolk Island</option>
                  <option value="MNP">Northern Mariana Islands</option>
                  <option value="NOR">Norway</option>
                  <option value="OMN">Oman</option>
                  <option value="PAK">Pakistan</option>
                  <option value="PLW">Palau</option>
                  <option value="PSE">
                    Palestinian Territory, Occupied
                  </option>
                  <option value="PAN">Panama</option>
                  <option value="PNG">Papua New Guinea</option>
                  <option value="PRY">Paraguay</option>
                  <option value="PER">Peru</option>
                  <option value="PHL">Philippines</option>
                  <option value="PCN">Pitcairn</option>
                  <option value="POL">Poland</option>
                  <option value="PRT">Portugal</option>
                  <option value="PRI">Puerto Rico</option>
                  <option value="QAT">Qatar</option>
                  <option value="REU">Réunion</option>
                  <option value="ROU">Romania</option>
                  <option value="RUS">Russian Federation</option>
                  <option value="RWA">Rwanda</option>
                  <option value="BLM">Saint Barthélemy</option>
                  <option value="SHN">
                    Saint Helena, Ascension and Tristan da Cunha
                  </option>
                  <option value="KNA">Saint Kitts and Nevis</option>
                  <option value="LCA">Saint Lucia</option>
                  <option value="MAF">Saint Martin (French part)</option>
                  <option value="SPM">Saint Pierre and Miquelon</option>
                  <option value="VCT">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="WSM">Samoa</option>
                  <option value="SMR">San Marino</option>
                  <option value="STP">Sao Tome and Principe</option>
                  <option value="SAU">Saudi Arabia</option>
                  <option value="SEN">Senegal</option>
                  <option value="SRB">Serbia</option>
                  <option value="SYC">Seychelles</option>
                  <option value="SLE">Sierra Leone</option>
                  <option value="SGP">Singapore</option>
                  <option value="SXM">Sint Maarten (Dutch part)</option>
                  <option value="SVK">Slovakia</option>
                  <option value="SVN">Slovenia</option>
                  <option value="SLB">Solomon Islands</option>
                  <option value="SOM">Somalia</option>
                  <option value="ZAF">South Africa</option>
                  <option value="SGS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="SSD">South Sudan</option>
                  <option value="ESP">Spain</option>
                  <option value="LKA">Sri Lanka</option>
                  <option value="SDN">Sudan</option>
                  <option value="SUR">Suriname</option>
                  <option value="SJM">Svalbard and Jan Mayen</option>
                  <option value="SWZ">Swaziland</option>
                  <option value="SWE">Sweden</option>
                  <option value="CHE">Switzerland</option>
                  <option value="SYR">Syrian Arab Republic</option>
                  <option value="TWN">Taiwan, Province of China</option>
                  <option value="TJK">Tajikistan</option>
                  <option value="TZA">
                    Tanzania, United Republic of
                  </option>
                  <option value="THA">Thailand</option>
                  <option value="TLS">Timor-Leste</option>
                  <option value="TGO">Togo</option>
                  <option value="TKL">Tokelau</option>
                  <option value="TON">Tonga</option>
                  <option value="TTO">Trinidad and Tobago</option>
                  <option value="TUN">Tunisia</option>
                  <option value="TUR">Turkey</option>
                  <option value="TKM">Turkmenistan</option>
                  <option value="TCA">Turks and Caicos Islands</option>
                  <option value="TUV">Tuvalu</option>
                  <option value="UGA">Uganda</option>
                  <option value="UKR">Ukraine</option>
                  <option value="ARE">United Arab Emirates</option>
                  <option value="GBR">United Kingdom</option>
                  <option value="UMI">
                    United States Minor Outlying Islands
                  </option>
                  <option value="URY">Uruguay</option>
                  <option value="UZB">Uzbekistan</option>
                  <option value="VUT">Vanuatu</option>
                  <option value="VEN">
                    Venezuela, Bolivarian Republic of
                  </option>
                  <option value="VNM">Viet Nam</option>
                  <option value="VGB">Virgin Islands, British</option>
                  <option value="VIR">Virgin Islands, U.S.</option>
                  <option value="WLF">Wallis and Futuna</option>
                  <option value="ESH">Western Sahara</option>
                  <option value="YEM">Yemen</option>
                  <option value="ZMB">Zambia</option>
                  <option value="ZWE">Zimbabwe</option>
                </select>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">local_phone</i>
                <input id="telephone" className="grey-text darken-3" type="tel" name="telephone" onChange={this.handleInput} value={this.state.telephone} />
                <label className="grey-text darken-3" htmlFor="telephone">
                  Telephone ( ex. 732-999-9999)
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">home</i>
                <input id="house_number" className="grey-text darken-3" type="number" name="houseNumber" onChange={this.handleInput} value={this.state.houseNumber} />
                <label className="grey-text darken-3" htmlFor="house_number">
                  House Number
                </label>
              </div>
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">local_post_office</i>
                <input id="street_name" className="grey-text darken-3" type="text" name="streetName" onChange={this.handleInput} value={this.state.streetName} />
                <label className="grey-text darken-3" htmlFor="street_name">
                  Street Name
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col m6 s12">
                <i className="material-icons prefix">location_city</i>
                <input id="city" className="grey-text darken-3" type="text" name="city" onChange={this.handleInput} value={this.state.city} />
                <label className="grey-text darken-3" htmlFor="city">
                  City
                </label>
              </div>
              <div className="input-field col m3 s12">
                {/* <i className="material-icons prefix">home</i>
                <input id="stateName" className="grey-text darken-3" type="text" name="stateName" onChange={this.handleInput} value={this.state.stateName} />
                <label className="grey-text darken-3" htmlFor="state">State Name</label> */}
                <i className="material-icons prefix">home</i>
                {/* <label className="grey-text darken-3" htmlFor="state">
                  State Name
                </label> */}
                <select name="stateName" onChange={this.handleInput} value={this.state.stateName}>
                  <option value="State">State</option>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
              </div>
              <div className="input-field col m3 s12">
                <i className="material-icons prefix">local_post_office</i>
                <input id="zipcode" className="grey-text darken-3" type="number" name="zipCode" onChange={this.handleInput} value={this.state.zipCode} />
                <label className="grey-text darken-3" htmlFor="zipcode">
                  Zip Code
                </label>
              </div>
            </div>

            <center>
              <div className="input-field col s12">
                <p>
                  <label>
                  <input type="checkbox" name="subscribeUser" onClick={this.handleSubscribeUserCheckbox.bind(this)}/>
                    <span>Be the first to know when we make changes to the website.</span>
                  </label>
                </p>
                <button className="btn signUpButton" onClick={this.signUp}>
                  Sign Up <i className="material-icons right">done</i>
                </button>
              </div>
            </center>
          </form>
        </div>;
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
        <NavBar
          loginOrLogout="Login"
          loginOrLogoutLink="/login"
        /> 
        {userSignUpForm}
      </div>
    
    )
  }

};

export default Signup;