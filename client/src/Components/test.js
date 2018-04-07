import React, {Component} from 'react';
import API from '../utils/routes';

class Test extends Component {
    state ={
        firstName:  'Veena',
        lastName: 'Uppalapati'
    }
    // the testCall function is called in the componentDidMount method so it renders on load
    componentDidMount() {
        this.testCall();
    }

   
    // In this testcall function we are getting the response for /test route and console logging the response
    // since there is nothing in the response the log won't display anything
    testCall = () => {
        API.test( {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }).then(response => {
            console.log(response);
        //    response.send('hello, am i working')
        })
    }

    // this render message wont be displayed when we start the express server
    // because we are not able to properly route the appropriate files using React router
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