import React, {Component} from 'react';
import API from '../utils/routes'; 
import Display from './display';

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
        document.getElementById('link').setAttribute('class', 'show btn blue-grey lighten-2 white-text row card col s12 m12 center-align')
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
                    document.getElementById('default').setAttribute('class', 'show red white-text row card col s12 m12 center-align');
                }else{
                    document.getElementById('default').setAttribute('class', 'hide');
                }
            });
            // Update the display component with the looped data:
        });
       
    }
    
    render() {
        return(
            <div>
                
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
                    </div>
                    
        <div className= 'row'>
       
            <div className= 'blue-grey lighten-2'>
                
                <div id='default' className='hide' style={{padding: 10}}>
                    Unfortunately, we could not find a match for your search. <br/>
                    Please check back later.
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
       
        <a  className='hide' id='link' href="/portfolio">Back to profile</a>
        
        </div>
       
        )
}
}
                    


export default Search;
