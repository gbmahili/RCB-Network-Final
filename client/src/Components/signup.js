import React from 'react';

class Signup extends React.Component {
	render(){
		return(
      
      <div className="App">
      
    <div className="showcase container">
      <div className="row">
        <div className="col s12 m10 offset-m1 center">
          <div id="portfolioHeading">            
            <h4 className="grey-text">Welcome!</h4>
            
    </div>
      </div>
        </div>
          </div>


          <form className="form-area">

            <div className="row">
            
                <h8 className="left-align purple-text">* required fields</h8>
              </div>
            <div className="row">
            
                <div className="input-field col m6 s12">
                  <input className="grey-text darken-3" id="first_name" name="first_name" type="text"/>
                  <label className="grey-text" forHTML="first_name">First Name
                    <span className=" purple-text">*</span>
                  </label>
                </div>

                <div className="input-field col m6 s12">
                  <input className="grey-text darken-3" id="last_name" name="last_name" type="text"/>
                  <label className="grey-text" forHTML="last_name">Last Name
                    <span className=" purple-text">*</span>
                  </label>
                </div>
            </div>

            <div className="row">
                <div className="input-field validate col m6 s12">
                  <input className="grey-text darken-3" id="email" name="email" type="email"/>
                  <label className="grey-text" forHTML="email">Email
                    <span className=" purple-text">*</span>
                  </label>
                </div>
            
            <div className="input-field col m6 s12">
              <input id="password" name="password" type="password" className="materialize-textarea grey-text"/>
              <label className="grey-text darken-3" forHTML="password">Create Password
                <span className=" purple-text">*</span>
              </label>
            </div>

          </div>
          <div className="row">
            {/* <!-- GENDER --> */}
            <div className="input-field col m6 s12">
            <input id="gender" name="gender" type="text" placeholder="Gender" className="materialize-textarea grey-text"/>
            {/* <select id="gender" name="gender">
                <option value="" disabled selected>Gender</option>
                <option value="">Female</option>
                <option value="">Male</option>
              </select> */}
            </div>
            
            {/* <!-- BIRTH DATE -->
            <!-- DATE PICKER --> */}
            <div className="grey-text input-field col m6 s12">
              <input type="text" className="datepicker darken-3" id="date_of_birth" name="date_of_birth"/>
              <label forHTML="date_of_birth">Enter your Birthday</label>
          </div>

        </div>

         <div className="row">
          <div className="input-field col m6 s12">
            <input id="country"  className="grey-text darken-3" type="text"/>
            <label className="grey-text darken-3" forHTML="country">Country</label>
          </div>

          <div className="input-field col m6 s12">
            <input id="telephone" className="grey-text darken-3" type="text"/>
            <label className="grey-text darken-3" forHTML="telephone">Telephone ( ex. 732-999-9999)
            </label>
          </div>
        
        </div> 
            

            <div className="row">

              <div className="input-field col m6 s12">
                <input id="house_number" className="grey-text darken-3" type="text" name="house_number"/>
                <label className="grey-text darken-3" forHTML="house_number">House Number</label>
              </div>
              <div className="input-field col m6 s12">
                <input id="street_name" className="grey-text darken-3" type="text" name="street_name"/>
                <label className="grey-text darken-3" forHTML="street_name">Street Name</label>
              </div>              

            </div>

            <div className="row">
              <div className="input-field col m4 s12">
                <input id="city" className="grey-text darken-3" type="text"/>
                <label className="grey-text darken-3" forHTML="city">City</label>
              </div>
              <div className="input-field col m4 s12">
                <input id="state" className="grey-text darken-3" type="text"/>
                <label className="grey-text darken-3" forHTML="state">state</label>
              </div>
              <div className="input-field col m4 s12">
                <input id="zipcode" className="grey-text darken-3" type="text"/>
                <label className="grey-text darken-3" forHTML="zipcode">Zip Code</label>
              </div>
            </div>

          <center><a  className="btn blue" id="signUpBtn">Sign Up</a></center>


             </form>

             
		 </div>

     

          )
  }

};

export default Signup 