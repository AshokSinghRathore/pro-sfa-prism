import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import { ReportsFeatures } from "components/features/Reports";

export default function FeatureReports() {
  return (
    <>
      <Navbar />
      <Banner
        title="Comprehensive Reports"
        paragraph="Get detailed insights with customizable reports, real-time analytics, and performance tracking across platforms."
      />
      <ReportsFeatures />
      <Footer />
    </>
  );
}
