import React, { Component } from "react";
import MainNav from "./mainNav";
import Footers from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        Service!
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
          {/* addCode2 start */}
          <div class="bg-fixed content-jupiter-image division">
            <section>
              <div className="container m-top-50">
                <div className="row d-flex align-items-center">
                  <div className="col-md-5 offset-1 offset-left-0_R col-md-R">
                    <div className="">
                      <h3 className="h3-xs animated fadeInUp visible align-items-center">
                        Digital Assets Analytics
                      </h3>

                      <p className="p-2xl animated fadeInUp visible p-font-AcuminPro">
                        <br /> Jupiter, our Digital Asset Analytics is our
                        market forecasting service - where the art of AI and
                        Distributed Ledger comes together. Innovated with the
                        intention of being a compass to help navigate the
                        complicated indicators and the varied opinions of
                        multiple experts in the crypto market.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-6 animated fadeInRight visible col-md-R"
                    data-animation="fadeInRight"
                    data-animation-delay="500"
                  >
                    <div className="hero-img offset-1_5 offset-left-0_R">
                      <img
                        className="img-fluid m-left-5"
                        src={require("./images/serviceImage/Services_Jupiter_1_1.png")}
                        alt="hero-image"
                        width={370}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-fixed hero-section division">
              <div className="container p-right-0">
                {/* HERO CONTENT */}
                <div className="row d-flex align-items-center">
                  {/* HERO IMAGE */}
                  <div
                    className="col-md-5_5 animated fadeInLeft visible p-left-0 p-right-0 col-md-R"
                    data-animation="fadeInLeft"
                    data-animation-delay="500"
                  >
                    <div className="offset-1_5 offset-left-0_R">
                      <img
                        className="img-fluid"
                        src={require("./images/serviceImage/Services_Jupiter_4_1.png")}
                        alt="hero-image"
                        width={520}
                      />
                    </div>
                  </div>
                  {/* HERO TEXT */}
                  <div className="col-md-6 p-right-0 p-left-0 m-top-10 col-md-Storelogo-R">
                    <div className="offset-0_5 offset-left-0_R">
                      {/* Text */}
                      <p className="p-2xl animated fadeInUp visible p-font-AcuminPro">
                        Jupiter displays not only the price, volume, and common
                        indicators but also combines this information to provide
                        a clear outlook of the market. This enables user to
                        easily expect what is to come in the next few hours.
                      </p>
                      {/* Video Link */}
                      <div
                        className="animated fadeInRight visible"
                        data-animation="fadeInRight"
                        data-animation-delay="500"
                      >
                        <a
                          target="_blank"
                          href="http://apps.samsung.com/appquery/appDetail.as?appId=com.trustverse.jupiter"
                        >
                          <div>
                            <img
                              class="img-fluid col-md-Storelogo-R"
                              src={require("./images/serviceImage/galaxystore_logo1.png")}
                              width={200}
                            />
                          </div>
                          {/* Change the video link HERE!!! */}
                          {/*
                        <span><i className="far fa-play-circle" /></span>
                        <div>
                        <img class="img-fluid" src={require("./images/app_google_play.png")} width={160}/>&nbsp;&nbsp;
                        <img class="img-fluid" src={require("./images/galaxystore_logo1.png")} width={160}/>&nbsp;&nbsp;
                        <img class="img-fluid" src={require("./images/app-store.png")} width={140}/>&nbsp;&nbsp;
                        </div>
                        
                        <div className="m-top-5">
                        <img class="img-fluid" src={require("./images/app_google_play.png")} width={160}/>&nbsp;&nbsp;
                        <img class="img-fluid" src={require("./images/app_google_play.png")} width={160}/>
                        </div>
                        */}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* END HERO TEXT */}
                </div>
                {/* END HERO CONTENT */}
              </div>
              {/* End container */}
            </section>
            {/* END HERO-5 */}
          </div>
          {/* addCode2 end
      ============================================= */}
          {/* HERO-5
			============================================= */}
          <div className="bg-fixed content-7-image division">
            <section className="bg-fixed division">
              <div className="container">
                <div className="row d-flex align-items-center m-top-50 ">
                  <div className="col-md-6 col-md-R p-right-0">
                    <div className="hero-txt offset-2 offset-left-0_R  ">
                      <h3 className="h3-xs animated fadeInUp visible">
                        Pay Wallet
                      </h3>

                      <p className="p-2xl animated fadeInUp visible p-font-AcuminPro m-bottom-30">
                        <br /> Mars, our Pay Wallet is a simple and clear tool
                        for crypto assets savings. It aims to give users the
                        control, liquidity and transparency desired. Mars
                        provides P2P transfer and escrow services, and is
                        designed to enhance the everyday transaction needs.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-6 animated fadeInRight visible col-md-R"
                    data-animation="fadeInRight"
                    data-animation-delay="500"
                  >
                    <div className="hero-img offset-md-1 offset-left-0_R">
                      <img
                        className="img-fluid"
                        src={require("../components/images/serviceImage/Services_Mars_1_1.png")}
                        alt="hero-image"
                        width={350}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* addcode 0 end*/}
            {/* addCode1 start
			============================================= */}
            <section className="bg-fixed hero-section division">
              <div className="container p-right-0 p-left-0">
                <div className="row d-flex align-items-center">
                  <div className="col-md-4 p-right-0 p-left-5 col-md-R">
                    <div
                      className="animated fadeInLeft visible"
                      data-animation="fadeInLeft"
                      data-animation-delay="500"
                    >
                      <div className="hero-img offset-1_5 offset-left-0_R">
                        <img
                          className="img-fluid"
                          src={require("./images/serviceImage/Services_Mars_2_1_1.png")}
                          alt="hero-image"
                          width={350}
                        />
                      </div>
                    </div>
                  </div>
                  {/* HERO TEXT */}
                  <div className="col-md-7_5 p-right-0 p-left-0 col-md-Storelogo-R">
                    <div className="hero-txt offset-0 m-top-70 ">
                      {/* Text */}
                      <p className="p-2xl animated fadeInUp visible p-font-AcuminPro">
                        Mars is provided free of charge and has the same
                        features as any other wallet, but with better additional
                        features. It allows you to consult all your ERC20
                        digital assets, as well as Ethereum, Bitcoin and Bitcoin
                        Cash. It displays on the screen the nominal value of
                        your preferred coins and its equivalent in the most
                        relevant national currencies.
                      </p>
                      {/* Video Link */}
                      <div
                        className="animated fadeInRight visible m-bottom-60"
                        data-animation="fadeInRight"
                        data-animation-delay="500"
                      >
                        <a
                          target="_blank"
                          href="https://play.google.com/store/apps/details?id=io.trustverse.tvswallet&hl=ko"
                        >
                          <img
                            class="img-fluid col-md-Storelogo-R"
                            src={require("./images/serviceImage/app_google_play.png")}
                            width={200}
                          />
                          &nbsp;&nbsp;
                        </a>
                        <a
                          target="_blank"
                          href="http://apps.samsung.com/appquery/appDetail.as?appId=io.trustverse.tvswallet"
                        >
                          <img
                            class="img-fluid col-md-Storelogo-R"
                            src={require("./images/serviceImage/galaxystore_logo1.png")}
                            width={200}
                          />
                          &nbsp;&nbsp;
                          {/*
                        <img class="img-fluid" src={require("./images/app-store.png")} width={140}/>&nbsp;&nbsp;
                        */}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* END HERO TEXT */}
                </div>
                {/* END HERO CONTENT */}
              </div>
              {/* End container */}
            </section>
            {/* END HERO-5 */}
            {/* addCode1 end
      ============================================= */}
          </div>
          <br />
          <br />
          <section className="bg-fixed division">
            <div className="container m-top-30 p-left-0">
              {/* HERO CONTENT */}
              <div className="row d-flex align-items-center">
                {/* HERO TEXT */}
                <div className="col-md-7 p-right-0 p-left-0 col-md-R">
                  <div className="m-top-70 offset-2 offset-left-0_R">
                    {/* Text */}
                    <h3 className="h3-xs animated fadeInUp visible">
                      Digital Wealth Management <br /> Solution DApp
                    </h3>
                    <p className="p-2xl animated fadeInUp visible p-font-AcuminPro lineInterval">
                      Pluto, our Digital Wealth Management Solution DApp is a
                      blockchain platform innovated to provide stability to
                      users and their beneficiary with proper inheritance
                      services. <br />
                      By incorporating both digital assets analytics and digital
                      asset management tools, Pluto is ready to offer financial
                      and insurance services. Via Pluto, it is a simple way to
                      manage multiple smart contracts. It also allows you design
                      preconditions of smart contracts based on any given
                      requirement (insurance policy & financial product
                      registration/vest). Furthermore, it allows you to design
                      inheritance and legacy planning.
                    </p>
                  </div>
                </div>
                {/* END HERO TEXT */}
                {/* HERO IMAGE */}
                <div className="col-md-5 m-top-40 p-right-0 p-left-0 col-md-R">
                  <div
                    className="animated fadeInLeft visible"
                    data-animation="fadeInLeft"
                    data-animation-delay="500"
                  >
                    <div>
                      <img
                        className="img-fluid offset-1 offset-left-0_R"
                        src={require("./images/serviceImage/Services_Pluto_1_2.png")}
                        alt="hero-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* END HERO CONTENT */}
            </div>
            {/* End container */}
          </section>
          {/* END HERO-5 */}
          {/* addCode3 start*/}
          {/*  addCode3 end */}
          {/* CONTENT-7
			============================================= */}
          {/* MORE APPS
			============================================= */}
        </div>
        {/* End row */}
        {/* CONTENT-8
      ============================================= */}
        <div class="bg-fixed content-Pluto-image divisio m-top-120">
          <section className="bg-fixed hero-section division">
            <div className="container p-right-0">
              {/* HERO CONTENT */}
              <div className="row d-flex align-items-center">
                {/* HERO IMAGE */}
                <div
                  className="col-md-5_5 animated fadeInLeft visible p-left-0 p-right-0 col-md-R"
                  data-animation="fadeInLeft"
                  data-animation-delay="500"
                >
                  <div className="offset-1_5 offset-left-0_R">
                    <img
                      className="img-fluid"
                      src={require("./images/serviceImage/PLUTO-NEW.png")}
                      alt="hero-image"
                      width={900}
                    />
                  </div>
                </div>
                {/* HERO TEXT */}
                <div className="col-md-6 col-md-Storelogo-R">
                  <div className="offset-1_5 offset-left-0_R">
                    {/* Text */}
                    <h3 className="h3-xs animated fadeInUp visible float-middle">
                      Rebirth. <br />
                      Regeneration. <br />
                      Life and Death. <br />
                    </h3>

                    <p className="p-2xl animated fadeInUp visible p-font-AcuminPro m-top-10  ">
                      It all starts with the inheritor creating an inheritance
                      design which is a set of conditions for digital asset
                      inheritance. Pluto creates a smart contract in which it
                      guards assets and information. In case of the sudden death
                      of the inheritor, the beneficiary(s) can withdraw digital
                      assets by submitting the certificate of death. In the case
                      of multiple beneficiaries, the approval of the validity of
                      the death certificate is necessary.
                      <br />
                      <br />
                    </p>
                    {/* Video Link */}
                  </div>
                </div>
                {/* END HERO TEXT */}
              </div>
              {/* END HERO CONTENT */}
            </div>
            <br />
            <br />
            {/* End container */}
          </section>
          {/* END HERO-5 */}
        </div>
        <br />
        <br />
        <br />
        <div class="bg-fixed content-nova-image division">
          <section>
            <div className="container m-top-40">
              <div className="row d-flex align-items-center">
                <div className="col-md-4 offset-1 offset-left-0_R col-md-R p-left-0">
                  <div>
                    <h3 className="h3-xs animated fadeInUp visible">
                      Lost Proof / Assurance DApp
                    </h3>

                    <p className="p-2xl  animated fadeInUp visible p-font-AcuminPro">
                      <br /> Nova, our Lost Proof / Assurance DApp is innovated
                      to provide assurance to users. Having a hardware wallet on
                      the phone is safe, but it can be devastating if the device
                      is lost, damaged, or stolen.
                      <br />
                      Nova is designed for situations where the user's private
                      key is lost under unexpected situations. It allows the
                      recovery of crypto for both coins and tokens.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-7 animated fadeInRight visible col-md-R"
                  data-animation="fadeInRight"
                  data-animation-delay="500"
                >
                  <div className="hero-img offset-1 offset-left-0_R">
                    <img
                      className="img-fluid m-left-10"
                      src={require("./images/serviceImage/aNova-1-700px.png")}
                      alt="hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <section className="bg-fixed hero-section division">
            <div className="container frameCompany p-right-0">
              {/* HERO CONTENT */}
              <div className="d-flex align-items-center offset-1">
                {/* HERO IMAGE */}
                <div
                  className="col-md-8  animated fadeInLeft visible p-left-0 p-right-0 col-md-R"
                  data-animation="fadeInLeft"
                  data-animation-delay="500"
                >
                  <div className=" offset-left-0_R">
                    <h3 className="h3-xs animated fadeInUp visible">
                      &nbsp; &nbsp;&nbsp;User Scenario - Log in & Settings
                    </h3>
                    <img
                      className="img-fluid m-top-5"
                      src={require("./images/serviceImage/aNOVA-2-1000PX.png")}
                      alt="hero-image"
                      width={1200}
                    />
                  </div>
                </div>
                {/* HERO TEXT */}
                <div className="col-md-3 p-right-0 m-top-10 col-md-Storelogo-R vertical-align">
                  <div className="offset-0 m-right-10 offset-left-0_R">
                    {/* Text */}
                    <p className="p-2xl animated fadeInUp visible p-font-AcuminPro m-top-30 m-bottom-0 lineInterval">
                      Upon accepting the Service Terms & Conditions, the
                      self-certification registration will begin. By entering
                      your accredited certification, the authentication
                      processing based on the hashed information will begin.
                      Turn on Lost Assurance in your Token List. From then on,
                      the screen will display the token list from your account.
                      Select TrustVerse as your favourable token.
                    </p>
                    {/* Video Link */}
                    <div
                      className="animated fadeInRight visible"
                      data-animation="fadeInRight"
                      data-animation-delay="500"
                    />
                  </div>
                </div>
                {/* END HERO TEXT */}
              </div>
              {/* END HERO CONTENT */}
            </div>
            {/* End container */}
          </section>
          {/* END HERO-5 */}
        </div>
        {/* background effect*/}
        <div className="section-title">
          <div className="hero-txt section-title">
            {/* Text */}
            {/* Video Link */}
            <div className="section-title m-top-30">
              <br />
              <br />
              <br />
              <br />
              <br />
              <img
                class="img-fluid m-top-10 m-bottom-30 animated fadeIn visible"
                src={require("./images/serviceImage/ComingSoonNEW_1044px.png")}
                width={1400}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* END HERO TEXT */}
        {/* FOOTER-2
			============================================= */}
        <div className="bottom">
          <Footers />
        </div>{" "}
        {/* END PAGE CONTENT */}
      </div>
    );
  }
}

export default Home;
