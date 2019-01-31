import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card small ">
      <div className="card-image">
        <img
          src={item.urlToImage}
          alt={item.title}
          style={{ width: "100%", height: "350px" }}
        />
      </div>
      <div className="card-content">
        <p>{item.title}</p>
        <a href={item.url} target="_blank">
          Full Article
        </a>
      </div>
    </div>
  </div>
);

export default NewSingle;
