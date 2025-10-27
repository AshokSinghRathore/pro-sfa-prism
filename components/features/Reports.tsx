
import { useId } from "react";

export function ReportsFeatures() {
  return (
    <div className="container py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-3">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className=" from-neutral-100 relative overflow-hidden rounded-3xl bg-gradient-to-b to-white p-6"
          >
            <Grid size={20} />
            <p className="text-neutral-800 relative z-20 text-base font-bold ">
              {feature.title}
            </p>
            <p className="text-neutral-600 relative z-20 mt-4 text-base font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
const grid = [
    {
      title: "DRC Report",
      description:
        "Track daily reporting and call activity with precision. The DRC Report ensures field force productivity and compliance, critical for pharma and FMCG operations.",
    },
    {
      title: "Route-Chemist Report",
      description:
        "Monitor chemist visits along designated routes. This report helps ensure coverage, product visibility, and accurate retail-level insights in the pharma sector.",
    },
    {
      title: "Stockist Wise Report",
      description:
        "Analyze sales and distribution performance across different stockists. It enables effective inventory planning and demand forecasting tailored for FMCG and pharma.",
    },
    {
      title: "Expense Report",
      description:
        "Manage and audit field force expenses with transparency. Expense tracking helps maintain budget control and ensures policy compliance in daily field operations.",
    },
    {
      title: "Target vs Achievement Report",
      description:
        "Compare actual sales against assigned targets to evaluate rep performance and goal alignment. This is essential for sales strategy refinement and incentive planning.",
    },
    {
      title: "and more custom reports",
      description:
        "BizzField SFA offers a variety of customizable reports tailored to your business needs, helping you gain deep visibility into your sales force and distribution network.",
    },
  ];
  

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className=" from-zinc-100/30 to-zinc-300/30 absolute inset-0 bg-gradient-to-r opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  fill-black/10 stroke-black/10 mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
