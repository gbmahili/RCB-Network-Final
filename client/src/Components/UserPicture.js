import React from "react";
//import UploadUserPicture from "./UploadUserPicture";

import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'rcbnetworkfinal';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/gbmahili/upload';

class UserPicture extends React.Component{

	// Testing Cloudinary
	constructor(props) {
			super(props);

			this.state = {
					currentUserId: '',
					uploadedFile: null,
					uploadedFileCloudinaryUrl: ''
			};
	}

	onImageDrop(files) {
			this.setState({
					uploadedFile: files[0]
			});

			this.handleImageUpload(files[0]);
	}

	handleImageUpload(file) {
			let upload = request.post(CLOUDINARY_UPLOAD_URL)
					.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
					.field('file', file)
					// .field('public_id',"USER_ID_FROM_MONGO");

			upload.end((err, response) => {
					// Check if there was an upload error
					if (err) {console.error(err);}
					// Check if the url from cloudinary is not empty
					if (response.body.secure_url !== '') {
							// Create the file information to help with updating the user's photo...get the user's id first:                
							// Current user:
							const fileName = {
									fileName: response.body.secure_url
							}
							console.log(fileName.fileName);
							// // Send file name to the dababase 
							fetch("/upload",
									{
											headers: {
													'Accept': 'application/json',
													'Content-Type': 'application/json'
											},
											method: "POST",
											body: JSON.stringify(fileName)
									})
							.then(res => res.json())
							.then(body => 
									{
											// Update the state with the data from the database
											this.setState({ uploadedFileCloudinaryUrl: response.body.secure_url });
											// Close the upload image dropzone
											document.getElementById('close').click();
									}
							);//end of response
					}
			});
	}

	// Render
	render() {
			return(
					<div>
							<div style={{minHeight: 400}} className="card">
									<div className="card-image waves-effect waves-block waves-light">
											{
													this.state.uploadedFileCloudinaryUrl === '' ? <img className="responsive-img" src="assets/images/networking_with_friends.jpeg" alt={this.props.alt} /> :
													<div>
																<img className="responsive-img" src={this.state.uploadedFileCloudinaryUrl} alt={this.props.alt} />
													</div>
											}
									</div>
									<div className="card-content">
											<span className="card-title activator grey-text text-darken-4">Baraka Mahili<i className="material-icons right">add_a_photo</i></span>
											{/* <p><a href="#!">This is a link</a></p> */}
									</div>


									<div className="card-reveal">
											<span className="card-title grey-text text-darken-4">Baraka Mahili<i className="material-icons right" id="close">close</i></span>
											<p>
													Please select a picture to upload. The picture will be used as your profile photo.
											</p>
											{/* Upload Image Section */}

											{/* Testing */}
											<form>
													<div className="FileUpload">
															<Dropzone
																	onDrop={this.onImageDrop.bind(this)}
																	multiple={false}
																	accept="image/*">
																	<div style={{ textAlign: "center" }} className="card-action">Drop an image or click to select a file to upload. <br /> <br />
																	<span style={{color:"red"}}> Image will be uploaded once droped.</span></div>
															</Dropzone>
													</div>
											</form>
											{/* <UploadUserPicture /> */}
											{/* End/Upload Image Section */}

									</div>
							</div>
					</div>
			);
	};
};

// Export for others to use:
export default UserPicture;