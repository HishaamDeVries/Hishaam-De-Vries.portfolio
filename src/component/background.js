import React from "react";
import PropTypes from "prop-types";
import ReactTypingEffect from "react-typing-effect";

import WOW from "wowjs";

export default class Background extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id="my-background" className="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="top-container flex">
          <h1>
            <ReactTypingEffect
              className="typingeffect"
              text={[
                "Hello, I'm Hishaam De Vries.",
                "I'm a Junior Web Developer.",
              ]}
              speed={70}
              eraseDelay={700}
            />
          </h1>
          <button
            className={"work-button bg-blue" + this.props.bounceIn}
            data-wow-offset="0"
            onClick={() => {
              let node = document.getElementById(
                this.props.aboutRef.current.props.id
              );
              window.scrollTo({
                top: node.offsetTop,
                behavior: "smooth",
              });
            }}
          >
            View my work
          </button>
        </div>
      </div>
    );
  }
}

Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string,
};
