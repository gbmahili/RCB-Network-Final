import React from 'react';
// import API from '../utils/routes';

class Test extends React.Component {
    state ={
        firstName:  'Veena',
        lastName: 'Uppalapati',
    }


    // this render message wont be displayed when we start the express server
    // because we are not able to properly route the appropriate files using React router
    render() {
        return (
            <div className="card">
                <hr/>
                <h1>Hello, I 'm Veena!</h1>
                <p>I'm Testing</p>
                
            </div>
        )
    }
}

export default Test;