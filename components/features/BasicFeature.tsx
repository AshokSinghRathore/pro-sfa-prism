import React from "react";
import { Timeline } from "../ui/Timeline";

export type IFeaturesData = {
  title: string;
  content: React.ReactElement;
};

export function BasicFeatures() {
  const data: IFeaturesData[] = [
    {
      title: "Primary Sales",
      content: (
        <div>
          <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
            Primary Sale refers to the initial sale of goods from the
            manufacturer or company to its first-level distributor or stockist.
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/10.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Secondary Sale",
      content: (
        <div>
          <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking secondary sales helps
            companies monitor the product flow beyond the distributor level and
            measure sales performance at the ground level.
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/11.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sample Management",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking sample management helps
            companies monitor the distribution of product samples to retailers
            or potential customers and evaluate their impact on sales conversion
            and market penetration.
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/12.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Route Plan Management",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking route plans helps
            companies optimize field visits by ensuring sales representatives
            follow predefined routes, improving coverage efficiency, time
            management, and customer engagement.
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/13.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "E-Detailing",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking e-detailing helps
            companies enhance their product presentations by enabling sales
            representatives to deliver interactive, digital content to
            clients—improving engagement, consistency, and brand recall during
            field visits.
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/14.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Expense & Salary Management",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking expense management helps
            companies streamline the submission, approval, and reimbursement of
            field-related expenses, ensuring transparency, reducing manual
            errors, and maintaining better financial control.
          </p>
          <p className="text-neutral-800 mb-4 text-xs font-normal md:text-sm">
            ERP system also available !
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/15.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Attendance Management",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking leave management helps
            companies streamline leave requests, approvals, and records,
            ensuring transparency, reducing manual errors, and maintaining
            better workforce planning and control.
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/16.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Geo Fencing",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking geo-fencing helps
            companies ensure that field representatives are visiting assigned
            locations by setting virtual boundaries, improving accountability,
            visit authenticity, and overall field compliance
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/17.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Manager Joint Working",
      content: (
        <div>
          <p className="text-neutral-800 mb-4 text-xs font-normal md:text-sm">
            Tracking joint working helps companies facilitate collaborative
            field visits between multiple team members, such as managers and
            sales reps—enhancing field coaching, improving sales effectiveness,
            and ensuring better customer engagement.
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/18.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Leave Management",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, tracking leave management helps
            companies streamline the process of leave requests, approvals, and
            tracking, ensuring proper workforce planning, reduced disruptions,
            and improved operational efficiency
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/19.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Offline Daily Call Execution",
      content: (
        <div>
          <p className="text-neutral-800  mb-4 text-xs font-normal md:text-sm">
            In Sales Force Automation systems, enabling offline working options
            allows field representatives to access essential features and
            capture data without internet connectivity, ensuring uninterrupted
            operations, data accuracy, and seamless syncing once the network is
            restored.f
          </p>
          <div className="grid place-items-center gap-4">
            <img
              src="../../prism-sfa/20.png"
              alt="startup template"
              width={1000}
              height={1000}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full container overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
