import React from 'react'
class May202018 extends React.Component {
  render() {
    return(
      <li>
        <div className="collapsible-header"><i className="material-icons">update</i>May 20, 2018 Updates</div>
          <div className="collapsible-body">
          <ul className="collection">
            <li className="collection-item">
              Users are now able to search for all our current members. To begin a search:
              <ol>
                <li>Login to your page</li>
                <li>Select <b><em>All Members</em></b> from the drop-down list and click on search</li>
              </ol>
            </li>
            <li className="collection-item">
              On signup, users can now opt-in for updates. This means, users who chose to be notified when we have a new feature will receive an email. They will be the first to know and try out what's new.
            </li>
          </ul>
          </div>
      </li>
    )
  }
};

export default May202018;