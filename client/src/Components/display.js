import React, {Component} from 'react';

class Display extends Component {
    render(){
        return <div className="col s12 m4 blue-grey lighten-2">
            <div className="card t">
              <div className="card-image"> 
                {
                    this.props.UserProfilePicture!== undefined ?
                    // Show the user's uploaded image if the UserProfilePicture is not undefined
                    <img alt={this.props.firstName} className="image" src={this.props.UserProfilePicture} />
                    :
                    // Show this default image if the user does not have an image
                    <img alt={this.props.firstName} className="image" src="http://res.cloudinary.com/gbmahili/image/upload/v1525741275/qgvdmukshelbzpws2tko.jpg" /> 
                }
              </div>
              <div className="card-content" style={{ backgroundColor: "black", color: "white", textAlign: "center", marginBottom: 5 }}>
                <span className="card-title" />
                <div id="profession" style={{ backgroundColor: "black", color: "white", textAlign: "center", marginBottom: 5, fontSize: 12 }}>
                  {" "}
                  {this.props.professionName.toUpperCase()}
                </div>
                <div id="firstName" style={{ backgroundColor: "teal", color: "white", textAlign: "center", marginBottom: 5, fontSize: 14 }}>
                  {this.props.firstName.toUpperCase()} {this.props.lastName.toUpperCase()}
                </div>
                <div id="City" style={{ backgroundColor: "black", color: "white", textAlign: "center", fontSize: 14 }}>
                  {this.props.city.toUpperCase()}, {this.props.stateName.toUpperCase()}
                </div>
              </div>
              <div className="card-action">
                <a href={"mailto:" + this.props.email + "?Subject=Rutgers%20BootCamp%20Network%2018%20Connection%20Request"} target="_top" title="Send an email">
                  <i className="material-icons  teal-text lighten-1 right">
                    email
                  </i>
                </a>
                <a href={this.props.resumeLink} title="View or Download Resume" resumeicon="resumeIcon">
                  <i className="material-icons  teal-text lighten-1 right">
                    description
                  </i>
                </a>
              </div>
            </div>
          </div>;
    }
}

export default Display;