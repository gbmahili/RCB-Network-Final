import React, {Component} from 'react';
import API from '../utils/routes';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        profession: ''
      };

    testCall = () => {
        const userobject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,  
            title: this.state.profession
   
        } 
    
          // handle the clientside request
          API.test({userobject}).then(response => {
            console.log(response);
            console.log(response.data.firstName)
            

        })
       
    }

    profCall = () => {
        const profobject = {
            title: this.state.profession
        }
        API.test({profobject}).then(res => {
            console.log(res)
        })
    }
        
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
        
        // console.log(`Username: ${this.state.firstName}\nPassword: ${this.state.lastName}`);
        this.testCall()
        // console.log(`Profession: ${this.state.profession}`)
        this.profCall()
              
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
            <input
              type="text"
              placeholder="profession"
              name="profession"
              value={this.state.profession}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
        );
    }
}

export default Form;