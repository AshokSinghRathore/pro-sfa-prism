import { Navbar } from "components/common";
import Banner from "components/common/banner";
import { Footer } from "components/common/footer";
import DemoForm from "components/demo/demoForm";

export default function Demo() {
  return (
    <>
      <Navbar />
      <Banner title="Demo Request" paragraph="Kindly Raise a request for demo and we will be happy to assist you" />
      <DemoForm />
      <Footer />
    </>
  );
}
