import React from 'react'
class May242018 extends React.Component {
  render() {
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons">update</i>May 24, 2018 Updates</div>
        <div className="collapsible-body">
          <ul className="collection">
            <li className="collection-item">
              Users are now able to delete a resume from their dashboard. To delete a resume:
              <ol>
                <li>Login to your page</li>
                <li>Expand the <b><em>Resume section</em></b> by clicking on the number of resume you have</li>
                <li>You can then either  view your resume by clicking on the profession title or <b><em>Delete</em></b> your resume by clicking the delete section.</li>
              </ol>
            </li>
            <li className="collection-item">
              We have updated the look of the resume section from a list view with just a link, to a view that offers an option to delete the resume.
            </li>
          </ul>
        </div>
      </li>
    )
  }
};

export default May242018;