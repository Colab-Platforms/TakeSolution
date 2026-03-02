import parse from "html-react-parser";
import "./About4.css";

const About4 = ({
  MainImg,
  SubTitle,
  Title,
  Content,
}) => {
  return (
    <div className="about-us-area">
      <div className="container">
        <h1 className="about-title">
          About <span>Us</span>
        </h1>
        <div className="row">
          <div className="col-lg">
            <div className="about-us-thumb">
              <div className="about-us-img">
                <img src={MainImg} alt="About Us" />
              </div>
            </div>
          </div>

          <div className="col-lg">
            <div className="section-title text-left">
              <h5 className="section-sub-title">{SubTitle}</h5>
              <h1 className="section-main-title">{parse(Title)}</h1>
              <p className="section-title-descr">{Content}</p>
            </div>
          </div>
        </div>
        <div className="about2-us-shape">
          <img src="/assets/images/inner/about-us-sh.png" alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default About4;
