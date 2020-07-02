import React from "react";
import myImage from "../img/myImage.jpg";
import PropTypes from "prop-types";

export default class About extends React.Component {
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >
        <h1 id="about" className={this.props.bounceLeft}>
          About
        </h1>
        <div className="row" style={{ marginTop: 7 + "rem" }}>
          <div className="col-12 col-lg-6 hidden">
            <img
              className={"img-fluid " + this.props.fadeIn}
              src={myImage}
              alt=""
              style={{
                borderRadius: 50 + "%",
                height: 250 + "px",
                width: 250 + "px",
              }}
            />
            <h3 className={"mytext pt-3 " + this.props.fadeIn}>
              Birthdate : 8 July 2000
            </h3>
            <h3 className={"mytext pt-3 " + this.props.fadeIn}>Age : 20</h3>
            <p className={"mytext pt-3 " + this.props.fadeIn}>
              I am a very energetic and committed person who is eager to learn
              now things. I believe that success only comes through hard work
              and perseverance. I have a passion for front-end development and
              hope to accel in this field.
            </p>
          </div>
          <div
            className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}
          >
            <h2>SKILLS</h2>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 90 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML5
              </div>
              90%
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS
              </div>
              80%
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-90-bar"
                role="progressbar"
                style={{ width: 75 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Javascript
              </div>
              75%
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                ReactJS
              </div>
              60%
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 65 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Python
              </div>
              65%
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 70 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                MySQL
              </div>
              70%
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
