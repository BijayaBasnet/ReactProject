import React, { Component } from "react";
import News from "./News/News";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: { type: "top-headlines", query: "sources=bbc-news" },
      news2: { type: "top-headlines", query: "sources=bbc-sport" },
      news3: { type: "top-headlines", query: "sources=entertainment-weekly" },
      activeTab: 0
    };
  }

  toggleNewsCatagories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          {" "}
          <News news={this.state.news1} />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <News news={this.state.news2} />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          {" "}
          <News news={this.state.news3} />
        </div>
      );
    }
  }
  render() {
    return (
      /*  <reactfragment>
        <div>
          <div className="news-feed">
            <h1> Top Stories </h1>
            <News news={this.state.news1} />
          </div>

          <h1>Sports </h1>
          <News news={this.state.news2} />
        </div>
      </reactfragment> */

      <div
        className="News-tabs"
        style={{
          backgroundImage:
            "linear-gradient(to top, #fff1eb 0 %, #ace0f9 100 %);"
        }}
      >
        <Tabs
          activeTab={this.state.activeTab}
          style={{ color: "blue", font: "bold" }}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Top Headlines</Tab>
          <Tab>Sports</Tab>
          <Tab>Entertainment</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleNewsCatagories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default NewsFeed;
