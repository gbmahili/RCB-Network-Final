import React from "react";
//import UploadUserPicture from "./UploadUserPicture";

import Dropzone from 'react-dropzone';
class UserPicture extends React.Component{
	// Render
	render() {
		return(
			<div>
				<div style={{minHeight: 495}} className="card">
					<div className="card-image waves-effect waves-block waves-light">
						{
							this.props.uploadedFileCloudinaryUrl === '' ? 
							<div><img className="responsive-img" src="assets/images/networking_with_friends.jpeg" alt={this.props.alt} /> </div> :
								<div><img id="profilePicture" className="responsive-img" src={this.props.uploadedFileCloudinaryUrl} alt={this.props.alt} /></div>
						}
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">{this.props.firstName}<i className="material-icons right">add_a_photo</i></span>
						{/* <a href="/update-profile" className="btn blue-grey lighten-1" style={{ width: "100%" }}>UPDATE YOUR PROFILE</a> */}
					</div>

					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">{this.props.firstName}<i className="material-icons right" id="close">close</i></span>
						<p>
							Please select a picture to upload. The picture will be used as your profile photo.
						</p>

						<form>
							<div className="FileUpload">
								<Dropzone
									onDrop={this.props.onImageDrop}
									multiple={false}
									accept="image/*">
									<div style={{ textAlign: "center" }} className="card-action">Drop an image or click to select a file to upload. <br /> <br />
									<span style={{color:"red"}}> Image will be uploaded once droped.</span></div>
								</Dropzone>
							</div>
						</form>

					</div>
				</div>
			</div>
		);
	};
};
export default UserPicture;