import React from 'react';

class A extends React.Component {
	render(){
		return(
		<div className="App">

		<!-- GENERAL INFO FORM -->
          <form class="form-area">

            <div class="row">
            
                <h8 class="left-align purple-text">* required fields</h8>
              </div>
            <div class="row">
            
                <!-- NAME -->
                <div class="input-field col m6 s12">
                  <input class="grey-text darken-3" id="first_name" name="first_name" type="text">
                  <label class="grey-text" for="first_name">First Name
                    <span class=" purple-text">*</span>
                  </label>
                </div>

                <div class="input-field col m6 s12">
                  <input class="grey-text darken-3" id="last_name" name="last_name" type="text">
                  <label class="grey-text" for="last_name">Last Name
                    <span class=" purple-text">*</span>
                  </label>
                </div>
            </div>

            <div class="row">
                <!-- EMAIL -->
                <div class="input-field validate col m6 s12">
                  <input class="grey-text darken-3" id="email" name="email" type="email">
                  <label class="grey-text" for="email">Email
                    <span class=" purple-text">*</span>
                  </label>
                </div>
            
            <!-- PASSWORD -->
            <div class="input-field col m6 s12">
              <input id="password" name="password" type="password" class="materialize-textarea grey-text">
              <label class="grey-text darken-3" for="password">Create Password
                <span class=" purple-text">*</span>
              </label>
            </div>

          </div>
          <div class="row">
            <!-- GENDER -->
            <div class="input-field grey-text col m6 s12">
              <select id="gender" name="gender">
                <option value="" disabled selected>Gender</option>
                <option value="">Female</option>
                <option value="">Male</option>
              </select>
            </div>

            <!-- BIRTH DATE -->
            <!-- DATE PICKER -->
            <div class="grey-text input-field col m6 s12">
              <input type="text" class="datepicker darken-3" id="date_of_birth" name="date_of_birth">
              <label for="date_of_birth">Enter your Birthday</label>
          </div>

        </div>

        <div class="row">
          <div class="input-field col m6 s12">
            <input id="country"  class="grey-text darken-3" type="text">
            <label class="grey-text darken-3" for="country">Country</label>
          </div>

          <div class="input-field col m6 s12">
            <input id="telephone" class="grey-text darken-3" type="text">
            <label class="grey-text darken-3" for="telephone">Telephone ( ex. 732-999-9999)
            </label>
          </div>
        
        </div>
            <!-- PHONE NBR-->
            

            <!-- ADDRESS -->
            <div class="row">

              <div class="input-field col m6 s12">
                <input id="house_number" class="grey-text darken-3" type="text" name="house_number">
                <label class="grey-text darken-3" for="house_number">House Number</label>
              </div>
              <div class="input-field col m6 s12">
                <input id="street_name" class="grey-text darken-3" type="text" name="street_name">
                <label class="grey-text darken-3" for="street_name">Street Name</label>
              </div>              

            </div>

            <div class="row">
              <div class="input-field col m4 s12">
                <input id="city" class="grey-text darken-3" type="text">
                <label class="grey-text darken-3" for="city">City</label>
              </div>
              <div class="input-field col m4 s12">
                <input id="state" class="grey-text darken-3" type="text">
                <label class="grey-text darken-3" for="state">state</label>
              </div>
              <div class="input-field col m4 s12">
                <input id="zipcode" class="grey-text darken-3" type="text">
                <label class="grey-text darken-3" for="zipcode">Zip Code</label>
              </div>
            </div>

              
              <!-- Veena testing  -->
              <!-- drop the profession data -->
              <div class="allitems">
                <div class="row card" id="professionRow" style="text-align: left; padding: 10px;">
                  <!-- dropping checkboxes on the fly -->
                 
                </div>
              </div>
              </div>             
             <center><a  class="btn blue" id="signUpBtn">Sign Up</a></center>
              
         

            </form>
		</div>

		);
	}
}

export Default Skeleton;