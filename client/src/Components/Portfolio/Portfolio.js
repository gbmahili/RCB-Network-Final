// Get dependencies
import React from "react";
import request from 'superagent';


// Get child components
import UserPicture from "./UserPicture";
import UserAbout from "./AboutUser";
import InformationSection from "./../InformationSection";
import Search from './../search';

// Instantiate cloudinary variables
const CLOUDINARY_UPLOAD_PRESET = 'rcbnetworkfinal';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/gbmahili/upload';
const userData = JSON.parse(localStorage.getItem("RCB_USER"));
// Component
class Portfolio extends React.Component {

    constructor(props) {
        super(props);

        if (userData) {
            this.state = {
                firstName: userData.firstName,
                lastName: userData.lastName,
                currentUserId: userData._id,
                email: userData.email,
                uploadedFile: null,
                uploadedFileCloudinaryUrl: userData.UserProfilePicture
            };
        }else{
            this.state = {
                firstName: "",
                lastName: "",
                currentUserId: "",
                email: "",
                uploadedFile: null,
                uploadedFileCloudinaryUrl: "assets/images/networking_with_friends.jpeg",
            };
        }

        
        
    };
    // ImageDropping Function from cloudability
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }
    // Upload Image to Cloudability and the url to the user's account:
    handleImageUpload(file) {
        // 1.  UPLOAD THE IMAGE TO CLOUDABILITY:
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file)
        // .field('public_id',"USER_ID_FROM_MONGO");


        upload.end((err, response) => {
            // Check if there was an upload error
            if (err) { console.error(err); }
            // Check if the url from cloudinary is not empty
            if (response.body.secure_url !== '') {
                // Modify the file and add cropping details before sending to the database:
                const url_spliter = "upload/";
                const cloudinary_response = response.body.secure_url;
                const res = cloudinary_response.split(url_spliter);
                const urs_first_section = res[0];
                const url_last_section = res[1];
                const cropping_parameters = "w_250,h_250,c_thumb,g_face,e_saturation:80/";
                // File to send to the database
                const imageUrl = urs_first_section + url_spliter + cropping_parameters + url_last_section;
                // Create the file information to help with updating the user's photo...get the user's id first:
                // Current user:
                const fileName = {
                    fileName: imageUrl,
                    userEmail : document.getElementById("userEmail").getAttribute("email")
                }
                // 2. Send file name to the dababase 
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
                .then(body => {
                    // Update the state with the data from the database
                    this.setState({
                        currentUserId: body._id,
                        firstName: body.firstName,
                        lastName: body.lastName,
                        uploadedFileCloudinaryUrl: body.UserProfilePicture
                    }, ()=> {
                        // Remove storage data
                        localStorage.removeItem("RCB_USER");
                        // Set new storage data
                        localStorage.setItem("RCB_USER", JSON.stringify(body));
                        document.getElementById('close').click();
                        document.getElementById("profilePicture").setAttribute("src", body.UserProfilePicture);
                    });
                });//end of response
            }
        });
    }
   
    // Render Components
    render() {
        let isLoggedIn;        
        if (localStorage.getItem("RCB_USER")) {
            let userData = JSON.parse(localStorage.getItem("RCB_USER"));
            console.log(userData.firstName)
            isLoggedIn = userData._id;
        }else{
            isLoggedIn = "";
        }

        let userPortfolio;
        if (isLoggedIn) {
            userPortfolio = (
                <div className="row">
                    <div className="col s12 m4">
                        <UserPicture
                            uploadedFileCloudinaryUrl={this.state.uploadedFileCloudinaryUrl}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            onImageDrop={this.onImageDrop.bind(this)}
                        />
                    </div>
                    <div className="col s12 m8">
                        <UserAbout
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                        />
                    </div>
                </div>
            );
        } else {
            userPortfolio = (
                <InformationSection
                    windowStyle="row red white-text"
                    informationTitle="Not Logged In"
                    mainMessage="It looks like you are not logged in. Please login to see this page!"
                    createAccountInfo="No account? No problem. Click Sign up to create one."
                    loginButton="Login"
                    signupButton="Sign Up"
                />
            );
        };
        // Render one document
        return (
            <div>
                <Search />   
                <div id='test'>
                {userPortfolio}
                </div>
            </div>
        );
    };
};

// Export for others to use:
export default Portfolio;