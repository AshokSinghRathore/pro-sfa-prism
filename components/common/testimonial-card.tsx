import React from "react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
      <img
        src={img}
        alt={client}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h6 className="text-xl font-semibold text-gray-800">{client}</h6>
      <p className="text-sm text-gray-600 mb-3 font-medium">{title}</p>
      <p className="text-gray-500 font-normal italic">
        &quot;{feedback}&quot;
      </p>
    </div>
  );
}

export default TestimonialCard;
