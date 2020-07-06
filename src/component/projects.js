import React from "react";
import PropTypes from "prop-types";

export default class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid mt-5">
          <div className=" project-container container pb-6">
            <h1
              id="projects"
              className={"text-center " + this.props.fadeInRight}
              style={{ color: "lightblue" }}
            >
              Projects
            </h1>
            <div className="row my-5">
              <div
                className={
                  "gtfinder col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Github Finder</h2>
                  </div>
                  <div>
                    <button className="project-button bg-blue">
                      <a href="https://github-finder-hishaam-version.netlify.app/">
                        View Demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "conkeeper col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>ContactKeeper</h2>
                  </div>
                  <div>
                    <button className="project-button bg-blue">
                      <a href="https://protected-castle-62025.herokuapp.com/login">
                        View Demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "itlogger col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>It-Logger</h2>
                  </div>
                  <div>
                    <button className="project-button bg-blue">
                      <a href="https://github.com/HishaamDeVries/it-logger">
                        Go To Repo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
