import React, {Component} from 'react';
import API from '../utils/routes';

class Form extends Component {
    state = {
        firstName: "",
        lastName: ""
      };


        // In this testcall function we are getting the response for /test route and console logging the response
        // since there is nothing in the response the log won't display anything
        
    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
        [name]: value
        });
    };

    // When the form is submitted, prevent the default event and alert the username and password
    handleFormSubmit = event => {
        event.preventDefault();
        const userobject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        console.log(`Username: ${this.state.firstName}\nPassword: ${this.state.lastName}`);
                // handle the clientside request
                API.test({userobject}).then(response => {
                    console.log(response);
                    console.log(response.data.firstName)
                //    response.send('hello, am i working')
                })

    }
    
    render(){
        return (
            <form>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
        );
    }
}

export default Form;