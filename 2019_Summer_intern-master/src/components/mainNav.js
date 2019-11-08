import React, { Component } from "react";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import NAV from "./navbar";
import { connect, bindActionCreators } from "react-redux";
import * as actions from "../actions";

const propTypes = {
  Text1: "Services.",
  Text2: "Company.",
  Text3: "Press.",
  Text4: "Relations.",
  Text5: "Contact."
};

const defaultProps = {
  Text1: "Services.",
  Text2: "Company.",
  Text3: "Press.",
  Text4: "Relations.",
  Text5: "Contact."
};

class MainNav extends Component {
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
  render() {
    return (
      <header id="header" className="header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-tra">
          <div className="container">
            <Link
              activeClass="active"
              to="page"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link2 className="nav-item nl-simple nav-link" to="/">
                <Link
                  activeClass="active"
                  to="page"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link2 to="/">
                    <img
                      src={require("./images/uchu_logo.png")}
                      width={200}
                      height={40}
                      alt="header-logo"
                    />
                  </Link2>
                </Link>
              </Link2>
            </Link>
            {/* <a href="/" className="navbar-brand logo-black">""</a> */}
            {/* Responsive Menu Button */}
            <button className="navbar-toggler">
              <NAV />
            </button>
            {/* Navigation Menu */}
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link
                    activeClass="active"
                    to="page"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link2
                      className="nav-item nl-simple nav-link"
                      to="/company"
                    >
                      <Link
                        activeClass="active"
                        to="page"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <Link2 to="/company">소개</Link2>
                      </Link>
                    </Link2>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="page"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link2 className="nav-item nl-simple nav-link" to="/press">
                      <Link
                        activeClass="active"
                        to="page"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <Link2 to="/press">디렉토리</Link2>
                      </Link>
                    </Link2>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="page"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link2
                      className="nav-item nl-simple nav-link"
                      to="/relations"
                    >
                      <Link
                        activeClass="active"
                        to="page"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <Link2 to="/relations">업로드</Link2>
                      </Link>
                    </Link2>
                  </Link>
                </li>
              </ul>
            </div>{" "}
            {/* End Navigation Menu */}
          </div>{" "}
          {/* End container */}
        </nav>{" "}
        {/* End navbar  */}
      </header>
    );
  }
}

MainNav.propTypes = propTypes;
MainNav.defaultProps = defaultProps;

const mapStateToProps = state => {
  console.log(state.lang.text);
  var text1;
  var text2;
  var text3;
  var text4;
  var text5;

  switch (state.lang.text) {
    case "KOR":
      text1 = "제품소개.";
      text2 = "회사소개.";
      text3 = "관련기사.";
      text4 = "협력사.";
      text5 = "연락.";

      break;

    case "ENG":
      text1 = "Services.";
      text2 = "Company.";
      text3 = "Press.";
      text4 = "Relations.";
      text5 = "Contact.";

      break;
  }

  return {
    Text1: text1,
    Text2: text2,
    Text3: text3,
    Text4: text4,
    Text5: text5
  };
};

export default MainNav;
