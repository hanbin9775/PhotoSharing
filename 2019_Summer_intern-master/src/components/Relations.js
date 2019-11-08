import React, { Component } from "react";
import MainNav from "./mainNav";
import Footers from "./footer";
import {storage} from '../firebase';

class Relations extends Component {  constructor(props) {
  super(props);
  this.state = {
    image: null,
    url: 'gs://photosharing-7553c.appspot.com',
    progress: 0
  }
  this.handleChange = this
    .handleChange
    .bind(this);
    this.handleUpload = this.handleUpload.bind(this);
}
handleChange = e => {
  if (e.target.files[0]) {
    const image = e.target.files[0];
    this.setState(() => ({image}));
  }
}
handleUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images2/${image.name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // progrss function ....
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
         // error function ....
      console.log(error);
    }, 
  () => {
      // complete function ....
      storage.ref('images2').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
      })
  });
}
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
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
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
      </div>


        {/* PARTNERs
			============================================= */}
        <div id="brands-2" className="brands-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-3 section-title logo_R_Rel p-bottom-10">
                {/* Title 	*/}
                <img
                  className="img-fluid"
                  src={require("./images/C_R_Icon/Partners_742x257px.png")}
                />
              </div>
            </div>{" "}
            {/* END SECTION TITLE */}
            {/* BRANDS-1


			============================================= */}
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="https://www.samsung.com/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_Samsung_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_Samsung_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="https://www.microsoft.com/ko-kr" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_Microsoft_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_Microsoft_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="http://english.msip.go.kr/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_ICT_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_ICT_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="http://biz.chosun.com/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_Chosun_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_Chosun_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a
                    href="http://cidec.khu.kr/contents/ssk.htm"
                    target="_blank"
                  >
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_SSK_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_SSK_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="https://singaporefintech.org/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_SFA_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_SFA_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="https://ftahk.org/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_FTAHK_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_FTAHK_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="https://www.fbg.capital/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_FBGOne_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_FBGOne_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="http://futuramasummit.com/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_Futurama_BW.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_Futurama_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="press-logo3">
                  <a href="https://www.foundationx.io/" target="_blank">
                    <img
                      className="img-fluid"
                      src={require("./images/relations/Partners_FoundationX_Colour.png")}
                      alt="press-logo"
                    />
                    <img
                      className="img-color"
                      src={require("./images/relations/Partners_FoundationX_Colour.png")}
                      alt="press-logo"
                    />
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* END BRANDS-1 */}
        <br />
        <br />
        {/* RELATIONs
			============================================= */}
        <br />
        <br />
        {/* END BRANDS-1 */}
        <br />
        <br />
        {/* END BRANDS-1 */}
        <br />
        <br />
        <div className="bottom">{/* <Footers /> */}</div>{" "}
        {/* END PAGE CONTENT */}
      </div>
    );
  }
}

export default Relations;
