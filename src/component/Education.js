import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import PropTypes from "prop-types";

class Education extends Component {
  render() {
    return (
      <div
        id="education-container"
        className="content-containers container text-center mt-5"
        style={{ background: "#ccc", borderRadius: 25 + "px" }}
      >
        <h1 id="education" className={this.props.bounceLeft}>
          Education and work
        </h1>

        <Timeline lineColor={"grey"}>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: "#e86971" }}
          >
            <h3 style={{ color: "#e86971" }}>
              Student/Junior Web Development, Life Choices Academy
            </h3>
            <h4 style={{ color: "#e86971" }}>Education</h4>
            <br />
            <p
              style={{
                background: "#e86971",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              At the Life Choices Academy, I was in a six month web development
              training bootcamp. Where I was taught in coding languages such as
              Python, HTML, CSS/Boostrap, JavaScript, REACT and were taught to
              work with MySQL.
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="01/2019 – 08/2019"
            dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
            style={{ color: "#61b8ff" }}
          >
            <h3 style={{ color: "#61b8ff" }}>
              Theatre Actor, Employer: Lauren Bates
            </h3>
            <h4 style={{ color: "#61b8ff" }}>Work/volunteer </h4>
            <br />
            <p
              style={{
                background: "#61b8ff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              Worked/volunteered in A Theatre production called Robben Island
              Shakespeare, which is based on the book of the same name,
              depicting the true life story of Sonny Venkatratham. In the play
              the character that I played as is Ahmed Mohamed "Kathy" Kathrada.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="01/2014 – 12/2018"
            dateInnerStyle={{ background: "#76bb7f" }}
            style={{ color: "#76bb7f" }}
          >
            <h3 style={{ color: "#76bb7f" }}>
              Student, Vista Nova High School
            </h3>
            <h4 style={{ color: "#76bb7f" }}>Education</h4>
            <br />
            <p
              style={{
                background: "lightgreen",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              Went to school at Vista Nova High School for 5 years and
              Matriculated in 2018 with Bachelor's. School is Located in
              Pinelands, Cape Town
            </p>
          </TimelineItem>
        </Timeline>
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
