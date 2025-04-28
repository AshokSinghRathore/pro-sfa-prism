import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gradient px-8">
        <div className="container mx-auto mt-32 grid h-full w-full lg:max-w-7xl grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <h1 className="text-4xl font-bold text-white mb-4">
              Your Perfect <br /> Learning App
            </h1>
            <p className="text-lg text-white mb-7 pr-16 xl:pr-28">
              Our app is here to empower you on your quest for knowledge,
              anytime and anywhere.
            </p>
            <h6 className="text-lg text-white mb-4">Get the app</h6>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <button className="flex justify-center items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg">
                <FontAwesomeIcon icon={faApple} className="w-6 h-6" />
                App Store
              </button>
              <button className="flex justify-center items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg">
                <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6" />
                Google Play
              </button>
            </div>
          </div>
          <img
            width={470}
            height={576}
            src="../image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <h3 className="text-2xl font-semibold text-blue-gray-700 mb-3">
            Learning App
          </h3>
          <p className="font-normal text-gray-500 lg:w-5/12">
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
