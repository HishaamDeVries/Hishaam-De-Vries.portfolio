import React, {Component} from "react";
import myImage from "../img/myImage.jpg";
import Birthdate from "../img/birthday.png";
import Age from "../img/Age.jpg";
import Location from "../img/location.png";
import PropTypes from "prop-types";

export default class About extends Component {
  render() {
    return (
      <div
        id="about"
        className="about-container container-fluid container pb-6 text-center"
      >
        <h1
          //id="about"//
          className={this.props.bounceLeft}
          style={{ color: "lightblue" }}
        >
          About
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 hidden">
            <img
              className={"img-fluid" + this.props.fadeIn}
              src={myImage}
              alt="Profile Picture"
              style={{
                borderRadius: 50 + "%",
                height: 230 + "px",
                width: 250 + "px",
              }}
            />
            <p
              className={"mytext text-left pt-3" + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              I am a very energetic and committed person who is eager to learn
              new things. I believe that success only comes through hard work
              and perseverance. I have a passion for front-end development and
              hope to excel in this field
            </p>
          </div>
          <div className="col-12 col-lg-6 hidden">
            <br />
            <img
              className={"img-fluid" + this.props.fadeIn}
              style={{
                borderRadius: 50 + "%",
                height: 50 + "px",
                width: 50 + "px",
              }}
              src={Birthdate}
              alt="Birthdate Picture"
            />
            <h3
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              Birthdate : 8 July 2000
            </h3>

            <img
              className={"img-fluid" + this.props.fadeIn}
              style={{
                borderRadius: 50 + "%",
                height: 50 + "px",
                width: 50 + "px",
              }}
              src={Age}
              alt="Age Picture"
            />
            <h3
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              Age : 20
            </h3>

            <img
              className={"img-fluid" + this.props.fadeIn}
              style={{
                borderRadius: 50 + "%",
                height: 50 + "px",
                width: 50 + "px",
              }}
              src={Location}
              alt="Location Picture"
            />
            <h3
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              Location : Manenberg, Cape Town, 7764
            </h3>
          </div>

          <div className="col-12 col-lg-6 hidden text-left">
            <h2 className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Where My Passion For The Tech Space Came From
            </h2>
            <p
              className={"mytext pt-3 " + this.props.fadeIn}
              style={{ color: "lightblue" }}
            >
              I first got my passion in tech when I was four years old. We used
              to have a computer in the front room of my old home and I used to
              tinker with it and see how it works. Later in my life while I was
              in high school we didn’t have IT but we did have CAT and in it
              sometimes we were given videos from YouTube with people who
              explain the tech that we were going over. I continue to watch
              Linus Tech Tips (the channel that stuck out for me) and see them
              doing these crazy projects and explaining any new tech that they
              got which really interested me.
            </p>
          </div>
          <div className="col-12 col-lg-6 hidden">
            <h2 className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Hobbies/Passions
            </h2>
            <p className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Reading
            </p>
            <p className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Gaming
            </p>
            <p className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Soccer
            </p>
            <p className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Rugby
            </p>
            <p className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Drama
            </p>
            <p className={this.props.fadeIn} style={{ color: "lightblue" }}>
              Technology
            </p>
          </div>
          <div
            className={
              "col-12 col-sm-12 col-md-12 col-lg-12 " + this.props.tada
            }
            style={{paddingTop: "25px"}}
          >
            <h2 style={{ color: "lightblue" }}>SKILLS</h2>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-90-bar"
                role="progressbar"
                style={{ width: 90 + "%"}}
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
                className="progress-bar fill-65-bar"
                role="progressbar"
                style={{ width: 65 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                SASS 65%
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-75-bar"
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
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 70 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                React 70%
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Python 60%
              </div>
            </div>

            <div className="progress mb-3">
              <div
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                MySQL 60%
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
                WordPress 65%
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
