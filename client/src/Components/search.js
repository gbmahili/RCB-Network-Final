import React, {Component} from 'react';
import API from '../utils/routes'; 
import Display from './display';
import GBMHead from './GBMHead';
// import { isNull } from 'util';

class Search extends Component {
  constructor(props){
      super(props);

      this.state = { 
          professionName: 'profession',
          userInfo: []
    };
      
  }
    
    onChange(e) {
        this.setState({ professionName: e.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.sendProfessions();
    };

    sendProfessions = () => {
        const getProfession = {   
            professionName: this.state.professionName
        };
    
          // handle the clientside request
          API.getUsers({getProfession}).then(response => {
            const userInfo = response.data;

            // Update the state with the new data
            this.setState({ userInfo }, () => {
                console.log(userInfo.length)
                if(userInfo.length === 0){
                    // document.getElementById('test').setAttribute('class', 'hide');
                    document.getElementById('default').setAttribute('class', 'show');
                    // setTimeout(function(){
                    // document.getElementById('default').setAttribute('class', 'hide');
                    // }, 10000)
                }
            });
            // Update the display component with the looped data:
        });
       
    }
    
    render() {
        return(
            <div>
                <GBMHead />
                <div className="row">
                    <div className="input-field col s12">
                        <div className="col s10 m10" >
                        <label htmlFor='selectOne'></label>
                        <select
                            id='prof'
                            value = {this.state.professionName}
                            onChange = { this.onChange.bind(this) }
                            
                        >
                        <option
                            value = 'profession'>
                                Choose your Profession
                        </option>
                        <option
                            value = 'Full Stack Web Developer'>
                                Full Stack Web Developer
                        </option>
                        <option
                            value = 'Business Analyst'>
                                Business Analyst
                        </option>
                        <option
                            value = 'Frontend Web Developer'>
                                FrontEnd Web Developer
                        </option>
                        <option
                            value = 'Backend Web Developer'>
                                Backend Web Developer
                        </option>
                        <option
                            value = 'UX/UI Developer'>
                                UX/UI Developer
                        </option>
                        <option
                            value = 'HTML/CSS Developer'>
                                HTML/CSS Developer
                        </option>
                        <option
                            value = 'Javascript Developer'>
                                Javascript Developer
                        </option>
                        <option
                            value = 'React Developer'>
                                React Developer
                        </option>
                        <option
                            value = 'Database Management'>
                            Database Management
                        </option>
                        </select>

                        </div>

                        <div className="col s2 m2">
                        <a 
                        className="btn waves-effect waves-light waves-green" 
                        href="#!" 
                        id="searchIcon"
                        onClick = {this.onSubmit.bind(this)}
                        disabled> 
                            <i 
                            className="material-icons">
                            search
                            </i>
                        </a>
                        </div>
                    
                    </div>
                    

            {
                this.state.userInfo.map((element, i) => (
                    element.professions.map((professionElement, i2)=> (
                        professionElement.professionName === this.state.professionName ?
                        <Display
                            key={i2}
                            UserProfilePicture= {element.UserProfilePicture}
                            professionName={this.state.professionName}
                            firstName={element.firstName}
                            lastName={element.lastName}
                            city={element.city}
                            stateName={element.stateName}
                            email={element.email}
                            resumeLink={professionElement.resumeLink}
                        />: null
                    ))
                ))
            }   
            </div>
        </div>
        )
}
}
                    


export default Search;
