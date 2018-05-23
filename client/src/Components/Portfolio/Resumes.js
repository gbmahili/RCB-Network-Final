import React from 'react';
class Resumes extends React.Component {
    render(){
        return(
            // <a href={this.props.resumeLink} className="collection-item">{this.props.professionName}</a> 
            <div className="row card">
                <div 
                    className="col s12 m12 center btn-flat downloadBtn">
                    <a href={this.props.resumeLink} target="_blank">{this.props.professionName}</a>
                </div>
                <div className="col s12 m12 center btn-flat deleteBtn" 
                    userid={this.props.userid} 
                    resumelink={this.props.resumeLink}
                    onClick={this.props.processDelete}
                    >DELETE
                </div>
            </div>
        )
    }
}
export default Resumes;