import React from "react";
import backgroundVideo from "../resources/back.mp4";

const BackVideo = () => {
  return (
    <div>
      <video
        className="absolute inset-0 w-fit h-fit object-cover "
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackVideo;
