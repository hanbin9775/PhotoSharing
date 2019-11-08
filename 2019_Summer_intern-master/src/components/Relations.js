import React, { Component } from "react";
import MainNav from "./mainNav";
import Footers from "./footer";
import { storage } from "../firebase";
import firebase from "firebase";

class Relations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      url: "gs://photosharing-7553c.appspot.com",
      progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images2/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images2")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const style = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    var rootRef = firebase.database().ref();
    rootRef
      .child("users")
      .child("dir")
      .once("value", function(data) {
        console.log("1번 :", data.val());
      });

    var database = firebase.database();


    return (
      <div>
        {/* BOOTSTRAP CSS */}
        <link href={require("./css/bootstrap.min.css")} rel="stylesheet" />
        {/* FONT ICONS */}
        <link href={require("./css/fa-svg-with-js.css")} rel="stylesheet" />
        <link href={require("./css/pe-icon-7-stroke.css")} rel="stylesheet" />
        {/* PLUGINS STYLESHEET */}
        <link href={require("./css/magnific-popup.css")} rel="stylesheet" />
        <link href={require("./css/slick.css")} rel="stylesheet" />
        <link href={require("./css/slick-theme.css")} rel="stylesheet" />
        {/* On Scroll Animations */}
        <link href={require("./css/animate.css")} rel="stylesheet" />
        {/* TEMPLATE CSS */}
        <link href={require("./css/style.css")} rel="stylesheet" />
        {/* RESPONSIVE CSS */}
        <link href={require("./css/responsive.css")} rel="stylesheet" />
        {/* PAGE CONTENT
		============================================= */}
        <div id="page" className="page">
          {/* HEADER
			============================================= */}
          <MainNav />
        </div>{" "}
        {/* End row */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={style}>
          <progress value={this.state.progress} max="100" />
          <br />
          <input type="file" onChange={this.handleChange} />
          <button onClick={this.handleUpload}>Upload</button>
          <br />
          <img
            src={this.state.url || "http://via.placeholder.com/400x300"}
            alt="Uploaded images"
            height="300"
            width="400"
          />
        </div>
        {/* PARTNERs
			============================================= */}
        {/* BRANDS-1


        {/* END PAGE CONTENT */}
      </div>
    );
  }
}

export default Relations;
