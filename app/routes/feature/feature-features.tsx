import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import { BasicFeatures } from "components/features/BasicFeature";

export default function FeatureFeatures() {
  return (
    <>
      <Navbar />
      <Banner
        title="Interactive Features"
        paragraph="Boost engagement with real-time interactions, smart automation triggers, and dynamic collaboration tools."
      />
      <BasicFeatures />
      <Footer />
    </>
  );
}
