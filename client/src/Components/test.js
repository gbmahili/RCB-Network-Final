import React, {Component} from 'react';
import API from '../../utils/routes';

class Test extends Component {

    componentDidMount() {
        this.testCall();
    }
    
    testCall = () => {
        API.test().then(response => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, I 'm Veena!</h1>
                <p>I'm Testing</p>
                
            </div>
        )
    }
}

export default Test;