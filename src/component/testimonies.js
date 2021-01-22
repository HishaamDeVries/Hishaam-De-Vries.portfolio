import React, {Component} from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";

export default class Testimonies extends Component {
  render() {
    let settings = {
      className: "center",
      centerPadding: "60px",
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div
        id="testimonies-container"
        className="testimonies-container container text-center mt-5"
      >
        <h1
          id="testimonies"
          className={this.props.bounceLeft}
          style={{ color: "lightblue" }}
        >
          Testimonies
        </h1>

        <Slider {...settings} className={this.props.fadeIn}>
          <div>
            <div className="card" style={{ background: "lightblue" }}>
              <h1>Godwin Dzvapatsva</h1>
              <h5>Web Developer/Lecturer at Life Choices Academy</h5>
              <br />
              <p>
                Hishaam is an energetic and outspoken person. Since joining
                Lifechoices, he has demonstrated comprehensive capability and
                excellent analytical skills when doing his tasks. Recommended.
                Godwin Dzvapatsva (Head of Curriculum and Learning)
              </p>
            </div>
          </div>
          <div>
            <div className="card" style={{ background: "lightgreen" }}>
              <h1>Aaqiel Behardien</h1>
              <h5>Web Developer/Peer at Life Choices Academy</h5>
              <br />
              <p>
                This extraordinary individual has unwavering optimism and
                determination in any situation. He does well to support his
                colleagues and friends and is an outstanding programmer who
                never leaves a problem unsolved. It’s a pleasure working with
                Hishaam.
              </p>
            </div>
          </div>
          <div>
            <div className="card" style={{ background: "lightblue" }}>
              <h1>Mischa Achmat</h1>
              <h5>Web Developer/Peer at Life Choices Academy</h5>
              <br />
              <p>
                Hishaam is an intelligent, hard working human. He is very
                dedicated in always producing the best in his work. He is an
                excellent problem solver who is always aiming to do things right
                rather than fast. He is an easy person to work with and I have
                seen his display a positive attitude towards his work. Hishaam
                will be an asset to any company.
              </p>
            </div>
          </div>
          <div>
            <div className="card" style={{ background: "lightgreen" }}>
              <h1>Damon Anthony</h1>
              <h5>Web Developer/Peer at Life Choices Academy</h5>
              <br />
              <p>
                Hishaam is a very determined hardworking and individual. He is a
                dedicated problem solver who knows how to stay focused on the
                task at hand. He is a good communicator and can work
                independently as well as with other. He is always willing to
                help his peers. Hishaam would be an asset in the workplace.
              </p>
            </div>
          </div>
          <div>
            <div className="card" style={{ background: "lightblue" }}>
              <h1>Zubair De Vries</h1>
              <h5>Web Developer/Peer at Life Choices Academy</h5>
              <br />
              <p>
                Hishaam, one of the most talented individuals I've ever
                encountered. With extreme determination , he make sure that he
                completes his task and that it's 100% proper. Very hardworking
                as well , very often working through the night as I have
                witnessed this for myself.
              </p>
            </div>
          </div>
          <div>
            <div className="card" style={{ background: "lightgreen" }}>
              <h1>Lwando Gqobho</h1>
              <h5>Web Developer/Peer at Life Choices Academy</h5>
              <br />
              <p>
                Hishaam is a tech enthusiast in every sense of the word. His
                interest in technology includes both software and hardware. He
                is interested in the software running on the computer as much as
                he is interested in the computer running the software so he is
                an all rounder asset to have. He does not only stick to the bare
                minimum of a task but goes the extra of adding the best extra
                features to a project. His skill of meeting deadlines is also
                something to commend. I would definitely recommend him to any
                team.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

Testimonies.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
