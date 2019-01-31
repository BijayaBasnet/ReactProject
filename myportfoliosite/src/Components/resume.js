import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./eduaction";
import Experience from "./experience";
import Skills from "./skills";
import myImage from "/Users/bijayarajbasnet1/Desktop/ReactApp/Portfolio/myportfoliosite/src/Components/myImage.jpg";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={myImage} alt="avatar" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingtop: "2em" }}> Bijaya Basnet </h2>
            <h4 style={{ color: "grey" }}> Programmer </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              An innovative graduate with a Master’s degree in Information
              Technology from Charles Sturt University seeking an entry level
              Developer position where I can learn and grow my skills to
              establish my future career as a Software engineer. I will bring my
              ability to learn quickly and solve complex problems which I have
              developed through my local internship programs and various
              university projects. I thrive in collaborative environments and
              enjoy challenges that allow me to grow as an individual. I am a
              result-oriented individual who believes best possible results are
              only the definition of the success.
            </p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5> Address </h5>
            <p> Unit 21, 409-413 Forest Road, Penshurst, 2222</p>
            <h5>Phone</h5>
            <p> (042) 077-5151</p>
            <h5>Email</h5>
            <p>
              {" "}
              <a href="basrememeberbijaya063@gmail.com" />
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2> Education </h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience </h2>
            <Experience
              startYear={2009}
              endyear={2012}
              jobName="First Job"
              jobDescription="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <Experience
              startYear={2012}
              endyear={2018}
              jobName="Second Job"
              jobDescription="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2> Skills </h2>
            <Skills skill="Javasript" progress={100} />
            <Skills skill="HML/CSS" progress={80} />
            <Skills skill="NodeJs" progress={50} />
            <Skills skill="ReactJs" progress={75} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
