import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=3c5c8f726f4f4d87a352e63017c68eb0`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.news.map(item => (
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "10px",
          paddingBottom: "20px",
          overflow: "auto",
          float: "left",
          height: "400px",
          width: "30%"
        }}
      >
        <NewSingle key={item.url} item={item} />
      </div>
    ));
  }

  render() {
    return <div className="row"> {this.renderItems()} </div>;
  }
}

export default News;
