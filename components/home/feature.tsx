import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faHeartbeat,
  faLock,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

interface Feature {
  icon: any;
  title: string;
  children: string;
}

const FEATURES: Feature[] = [
  {
    icon: faChalkboardTeacher,
    title: "Master Controls",
    children:
      "Gain full command over your operations with intuitive and centralized controls designed for maximum efficiency.",
  },
  {
    icon: faHeartbeat,
    title: "Interactive Features",
    children:
      "Boost engagement with real-time interactions, smart automation triggers, and dynamic collaboration tools.",
  },
  {
    icon: faLock,
    title: "Secure Authentication System",
    children:
      "Protect your data with advanced authentication protocols, multi-factor verification, and encrypted access layers.",
  },
  {
    icon: faLightbulb,
    title: "Comprehensive Reports",
    children:
      "Get detailed insights with customizable reports, real-time analytics, and performance tracking across platforms.",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-28 px-4 w-full lg:max-w-7xl mx-auto">
      <div className="container mx-auto mb-20 text-center">
        <h3 className="text-lg font-bold text-blue-600 uppercase mb-2">
          Empowering Sales, On Every Screen
        </h3>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Comprehensive Feature Suite
        </h1>
        <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
          Prism SFA is an easy-to-use digital platform that simplifies and
          speeds up sales tracking, from identifying potential customers to
          improving relationships with untapped customers and retailers.
        </p>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 border-l rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-white bg-black p-3 rounded-lg text-xl"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600">{feature.children}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
