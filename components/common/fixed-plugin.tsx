import React from "react";

const FixedPlugin = () => {
  return (
    <a
      href="https://www.material-tailwind.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow-md transition hover:shadow-lg"
    >
      <img
        src="https://www.material-tailwind.com/favicon.png"
        alt="Material Tailwind"
        className="w-5 h-5"
      />
      <span>Made With Material Tailwind</span>
    </a>
  );
};

export default FixedPlugin;
