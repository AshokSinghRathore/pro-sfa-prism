import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-2xl font-semibold text-blue-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const OPTIONS = [
  {
    title: "5+",
    description: "Comprehensive Reports",
  },
  {
    title: "10+",
    description: "Master Controls",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export const MobileConvenience: React.FC = () => {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full lg:max-w-6xl mx-auto items-center">
        <img
          width={256}
          height={256}
          src="../image/iphone.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto w-full text-center lg:text-start lg:max-w-lg px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-blue-gray-800 mb-4">
            Full Control on the Go
          </h2>
          <p className="text-xl text-gray-500 mb-5">
            Full access and command at your fingertips.
          </p>

          <div className="col-span-2 grid gap-5 grid-cols-2">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileConvenience;
