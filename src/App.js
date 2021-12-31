import Slider from "react-slick";
import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="bgcf7 pf t0 l0 w1 z999k">
        <div className="container df fww jcsb aic pa10">
          <img
            alt="ftech.ai"
            src="https://ftech.ai/images/logo2.png"
            width="198"
            height="65"
          />
          <div className="o0">1</div>
        </div>
      </div>

      <div
        className="pb43 pb249-sm  bgrn bgpc bgsc banner-1 pr"
        style={{ backgroundImage: "url('https://ftech.ai/images/anhbia.jpg')" }}
      ></div>

      <div className="container df fww mt50">
        <div className="col-xs-12 col-md-6 plr10">
          <div className="fs3 fwb">Kết quả</div>
          <div className="fs2 lh15 mt15">
            FTECH là một công ty công nghệ đầu tư nghiên cứu chuyên sâu về lĩnh
            vực AI, trí tuệ nhân tạo, là một lĩnh vực của tương lai.
          </div>
        </div>
        <div className="col-xs-12 col-md-6 plr10">
          <div
            className="pb169"
            style={{
              backgroundImage:
                "url('https://cms.ftech.ai//uploads/14_feede9bf80.PNG')",
            }}
          ></div>
        </div>
      </div>

      <div
        className="pb51 bgrn bgpc bgsc banner-2 pr bt1 bss bcf mt50"
        style={{ backgroundImage: "url('https://ftech.ai/images/anhbia.jpg')" }}
      ></div>

      <div className="mtb50 ptb50 plr50">
        <Slider {...settings}>
          {[
            "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
            "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
            "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
            "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          ].map((l) => (
            <div className="plr10">
              <div
                className="pb169 bgrn bgpc bgsc"
                style={{
                  backgroundImage: `url('${l}')`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="df fdc jcsc pa10">
        <div className="fs3 fwb tac">DANH SÁCH KHEN THƯỞNG</div>
        <div className=" fs3 pr hrTitle tac">•</div>
      </div>

      <div className="df fww container ">
        {[
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
          "http://cms.ftech.ai/uploads/tang8_3a7e6286a5.JPG",
        ].map((l) => (
          <div className="pa10 col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="pb34 bgrn bgpc bgsc pr avt"
              style={{
                backgroundImage: `url('${l}')`,
              }}
              title="Vux vê lơ"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
