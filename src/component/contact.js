import React, {Component} from "react";
import PropTypes from "prop-types";

import ContactImg from "../img/ContactImg.png";
import Phone from "../img/Phone.png";
import Whatsapp from "../img/Whatsapp.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export default class Contact extends Component {
  render() {
    return (
      <div
        id="my-contact"
        className="contact-container container text-center mt-5"
      >
        <h1
          id="contact"
          className={"mb-3 " + this.props.fadeInLeft}
          style={{ color: "lightblue" }}
        >
          <img
            className="img-fluid"
            style={{
              borderRadius: 50 + "%",
              height: 50 + "px",
              width: 50 + "px",
            }}
            src={ContactImg}
            alt="Contact Image"
          />
          Contact
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 hidden">
            <h3
              className={this.props.fadeInRight}
              style={{ color: "lightblue" }}
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src={Phone}
                alt="Phone Image"
              />
              : 081 595 7849
            </h3>
            <h3
              className={this.props.fadeInRight}
              style={{ color: "lightblue" }}
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src={Whatsapp}
                alt="Whatsapp Image"
              />
              : 081 595 7849
            </h3>
          </div>
          <div className="col-12 col-lg-6 hidden">
            <h3
              className={this.props.fadeInRight}
              style={{ color: "lightblue" }}
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src={linkedin}
                alt="Linkedin Image"
              />
              :
              <a
                href="https://www.linkedin.com/in/hishaam-de-vries-8b256a1a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin Profile Page
              </a>
            </h3>
            <h3
              className={this.props.fadeInRight}
              style={{ color: "lightblue" }}
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src={github}
                alt="Github Image"
              />
              :
              <a
                href="https://github.com/HishaamDeVries"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile Page
              </a>
            </h3>
          </div>
        </div>

        <h3 className={this.props.shake} style={{ color: "lightblue" }}>
          OR MESSAGE ME
        </h3>
        <form
          className={this.props.shake}
          action="https://formspree.io/xpzyjbno"
          method="POST"
        >
          <div className="form-group">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Name"
                  style={{ background: "#ccc" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group hidden">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <input
                  type="email"
                  name="_replyto"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Your email"
                  style={{ background: "#ccc" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group hiddenRight">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <textarea
                  name="message"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write your message..."
                  style={{ background: "#ccc" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row text-md-right text-sm-center">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <button type="submit" className="btn btn-primary mb-2 hidden">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Contact.propTypes = {
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  shake: PropTypes.string,
};
