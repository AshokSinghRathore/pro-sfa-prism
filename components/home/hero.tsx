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
              Your Perfect <br /> Sales Force Management <br />
              System
            </h1>
            <p className="text-lg text-white mb-7 pr-16 xl:pr-28">
              Our app is here to empower you on your business for guarantee
              growth, anytime and anywhere.
            </p>
            <h6 className="text-lg text-white mb-4">Get the app</h6>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="https://apps.apple.com/in/app/prism-sfa/id6621264017"
                className="flex justify-center items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg"
              >
                <FontAwesomeIcon icon={faApple} className="w-6 h-6" />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.prismsfa.codeaspire"
                className="flex justify-center items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6" />
                Google Play
              </a>
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
            Sales Force Automation
          </h3>
          <p className="font-normal text-gray-500 lg:w-5/12">
            Our Solution enhances every stage of the sales process, making it
            easier to manage the daily tasks of sales and field teams, automate
            follow-ups, track performance, and make data-driven decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
