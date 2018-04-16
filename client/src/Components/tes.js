var membersBox = `
					
    <div className="col s3">
        <div className="card">
            <div className="card-image">
                <img id="image" src={this.props.UserProfilePicture} />
            </div>
            <div className="card-content" style={{backgroundColor:'black', color:'white', textAlign:'center', marginBottom:5}} >
                <span className="card-title"></span>
                <div id="profession" style= {{backgroundColor:'black', color:'white', textAlign:'center', marginBottom:5, fontSize:14}} > {this.props.professionName.toUpperCase()}</div>
                <div id="firstName" style= {{backgroundColor:'teal', color:'white', textAlign:'center', marginBottom:5, fontSize:16}} >{this.props.firstName.toUpperCase()}, {this.props.lasttName.toUpperCase()}</div>	
                <div id="City" style= {{backgroundColor:'black', color:'white', textAlign:'center',  fontSize:14}}>{this.props.city.toUpperCase()}, {this.props.stateName.toUpperCase()}</div>    
            </div>
            <div className="card-action">
                <a href="mailto:{this.props.emai}?Subject=Rutgers%20BootCamp%20Network%2018%20Connection%20Request" target="_top">Send Mail
                <i className='material-icons  teal-text lighten-1 right'>email</i>
                </a>
            </div>
        </div>
    </div>
`;