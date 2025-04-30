import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import MasterControlsFeatures from "components/features/Masters";

export default function FeatureMaster() {
  return (
    <>
      <Navbar />
      <Banner
        title="Master Controls"
        paragraph="Gain full command over your operations with intuitive and centralized controls designed for maximum efficiency."
      />
      <MasterControlsFeatures />
      <Footer />
    </>
  );
}
