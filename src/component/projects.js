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
                    <p>
                      Web App that is made to find Github User Profiles and some
                      of the basic info therein.
                    </p>
                  </div>
                  <div>
                    <button className="project-button bg-blue">
                      <a
                        href="https://github-finder-hishaam-version.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                    <p>Web App that Creates and Sorts User Contacts</p>
                  </div>
                  <div>
                    <button className="project-button bg-blue">
                      <a
                        href="https://protected-castle-62025.herokuapp.com/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                    <p>
                      Web App that is used to create logs for IT problems and
                      Solutions in the workplace
                    </p>
                  </div>
                  <div>
                    <button className="project-button bg-blue">
                      <a
                        href="https://github.com/HishaamDeVries/it-logger"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go To Repo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={"pos col-12 col-sm-12 col-md-4 " + this.props.fadeIn}
              >
                <div className="overlay">
                  <div className="text">
                    <h2>POS System</h2>
                    <p>
                      Web App that is made for small or self-owned businesses to
                      track transactions and inventory within the store.
                    </p>
                  </div>
                  <div>
                    <button className="project-button bg-blue">
                      <a
                        href="https://hishaams-point-of-sale-system.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
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
