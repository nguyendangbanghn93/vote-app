import React from "react";

const Candidates = React.createClass({
    render: function () {
        return (
            <div>
                {/*====== Required meta tags ======*/}
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {/*====== Title ======*/}
                <title>Interior - Interior Design and Architecture Web Template</title>
                {/*====== Favicon Icon ======*/}
                <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/png" />
                {/*====== Bootstrap css ======*/}
                <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
                {/*====== Fontawesome css ======*/}
                <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />
                {/*====== Line Icons css ======*/}
                <link rel="stylesheet" href="../assets/css/LineIcons.css" />
                {/*====== Animate css ======*/}
                <link rel="stylesheet" href="../assets/css/animate.css" />
                {/*====== Aos css ======*/}
                <link rel="stylesheet" href="../assets/css/aos.css" />
                {/*====== Slick css ======*/}
                <link rel="stylesheet" href="../assets/css/slick.css" />
                {/*====== Default css ======*/}
                <link rel="stylesheet" href="../assets/css/default.css" />
                {/*====== Style css ======*/}
                <link rel="stylesheet" href="../assets/css/style.css" />
                {/*====== PRELOADER PART START ======*/}
                <div className="preloader">
                    <div className="loader_34">
                        <div className="ytp-spinner">
                            <div className="ytp-spinner-container">
                                <div className="ytp-spinner-rotator">
                                    <div className="ytp-spinner-left">
                                        <div className="ytp-spinner-circle" />
                                    </div>
                                    <div className="ytp-spinner-right">
                                        <div className="ytp-spinner-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== PRELOADER ENDS START ======*/}
                {/*====== HEADER PART START ======*/}
                <header id="home" className="header-area pt-100">
                    <div className="shape header-shape-one">
                        <img src="../assets/images/banner/shape/shape-1.png" alt="shape" />
                    </div> {/* header shape one */}
                    <div className="shape header-shape-tow animation-one">
                        <img src="../assets/images/banner/shape/shape-2.png" alt="shape" />
                    </div> {/* header shape tow */}
                    <div className="shape header-shape-three animation-one">
                        <img src="../assets/images/banner/shape/shape-3.png" alt="shape" />
                    </div> {/* header shape three */}
                    <div className="shape header-shape-fore">
                        <img src="../assets/images/banner/shape/shape-4.png" alt="shape" />
                    </div> {/* header shape three */}
                    <div className="navigation-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav className="navbar navbar-expand-lg">
                                        <a className="navbar-brand" href="#">
                                            <img src="../assets/images/logo.png" alt="Logo" />
                                        </a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="toggler-icon" />
                                            <span className="toggler-icon" />
                                            <span className="toggler-icon" />
                                        </button>
                                    </nav> {/* navbar */}
                                </div>
                            </div> {/* row */}
                        </div> {/* container */}
                    </div> {/* navigation bar */}
                    <div className="header-banner d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-9 col-sm-10">
                                    <div className="banner-content">
                                        <h4 className="sub-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">Câu nói tâm đắc</h4>
                                        <h1 className="banner-title mt-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">Everything will be ok in the end. If it's not ok. It's not the end.</h1>
                                        <a className="banner-contact mt-25 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="2.3s" href="#contact">Vũ Long Vũ</a>
                                    </div> {/* banner content */}
                                </div>
                            </div> {/* row */}
                        </div> {/* container */}
                        <div className="banner-image bg_cover" style={{ backgroundImage: 'url(../assets/images/banner/banner-image.jpeg)' }} />
                    </div> {/* header banner */}
                </header>
                {/*====== HEADER PART ENDS ======*/}
                {/*====== ABOUT PART START ======*/}
                <section id="about" className="about-area pt-80 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image mt-50 clearfix">
                                    <div className="single-image float-left">
                                        <img src="../assets/images/about/about-1.jpeg" alt="About" />
                                    </div> {/* single image */}
                                    <div data-aos="fade-right" className="about-btn">
                                        <a className="main-btn" href="#">Vũ Long Vũ</a>
                                    </div>
                                    <div className="single-image image-tow float-right">
                                        <img src="../assets/images/about/about-2.jpeg" alt="About" />
                                    </div> {/* single image */}
                                </div> {/* about image */}
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content mt-45">
                                    <h4 className="about-welcome">About Me </h4>
                                    <h3 className="about-title mt-10">Reasons to choose</h3>
                                    <p className="mt-25">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                        <br /> <br />It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <a className="main-btn mt-25" href="#">BÌNH CHỌN NGAY</a>
                                </div> {/* about content */}
                            </div>
                        </div> {/* row */}
                    </div> {/* container */}
                </section>
                <a href="#" className="back-to-top"><i className="lni-chevron-up" /></a>
                {/*====== BACK TO TOP PART ENDS ======*/}
                {/*====== PART START ======*/}
                {/*
      <section class="">
          <div class="container">
              <div class="row">
                  <div class="col-lg-"></div>
              </div>
          </div>
      </section>
  */}
                {/*====== PART ENDS ======*/}
                {/* row */}
                {/*====== jquery js ======*/}
                {/*====== Bootstrap js ======*/}
                {/*====== WOW js ======*/}
                {/*====== Slick js ======*/}
                {/*====== Scrolling Nav js ======*/}
                {/*====== Aos js ======*/}
                {/*====== Main js ======*/}
            </div>
        );
    }
});

export default Candidates