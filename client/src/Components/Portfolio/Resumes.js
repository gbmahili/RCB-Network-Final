import React from 'react';
class Resumes extends React.Component {
    render(){
        return(
            
            <a href={this.props.resumeLink} className="collection-item">{this.props.professionName}</a> 
        )
    }
}
export default Resumes;