import React from "react";

import Img from "../../components/lazyLoadImage/Img";
import { urlFor } from "../../client";

const NewsCard = (props) => {
  return (
    <div className="newsContainer">
      <div className="newsImage">
        <img
          src={props.item.newsImage}
          alt="Sport Image"
          className="image"
        ></img>
      </div>
      <div className="newsInfo">
        <div className="newsTitle">
          <p>
            <span className="Title">Title:- </span>
            {props.item.newsTitle}
          </p>
        </div>
        <div className="newsDescription">
          <p>
            <span className="description">Description:- </span>
            {props.item.newsShortDescription}
          </p>
        </div>
        <div className="buttonDiv ">
          <button type="button" id="playBtn">
            Play Video
          </button>

          <button type="button" id="downloadBtn">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
