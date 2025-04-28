import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const VideoIntro: React.FC = () => {
  return (
    <div className="p-8">
      <div className="w-full lg:max-w-7xl container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl">
        <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <img
          width={768}
          height={400}
          src="../image/Background.png"
          className="w-full object-cover scale-110 rounded-xl h-full"
          alt="Video Background"
        />
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
          <button className="text-white bg-transparent rounded-full p-4">
            <FontAwesomeIcon icon={faPlay} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
