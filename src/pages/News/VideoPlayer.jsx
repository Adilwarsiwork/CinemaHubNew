import React from "react";
import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = (props) => {
  let vidRef = props.videoId;

  const myArray = vidRef.split("-");

  let ref = "";
  for (let arr of myArray) {
    ref += arr;
  }
  console.log(ref);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 90000) + 10000; // Generates a random 5-digit number
  };

  const generateRandomPosition = () => {
    const position = {
      bottom: Math.floor(Math.random() * 20) + 10,
      right: Math.floor(Math.random() * 20) + 10,
    };
    return position;
  };

  const watermarkStyle = {
    position: "absolute",
    bottom: "70px",
    right: "30px",
    pointerEvents: "none",
    fontSize: "26px",
    fontWeight: "bold",
    color: "#ffffff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    zIndex: "9999",
  };

  const watermarkText = generateRandomNumber(); // Generate a random 5-digit number

  const watermarkPosition = generateRandomPosition(); // Generate random position for the watermark

  const handleWatchLiveClick = () => {
    // Handle the button click event here
    // You can redirect to the desired URL or perform any other action
  };

  return (
    <div style={{ position: "relative" }}>
      <MuxPlayer
        streamType="on-demand"
        playbackId="6CapG0201R7pzBQSlLv02LPifzF2ImF01Finl802OtejS02Fo"
        metadata={{
          video_id: "video-id-54321",
          video_title: "Test video title",
          viewer_user_id: "user-id-007",
        }}
      />
      <div style={watermarkStyle}>{watermarkText}</div>
      <button
        onClick={handleWatchLiveClick}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          paddingBlock: "5px",
          paddingInline: "10px",
        }}
      >
        Watch live
      </button>
    </div>
  );
};

export default VideoPlayer;
