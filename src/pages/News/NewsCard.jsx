import React, { useState } from "react";
import { useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";

import Img from "../../components/lazyLoadImage/Img";
import { urlFor } from "../../client";

import VideoPlayer from "./VideoPlayer";

const NewsCard = (props) => {
  // const element = useRef(null);

  const [display, setDisplay] = useState({
    Image: true,
    Video: false,
  });
  function handleClick(e) {
    setDisplay({ Image: false, Video: true });
  }
  return (
    <div className="newsContainer">
      <div className="newsImage" onClick={handleClick}>
        {display.Image && (
          <img
            src={props.item.newsImage}
            alt="Sport Image"
            className="image"
            style={{ display: "block" }}
          ></img>
        )}
        {display.Video && (
          <VideoPlayer videoId={props.item.video.asset._ref}></VideoPlayer>
        )}
        {/* <MuxPlayer
          streamType="on-demand"
          playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
          metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
        /> */}
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
