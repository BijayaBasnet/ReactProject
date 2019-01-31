import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import myImage from "/Users/bijayarajbasnet1/Desktop/ReactApp/Portfolio/myportfoliosite/src/Components/myImage.jpg";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={4}>
            <h2> Bijaya Basnet </h2>
            <img src={myImage} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
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
          </Cell>
          <Cell col={8}>
            <h2> Contact Me </h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (0420) 77-5132
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (0420) 77-5132
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    someone@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    bbanset
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                    bijayabasnet
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
