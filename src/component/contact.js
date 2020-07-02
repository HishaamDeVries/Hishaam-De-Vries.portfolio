import React from "react";
import PropTypes from "prop-types";

import ContactImg from "../img/ContactImg.png";
import Phone from "../img/Phone.png";
import Whatsapp from "../img/Whatsapp.png";

export default class Contact extends React.Component {
  render() {
    return (
      <div id="my-contact" className="container text-center my-5">
        <h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
          <img
            className="img-fluid"
            style={{
              borderRadius: 50 + "%",
              height: 50 + "px",
              width: 50 + "px",
            }}
            src={ContactImg}
            alt=""
          />{" "}
          Contact
        </h1>
        <h3 className={this.props.fadeInRight}>
          <img
            className="img-fluid"
            style={{
              borderRadius: 50 + "%",
              height: 25 + "px",
              width: 25 + "px",
            }}
            src={Phone}
            alt=""
          />
          : 081 595 7849
        </h3>
        <h3 className={this.props.fadeInRight}>
          <img
            className="img-fluid"
            style={{
              borderRadius: 50 + "%",
              height: 25 + "px",
              width: 25 + "px",
            }}
            src={Whatsapp}
            alt=""
          />
          : 075 959 7802
        </h3>
        <br />
        <h3 className={this.props.shake}> OR MESSAGE ME</h3>
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
