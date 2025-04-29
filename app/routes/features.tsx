import { Navbar } from "components/common";
import Banner from "components/common/banner";
import { Footer } from "components/common/footer";

export default function Features() {
  return (
    <>
      <Navbar />
      <Banner
        title="Features"
        paragraph="Prism SFA is packed with all the features that your business needs for guaranteed growth"
      />
      Features page
      <Footer />
    </>
  );
}
