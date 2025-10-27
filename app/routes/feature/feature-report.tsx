import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import { ReportsFeatures } from "components/features/Reports";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Comprehensive Reports - Field Sales Reporting & Analytics | BizzField SFA",
    },
    {
      name: "description",
      content:
        "Access detailed field sales reports, MR daily call reports, real-time field force analytics, and pharma sales tracking with BizzField SFA's field team reporting tools.",
    },
  ];
}

export default function FeatureReports() {
  return (
    <>
      <Navbar />
      <Banner
        title="Comprehensive Reports"
        paragraph="Access detailed MR daily call reports, real-time field force analytics, territory-wise sales insights, and pharma sales tracking with our powerful field sales reporting tools."
      />

      <ReportsFeatures />
      <Footer />
    </>
  );
}
