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
        <section className="division">
          <div className="container p-left-0 align-items-center offset-top-8">
            <div className="d-flex align-items-center img-fluid offset-2">
              {/* <progress value={this.state.progress} max="100" /> */}
              <br />
              <h1 className="p-font-MiSaeng m-bottom-0">
                사진을 올려주세요! &nbsp;&nbsp;
              </h1>
              <h2 className="p-font-MiSaeng m-bottom-0">
                <input
                  className="button_YuChuNam p-font-MiSaeng"
                  type="file"
                  onChange={this.handleChange}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={this.state.url || "http://via.placeholder.com/400x300"}
                  // src={require("./images/animatedcamera.gif")}
                  alt="업로드 하기 전입니당"
                  width="400"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="button_YuChuNam2 p-font-MiSaeng"
                  onClick={this.handleUpload}
                >
                  등록
                </button>
              </h2>
            </div>
          </div>
        </section>
        {/* PARTNERs
			============================================= */}
        {/* BRANDS-1


        {/* END PAGE CONTENT */}
      </div>
    );
  }
}

export default Relations;
