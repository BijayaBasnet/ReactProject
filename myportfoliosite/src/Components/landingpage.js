import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import myImage from "/Users/bijayarajbasnet1/Desktop/ReactApp/Portfolio/myportfoliosite/src/Components/myImage.jpg";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={myImage} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Developer </h1>
              <hr />
              <p>
                HTML/CSS | BootStrap | JavaScript ES6 | ReactJS | NodeJs | Java
                | PHP
              </p>
              <div className="social-links">
                {/* LinkedIn*/}
                <a
                  href="www.linkedin.com/in/bijaya-raj-basnet"
                  rel=" noopener noreferrer"
                  target="-blank"
                >
                  <i className=" fa fa-linkedin-square" aria-hidden="true" />{" "}
                </a>

                {/* GitHub*/}
                <a
                  href="https://github.com/BijayaBasnet"
                  rel=" noopener noreferrer"
                  target="-blank"
                >
                  <i className=" fa fa-github-square" aria-hidden="true" />{" "}
                </a>
                {/* freecode camp*/}
                <a
                  href="https://www.freecodecamp.org/"
                  rel=" noopener noreferrer"
                  target="-blank"
                >
                  <i className=" fa fa-free-code-camp" aria-hidden="true" />{" "}
                </a>
                {/* youtube*/}
                <a
                  href="http://youtube.com"
                  rel=" noopener noreferrer"
                  target="-blank"
                >
                  <i className=" fa fa-youtube-square" aria-hidden="true" />{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
