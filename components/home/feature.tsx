import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faHeartbeat, faLock, faLightbulb } from "@fortawesome/free-solid-svg-icons";

interface Feature {
  icon: any;
  title: string;
  children: string;
}

const FEATURES: Feature[] = [
  {
    icon: faChalkboardTeacher,
    title: "Expert Instructors",
    children:
      "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
  },
  {
    icon: faHeartbeat,
    title: "Interactive Learning",
    children:
      "Engage with interactive quizzes, hands-on exercises, and discussion forums to reinforce your understanding and connect.",
  },
  {
    icon: faLock,
    title: "Achievement Unlocked",
    children:
      "Earn certificates and badges as you complete courses, showcasing your newfound skills to the world.",
  },
  {
    icon: faLightbulb,
    title: "Personalized Progress Tracking",
    children:
      "Stay on top of your learning journey with progress tracking and personalized recommendations to keep you motivated.",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-28 px-4 w-full lg:max-w-7xl mx-auto">
      <div className="container mx-auto mb-20 text-center">
        <h3 className="text-lg font-bold text-blue-600 uppercase mb-2">Your Learning App</h3>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Diverse Learning Resources</h1>
        <p className="text-lg text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
          Access your learning materials on the go. Whether you're commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </p>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 border-l rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <FontAwesomeIcon icon={feature.icon} className="text-white bg-black p-3 rounded-lg text-xl" />
              <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.children}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
