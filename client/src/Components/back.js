import React, {Component} from 'react';
import Portfolio from './Portfolio/Portfolio';



class Back extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
        showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    
    _onButtonClick() {
        this.setState({
        showComponent: true,
        });
       
    }
    
    render() {
        return (
        <div>
            <button onClick={this._onButtonClick}>Button</button>
            {this.state.showComponent ?
                <Portfolio /> :
                null
            }
        </div>
        );
    }
}

export default Back;