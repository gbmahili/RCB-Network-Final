import React, {Component} from 'react';

class Search extends Component {
  constructor(props){
      super(props);

      this.state = { value: 'profession'};
  }
    
    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
        return(
            <div className="row">
            <form className="col s12 m6 offset-m3">
                <label htmlFor='selectOne'>Choose your Profession</label>
                <select
                    value = {this.state.value}
                    onChange = { this.onChange.bind(this) }
                    className = "form-control"
                >
                <option
                    value = 'profession'>
                        Choose One
                </option>
                <option
                    value = 'Web-Developer'>
                        Web Developer
                </option>
                <option
                    value = 'Business-Analyst'>
                        Business-Analyst
                </option>
                <option
                    value = 'Front-End-Web-Developer'>
                        Front-End Web Developer
                </option>
                <option
                    value = 'Back-End-Web-Developer'>
                        Back-End Web Developer
                </option>
                <option
                    value = 'UX/UI-Developer'>
                        UX/UI Developer
                </option>
                <option
                    value = 'HTML/CSS-Developer'>
                        HTML/CSS Developer
                </option>
                <option
                    value = 'Javascript-Developer'>
                        Javascript Developer
                </option>
                </select>

                <a 
                className="btn waves-effect waves-light waves-green" 
                href="#" 
                id="searchIcon"> 
                    <i 
                    class="material-icons">
                    search
                    </i>
                </a>

            </form>
            </div>
        )
    }
}

export default Search;
