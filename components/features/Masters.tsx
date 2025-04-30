import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

import { cn } from "../../lib/utils";

export default function MasterControlsFeatures() {
  const features = [
    {
      title: "Region Master",
      description: "Manage and organize operational regions for better territorial control.",
      icon: <IconTerminal2 />,
    },
    {
      title: "State Master",
      description: "Define states and their associated data for location-based operations.",
      icon: <IconEaseInOut />,
    },
    {
      title: "City Master",
      description: "Maintain city-specific data to refine logistics and targeting.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Product Master",
      description: "Centralize product details and updates for consistent cataloging.",
      icon: <IconCloud />,
    },
    {
      title: "Permission Master",
      description: "Control user access levels and ensure secure role-based permissions.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Discount Master",
      description: "Configure and manage discount schemes for flexible pricing.",
      icon: <IconHelp />,
    },
    {
      title: "Gift Master",
      description: "Track and manage gift options for loyalty and promotional purposes.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Code Configurations",
      description: "Set up and maintain system codes for streamlined functionality.",
      icon: <IconHeart />,
    },
    {
      title: "Designation Master",
      description: "Define user designations for structured access and workflow mapping.",
      icon: <IconHelp />,
    },
    {
      title: "and more custom Master",
      description: "Tailored modules to suit evolving business logic and structure.",
      icon: <IconTerminal2 />,
    },
  ];
  
  return (
    <div className="container">
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex  flex-col py-10 dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
        index < 6 && "dark:border-neutral-800 lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-300" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-300" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-blue-900">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-500" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-900">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600">
        {description}
      </p>
    </div>
  );
};
