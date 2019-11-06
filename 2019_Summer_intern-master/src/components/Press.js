import React, { Component } from "react";
import MainNav from "./mainNav";
import Footers from "./footer";

class Home extends Component {
  render() {
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
                    <div className="press-logo">
                      <a
                        href="https://cointelegraph.com/news/samsung-expands-its-blockchain-dapp-kit-with-new-services-updates-wallet"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article4NEW.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
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
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="https://www.chipin.com/could-blockchain-lower-risk-investing/"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article4_Chipin.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="https://www.investing.com/analysis/managed-portfolios-might-succeed-in-ending-wall-streets-scepticism-of-cryptocurre-200351388"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article5_Investingcom.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="https://www.investopedia.com/tech/taxes-and-crypto/"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article6_Investopedia.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="https://www.thestreet.com/investing/bitcoin/bitcoin-price-predictions-14750530"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article7_TheStreet.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="https://finance.yahoo.com/news/3-innovative-solutions-seamless-inheritance-105605673.html"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article8_Yahoo.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="http://biz.chosun.com/site/data/html_dir/2018/10/18/2018101802663.html"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Article9.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="http://www.fnnews.com/news/201809172102523125"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article10_TBP.png")}
                          alt="press-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="press-logo">
                      <a
                        href="http://www.sedaily.com/NewsView/1S0R6APOH1"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src={require("./images/press/Press_Box_Blank_Article11_SED.png")}
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
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* END PRESS-1 */}
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* HERO IMAGE */}
            <div className="col-md-12">
              <div className="hero-img">
                <img
                  className="img-fluid"
                  src={require("./images/press/Press-Media-Logos_1400x70px-8Aug.png")}
                  alt="hero-image"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        {/* FOOTER-2
			============================================= */}
        <div className="bottom p-top-0">
          <Footers />
        </div>{" "}
        {/* END PAGE CONTENT */}
      </div>
    );
  }
}

export default Home;
