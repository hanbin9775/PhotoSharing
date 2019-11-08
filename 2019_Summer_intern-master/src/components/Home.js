import React, { Component } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
//////////////////////////////////////////////////////////////////////////////////////////
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";
import MainNav from "./mainNav";
import Footers from "./footer";
import { Link as Link2 } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////
const images = [
  require("./images/Home_Services_Jupiter_546x321.png"),
  require("./images/Home_Services_Mars_546x321.png"),
  require("./images/Home_Services_Pluto_546x321.png")
];
function Show() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        background: "black",
        color: "white"
      }}
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
          {/* HERO-5\
      ============================================= */}
          <hr id="test" className="hr-line offset-10 offset-top-0 m-bottom-0" />
          {/* END HERO-5 */}
          {/* CONTENT-7
      ============================================= */}
          <section className="division">
            <div className="container p-left-0 ">
              <div className="d-flex align-items-center">
                <div className="p-right-0 p-left-0">
                  <img
                    className="img-fluid offset-0_5"
                    src={require("./images/homeImage/ourtime.png")}
                    alt="hero-image"
                    width={1300}
                  />
                </div>
              </div>{" "}
            </div>{" "}
            {/* End container */}
            <div className="container p-left-0 ">
              <h3 className="h3-xs animated fadeInUp visible hero-img">
                <br />
                사진 공유 
                <br />
                관리 서비스
                <br />
                
              </h3>
            </div>
          </section>{" "}
          {/* END CONTENT-7 */}
          {/* </div>	 */}
          {/* MORE APPS
			============================================= */}
          {/* <section id="more-apps" className="moreapps-section division"> */}
          {/* <div className="container"> */}
          {/* <div className="row"> */}
          {/* END MORE APPS */}
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* End container */}
        {/* END MORE APPS */}
        {/* FOOTER-2
      ============================================= */}
        <div className="bottom">{/* <Footers /> */}</div>
        {/* END PAGE CONTENT */}
        {/* EXTERNAL SCRIPTS
		============================================= */}
      </div>
    );
  }
}

export default Home;
