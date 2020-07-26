import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";

class Education extends Component {
  render() {
    return (
      <div
        id="education"
        className="education-container container-fluid container pb-6 mt-5"
      >
        <h1
          id="education"
          className={this.props.bounceLeft}
          style={{ textAlign: "center" }}
        >
          <font style={{ color: "#e86971" }}>Education</font>{" "}
          <font style={{ color: "#ccc" }}>and</font>{" "}
          <font style={{ color: "#61b8ff" }}>work</font>
        </h1>
        <div style={{ background: "#ccc", borderRadius: 25 + "px" }}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#e86971" }}
              contentArrowStyle={{ borderRight: "7px solid #e86971" }}
              date={"February 2020 - August 2020"}
              iconStyle={{ background: "#e86971", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Life Choices Academy
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Student/Junior Web Development
              </h4>
              <p>
                At the Life Choices Academy, I was in a six month web
                development training bootcamp.During this training course, I was
                taught to code in languages such as Python, HTML, CSS/Bootstrap,
                JavaScript, REACT and we also worked with MySQL
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)" }}
              contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
              date="January 2019 - August 2019"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Employer: Lauren Bates
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Theatre Actor
              </h4>
              <p>
                Worked/volunteered in A Theatre production called Robben Island
                Shakespeare, which is based on the book of the same name,
                depicting the true life story of Sonny Venkatratham. In the play
                the character that I played as is Ahmed Mohamed "Kathy"
                Kathrada.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#e86971" }}
              contentArrowStyle={{ borderRight: "7px solid #e86971" }}
              date="2014 - 2018"
              iconStyle={{ background: "#e86971", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Vista Nova High School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Student</h4>
              <p>
                {" "}
                Went to school at Vista Nova High School for 5 years and
                Matriculated in 2018 with Bachelor's. School is Located in
                Pinelands, Cape Town
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};

export default Education;
