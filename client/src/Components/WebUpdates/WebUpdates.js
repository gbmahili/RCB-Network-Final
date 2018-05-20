import React from 'react';
import NavBar from '../Home/NavBar';
import May202018 from './May-20-18';


class WhatsNew extends React.Component {
  render(){
    return(
      <div>
        {/* NavBar */}
        <NavBar
          loginOrLogout="Login to your account"
          loginOrLogoutLink="/login"
          customClass="navbar-fixed light-blue darken-4"
        /> 
      {/* Start of updates: */}
      <div className="container-fluid" style={{ backgroundColor: "#F6F8FA", height: "100%" }}>
        {/* Updates Title */}
        <div className="row">
          <div className="col s12 m6 offset-m3 center">
            <h4 style={{ color: "#24292e", fontSize: 32, fontWeight: 600, }}>What's new</h4>
          </div>
        </div>

        {/* Update components will be shown in this div */}
        <div className="container update-page-main-bg-color">
          <div className="row">
              <div className="col s12 m8 offset-m2">
                <div className="update-page-main-bg-color">
                  <ul className="collapsible">
                  {/* May 20, 2018 Updates ...file is located here: import May202018 from './May-20-18'*/}
                    <May202018 />
                  {/* Next Update */}
                  </ul>
                </div>
              </div>
          </div>
        </div>

        </div> {/* End of updates: */}
      
        {/* Start of Update Page footer div */}
        <div style=
          {
            { 
              position: "fixed", 
              bottom: 0, 
              left: 0, 
              right: 0, 
              backgroundColor:"#F6F8FA", 
              padding: 15, 
              fontSize: 13,
              color: "#586069",
              fontWeight: 300,
              textAlign: "center"
            }
          }>
          <p>This will be updated when we add more features</p>
          <p>© {new Date().getFullYear()} RCB-Network  |  <a href="/">Home</a>  |  <a href="/signup">Sign Up</a></p>
          
        </div>{/* Start of Update Page footer div */}

      </div> 
    )
  }
}
export default WhatsNew;