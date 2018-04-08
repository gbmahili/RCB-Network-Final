import React from 'react';

class UploadUserPicture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState(
                    { imageURL: `http://localhost:3000/public/assets/images/${body.file}` }, () => {
                        console.log(this.state.imageURL);
                    }
                );
                
            });
        });
    }

    render() {
        return (
            <form >

                <div className="file-field input-field">
                    <div>
                        <span className="btn">Select Photo</span>
                        <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Select Photo" />
                    </div>
                </div>
                <div>
                    <button className="btn" onSubmit={this.handleUploadImage}>Upload Profile Photo</button>
                </div>
                {/* <img src={this.state.imageURL} alt="img" /> */}
            </form>
        );
    }
}
export default UploadUserPicture;