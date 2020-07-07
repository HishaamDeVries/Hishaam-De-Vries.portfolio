import React from "react";
import myImage from "../img/myImage.jpg";
import Birthdate from "../img/birthday.png";
import Age from "../img/Age.jpg";
import Location from "../img/location.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >
        <h1
          id="about"
          className={this.props.bounceLeft}
          style={{ color: "lightblue" }}
        >
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
            <p
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              I am a very energetic and committed person who is eager to learn
              now things. I believe that success only comes through hard work
              and perseverance. I have a passion for front-end development and
              hope to accel in this field.
            </p>
          </div>
          <div className="col-12 col-lg-6 hidden">
            <br />
            <img
              className="img-fluid"
              style={{
                borderRadius: 50 + "%",
                height: 50 + "px",
                width: 50 + "px",
              }}
              src={Birthdate}
              alt=""
            />
            <h3
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              Birthdate : 8 July 2000
            </h3>

            <img
              className="img-fluid"
              style={{
                borderRadius: 50 + "%",
                height: 50 + "px",
                width: 50 + "px",
              }}
              src={Age}
              alt=""
            />
            <h3
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              Age : 20
            </h3>

            <img
              className="img-fluid"
              style={{
                borderRadius: 50 + "%",
                height: 50 + "px",
                width: 50 + "px",
              }}
              src={Location}
              alt=""
            />
            <h3
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              Location : 4B GrootKop street, Manenberg, Cape Town, 7764
            </h3>
          </div>
          <div
            className={
              "col-12 col-sm-12 col-md-12 col-lg-12 " + this.props.tada
            }
          >
            <h2 style={{ color: "lightblue" }}>SKILLS</h2>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 90 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML5 90%
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS 80%
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-90-bar"
                role="progressbar"
                style={{ width: 75 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Javascript 75%
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                React 60%
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 65 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Python 65%
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 70 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                MySQL 70%
              </div>
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
