import React from "react";
import Background from "./background";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Education from "./Education";

import WOW from "wowjs";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.about = React.createRef();
    this.education = React.createRef();
    this.projects = React.createRef();
    this.contact = React.createRef();
    this.scrolling = this.scrolling.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  componentDidMount() {
    new WOW.WOW().init();
  }

  navEffect() {
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var domRect = navBar.getBoundingClientRect();
      var myBackground = document.getElementById("my-background");
      var domBGRect = myBackground.getBoundingClientRect();

      if (domRect.y <= -domRect.height) {
        navBar.classList.add("fade-in-nav");
      }
      if (-domBGRect.height < domBGRect.top) {
        navBar.classList.remove("fade-in-nav");
      }
    });
  }

  scrolling(instance) {
    let node = document.getElementById(instance.current.props.id);
    window.scrollTo({
      top: node.offsetTop,
      behavior: "smooth",
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <div>
        <Background
          ref={this.navEffect}
          id="my-background"
          aboutRef={this.about}
          bounceIn={"wow bounceIn"}
        />
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div className="container">
            <a
              className="home-style navbar-brand"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Back to Intro
            </a>
            <button
              onClick={this.toggleNavbar}
              className={`${classTwo}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
              <div className="navbar-nav ml-auto">
                <a
                  onClick={() => {
                    this.scrolling(this.about);
                  }}
                  className="btn-style text-dark nav-item nav-link"
                >
                  <b>About</b>
                </a>
                <a
                  onClick={() => {
                    this.scrolling(this.education);
                  }}
                  className="btn-style text-dark nav-item nav-link"
                >
                  <b>Education and Work</b>
                </a>
                <a
                  onClick={() => {
                    this.scrolling(this.projects);
                  }}
                  className="btn-style text-dark nav-item nav-link"
                >
                  <b>Projects</b>
                </a>
                <a
                  onClick={() => {
                    this.scrolling(this.contact);
                  }}
                  className="btn-style text-dark nav-item nav-link"
                >
                  <b>Contact</b>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="space">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />;
          <About
            ref={this.about}
            id="about-container"
            bounceLeft={"wow bounceInLeft"}
            fadeInLeft={"wow fadeInLeft"}
            fadeInRight={"wow fadeInRight"}
            fadeIn={"wow fadeIn"}
            tada={"wow fadeIn"}
          />
          <Education
            ref={this.education}
            id="education-container"
            bounceLeft={"wow bounceInLeft"}
            fadeInLeft={"wow fadeInLeft"}
            fadeInRight={"wow fadeInRight"}
            fadeIn={"wow fadeIn"}
            tada={"wow fadeIn"}
          />
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />;
          <Projects
            ref={this.projects}
            id="my-projects"
            fadeInRight={"wow fadeInRight"}
            fadeIn={"wow fadeIn"}
          />
          <Contact
            ref={this.contact}
            id="my-contact"
            fadeInLeft={"wow fadeInLeft"}
            fadeInRight={"wow fadeInRight"}
            shake={"wow pulse"}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
