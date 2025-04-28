import React from "react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <div className="grid px-0">
        <h2 className="mb-2 text-3xl font-bold text-blue-gray-800">{title}</h2>
        <p className="font-normal text-gray-700">{children}</p>
      </div>
    </div>
  );
}

export default InfoCard;
