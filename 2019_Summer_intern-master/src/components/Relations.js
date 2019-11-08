import React, { Component } from "react";
import MainNav from "./mainNav";
import Footers from "./footer";
import {storage} from '../firebase';
import firebase from 'firebase';
import { equal } from "assert";

window.n1=0;
window.k=0;
class Relations extends Component {  
  constructor(props) {
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
    ////
    window.n1 = image.name;
    alert(window.n1);
    ////
    uploadTask.on('state_changed', 
    (snapshot) => {
      /* progrss function ....*/
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      alert(image.name);
      
      this.setState({progress});
      
    }, 
    (error) => {
         /* error function ....*/
      console.log(error);
    }, 
  () => {
      /* complete function ....*/
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
  
    var database = firebase.database();
    var dirname="images2"; //이름
    var passwd="123";
    var count;
    var count2;
    firebase.database().ref('size/1').once('value').then(function(snapshot) {
      database.ref('size/1').set({"num": snapshot.val().num+1});  
      count = snapshot.val().num+1;
      
    database.ref('users/'+count).set({"dirname": dirname, "passwd" : passwd});
    });
    
    firebase.database().ref('size2/1').once('value').then(function(snapshot) {      
      if(window.n1 != 0 && window.k==0){
        
      database.ref('size2/1').set({"num": snapshot.val().num+1});  
      count2 = snapshot.val().num+1;
        database.ref('users2/'+count2).set({"title": window.n1, "when" : passwd});
        window.k++;
      }
    });
    /*
    
      while(i<count){
        firebase.database().ref('users/'+i).once('value').then(function(snapshot) {
        alert(snapshot.val().dirname);
        if(dirname == snapshot.val().dirname){
          alert("겹치는 그룹명이 존재합니다!");
          booliden = false;
        }
        })
        i++;
     }
  
    
    if(booliden == true){
      database.ref('users/').child('dir').push("dirname" : dirname, "passwd": 1234)  ;
    }
*/
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
    </div> 
    
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
