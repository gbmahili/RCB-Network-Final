import React from "react";

class InformationSection extends React.Component {
    
    render() {
        return(
            <div className="row">
                <div className=" col s12 m8 offset-m2">
                    <div className={"card " + this.props.windowStyle + " darken-1"}>
                        <div className="card-content white-text">
                            <span className="card-title">Uh Oh...{this.props.informationTitle}</span>
                            <p>
                                {this.props.mainMessage}<br />
                                {this.props.createAccountInfo}
                    </p>
                        </div>
                        <div className="card-action">
                            <a href="/login">{this.props.loginButton}</a>
                            <a href="/signup">{this.props.signupButton}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
 }

 export default InformationSection;