import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faHeartbeat,
  faLock,
  faLightbulb,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

interface Feature {
  icon: any;
  title: string;
  href?: string;
  children: string;
}

const FEATURES: Feature[] = [
  {
    icon: faChalkboardTeacher,
    title: "Master Controls",
    href: "/features/master",
    children:
      "Gain full command over your operations with intuitive and centralized controls designed for maximum efficiency.",
  },
  {
    icon: faHeartbeat,
    title: "Interactive Features",
    href: "/features/feature",
    children:
      "Boost engagement with real-time interactions, smart automation triggers, and dynamic collaboration tools.",
  },
  {
    icon: faLock,
    title: "Secure Authentication System",
    href: "/features/auth",
    children:
      "Protect your data with advanced authentication protocols, multi-factor verification, and encrypted access layers.",
  },
  {
    icon: faLightbulb,
    title: "Comprehensive Reports",
    href: "/features/reports",
    children:
      "Get detailed insights with customizable reports, real-time analytics, and performance tracking across platforms.",
  },
  {
    icon: faClock,
    title: "Exciting Features Coming Soon",
    href: "#",
    children:
      "We're continuously evolving. Stay tuned for powerful new features that will enhance your sales journey even further.",
  },
];

export const Feature: React.FC = () => {
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
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            para={feature.children}
            href={feature.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;

const FeatureCard = ({
  icon,
  title,
  para,
  href,
}: {
  icon: any;
  title: string;
  para: string;
  href?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${href}`)}
      className="bg-white p-6 border-l rounded-lg hover:bg-gradient-to-tr cursor-pointer from-gray-300 via-white to-white transition-all duration-1000 ease-in"
    >
      <div className="flex items-center gap-4 mb-6">
        <FontAwesomeIcon
          icon={icon}
          className="text-white bg-black p-3 rounded-lg text-xl"
        />
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{para}</p>
    </div>
  );
};
