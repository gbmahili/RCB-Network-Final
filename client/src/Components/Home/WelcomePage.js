import React from 'react';
class WelcomePage extends React.Component {
    render() {
        return (

            <div className="container">

                <div className="row col s12 m12"
                    style={{
                        maxWidth: "60rem",
                        margin: "0 auto",
                        padding: "0 1.6rem",
                        fontSize: "28px",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        backgroundColor: "snow"
                    }}
                >
                    <h1>Welcome to RCB Network</h1>
                </div>

                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <div className="card cyan darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Where Developers Meet</span>

                                <div style={{ fontSize: "1.5rem", fontFamily: "'Gamja Flower', cursive"}}>
                                    <span style={{fontSize: "1.2em", fontWeight: 400}}>A message from Veena, Nancy, Miles and Baraka </span>
                                    <blockquote>We are glad you've just found the Rutgers Bootcamp 2018 Networking corner. <br/>
                                    The purpose of this site is to ensure that we all stay in touch after graduation. <br />
                                    Please login or sign up to create an account.</blockquote>
                                </div>
                            </div>
                            <div className="card-action blue-grey darken-1">
                                <a href="/login">Login</a>
                                <a href="/signup">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WelcomePage;