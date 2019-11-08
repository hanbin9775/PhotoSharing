import React, { Component } from "react";
import FloatingButton from "./floatingButton";
import AOS from "aos";
import { connect, bindActionCreators } from "react-redux";
import * as actions from "../actions";

import "aos/dist/aos.css";

const propTypes = {
  SetLang: "Language",
  Lang1: "ENG",
  Lang2: "KOR",
  Text1: "Partners",
  Text2: "Alliance",
  Text3: "Relations",
  Text4: "Exchanges",
  Text5: "For Inquiry",
  Text6: "For Investment",
  Text7: "WhitePaper"
};

const defaultProps = {
  SetLang: "Language",
  Lang1: "ENG",
  Lang2: "KOR",
  Text1: "Partners",
  Text2: "Alliance",
  Text3: "Relations",
  Text4: "Exchanges",
  Text5: "For Inquiry",
  Text6: "For Investment",
  Text7: "WhitePaper"
};

class Footers extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "ENG" };

    this.setKoreanLanguage = this.setKoreanLanguage.bind(this);
    this.setEnglishLanguage = this.setEnglishLanguage.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  setKoreanLanguage() {
    const text = "KOR";
    this.props.handleSetKOR(text);
  }
  setEnglishLanguage() {
    const text = "ENG";
    this.props.handleSetENG(text);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value == "ENG") {
      return this.setEnglishLanguage();
    } else if (event.target.value == "KOR") {
      return this.setKoreanLanguage();
    }
  }

  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <footer id="footer-2" className="footer division">
        <div id="footer-float" data-aos="fade-up" data-aos-anchor="#footer-2">
          <FloatingButton />
        </div>
        {/* BOTTOM FOOTER */}
        <div className="container">
          <div className="bottom-footer">
            <div className="col-lg-auto m-top-10">
              <div className="row d-flex offset-0 offset-left-0_R">
                {/* FOOTER ABOUT */}
                <div className="col-sm-2 m-bottom-20">
                  <img
                    src={require("./images/logo_.png")}
                    width={125}
                    height={25}
                    alt="header-logo"
                  />
                </div>
                {/* FOOTER CONTENT */}
                <div className="col-lg-7 m-top-5">
                  <div className="row">
                    <div className="col-sm-1_5 p-right-20">
                      <ul>
                        <h5 className="h5-sm">{this.props.Text1}</h5>
                        <li className="m-bottom-10">
                          <a href="https://www.samsung.com/" target="_blank">
                            Samsung
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a
                            href="https://www.microsoft.com/ko-kr"
                            target="_blank"
                          >
                            Microsoft
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a href="http://english.msip.go.kr/" target="_blank">
                            MSIT
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a href="http://biz.chosun.com/" target="_blank">
                            Chosun Biz
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a
                            href="http://cidec.khu.kr/contents/ssk.htm"
                            target="_blank"
                          >
                            SSK
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-2">
                      <ul>
                        <h5 className="h5-sm">&nbsp;</h5>
                        <li className="m-bottom-10">
                          <a
                            href="https://singaporefintech.org/"
                            target="_blank"
                          >
                            SFA
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a href="https://ftahk.org/" target="_blank">
                            FTAHK
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a href="https://www.fbg.capital/" target="_blank">
                            FBGOne
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a href="http://futuramasummit.com/" target="_blank">
                            Futurama
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a href="https://www.foundationx.io/" target="_blank">
                            Foundation X
                            <br />
                            <br />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-3">
                      <ul>
                        <h5 className="h5-sm">{this.props.Text2}</h5>
                        <li className="m-bottom-10">
                          <a href="https://cointelegraph.com/" target="_blank">
                            Cointelegraph(EN)
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a
                            href="https://kr.cointelegraph.com/"
                            target="_blank"
                          >
                            Cointelegraph(KR)
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a href="https://factblock.com/#/" target="_blank">
                            FACTBLOCK
                            <br />
                            <br />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-3">
                      <ul>
                        <h5 className="h5-sm">{this.props.Text3}</h5>
                        <li className="m-bottom-10">
                          <a
                            href="https://xangle.io/project/home/TRV/Company"
                            target="_blank"
                          >
                            Xangle
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a
                            href="https://coinmarketcap.com/currencies/trustverse/"
                            target="_blank"
                          >
                            CoinMarketCap
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a
                            href="https://www.coinhills.com/market/trv/"
                            target="_blank"
                          >
                            Coinhills
                            <br />
                            <br />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-2 p-right-0">
                      <ul>
                        <h5 className="h5-sm">{this.props.Text4}</h5>
                        <li className="m-bottom-10">
                          <a
                            href="https://www.bithumb.pro/ko-kr/spot/trade;symbol=TRV_BTC"
                            target="_blank"
                          >
                            Bithumb Global
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a
                            href="https://cobinhood.com/trade/TRV-BTC"
                            target="_blank"
                          >
                            COBINHOOD
                          </a>
                        </li>
                        <li className="m-bottom-10">
                          <a
                            href="https://bitsonic.co.kr/front/exchange/trv-krw"
                            target="_blank"
                          >
                            BITSONIC
                            <br />
                            <br />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* FOOTER SOCIAL LINKS */}
                <div className="col-md-4_footer col-lg-3">
                  <div className="footer-socials-links m-bottom-25">
                    {/* Social Links */}
                    <a
                      href="https://www.instagram.com/trustverse_official/"
                      target="_blank"
                    >
                      <img
                        className="m-right-10"
                        src={require("./images/IG.png")}
                        width={30}
                        height={30}
                        alt="header-logo"
                      />
                    </a>
                    <a
                      href="https://medium.com/@trustverse_official"
                      target="_blank"
                    >
                      <img
                        className="m-right-10"
                        src={require("./images/Medium.png")}
                        width={30}
                        height={30}
                        alt="header-logo"
                      />
                    </a>
                    <a href="https://twitter.com/trustverse" target="_blank">
                      <img
                        className="m-right-10"
                        src={require("./images/Twitter.png")}
                        width={30}
                        height={30}
                        alt="header-logo"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/trustverseofficial/"
                      target="_blank"
                    >
                      <img
                        className="m-right-10"
                        src={require("./images/FB.png")}
                        width={30}
                        height={30}
                        alt="header-logo"
                      />
                    </a>
                    <a
                      href="https://www.reddit.com/r/TrustVerse/"
                      target="_blank"
                    >
                      <img
                        className="m-right-10"
                        src={require("./images/Reddit.png")}
                        width={30}
                        height={30}
                        alt="header-logo"
                      />
                    </a>

                    <p className="p-sm m-top-30">
                      <a
                        href="mailto:info@trustverse.io"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("./images/mail.png")}
                          className="m-right-10"
                          alt="header-logo"
                        />
                        {this.props.Text5}
                      </a>
                    </p>
                    <p className="p-sm">
                      {" "}
                      <a
                        href="mailto:investment@trustverse.io"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("./images/mail.png")}
                          className="m-right-10"
                          alt="header-logo"
                        />
                        {this.props.Text6}
                      </a>
                    </p>
                    <p className="p-sm m-top-30">
                      {this.props.Text7}.v1
                      <a
                        href="https://trustverse.file.core.windows.net/fileshare/TrustVerse_WhitePaper_JAN_2019_ENG.pdf?st=2019-07-26T01%3A19%3A39Z&se=2020-10-27T01%3A19%3A00Z&sp=rl&sv=2018-03-28&sr=f&sig=3Jof1KtWXUuFJGbZP0GxEcU6LDpaGppQ6e%2BD7lWOwyA%3D"
                        target="_blank"
                      >
                        <img
                          src={require("./images/united-states.png")}
                          width={30}
                          height={20}
                          className="m-right-10 m-left-10"
                          alt="header-logo"
                        />
                      </a>
                      <a
                        href="https://trustverse.file.core.windows.net/fileshare/TrustVerse_WhitePaper_JAN_2019_KOR.pdf?st=2019-07-26T01%3A20%3A31Z&se=2020-10-27T01%3A20%3A00Z&sp=rl&sv=2018-03-28&sr=f&sig=5JtG5RVkd36UdToXmMWvfrc%2BrHNLM0IU6CAvIsXTTTk%3D"
                        target="_blank"
                      >
                        <img
                          src={require("./images/south-korea.png")}
                          width={34}
                          height={22}
                          className="m-right-10"
                          alt="header-logo"
                        />
                      </a>
                    </p>
                    <p className="p-sm">
                      {" "}
                      {this.props.SetLang} : &nbsp;
                      <select
                        id="langages"
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <option value="ENG">{this.props.Lang1}</option>
                        <option value="KOR">{this.props.Lang2}</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER COPYRIGHT */}
            <div className="footer-copyright m-top-30 m-bottom-15 text-center">
              © 2019 WealthTreeSG Pte. Ltd. All Rights Reserved. 10 Anson Road,
              #34-10 International Plaza, Singapore
            </div>
          </div>{" "}
          {/* END BOTTOM FOOTER */}
        </div>{" "}
        {/* End container */}
      </footer>
    );
  }
}

Footers.propTypes = propTypes;
Footers.defaultProps = defaultProps;

const mapStateToProps = state => {
  console.log(state.lang.text);
  var SetLang;
  var lang1;
  var lang2;
  var text1;
  var text2;
  var text3;
  var text4;
  var text5;
  var text6;
  var text7;

  switch (state.lang.text) {
    case "KOR":
      SetLang = "언어 설정";
      lang1 = "한국어";
      lang2 = "영어";
      text1 = "협력사";
      text2 = "동맹사";
      text3 = "관련사";
      text4 = "거래소";
      text5 = "문의";
      text6 = "투자";
      text7 = "백서";

      break;

    case "ENG":
      SetLang = "Language";
      lang1 = "KOR";
      lang2 = "ENG";
      text1 = "Partners";
      text2 = "Alliance";
      text3 = "Relations";
      text4 = "Exchanges";
      text5 = "For Inquiry";
      text6 = "For Investment";
      text7 = "WhitePaper";

      break;
  }

  return {
    text: state.lang.text,
    SetLang: SetLang,
    lang1: lang1,
    lang2: lang2,
    Text1: text1,
    Text2: text2,
    Text3: text3,
    Text4: text4,
    Text5: text5,
    Text6: text6,
    Text7: text7
  };
};

const mapDispatchProps = dispatch => {
  // return bindActionCreators(actions, dispatch);
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Footers);
