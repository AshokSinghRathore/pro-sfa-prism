import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import AuthenticationFeature from "components/features/Authentication";

export default function FeatureAuth() {
  return (
    <>
      <Navbar />
      <Banner
        title="Secure Authentication System"
        paragraph="Protect your data with advanced authentication protocols, multi-factor verification, and encrypted access layers."
      />
      <AuthenticationFeature />
      <Footer />
    </>
  );
}
