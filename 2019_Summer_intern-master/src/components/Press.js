import React, { Component } from "react";
import MainNav from "./mainNav";
import FloatingButton from "./floatingButton";
import Buttons from "./Buttons";
import CounterListContainer from "./containers/CounterListContainer";

import { connect } from "react-redux";
import * as actions from "../actions";

import Footers from "./footer";

class Home extends Component {
  render() {
    const { onCreate } = this.props;
    return (
      <div>
        Press!
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
          <br />
          <br />
          <br />
          {/* <FloatingButton /> */}
          <div className="App">
            <Buttons onCreate={onCreate} />
            <div id="brands-1" className="brands-section division">
              <div className="container">
                <div className="row hero-img">
                  <CounterListContainer />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* PRESS-1
			============================================= */}
        <div id="press-1" className="wide-100 press-section division">
          <div className="container">
            {/* BRANDS-1
			============================================= */}
            <div id="brands-1" className="brands-section division">
              <div className="container">
                <div className="row">
                  {/* BRAND LOGO IMAGE */}
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo m-bottom-10">
                      <a
                        href="https://cointelegraph.com/news/samsung-expands-its-blockchain-dapp-kit-with-new-services-updates-wallet"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_NEW_Article1.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                    <h3 className="h3-xs animated fadeInUp visible hero-img">
                      Group 1
                    </h3>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="http://www.fnnews.com/news/201907211835255908"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_NEW_Article1.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="http://www.zdnet.co.kr/view/?no=20190719173928"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_NEW_Article2.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="https://www.mk.co.kr/news/economy/view/2019/07/506538/"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_NEW_Article3.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="http://www.zdnet.co.kr/view/?no=20181212175649"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Article1_370x135.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="https://www.forbes.com/sites/ginaclarke/2018/11/27/latest-crypto-crash-caused-by-bitcoin-civil-war-say-experts/#62e81efc3c6c"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Article2_370x135_Forbes.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="http://www.korea.kr/briefing/pressReleaseView.do?newsId=156304607"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article3_MSICT.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>

                  {/* 여기까지 */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* END BRANDS-1 */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* FOOTER-2
			============================================= */}
        <div className="bottom p-top-0">{/* <Footers /> */}</div>{" "}
        {/* END PAGE CONTENT */}
      </div>
    );
  }
}

// export default Home;
const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create())
});

export default connect(
  null,
  mapToDispatch
)(Home);
