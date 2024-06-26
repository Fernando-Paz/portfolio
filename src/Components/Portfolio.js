import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = process.env.PUBLIC_URL + "/images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
            <div style={{ textAlign: "center" }}>{projects.category}</div>
          </div>
        </div>
      );
    });

    const projects2 = this.props.data.projects2.map(function (projects2) {
      let projectImage = process.env.PUBLIC_URL + "/images/portfolio/" + projects2.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects2.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects2.title}</div>
            <div style={{ textAlign: "center" }}>{projects2.category}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>See some of my work, some of it in collaboration with other developers.</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects2}
              </div>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
            <p>As well as other private projects of professional scope.</p>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
