import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-transparent shadow-none">
      <div className="grid justify-start p-4">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h5 className="mb-2 text-2xl font-semibold text-blue-gray-700">{title}</h5>
        <p className="text-gray-500 font-normal">{children}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
