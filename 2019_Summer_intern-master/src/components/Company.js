import React, { Component } from "react";
import MainNav from "./mainNav";
import Footers from "./footer";
import FloatingButton from "./floatingButton";
import { Gallery, GalleryImage } from "react-gesture-gallery";
//////////////////////////////////////////////////////////////////////////////////////////
import { Events, animateScroll as scroll, scroller } from "react-scroll";

const images = [
  require("./images/team/1_Michael.png"),
  require("./images/team/2_Elon.png"),
  require("./images/team/4_Jayden.png"),
  require("./images/team/5_Jocelyn.png"),
  require("./images/team/6_Rin.png"),
  require("./images/team/7_Roy.png"),
  require("./images/team/8_ChaiWee.png"),
  require("./images/team/9_Deshika.png")
];

const _images = [
  require("./images/team/1A_Russell.png"),
  require("./images/team/2A_Seonik-Jeon.png"),
  require("./images/team/3A_Michael-Tsang.png")
];

function Show() {
  const [index, setIndex] = React.useState(0);
  return (
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

function _Show() {
  const [index, setIndex] = React.useState(0);
  return (
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {_images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

class Home extends Component {
  ////////////////////////////////////////////////////////////////
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  ////////////////////////////////////////////////////////////////
  render() {
    return (
      <div>
        Company!
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
          {/* <FloatingButton /> */}
        </div>{" "}
        {/* End row */}
        {/* HERO-5
			============================================= */}
        <section className="bg-fixed hero-section division">
          <div className="container offset-top-8">
            {/* HERO CONTENT */}
            <div className="row d-flex align-items-center m-left-10 offset-left-0_R">
              {/* HERO TEXT */}
              <div className="col-md-8 p-right-0 p-left-0 offset-top-7 animated fadeIn visible">
                <div>
                  {/* Title */}
                  <h2 className="h2-sm">
                    지나갔지만 추억하면 <br /> 애뜻한 기억들 <br />{" "}
                    소중한 사람과 함께 기록해 보아요.
                  </h2>
                  {/* Text */}
                  <p className="p-3xl p-font-MyriadProRegular p-top-20">
                    정말 소중한 기억들. 우리끼리만 공유하고 싶은 추억들. 
                    <br/>
                    우추남에서 함께 기록해보아요.
                    <br/>
                    웹페이지에서 공유 폴더를 만들고 우리끼리만 알 수 있는 비밀번호를 
                    <br/>
                    설정할 수 있습니다.
                    <br/>
                    업로드 된 사진은 시간 순으로 자동 정렬되고 검색 기능이 있으니
                    <br/>
                    걱정하지 마세요!
                  </p>
                </div>
              </div>{" "}
              {/* END HERO TEXT */}
              {/* HERO IMAGE */}
              <div className="col-md-4 p-left-10 hero-img m-bottom-30">
                <img
                  className="img-fluid p-bottom-10 offset-1_5 offset-left-0_R CompanyImage gifSize animated fadeIn visible"
                  src={require("./images/animatedcamera.gif")}
                  alt="hero-image"
                />
              </div>
            </div>{" "}
            {/* END HERO CONTENT */}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        <br />
        {/* END HERO-5 */}
        <section className="division offset-top-8">
          <div className="container p-left-0 ">
            <div className="d-flex align-items-center">
              <div className="p-right-0 p-left-0">
                <img
                  className="img-fluid offset-0"
                  src={require("./images/Business-Landscape.png")}
                  alt="hero-image"
                  width={1400}
                />
              </div>
            </div>{" "}
          </div>{" "}
          {/* End container */}
        </section>{" "}
        <div id="brands-2" className="brands-section division offset-top-7">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row offset-top-8">
              <div className="col-md-2 logo_R offset-top-7">
                {/* Title 	*/}
                <img
                  className="img-fluid m-bottom-10 animated fadeIn visible"
                  src={require("./images/C_R_Icon/Team_500x257.png")}
                />
              </div>
              <div className="col-md-12">
                <Show />
              </div>
            </div>{" "}
            {/* END SECTION TITLE */}
            <div className="container offset-top-8">
              <div className="row">
                <div className="col-md-2 p-left-0 logo_R offset-top-8">
                  {/* Title 	*/}
                  <br />
                  <img
                    className="img-fluid animated fadeIn visible"
                    src={require("./images/C_R_Icon/Advisors_742x257px.png")}
                  />
                </div>
                <div className="col-md-12">
                  <_Show />
                </div>
              </div>
            </div>{" "}
            {/* END SECTION TITLE */}
            {/* BRANDS-1
			============================================= */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* END BRANDS-1 */}
        <br />
        <br />
        <br />
        <br />
        <div className="bottom">
          <div id="ex-hd">{/* <Footers /> */}</div>
        </div>{" "}
        {/* END PAGE CONTENT */}
        {/* EXTERNAL SCRIPTS
		============================================= */}
        {/* <script src={require("./js/retina.js")}></script>	 */}
      </div>
    );
  }
}

export default Home;
